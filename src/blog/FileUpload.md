---
title : 前后端文件传输
# 是否在文章中显示
article: true
category:
  - 存储

---

`more` 使用Element组件或者Ajax请求想后端发送请求，将文件发送到后端，后端将文件再发送给前端，前端进行接收
<!-- more -->

### 前端 -> 后端

本次前端发送到后端，使用的是Ajax请求。可以将Ajax请求编写进方法当中，创建一个新的FormData对象。将文件放入FormData对象中，后端使用`MultipartFile`对象去进行接收。下面有对MultipartFile对象方法的API方法

1：编写Ajax请求

```javascript
	// 文件传输
	// 创建了一个新的FormDate对象
      let formData = new FormData();
      // 将传入的文件添加到新创建的formData里面
      // `file.raw`通常表示一个文件对象或文件的原始数据
      formData.append("file", file.raw); 
      this.$http({
        url: this.$http.adornUrl("/device/batchSave"),
        method: "Post",
        data: formData,
        // 选择安全策略为same-origin
        // 用于跨域请求的场景，确保在跨域请求中不会携带敏感的凭据信息，从而增强安全性。
        headers: {
          credentials: "same-origin",
        },
      })
```

[深入理解Same-Origin安全机制CSDN博客](https://blog.csdn.net/aigoogle/article/details/122420491)

> 浏览器普遍使用origin来表示权限范围。
>
> 其中判断同源的方法是根据scheme（协议）、host（主机名）和port（端口号）
>
> scheme：http和https是协议
>
> host：`http://www.example.com`中的主机名是`www.example.com`  `http://127.0.0.1`中的主机名是`127.0.0.1`
>
> port：端口号是：后面跟着的数字，默认浏览器的端口是80
>
> same-origin就是限制不同源之间的资源访问



**Same-Origin同源策略**

-  **资源访问**：同源策略限制了一个网页从不同源加载的资源（比如脚本、样式表、图片、iframe等）。例如，一个网页只能通过Ajax从相同源的服务器获取数据。
-  **Cookie和LocalStorage**：同源策略阻止一个网页从一个不同源的页面读取或设置Cookie值，或者访问本地存储（如LocalStorage）。
-  **DOM访问**：同源策略也限制了一个网页对另一个不同源的页面的DOM对象的访问。
-  **通信方式**：同源策略还限制了通过一些通信方式（如WebSocket、WebRTC等）进行跨源通信。





2：后端接收使用MultipartFile对象

```java
@PostMapping("/batchSave")
public R batchSave(MultipartFile file) throws IOException {
	retrun R.ok();
}
```



**MultipartFile对象**

> `MultipartFile` 是 Spring 框架中用于表示文件上传的接口。
>
> 将`MultipartFile`对象作为参数，Spring会自动将上传的文件数据封装为`MultipartFile`对象并传递给方法，从而方便我们进行文件上传操作。
>
> 这个接口提供了一系列方法，用于获取文件名、文件大小、文件内容等信息





|              方法              |                 描述                 |
| :----------------------------: | :----------------------------------: |
|   `String getContentType()`    |          获取文件的内容类型          |
|       `String getName()`       |          获取文件参数的名称          |
| `String getOriginalFilename()` |       获取上传文件的原始文件名       |
|        `long getSize()`        |          获取上传文件的大小          |
|      `byte[] getBytes()`       |    以字节数组的形式返回文件的内容    |
| `InputStream getInputStream()` |       获取包含文件内容的输入流       |
|  `void transferTo(File dest)`  | 将文件内容以字节形式保存到目标文件中 |



### 后端 -> 前端

后端将文件发送给前端，需要注意：**发送的实际上是IO流，接收后，前端使用的是blob对象。**以下是对代码的实现

1：在Controller层使用新参的自动装配获取到HttpServletResponse（响应体），并设置响应体的对应设置

```java
@GetMapping("/uploads/template")
    public void template(HttpServletResponse response) throws IOException {
        String tempDir = System.getProperty("java.io.tmpdir");
        String fileName = "template.xlsx";
        String filePath = tempDir + File.separator + fileName;
        iDeviceService.POTemplate(filePath);
        // 设置响应体内容为二进制的数据，不需要特殊的解释
        response.setContentType("application/octet-stream");
        // 编码格式为UTF-8
        response.setCharacterEncoding("UTF-8");
        // 设置响应头，告诉客户端以附件的方式处理接收到的数据，指定了文件名为`template.xlsx`，浏览器接收到后，会自动进行下载
        response.setHeader("Content-Disposition", "attachment; filename=\"template.xlsx\"");
        try (InputStream in = new FileInputStream(filePath);
             // 接下来是将生成的Excel文件内容读取并写入到HTTP响应的输出流中
             OutputStream out = response.getOutputStream()) {
            //这里创建了一个大小为4096字节的字节数组作为缓冲区
            byte[] buffer = new byte[4096];
            // 记录每次从文件输入流中实际读取的字节数。
            int length;
            // 从文件输入流中读取数据到缓冲区`buffer`中，并将读取的字节数赋值给`length`，当读取到文件末尾时，`in.read(buffer)`会返回-1，循环就会结束。
            while ((length = in.read(buffer)) != -1){
                // 这一行代码将缓冲区`buffer`中的数据写入到输出流`out`中，只写入实际读取的字节数`length`，避免写入多余的空白字节。
                out.write(buffer, 0, length);
            }
        }
        // 删除生成的临时文件
        File file = new File(filePath);
        file.delete();
    }
```

2：前端接收，接收到的是blob。然后创建一个A标签。模拟点击并释放

```java
this.$http({
          url: this.$http.adornUrl("/device/uploads/template"),
          method: "Get",
          // 重点，设置响应的类型 
    	  // 响应类型为 blob 包含二进制数据的 Blob 对象
          responseType: "blob", 
        }).then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data])); // 创建一个 URL 对象
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "template.xlsx"); // 设置下载文件的文件名
          document.body.appendChild(link);
          link.click(); // 模拟点击链接进行下载
          window.URL.revokeObjectURL(url); // 释放 URL 对象
          this.$message({
            message: "操作成功",
            type: "success",
            duration: 1500,
          });
```

[responseType类型的官方文档](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/responseType)
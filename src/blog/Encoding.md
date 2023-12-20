---
title : Web核心乱码问题解决
category:
  - 编码
  - 中文乱码
  
star : true
---

`more` 有关中文乱码的方案解决
<!-- more -->

在使用GET请求或者POST请求中，Cookie对象创建中文传输乱码。

### POST解决获取数据中文乱码问题

> 因为获取POST的请求体的原理使用的是流的方式获取的，那么设置获取流的编码为网页编码，可以解决乱码的问题

```java
//        解决POST乱码问题
req.setCharacterEncoding("UTF-8");
```

### GET请求解决方案

> 本地提交到Tomcat7服务器是将，中文字符以UTF-8的方式以URL的编码形式传入到服务器中，但是服务器的解码时以ISO_8859_1，所以以ISO_8859_1编码再次编码，再次使用UTF-8解码可以完美解决。GET和POST都可以使用


```java
//            被ISO-8859-1编码所解码的字符串
            String username = req.getParameter("username");

//            第一种方法：
//            1.1：将乱码的字符串以ISO-8859-1编码
            String encode = URLEncoder.encode(username, "ISO-8859-1");
//            1.2:得到发送请求，被UTF-8编码的指定请求体，使用UTF-8进行解码
            String decode = URLDecoder.decode(encode, "UTF-8");
            System.out.println(decode);

//            第二种方法：
            username = req.getParameter("username");
//            2.1 将乱码的字符串转换为二进制数组
            byte[] bytes = username.getBytes(StandardCharsets.ISO_8859_1);
//            2.2 将二进制数组转换为字符串
            String string = new String(bytes, StandardCharsets.UTF_8);
            System.out.println(string);
```

### Cookie中文乱码解决
- 中文部分进行编码

```java
URLEncoder.encode("张三" , "UTF-8");
```

- 获取时进行解码

```java
URLDecoder.decode(value , "UTF-8");
```

### SpringMVC中GET和POST乱码处理

- POST处理

在`java/config/ServletContainersInitConfig`中，对`getServletFilters`进行重写

```java
@Override
    protected Filter[] getServletFilters() {
        CharacterEncodingFilter filter = new CharacterEncodingFilter();
        filter.setEncoding("UTF-8");
        return new Filter[]{filter};
    }
```
---
title : 异常处理器与Result
category:
  - 异常
tag:
  - Spring
---


---
`more` Result理解与异常处理器的使用

<!-- more -->



### Result

表现层的数据封装。是一种数据响应规范，配合前端人员进行使用。

里面可以包含各种请求的返回响应码与内容和返回的内容。响应码包含其中的成功和失败响应码。



### 统一异常处理

将各个层级的异常统一交给**Controller（表现层）**层进行处理，利用AOP思想进行处理

Spring中的解决方案为：**异常处理器**

```java
@RestControllerAdvice
public class ProjectExcptionAdvice {
    // 需要拦截下的异常
    @ExceptionHandler(Exception.class)
    public Result doException(Exception e){
        System.out.println("捕获异常");
        return new Result(null , 666 , "捕获异常") ;
    }
}
```

**此方法，可以根据异常的不同。制作多个自定义异常**

一般有三个分类

- 业务异常（BusinessException）
- 系统异常（SystemException）
- 其他异常(Exception)



**创建自定义异常**

```java
// com/zyb/exception/BusinessException
// 自定义业务异常
public class BusinessException extends RuntimeException{
    private Integer code;

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public BusinessException(Integer code, String message) {
        super(message);
        this.code = code;
    }

    public BusinessException(Integer code, String message, Throwable cause) {
        super(message, cause);
        this.code = code;
    }
}
```



**在异常处理器中进行使用**

```java
@RestControllerAdvice
public class ProjectExcptionAdvice {

    @ExceptionHandler(SystemException.class)
    public Result doSystemException(Exception e) {
//       记录日志
//       发送消息运维
//       发送邮件给开发人员
        return new Result(null,Code.SYSTEM_ERR, e.getMessage());
    }
	
    // 上面自定义的自定义异常
    @ExceptionHandler(BusinessException.class)
    public Result doBusinessException(Exception e) {
        return new Result(null,Code.BUSINESS_TIMEOUT_ERR, e.getMessage());
    }
	
    // 其他异常，只要不是自定义异常都由这个异常进行处理
    @ExceptionHandler(Exception.class)
    public Result doException(Exception e){
        return new Result(null , Code.SYSTEM_UNKOWN_ERR , "系统繁忙,请稍后再试.");
    }

}
```
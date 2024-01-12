---
title : Lombock
category:
  - 日志
tag:
  - Lombock
---

`more` Lombock的介绍和使用
<!-- more -->

### Lombock介绍

Lombok 是一个 Java 库，它通过简单的注解，可以让开发者在不增加样板代码的情况下，自动为 Java 类生成构造器、getter、setter 等常见的方法。同时，它还提供了其他一些方便的注解，能够简化开发中的一些常见任务，比如日志记录、数据校验等。

### 导入依赖

```xml
<dependency>
  <groupId>org.projectlombok</groupId>
  <artifactId>lombok</artifactId>
</dependency>
```

### 实体类的优化使用

> 当使用了该插件，在实体类中。可以使用`@Data`来简化实体类的书写
> 
> 自动生成默认的`toString()`、`equals()`、`hashCode()`和`getter/> 
> setter`方法。


### 开启日志

在yml文件中，配置开启。

```yaml
logging:
  level:
    # 日志类型
    root: info
    # 指定包生效
    com.zyb.mapper.UserMapper: trace
```

可以自定义开启日志

```java
@Slf4j
public class ExampleClass {
    public void exampleMethod() {
        log.info("这是一个信息日志");
        log.warn("这是一个警告日志");
        log.error("这是一个错误日志");
    }
}
```



![输出日志](../.vuepress/public/assets/images/mdImg/image-20230912105327622.png)

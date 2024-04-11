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

### 使用Lombock优化实体类的编写

#### 1、@Data

添加`@Data`注解后，编译后的实体类自动增加如下信息：属性的`Set/Get`方法，变化后自动增减；默认构造器，其中`equals`方法、`hashCode`方法、`toString`方法由 Lombok 重写。

#### 2、@AllArgsConstructor

向实体类添加全参构造器,一般在开启这个注解后,需要手动开启无参构造器的注解`@NoArgsConstructor`(无参构造器)


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

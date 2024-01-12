---
title : Mybatis xml
category:
  - 框架
tag:
  - MyBatis
  - xml
star : true
---

`more` 关于Mybatis xml的使用
<!-- more -->

## 使用前提

### Mybatis

使用Mybatis框架中，需要注意。要使用xml文件进行映射需要注意xml路径位置和mapper路径位置一致。进行Maven编译后需要再同一个目录下。详情可查看[MyBatis](./MyBatis.md)进行查看。

### Mybatis-plus

使用Mybatis-plus中，可以在yml文件中指向xml映射路径。
Mybatis-plus默认指向的是/resource/mapper下

```yaml
mybatis-plus:
  mapper-locations: classpath:mapper/*.xml
```

## xml文件关键字





---
title : MyBatis-plus的理解
category:
  - 框架
  - 作者理解
tag:
  - MyBatis-plus
---


`more` 关于Mybatis-plus的使用理解
<!-- more -->

## 关于MyBatis-plus理解

Mybatis-plus是对MyBatis的增强扩展，它提供了一套便捷的CRUD操作和动态查询的方式，可以大大简化开发工作。

一下是对关于mybatis-plus实现Iservice、ServiceImpl和BaseMaper的一些理解

### 编写实体类

可以导入包`lombok`进行快速开发，使用Lombok可以查看[Lombook使用](./Lombok.md)进行快速入门使用

### BaseMaper

在Dao层，编写Mapper的时候。可以继承MyBatis-plus提供的类。BaseMaper，里面基本的增删改查功能。如果想自己编写方法。可以自定义方法，在去resources/mapper文件下






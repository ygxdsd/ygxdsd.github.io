---
title : MyBatis-plus自带方法的运用
category:
  - 框架
  - 作者理解
tag:
  - MyBatis-plus
---


`more` 有关Mybatis-plus自带的方法运用
<!-- more -->

## 关于MyBatis-plus理解

Mybatis-plus是对MyBatis的增强扩展，它提供了一套便捷的CRUD操作和动态查询的方式，可以大大简化开发工作。

MyBatis-Plus 在 MyBatis 的基础上只做增强不做改变。

一下是对关于mybatis-plus实现Iservice、ServiceImpl和BaseMaper的一些理解

### 编写实体类

可以导入包`lombok`进行快速开发，使用Lombok可以查看[Lombook使用](./Lombok.md)进行快速入门使用

### BaseMaper

在Dao层，编写Mapper的时候。可以继承MyBatis-plus提供的类。BaseMaper，里面基本的增删改查功能。如果想自己编写方法。可以自定义方法，在去resources/mapper文件下



#### 插入相关

```java
// 插入一条记录
int insert(T entity);
```



#### 删除相关

```java
// 根据 ID 删除
int deleteById(Serializable id);

// 根据 columnMap 条件，删除记录（columnMap 表字段map对象）
int deleteByMap(@Param(Constants.COLUMN_MAP) Map<String, Object> columnMap);

// 根据 entity 条件，删除记录
// queryWrapper 实体对象封装操作类（可以为 null,里面的 entity 用于生成 where 语句）
int delete(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper);

// 删除（根据ID 批量删除）
// idList 主键ID列表(不能为 null 以及 empty)
int deleteBatchIds(@Param(Constants.COLLECTION) Collection<? extends Serializable> idList);
```



#### 修改相关

```java
// 根据 ID 修改
int updateById(@Param(Constants.ENTITY) T entity);

// 根据 whereEntity 条件，更新记录
int update(@Param(Constants.ENTITY) T entity, @Param(Constants.WRAPPER) Wrapper<T> updateWrapper);
```



#### 查询相关

```java
// 根据 ID 查询
T selectById(Serializable id);

// 查询（根据ID 批量查询）
List<T> selectBatchIds(@Param(Constants.COLLECTION) Collection<? extends Serializable> idList);

// 查询（根据 columnMap 条件）可以根据指定的列名和对应的条件值进行动态查询
List<T> selectByMap(@Param(Constants.COLUMN_MAP) Map<String, Object> columnMap);

// 根据 entity 条件，查询一条记录
T selectOne(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper);

// 根据 Wrapper 条件，查询总记录数
Integer selectCount(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper);

// 根据 entity 条件，查询全部记录
List<T> selectList(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper);

// 根据 Wrapper 条件，查询全部记录
List<Map<String, Object>> selectMaps(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper);

// 根据 Wrapper 条件，查询全部记录（只返回第一个字段的值）
List<Object> selectObjs(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper);

// 根据 entity 条件，查询全部记录（并翻页）
<E extends IPage<T>> E selectPage(E page, @Param(Constants.WRAPPER) Wrapper<T> queryWrapper);

// 根据 Wrapper 条件，查询全部记录（并翻页）
<E extends IPage<Map<String, Object>>> E selectMapsPage(E page, @Param(Constants.WRAPPER) Wrapper<T> queryWrapper);
```

### IService



### 常用方法

BaseMapper中比较常用的有以下方法：

```java
// 添加数据
int insert(T entity);
// 删除指定id数据
int deleteById(Serializable id);
// 修改指定id的数据，需要传入指定的entity
int updateById(@Param(Constants.ENTITY) T entity);
// 查询指定id的信息
T selectById(Serializable id);
// 用于查询满足条件的所有记录，而不仅仅是一条记录。它返回一个包含所有查询结果的列表。如果事null就是查询所有数据
List<T> selectList(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper);
<E extends IPage<T>> E selectPage(E page, @Param(Constants.WRAPPER) Wrapper<T> queryWrapper);
```



### 设置分页查询

#### 配置MybatisPlusConfig

```java
@Configuration
public class MpConfig {
    /**
     * 给 MybatisPlus 配置分页拦截器
     */
    @Bean
    public MybatisPlusInterceptor mpInterceptor() {
        MybatisPlusInterceptor mpInterceptor = new MybatisPlusInterceptor();
        mpInterceptor.addInnerInterceptor(new PaginationInnerInterceptor());
        return mpInterceptor;
    }
}

```





#### 


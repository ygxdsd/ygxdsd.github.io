---
title : Mybatis的xml编写
category:
  - 框架
tag:
  - MyBatis
  - xml
star : true
---

`more` 关于Mybatis的xml文件编写
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

### xml文件常见的元素


#### select

> 映射查询语句

```xml
<select id="selectPerson" parameterType="int" resultType="hashmap">
    <!-- 这个id是从参数传递下来的 -->
   SELECT * FROM PERSON WHERE ID = #{id}
 </select>
```



|     属性      |                             描述                             |
| :-----------: | :----------------------------------------------------------: |
|      id       |      在命名空间中唯一的标识符，可以被用来引用这条语句。      |
| parameterType | 设置了输入参数应该映射为哪种 Java 对象类型。可以是引用数据类型 |
|  resultType   | 从这条语句中返回的期望类型的类的完全限定名或别名。 注意如果返回的是集合，那应该设置为集合包含的类型，而不是集合本身。可以使用 resultType 或 resultMap，但不能同时使用。 |
|   resultMap   | 外部 resultMap 的命名引用。结果集的映射是 MyBatis 最强大的特性，如果你对其理解透彻，许多复杂映射的情形都能迎刃而解。可以使用 resultMap 或 resultType，但不能同时使用。 |
|  flushCache   | 将其设置为 true 后，只要语句被调用，都会导致本地缓存和二级缓存被清空，默认值：false。 |
|   useCache    | 将其设置为 true 后，将会导致本条语句的结果被二级缓存缓存起来，默认值：对 select 元素为 true。 |



#### resultMap

>  是最复杂也是最强大的元素，用来描述如何从数据库结果集中来加载对象。
>
>  **ResultMap 的设计思想是，对于简单的语句根本不需要配置显式的结果映射，而对于复杂一点的语句只需要描述它们的关系就行了。**



**使用resultMap进行匹配实体类和数据库列名不一致问题**



```xml
 <resultMap id="userResultMap" type="User">
   <id property="id" column="user_id" />
   <result property="username" column="user_name"/>
   <result property="password" column="hashed_password"/>
 </resultMap>
 ​
 <select id="selectUsers" resultMap="userResultMap">
   select user_id, user_name, hashed_password
   from some_table
   where id = #{id}
 </select>
```



#### sql

> 可被其他语句引用的可重用语句块。
>
> **这个元素可以被用来定义可重用的 SQL 代码段，**



```xml
<sql id="userColumns"> ${alias}.id,${alias}.username,${alias}.password </sql>
 <select id="selectUsers" resultType="map">
   select
     <include refid="userColumns"><property name="alias" value="t1"/></include>,
     <include refid="userColumns"><property name="alias" value="t2"/></include>
   from some_table t1
     cross join some_table t2
 </select>
```



#### insert

> 映射插入语句


#### update

> 映射更新语句

#### delete

> 映射删除语句



### 动态sql

#### if

动态 SQL 通常要做的事情是根据条件包含 where 子句的一部分。比如：

```xml
 <select id="findActiveBlogWithTitleLike"
      resultType="Blog">
   SELECT * FROM BLOG
   WHERE state = ‘ACTIVE’
   <if test="title != null">
     AND title like #{title}
   </if>
 </select>
```

**如果没有传入“title”，那么所有处于“ACTIVE”状态的BLOG都会返回；反之若传入了“title”，那么就会对“title”一列进行模糊查找并返回 BLOG 结果**



#### choose, when, otherwise

有时我们不想应用到所有的条件语句，而只想从中择其一项。针对这种情况，MyBatis 提供了 choose 元素，它有点像 Java 中的 switch 语句。

这次变为提供了“title”就按“title”查找，提供了“author”就按“author”查找的情形，若两者都没有提供，就返回所有符合条件的 BLOG（实际情况可能是由管理员按一定策略选出 BLOG 列表，而不是返回大量无意义的随机结果）。

```xml
 <select id="findActiveBlogLike"
      resultType="Blog">
   SELECT * FROM BLOG WHERE state = ‘ACTIVE’
   <choose>
     <when test="title != null">
       AND title like #{title}
     </when>
     <when test="author != null and author.name != null">
       AND author_name like #{author.name}
     </when>
     <otherwise>
       AND featured = 1
     </otherwise>
   </choose>
 </select>
```



#### where

```xml
SELECT * FROM BLOG
   <where>
     <if test="state != null">
          state = #{state}
     </if>
     <if test="title != null">
         AND title like #{title}
     </if>
     <if test="author != null and author.name != null">
         AND author_name like #{author.name}
     </if>
   </where>
```


---
title : QueryWrapper
tag:
  - Mybatis
---

---
`more` MybatisPlus中QueryWrapper常用方法

<!-- more -->



QueryWrapper 是 Mybatis-Plus 提供的一个强大的查询条件构造器，可以帮助你轻松构建灵活的查询条件，实现复杂的查询操作。



| 函数       |        说明         | 例子                                                         |
| :--------- | :-----------------: | :----------------------------------------------------------- |
| eq         |       等于(=)       | queryWrapper.eq(“user_name”, “张三”); //user_name=“张三”     |
| ne         |     不等于(<>)      | queryWrapper.ne(“user_name”, “张三”); //user_name<>“张三”    |
| gt         |       大于(>)       | queryWrapper.gt(“level”, 1); //level>1                       |
| ge         |    大于等于(>=)     | queryWrapper.ge(“level”, 1); //level>=1                      |
| lt         |       小于(<)       | queryWrapper.lt(“level”, 1); //level<1                       |
| le         |    小于等于(<=)     | queryWrapper.le(“level”, 1); //level<=1                      |
| between    |    值1和值2之间     | queryWrapper.between(“level”, 1,10); //level>=1 and level <=10 |
| notBetween |  不在值1和值2之间   | queryWrapper.notBetween(“level”, 1,10);//level<1 or level >10 |
| like       | 模糊匹配 like %值%  | queryWrapper.like(“user_name”, “张三”); //user_name like “%张三%” |
| isNull     |      字段 为空      | queryWrapper.isNull(“user_name”);//user_name is null         |
| isNotNull  |     字段 不为空     | queryWrapper.isNotNull(“user_name”);//user_name is not null  |
| in         | 字段 in (v0，v1，…) | queryWrapper.in(“user_name”, {“张三”,“李四”,“王五”}); // user_name in （“张三”,“李四”,“王五”） |
| or         |       拼接 OR       | 说明:主动调用or表示紧接着下一个方法不是用and连接!(不调用or则默认为使用and连接);queryWrapper.eq(“id”, “1”).or().eq(“user_name”, “张三”); //id = 1 or name =‘张三’ |
| and        |      拼接 AND       | queryWrapper.eq(“id”, “1”).and(i->i.eq(“user_name”, “张三”)); //id = 1 and name =‘张三’ |



**实际运用**

```java
QueryWrapper<User> queryWrapper = new QueryWrapper<>();
queryWrapper.eq("name", "Alice").or().like("address", "New%");
List<User> userList = userService.list(queryWrapper);
```


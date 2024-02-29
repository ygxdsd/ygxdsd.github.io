---
title : LambdaQueryWrapper和QueryWapper
tag:
  - MyBatis
---

---
`more` MybatisPlus中QueryWrapper和LambdaQueryWrapper和QueryWapper常用方法和区别

<!-- more -->



**QueryWrapper**

**QueryWrapper** 是 MyBatis-Plus 最基础的查询条件构造器之一。它通过链式调用的方式构建查询条件，并使用普通的字符串作为字段名、操作符和值。它的使用方式类似于传统的 SQL 查询。



**LambdaQueryWrapper**

**LambdaQueryWrapper** 是在 **QueryWrapper** 的基础上***\*增加了使用 Lambda 表达式的功能\****，使得构建查询条件更加类型安全、易读，并且能够在编译时进行语法检查。它通过方法引用的方式来指定实体类的属性，并提供了丰富的方法来构建查询条件。



**常见的拼接方法查询**

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



### LambdaQueryWrapper和QueryWrapper的区别

- `QueryWrapper`：使用字符串表示列名，通过字符串拼接的方式构建查询条件，这种方法编译器无法去验证列名的正确性，可能会存在不合法的列名风向

- `LambdaQueryWrapper`：使用Lambda表达式表示列名，通过Lambda表达式的方式构建查询条件。这种方式更加类型安全，可以在编译时捕获拼写错误。



### LambdaQueryWrapper的高级运用

- 基本条件构建

查询年龄大于30岁且名字包含"John"的用户

```java
LambdaQueryWrapper<User> queryWrapper = Wrappers.<User>lambdaQuery()
        .ge(User::getAge, 30)
        .like(User::getName, "John");

List<User> userList = userDao.selectList(queryWrapper);

```



- 多表关联查询

假设我们有一个名为`Device`的实体类，表示设备详情信息，其中包含了设备的`Id`字段，我们想要查询该用户关注设备的详细信息

userId是要查找用户的id

```java
LambdaQueryWrapper<Device> device = Wrappers.<Device>lambdaQuery()
                .inSql(Device::getId , "select device_id from focus_device where sys_user_id = " + userId);
List<Device> devices = deviceMapper.selectList(device);
```

这个示例，创建了对设备表的LambdaQueryWrapper语句，用id去进行in查找数据库中关注表中用户关注的设备进行匹配。返回

- 



**实际运用**

```java
// QueryWrapper的用法
QueryWrapper<User> queryWrapper = new QueryWrapper<>();
queryWrapper.eq("name", "Alice").or().like("address", "New%");
List<User> userList = userService.list(queryWrapper);

// LambdaQueryWrapper的用法
LambdaQueryWrapper<User> lambdaQueryWrapper = new LambdaQueryWrapper<>();
lambdaQueryWrapper.eq(User::getAge, 25).like(User::getName, "John");
List<User> userList = userMapper.selectList(lambdaQueryWrapper);
```


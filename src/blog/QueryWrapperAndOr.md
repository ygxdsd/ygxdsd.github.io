---
title : QueryWapper中or()和and()连用问题
category:
  - 作者理解
tag:
  - MyBatis
---

---
`more` 关于MybatisPlus的QueryWrapper定义查询条件的and()和or()方法连用问题

<!-- more -->



### 使用and

当只想进行简单的条件链接时，只需将查询条件直接连写即可，拼装后的sql就是用and连接的



```java
// 代码
// 代码中，条件语句会自动添加and条件
 List<VisitActHandleLog> list = visitActHandleLogService.list(
                new QueryWrapper<VisitActHandleLog>()
                .eq("from_app_type", "wx")
                .eq("zf_code", "M106944")
        );
```



### 使用Or

条件之间需要用or进行连接，需要调用or()方法，拼装的sql条件就可用or连接

```java
// 代码
 List<VisitActHandleLog> list = visitActHandleLogService.list(
                new QueryWrapper<VisitActHandleLog>()
                .eq("from_app_type", "wx")
                .or()
                .eq("zf_code", "M106944")
        );
```



### 当or()和and()连用注意事项

```java
QueryWrapper<SysUserEntity> queryWrapper = new QueryWrapper<>();
queryWrapper.eq("status" , 1).eq("dept_id" , 3).or().eq("dept_id" , 5);
List<SysUserEntity> sysUserEntities = baseMapper.selectList(queryWrapper);
```

**sql语句代码**

```sql
SELECT * FROM sys_user WHERE status=1 and dept_id= 3 or dept_id=5;
```

会出现一个问题，因为有or()的存在。当dept_id=5 成立的时候。就不会去判断status=1 and dept_id= 3。**所以我们需要修改编写的**queryWrapper语句改为一下代码`queryWrapper.eq("status" , 1).and(qw->qw.eq("dept_id" , 3).or().eq("dept_id" , 5));`

这样queryWrapper.eq("status" , 1)就和后面or判断是独立关系了。

```java
QueryWrapper<SysUserEntity> queryWrapper = new QueryWrapper<>();
queryWrapper.eq("status" , 1).and(qw->qw.eq("dept_id" , 3).or().eq("dept_id" , 5));
List<SysUserEntity> sysUserEntities = baseMapper.selectList(queryWrapper);
```

**sql语句代码**

```sql
SELECT * FROM sys_user WHERE status=1 and (dept_id= 3 or dept_id=5);
```


---
title : Jeecg使用心得
# 是否在文章中显示
article: true
category:
  - 框架
tag:
  - Jeecg
---

`more` 关于Jeecg框架的使用心得，包含了表单开发控件使用，代码生成，一对一表格，一对多表格，Online报表的使用
<!-- more -->

[Jeecg的搭建](./JeecgIntro.md)

[Jeecg自定义接口](./JeecgApi.md)

### 1：Online表格创建，基础控件使用

> online表单字段的控件类型，支持 下拉、radio、checkbox、选择人、选择部门、popup、下拉搜索、省市县、下拉多选等，已经满足在线低代码开发需求 。

![进入系统，通过Online新增数据库](JeecgBootBasicsUse.assets/image-20240429232756487.png)

![数据库的创建，列表的控件选择](JeecgBootBasicsUse.assets/image-20240429233356425.png)



### 2：下拉框字典实现

1：系统创建字典

![创建字典，配置字典值](JeecgBootBasicsUse.assets/image-20240429233740779.png)

2：控件类型选择下拉框，并且校验字段中的**字典Code**写入上图的3。即可实现下拉字典功能。

![下拉框定义](JeecgBootBasicsUse.assets/image-20240429233927416.png)

![字典填写](JeecgBootBasicsUse.assets/image-20240429234003983.png)



### 3：Online报表配置

在表单窗体中，可以通过Online报表配置。实现**自定义Sql语句结果查找**，并且进行选择。

![image-20240429234315555](JeecgBootBasicsUse.assets/image-20240429234315555.png)

![选择用户](JeecgBootBasicsUse.assets/image-20240429234323549.png)

![填入对应的值](JeecgBootBasicsUse.assets/image-20240429234410454.png)

1：录入Online报表信息

![录入基础信息](JeecgBootBasicsUse.assets/image-20240429234504503.png)

![定义Online报表](JeecgBootBasicsUse.assets/image-20240429234641380.png)

2：表单定义

![image-20240429234950035](JeecgBootBasicsUse.assets/image-20240429234950035.png)



### 4：单表的代码生成

`当表设计完毕时，可以将代码生成出来。`

![单表的代码生成](JeecgBootBasicsUse.assets/image-20240429235127130.png)

![代码生成](JeecgBootBasicsUse.assets/image-20240429235323864.png)

**重点！！！ 这个sql文件中需要修改前端的文件路径，修改完毕后，可以直接执行sql避免自己创建菜单和按钮权限**

![生成出来的文件，需要修改的文件路径](JeecgBootBasicsUse.assets/image-20240429235923351.png)


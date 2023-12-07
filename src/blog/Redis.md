---
title: Jedis
category:
	- 数据库
tag:
	- Redis
---

`more` 关于redis的Jedis使用

<!-- more -->


 ### Jedis: 一款java操作redis数据库的工具.

使用步骤：
1. 在maven中导入包

```xml
<dependency>
        <groupId>redis.clients</groupId>
        <artifactId>jedis</artifactId>
        <version>2.9.0</version>
</dependency>
```

2. 使用
```java
   //1. 获取连接
   Jedis jedis = new Jedis("localhost",6379);
   //2. 简单操作
   jedis.set("username","zhangsan");
   //3. 关闭连接
   jedis.close();
```


- Jedis操作各种redis中的数据结构
```java

		1) 字符串类型 string
				set
				get
				
				 //1. 获取连接
		        Jedis jedis = new Jedis();//如果使用空参构造，默认值 "localhost",6379端口
		        //2. 操作
		        //存储
		        jedis.set("username","zhangsan");
		        //获取
		        String username = jedis.get("username");
		        System.out.println(username);
	        //可以使用setex()方法存储可以指定过期时间的 key value
	        jedis.setex("activecode",20,"hehe");//将activecode：hehe键值对存入redis，并且20秒后自动删除该键值对
	
	        //3. 关闭连接
	        jedis.close();

		2) 哈希类型 hash ： map格式  
			hset
			hget
			hgetAll
			//1. 获取连接
	        Jedis jedis = new Jedis();//如果使用空参构造，默认值 "localhost",6379端口
	        //2. 操作
	        // 存储hash
	        jedis.hset("user","name","lisi");
	        jedis.hset("user","age","23");
	        jedis.hset("user","gender","female");
	
	        // 获取hash
	        String name = jedis.hget("user", "name");
	        System.out.println(name);
	        
		    // 获取hash的所有map中的数据
		    Map<String, String> user = jedis.hgetAll("user");
		
		    // keyset
		    Set<String> keySet = user.keySet();
		    for (String key : keySet) {
		            //获取value
		            String value = user.get(key);
		            System.out.println(key + ":" + value);
		     }
		    //3. 关闭连接
	        jedis.close();


		3) 列表类型 list ： linkedlist格式。支持重复元素
			lpush / rpush
			lpop / rpop
			lrange start end : 范围获取
			
			 //1. 获取连接
	        Jedis jedis = new Jedis();//如果使用空参构造，默认值 "localhost",6379端口
	        //2. 操作
	        // list 存储
	        jedis.lpush("mylist","a","b","c");//从左边存
	        jedis.rpush("mylist","a","b","c");//从右边存
	
	        // list 范围获取
	        List<String> mylist = jedis.lrange("mylist", 0, -1);
	        System.out.println(mylist);
	        
	        // list 弹出
	        String element1 = jedis.lpop("mylist");//c
	        System.out.println(element1);
	
	        String element2 = jedis.rpop("mylist");//c
	        System.out.println(element2);
	
	        // list 范围获取
	        List<String> mylist2 = jedis.lrange("mylist", 0, -1);
	        System.out.println(mylist2);
	
	        //3. 关闭连接
	        jedis.close();

		4) 集合类型 set  ： 不允许重复元素
			sadd
			smembers:获取所有元素

			//1. 获取连接
	        Jedis jedis = new Jedis();//如果使用空参构造，默认值 "localhost",6379端口
	        //2. 操作
	        // set 存储
		    jedis.sadd("myset","java","php","c++");
	
		    // set 获取
		    Set<String> myset = jedis.smembers("myset");
		    System.out.println(myset);

	        //3. 关闭连接
	        jedis.close();
		5) 有序集合类型 sortedset：不允许重复元素，且元素有顺序
			zadd
			zrange

			//1. 获取连接
	        Jedis jedis = new Jedis();//如果使用空参构造，默认值 "localhost",6379端口
	        //2. 操作
	        // sortedset 存储
	        jedis.zadd("mysortedset",3,"亚瑟");
	        jedis.zadd("mysortedset",30,"后裔");
	        jedis.zadd("mysortedset",55,"孙悟空");
	
	        // sortedset 获取
	        Set<String> mysortedset = jedis.zrange("mysortedset", 0, -1);
	
	        System.out.println(mysortedset);
	        //3. 关闭连接
		    jedis.close();
```
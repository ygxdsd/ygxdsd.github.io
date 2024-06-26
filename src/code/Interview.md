---
title: 面试常见习题
tag:
  - 面试
article: false
---

`more` 常见面试的解答

<!-- more -->


## JavaSE

### javaSE和JavaEE

**javaSE：**是Java的基础版本。跟家偏向于开发一些桌面应用程序，和简单的服务器程序。

**JavaEE：**是在SE的**基础上**进行了功能性的增强，比如有（Servlet、JSP、EJB、JDBC、JPA、JTA、JavaMail、JMS）。**用于开发复杂的业务和Web应用程序。**



### jdk jre jvm

jdk是开发工具类包，包含了运行环境和开发

jre是运行环境和核心类库

jvm是Java的虚拟机



### JVM

jvm是虚拟出来的计算机，所以也叫JVM虚拟机。

JVM负责将编译好的class文件，编译成机器码运行在各个系统程序上运行。达到了高可移植性，只有生成了.class文件，就可以在多个平台上运行

![Java程序转变为机器代码的过程](Interview.assets/image-20240411142402382.png)



### JIT和AOT

为了加快代码的运行速度，JIT**会把热点代码**会在JVM编译class文件为机器码的时候给记录下来。下次运行可以直接运行机器码，速度会更加快。

> JIT采用的是延迟评估（Lazy Evaluation）的做法，**每次执行**的时候收集运行信息。把常用到的热点代码给记录下来，所以Java代码会越执行越快。
>
> AOT是JDK 9引入的一种新的编译模式，和JIT不同的是。他会在程序被**执行前就**将其编译成机器码。提高Java的启动速度，减少内存占用增强Java的安全性（AOT 编译后的代码不容易被反编译和修改）但它只是在系统执行之前进行操作的 

![image-20240411143226067](Interview.assets/image-20240411143226067.png)



### 编译性语言和解释性语言区别

编译性语言：将代码全部转换为机器码，给设备进行运行。开发效率慢，运行速度快。比如：C，C++，Rust

解释性语言：将代码一句一句的解释为**机器代码**后在进行执行。开发效率快，运行速度慢。比如：Java，python，PHP

但是现在Java已经具备这两个的特征了。因为Java程序要**先编译**，生成.class文件。然后通过**JVM进行解释**。



### 标识符和关键字的区别

标识符：是指为类，方法名，变量取名的。这就叫标识符

关键字：系统中的有特殊含义和使用方法的名称，如IF，FOR等等。也被称作**特殊的标识符**



### JAVA和C++的区别

相同：Java 和 C++ 都是面向对象的语言，都支持封装、继承和多态

不同：

- Java不提供指针直接访问内存
- Java的类只能单继承，接口可以多继承。C++可以多继承
- Java有垃圾回收机制（GC）
- Java和C++都可以进行方法重载，C++多了一个操作符重载，可以重新定义运算符的规则

### 对类，方法，变量命名规则

类名大驼峰规则

方法是小驼峰规则

变量是是全小写，常量是全大写



### JDK版本区别

JDK8：

JDK9:在9往后，就不需要去区分JRE和JDK的关系了，取而代之的是**模块系统**



### Java跳出循环的三种方式

`break` 跳出循环

`retrun`  跳出方法

`continue`  结束本次循环



### 基本数据类型和引用数据类型

基本数据有**四大类**，分为字符型，布尔型，浮点型，整形

其中细分有byte，short，int,long(整形)，char，Boolean，float，double

为什么取值范围负数会多一个，其实就是符号位被用来做了个补充，用来代表多出来的那个负数！



### 基本类型和包装类型的区别

在介绍两个之间的区别之前，还有两个概念。**拆箱与装箱**，拆箱就是包装类型转换为基础类型过程。反之，装箱就是基础类型转换为包装类型的过程。

- **用途**：除去定义基本的变量以外，使用方法形参尽量使用包装类型。因为包装类型可以用于泛型。

- **存储方式**：基本类型的局部变量存放在栈中，成员变量存放在堆当中。而包装类型是对象类型**，所以存放在堆当中。
- **占用空间**：相比于包装类型（对象类型）， 基本数据类型占用的空间往往非常小。
- **默认值**：成员变量包装类型不赋值就是 `null` ，而基本类型有默认值且不是 `null`。
- **比较方式**：对于基本数据类型来说，`==` 比较的是值。对于包装数据类型来说，`==` 比较的是对象的内存地址。所有整型包装类对象之间值的比较，全部使用 `equals()` 方法。

> 1. `byte`：默认值是0
> 2. `short`：默认值是0
> 3. `int`：默认值是0
> 4. `long`：默认值是0L
> 5. `float`：默认值是0.0f
> 6. `double`：默认值是0.0d
> 7. `char`：默认值是'\u0000'，即空字符
> 8. `boolean`：默认值是`false`



### 包装类型的缓存机制

Java 基本数据类型的包装类型的大部分都用到了缓存机制来提升性能。

`Byte`,`Short`,`Integer`,`Long` 这 4 种包装类默认创建了数值 **[-128，127]** 的相应类型的缓存数据，`Character` 创建了数值在 **[0,127]** 范围的缓存数据，`Boolean` 直接返回 `True` or `False`。




### 类型的自动转换

当表达式中，混合多个变量类型。程序将会把所有变量编程容量最大的数据类型进行计算

精度大的变量赋值给小的会报错，反之转换

(byte,short)和char之间不会相互自动转换

boolean不参与转换



### 引用数据类型和基本数据类型

基本数据类型是直接存储在栈上的，本身就是数据。

引用数据类型，是在堆内存中。开辟了一片空间，对象进行数据的引用。使用了new实际上就是在堆内存中开辟了一片空间，等号位指向。

常见的引用数据类型有：类，数组，字符串



### final关键字的作用？

修饰类：类不能被继承

修饰方法：方法不能被重写

修饰变量：基本数据变量值不能被修改，引用数据变量的地址不能被修改。但是地址中的值可以被修改的。





### 局部变量和成员变量的区别

局部变量创建于代码块中，也只会生效于该代码块中。代码块执行完毕会进行销毁。不会**自动进行赋值。**

成员变量是写在类内部，方法外面的变量，可以在类中进行使用，或者实例化类后，通过类名调用。如果没有被final修饰，不需要显示的赋值，系统会给默认值。





### 接口和抽象类的区别

1. 接口中只有抽象方法，抽象类中由已经实现的方法
2. 一个类只能继承一个抽象类，但是可以实现多个接口
3. 抽象类中的成员变量可以是各种类型的，接口中的成员变量只能是public static final类型；



### 常见的异常有哪些

1. `ClassCastException` 类型转换异常
2. `IndexOutOfBoundsException` 数组越界异常
3. `NullPointerException` 空指针
4. `SQLException`：SQL 异常，通常在数据库操作中抛出。
5. `NoSuchBeanDefinitionException`:没有找到bean异常



###  throw和throws的区别？

throw：抛出一个具体的异常

hrows的：方法声明中指定可能会抛出的异常类型。可能会抛出那些异常



### Java8有哪些新特性

1. Lambda表达式，允许这个函数作为方法的参数
2. Date Time API ：增强了对时间的处理
3. Optional 类，用来解决空指针异常
4. Stream API：提供了一个新的方式去处理集合，简化代码提高性能。**流式操作**



### 阻塞和非阻塞的区别

这两个东西关注的是线程的状态

阻塞：调用的结果没有返回结果之前，这个线程会被挂起。只有的到返回结果的时候，才恢复运行

非阻塞：不能立刻得到结果的时候，不会阻塞当前的线程



### 静态方法为什么不能调用非静态的成员

静态方法是属于类的，在类加载的时候。就会分配内存。可以直接通过类名去进行访问。而非静态的成员，需要跟着类的实例化才功能去进行访问和使用。



### 谈谈对String的理解

String的底层是一个被Final修饰的char数组

初始化String有三种初始化方法，一个直接赋值，一个是无参构造来赋值，一个用有参构造来赋值。存储在内存中的位置不同。

直接赋值看内存有无一样的字符串，没有会进行创建有会直接引用

使用无参构造创建，后续赋值会查看常量池里面是否有值

使用有参构造创建，必须分配内存空间。



### i++ 和 ++i

i++ 先执行再加 ++i 先加再执行



### 集合

集合分为单列集合和双列集合
List接口有ArrayList和LinkedList实现，是是有序可重复的

Set 无序集合，不能重复。实现类有HashSet和LinkedHashSet

Map 键值对集合，是双列集合。

Collection包含了 List和Set 其中Map没有继承



### 如何集合线程安全

使用线程安全的一些集合，`Vector`、`Hashtable`、`ConcurrentHashMap`、`CopyOnWriteArrayList



### IO

分别字节流和字符流，

字节流以二进制的方式是处理视频图片文字 InputStream 和 OutStream

字符流，处理文本类型，以便于处理字符码和字符集	Readear Write



### Java是什么

是面向对象的编程语言，

封装：把属性和方法封装到一个对象当中

继承：子类继承父类，但是不能继承父类中私有的方法和属性

多态：父类引用指向子类对象

### Hashcode

用于返回Java对象的哈希码值，是根据对象的地址计算出来的Int类型的值。





### GC垃圾回收

当在堆中实例化的对象，没有被程序使用的时候。

常见的回收机制有：

当实例化新对象的时候，无法分配新空间的时候。会对程序没有引用的对象进行回收。

在空闲的时候，会周期性的对没有引用的对象进行回收





### 重载和重写

重载是在同一个类中，方法名必须相同，参数类型不同、个数不同、顺序不同，方法返回值和访问修饰符可以不同。不止构造器有重载，**所有的方法都可以进行重载。**

重写是要有继承关系的前提下，子类方法对父类相同名称的方法进行重写。

**方法的重写要遵循“两同两小一大”**

- “两同”即方法名相同、形参列表相同；
- “两小”指的是子类方法返回值类型应比父类方法返回值类型更小或相等，子类方法声明抛出的异常类应比父类方法声明抛出的异常类更小或相等；
- “一大”指的是子类方法的访问权限应比父类方法的访问权限更大或相等。



### 可变长参数

Java5开始，就可以支持可变长度的形参。所谓可变长参数就是允许在调用方法时传入不定长度的参数。

当遇到方法重写的时候，会**优先匹配固定参数的方法**，因为固定参数的方法匹配度更高。

```java
/**
 * 微信搜 JavaGuide 回复"面试突击"即可免费领取个人原创的 Java 面试手册
 *
 * @author Guide哥
 * @date 2021/12/13 16:52
 **/
public class VariableLengthArgument {

    public static void printVariable(String... args) {
        for (String s : args) {
            System.out.println(s);
        }
    }

    public static void printVariable(String arg1, String arg2) {
        System.out.println(arg1 + arg2);
    }

    public static void main(String[] args) {
        printVariable("a", "b");
        printVariable("a", "b", "c", "d");
    }
}

```





### static

在类加载的时候，就会加载到堆中。可以不用进行实例化使用

修饰方法和成员变量的时候，在类加载的时候，就会直接加载到方法区中。



### 面向过程编程

强调于程序的执行过程，着重于每一步的实现。而不是像面向对象一样将一个程序分解为对象来进行业务的实现。



## 数据库

### 事务四大特征

原子性：要么都成功，要么都失败

一致性：事务完成，所有数据保持一致

隔离性：事务和事务之间相互独立的

持久性：一旦数据修改，是永久的

### 数据库的范式

第一范式  列中的数据，不能在分割。对应的一列数据只能是这一列的属性

第二范式  非主键的字段要完全依赖于主键

第三范式  不存在依赖传递，如果存在需要把依赖传递的表分为两个表格

在实际设计中需要权衡学习范式化设计和反范式设计之间的平衡。

### 隔离级别

读未提交：读取未提交的数据，最低级的隔离级别。无法解决任何问题

读已提交：读取已提交的内容，可以避免脏读的问题。脏读是因为读取了其他事务没有提交的事务

可重复读：多次读取数据，可以解决不可重复读和脏读的问题。不可重复读是多次读取数据，因为其他事务的修改和删除导致数据不一致出现的问题。

可串行化：是数据库最高的隔离级别，事务之间完全隔离，每个事务都是独立的。会影响性能。可解决脏读，幻读，不可重复度的问题。幻读是多次查询数据的时候，因为其他事务对数据进行了新增或者删除。导致的数据不一致。

Mysql默认使用的是可重复读



### Spring中七种事务传播机制

- REQUIRED（默认）：支持使用当前事务，如果当前事务不存在，创建一个新事务。
- SUPPORTS:支持使用当前事务，如果当前事务不存在，则不使用事务。
- MANDATORY：支持使用当前事务，如果当前事务不存在，则抛出Exception。
- REQUIRES_NEW：当前没有事务，就新建一个事务，在事务中运行；新建一个新事务；如果当前事务存在，把当前事务挂起。
- NOT_SUPPORTED：无事务执行，如果当前事务存在，把当前事务挂起。被调用方法想无事务运行，但又不影响调用方的事务，可以用NOT_SUPPORTED；
- NEVER:如果当前有事务则抛出Exception;
- NESTED：嵌套事务，将会把事务嵌套在父事务中。如果事务不存在，那么会自己新建事务。如果事务存在，会在当前事务嵌套执行。父类事务可以控制子类事务。父事务回滚 子事务回滚， 若子事务异常则子事务回滚父事务不会滚



### 什么是索引

本质是存储在数据库表中的数据结构，指向存储数据的位置。当数据库创建索引后，系统会根据索引快速定位和访问数据。加速查询效率。其中分为两种，**哈希索引和BTree索引**。



### 索引有那些

- 主键索引（Primary Key Index）：用于唯一标识每条记录，在表中只能有一个主键索引。
- 唯一索引（Unique Index）：确保列中的所有值都是唯一的，但允许有空值。
- 普通索引（Normal Index）：最基本的索引，没有唯一性要求。
- 复合索引（Composite Index）：由多个列组成的索引，可以提高多列查询的效率。
- 全文索引（Full-text Index）：用于全文搜索的索引，可以对文本内容进行高效搜索。
- 空间索引（Spatial Index）：用于空间数据类型的索引，支持地理位置相关的查询。
- 聚集索引（Clustered Index）：按照索引顺序存储数据的索引，通常与主键索引相关联。
- 非聚集索引（Non-clustered Index）：不按照索引顺序存储数据的索引，通常是普通索引或唯一索引。



### 覆盖索引

所过**一个索引包含所查询的所有字段的话**，那么就是覆盖索引。因为在储存方式上，使用的是主键+列值。如果查询的字段没有索引字段包含完毕，那么就要进行**回表操作**。通过主键再次查找一次，这样效率会很慢。



### 索引失效

- 使用<>号
- 单独使用><
- 模糊查询的时候，%在前面
- 使用符合索引的时候，第一个位置并非索引列
- 字符型字段为数字时在where 条件不加引号
-  当变量采用times变量，而表的字段采用date变量时 
- 使用not in， not exists
-  对索引列进行计算时，需要建立函数索引 
- 使用or可能会使索引失效，从而全表扫描



### Redis是什么为什么这么快

Redis是运行在内存上的键值对高性能数据库，是介于用户和mysql数据库之间的数据库。其目的是为了更快的响应数据和缓解Mysql访问压力。因为Redis内部做了很多**性能优化** ，主要包括了下面3点：

1. Redis 基于内存，内存的访问速度比磁盘快很多；
2. Redis 基于 Reactor 模式设计开发了一套高效的事件处理模型，主要是单线程事件循环和 IO 多路复用
3. Redis 内置了多种优化过后的数据类型/结构实现，性能非常高。






### Spring是什么

是一个开源的Java框架，有三个主要的特性依赖注入（DI），控制反转（IoC），切面编程（AOP）。可以将主流框架于Spring框架进行整合。

依赖注入（DI）	通过xml文件方式或者注解动态注入到对象当中，可以使用set方法，构造方法，自动装配

控制反转（IoC）	不再是用户自己new对象了，而是交给Ioc容器来进行管理。管理对象叫Bean

切面编程（AOP）可以无侵入式的对代码进行增强，通过切点切面切片



### Bean的生命周期

- 实例化：在容器中，给Bean分配内存空间
- 赋值：对Bean的属性进行赋值，可以通过构造注入，setter注入，字段注入
- 初始化：初始化阶段是指对Bean实例进行一系列的初始化操作，使其进入可用状态。
- 使用中：Bean实例完成初始化后，可以被应用程序正常使用。
- 销毁前：在Bean销毁之前执行一些清理操作，如调用销毁方法（如@PreDestroy注解标注的方法）。
- 销毁后：Bean销毁后执行一些额外的清理操作。

开发者可以通过**BeanPostProcessor**接口对Bean的生命周期进行处理。可以自己实现初始化前后的，额外的操作



### Spring用到了那些设计模式

1. 工厂简单模式
2. 工厂方法模式
3. 单例模式：一个类仅有一个实例，提供一个访问它的全局访问点。Spring 创建 Bean 实例默认是单例的。
4. 代理模式：Spring中的AOP使用了代理模式



### SpringMVC是什么

是一个基于Java的mvc架构的轻量级框架，用于处理web的请求和响应。



### SpringMVC的执行流程是什么

1：浏览器发送请求，给前置控制器DispatcherServlet。

2：DispatcherServlet 通过 HandlerMapping 找到对应的 Handler（Controller），并形成执行链。

3：执行链中的前置处理器对请求进行预处理，将请求交给适配器，执行对应的Controller，Controller执行返回对应的数据模型

3：前置处理器将数据模型交给视图解析进行视图解析，**将数据模型填充到视图当中**。可以选择不同的解析器（JSON,XML,HTML）

4：解析完成后，交给前置控制器返回给客户端进行显示。



### Spring AOP的相关术语

（1）**切面**（Aspect）：切面是通知和切点的结合。通知和切点共同定义了切面的全部内容。

（2）**连接点**（Join point）：指方法，在Spring AOP中，一个连接点总是代表一个方法的执行。连接点是在应用执行过程中能够插入切面的一个点。这个点可以是调用方法时、抛出异常时、甚至修改一个字段时。切面代码可以利用这些点插入到应用的正常流程之中，并添加新的行为。

（3）**通知**（Advice）：在AOP术语中，切面的工作被称为通知。

（4）**切入点**（Pointcut）：切点的定义会匹配通知所要织入的一个或多个连接点。我们通常使用明确的类和方法名称，或是利用正则表达式定义所匹配的类和方法名称来指定这些切点。

（5）**引入**（Introduction）：引入允许我们向现有类添加新方法或属性。

（6）**目标对象**（Target Object）： 被一个或者多个切面（aspect）所通知（advise）的对象。它通常是一个代理对象。

（7）**织入**（Weaving）：织入是把切面应用到目标对象并创建新的代理对象的过程。在目标对象的生命周期里有以下时间点可以进行织入



### Bean注入容器的方式

1. **@Configuration + @Bean**

@Configuration用来声明一个配置类，然后使用 @Bean 注解，用于声明一个bean，将其加入到Spring容器中。

2. 可以通过XML文件进行配置

```java
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
                           http://www.springframework.org/schema/beans/spring-beans.xsd">
    <!-- 定义一个名为userService的Bean，类为com.example.UserService -->
    <bean id="userService" class="com.example.UserService">
        <!-- 设置userService的属性值 -->
        <property name="name" value="John Doe"/>
    </bean>

</beans>
```



### Bean的作用域

作用域一共有五种，默认的是单例模式。

1. singleton：单例模式，每个Spring容器中只有一个Bean实例。
2. prototype：原型模式，每次请求时都会创建一个新的Bean实例。
3. request：每个HTTP请求都会创建一个新的Bean实例。
4. session：每个HTTP会话都会创建一个新的Bean实例。
5. globalSession：全局会话作用域，仅在基于Portlet的Web应用中有效。

### 

### Spring自动装配

自动装配有三种方式

1. 根据类型**byType**
2. 根据名称**byName**
3. 根据构造函数**constructor**



### 循环依赖与解决

对于属性注入的循环依赖（单例模式下），是通过三级缓存处理来循环依赖的。

而非单例对象的循环依赖，则无法处理。

三级缓存中：1级：已经赋值并初始化好的Bean

2级：已经初始化但没有设置属性的Bean

3级：存储对象的工厂对象

假如，A依赖了B的实例对象，B也依赖了A的实例对象。

1. 实例化A对象，将自己添加到3级缓存缓存当中
2. 接着进行依赖注入 ，因为A需要B的实例化，现在B没有被实例化，对B进行实例化
3. 对B依赖注入的时候，发现需要A的实例化。在一级缓存中和二级缓存中都没有找到A对象。
4. 由于A在初始化的时候，将自己添加到了3级缓存中。所以B可以拿到A对象。拿到A对象后，将自己放入到一级缓存中。
5. 此时返回A中，A可以成功拿到放在一级缓存中的B的对象完成自己的初始化。







### SpringBoot

可以对之前学过的Spring和SpringMVC进行加速开发，不用过多的关心文件配置上。而是着重于编写MVC架构层的内容编写。

**内嵌了Tomcat，简化了Web开发的部署过程。**在使用的时候，只需要把起步依赖配置好，能省很多事。



### IOC控制反转



### Springboot的核心注解

**@SpringBootApplication**

标识系统的主类，其中还包含了三个注解分别是：

@Configuration：标明这是一个配置类

@EnableAutoConfiguration ：开启SpringBoot的一个自动装配

 @ComponentScan：指定 Spring 在扫描组件时的基本包路径。

**@Controller**

用于标识控制器类，处理 HTTP 请求并返回视图或数据。

**@RestController**

结合了 @Controller 和 @ResponseBody，用于标识 RESTful 风格的控制器类，返回 JSON 或 XML 数据。

GET（获取资源）、POST（创建资源）、PUT（更新资源）、DELETE（删除资源）。

**@Autowired**

用于自动装配 Spring Bean，可以在属性、构造方法、方法上使用。

**@Value**

用于注入配置属性值。





### Vue的生命周期

**beforeCreate**

在实例初始化之后

**created**

实例已经创建完成之后被调用，此时实例已完成数据观测(data observer)、属性和方法的运算，但是尚未挂载到页面上。

**beforeMount**

在挂载开始之前被调用：相关的 render 函数首次被调用。

**mounted**

实例已经挂载到页面上之后被调用，此时组件已经被渲染到页面上。

**beforeUpdate**

数据更新时调用，发生在虚拟 DOM 重新渲染之前。

**updated**

数据更新之后调用，发生在虚拟 DOM 重新渲染之后。

**beforeDestroy**

实例销毁之前调用。在这一步，实例仍然完全可用。

**destroyed**

实例销毁之后调用。在这一步，所有的事件监听器和子组件被移除。



### Vue特殊的钩子函数

**activated**

当使用 <keep-alive> 组件时，组件切换到活动状态时调用。该钩子函数只在被 <keep-alive> 缓存的组件中使用。

**deactivated**

当使用 <keep-alive> 组件时，组件切换到非活动状态时调用。该钩子函数只在被 <keep-alive> 缓存的组件中使用。

**errorCaptured**

当子组件触发错误时，错误会向上冒泡到最近的父组件，并在父组件中调用 errorCaptured 钩子函数。可以用来捕获子组件的错误信息。**beforeRouteEnter**：在路由进入前调用，可以访问组件实例，但是无法访问 this 对象。

**beforeRouteLeave**

在路由离开前调用，可以访问组件实例，但是无法访问 this 对象。



### 什么是跨域

跨域就是从一个域名的网页请求另一个域名的资源，因为有**同源策略**的原因一般不允许访问。指的是协议、主机和端口号均相同。但是再现在开发环境下，前后端分离开发是必然的。这时候就会产生跨域问题。

**为什么会有同源策略**

举个例子，假如你刚刚在网银输入账号密码，查看了自己的余额，然后再去访问其他带颜色的网站，这个网站可以访问刚刚的网银站点，并且获取账号密码，那后果可想而知。因此，从安全的角度来讲，同源策略是有利于保护网站信息的。



### 如何解决跨域问题

- 使用Spring注解 **@CrossOrigin**。写在Controller层的方法上
  -  **@CrossOrigin**：允许所有来源的请求跨域访问
  - **@CrossOrigin(origins = "http://example.com")**：允许特定站点的跨域访问
  - 还可以设置请求头，请求方法等信息进行暴露
- **nginx**代理服务器



### 悲观锁和乐观锁

**基本概念和优缺点**

**悲观锁**：悲观锁总是假设最坏的情况，认为共享资源每次被访问的时候就会出现问题(比如共享数据被修改)，所以每次在获取资源操作的时候都会上锁，这样其他线程想拿到这个资源就会阻塞直到锁被上一个持有者释放。也就是说，**共享资源每次只给一个线程使用，其它线程阻塞，用完后再把资源转让给其它线程**。

缺点：高并发的场景下，激烈的锁竞争会造成**线程阻塞**，大量阻塞线程会导致系统的**上下文切换**，增加系统的性能开销。并且，悲观锁还可能会存在**死锁**问题，影响代码的正常运行。

**乐观锁**：乐观锁假设每次都是最好的情况，认为共享资源每次访问不会出现问题。**不会上锁。**所以线程会一直执行，只是在提交修改的时候区验证资源。在高并发的情况下，不会存在线程堵塞和死锁的问题。性能会更胜一筹。

缺点：如果冲突频繁出现，**很影响性能，CPU飙升**

**实现**

**悲观锁**：

**乐观锁**：**CAS（Compare And Swap）**机制**和版本号机制**

- CAS：**内存位置(V)、预期值(A)、新值(B)** ，如果内存位置V的值等于预期的A值，则将该位置更新为新值B，否则不进行任何操作。
  - 使用CAS会出现，ABA问题。会导致数据不一致。解决方案，在CAS中，也加入一个版本号，每次操作的时候，版本都+1。和版本号机制类似。
    - (1)线程1读取内存中数据为A；
    - (2)线程2将该数据修改为B；
    - (3)线程2将该数据修改为A；
    - (4)线程1对数据进行CAS操作
    - 在第(4)步中，由于内存中数据仍然为A，因此CAS操作成功，但实际上该数据已经被线程2修改过了。这就是ABA问题。

- 版本号机制：1.当某个线程查询数据时，将该数据的版本号一起查出来；

2.当该线程更新数据时，判断当前版本号与之前读取的版本号是否一致，如果一致才进行操。如果不一致就放弃当前操作。



## 分布式锁

在多线程环境中，如果多个线程同时访问共享资源（例如商品库存、外卖订单），会发生数据竞争，可能会导致出现脏数据或者系统问题，威胁到程序的正常运行。

![共享资源未互斥访问导致出现问题](Interview.assets/oversold-without-locking.png)

为了保证共享资能被安全的访问，所以可以使用锁，来对共享资源进行保护。**如何才能实现共享资源的互斥访问呢？** 锁是一个比较通用的解决方案，更准确点来说是悲观锁。

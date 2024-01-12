import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as r,c as h,d,a,b as i,e as p}from"./app-bllmSL5G.js";const n={},t=a("p",null,[a("code",null,"more"),i(" 常见面试的解答")],-1),s=p('<h2 id="javase" tabindex="-1"><a class="header-anchor" href="#javase" aria-hidden="true">#</a> JavaSE</h2><h3 id="对类-方法-变量命名规则" tabindex="-1"><a class="header-anchor" href="#对类-方法-变量命名规则" aria-hidden="true">#</a> 对类，方法，变量命名规则</h3><p>类名大驼峰规则</p><p>方法是小驼峰规则</p><p>变量是是全小写，常量是全大写</p><h3 id="基本数据类型和引用数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型和引用数据类型" aria-hidden="true">#</a> 基本数据类型和引用数据类型</h3><p>基本数据有四大类，分为字符型，布尔型，浮点型，整形</p><p>其中细分有byte，short，int,long(整形)，char，Boolean，float，double</p><p>为什么取值范围负数会多一个，其实就是符号位被用来做了个补充，用来代表多出来的那个负数！</p><h3 id="类型的自动转换" tabindex="-1"><a class="header-anchor" href="#类型的自动转换" aria-hidden="true">#</a> 类型的自动转换</h3><p>当表达式中，混合多个变量类型。程序将会把所有变量编程容量最大的数据类型进行计算</p><p>精度大的变量赋值给小的会报错，反之转换</p><p>(byte,short)和char之间不会相互自动转换</p><p>boolean不参与转换</p><h3 id="引用数据类型和基本数据类型" tabindex="-1"><a class="header-anchor" href="#引用数据类型和基本数据类型" aria-hidden="true">#</a> 引用数据类型和基本数据类型</h3><p>基本数据类型是直接存储在栈上的，本身就是数据。</p><p>引用数据类型，是在堆内存中。开辟了一片空间，对象进行数据的引用。使用了new实际上就是在堆内存中开辟了一片空间，等号位指向。</p><p>常见的引用数据类型有：类，数组，字符串</p><h3 id="局部变量和成员变量" tabindex="-1"><a class="header-anchor" href="#局部变量和成员变量" aria-hidden="true">#</a> 局部变量和成员变量</h3><p>局部变量创建于代码块中，也只会生效于该代码块中。代码块执行完毕会进行销毁</p><p>成员变量是写在类内部，方法外面的变量，可以在类中进行使用，或者实例化类后，通过类名调用。</p><h3 id="谈谈对string的理解" tabindex="-1"><a class="header-anchor" href="#谈谈对string的理解" aria-hidden="true">#</a> 谈谈对String的理解</h3><p>String的底层是一个被Final修饰的char数组</p><p>初始化String有三种初始化方法，一个直接赋值，一个是无参构造来赋值，一个用有参构造来赋值。存储在内存中的位置不同。</p><p>直接赋值看内存有无一样的字符串，没有会进行创建有会直接引用</p><p>使用无参构造创建，后续赋值会查看常量池里面是否有值</p><p>使用有参构造创建，必须分配内存空间。</p><h3 id="i-和-i" tabindex="-1"><a class="header-anchor" href="#i-和-i" aria-hidden="true">#</a> i++ 和 ++i</h3><p>i++ 先执行再加 ++i 先加再执行</p><h3 id="集合" tabindex="-1"><a class="header-anchor" href="#集合" aria-hidden="true">#</a> 集合</h3><p>集合分为单列集合和双列集合 List接口有ArrayList和LinkedList实现，是是有序可重复的</p><p>Set 无序集合，不能重复。实现类有HashSet和LinkedHashSet</p><p>Map 键值对集合，是双列集合。</p><p>Collection包含了 List和Set 其中Map没有继承</p><h3 id="io" tabindex="-1"><a class="header-anchor" href="#io" aria-hidden="true">#</a> IO</h3><p>分别字节流和字符流，</p><p>字节流以二进制的方式是处理视频图片文字 InputStream 和 OutStream</p><p>字符流，处理文本类型，以便于处理字符码和字符集 Readear Write</p><h3 id="java跳出循环的三种方式" tabindex="-1"><a class="header-anchor" href="#java跳出循环的三种方式" aria-hidden="true">#</a> Java跳出循环的三种方式</h3><p><code>break</code> 跳出循环</p><p><code>retrun</code> 跳出方法</p><p><code>continue</code> 结束本次循环</p><h3 id="java是什么" tabindex="-1"><a class="header-anchor" href="#java是什么" aria-hidden="true">#</a> Java是什么</h3><p>是面向对象的编程语言，</p><p>封装：把属性和方法封装到一个对象当中</p><p>继承：子类继承父类，但是不能继承父类中私有的方法和属性</p><p>多态：父类引用指向子类对象</p><h3 id="hashcode" tabindex="-1"><a class="header-anchor" href="#hashcode" aria-hidden="true">#</a> Hashcode</h3><p>用于返回Java对象的哈希码值，是根据对象的地址计算出来的Int类型的值。</p><h3 id="jvm" tabindex="-1"><a class="header-anchor" href="#jvm" aria-hidden="true">#</a> JVM</h3><p>jvm是虚拟出来的计算机，所以也叫JVM虚拟机。</p><p>JVM负责将编译好的class文件，编译成机器码运行在各个系统程序上运行。达到了高可移植性，只有生成了.class文件，就可以在多个平台上运行</p><h3 id="gc垃圾回收" tabindex="-1"><a class="header-anchor" href="#gc垃圾回收" aria-hidden="true">#</a> GC垃圾回收</h3><p>当在堆中实例化的对象，没有被程序使用的时候。</p><p>常见的回收机制有：</p><p>当实例化新对象的时候，无法分配新空间的时候。会对程序没有引用的对象进行回收。</p><p>在空闲的时候，会周期性的对没有引用的对象进行回收</p><h3 id="重载和重写" tabindex="-1"><a class="header-anchor" href="#重载和重写" aria-hidden="true">#</a> 重载和重写</h3><p>重载是在同一个类中，对构造函数写入不同个数或者不同参数的构造方法，叫做构造函数的重载</p><p>重写是要有继承关系的前提下，子类方法对父类相同名称的方法进行重写。</p><h3 id="jdk-jre-jvm" tabindex="-1"><a class="header-anchor" href="#jdk-jre-jvm" aria-hidden="true">#</a> jdk jre jvm</h3><p>jdk是开发工具类包，包含了运行环境和开发</p><p>jre是运行环境和核心类库</p><p>jvm是Java的虚拟机</p><h3 id="static" tabindex="-1"><a class="header-anchor" href="#static" aria-hidden="true">#</a> static</h3><p>在类加载的时候，就会加载到堆中。可以不用进行实例化使用</p><p>修饰方法和成员变量的时候，在类加载的时候，就会直接加载到方法区中。</p><h3 id="面向过程编程" tabindex="-1"><a class="header-anchor" href="#面向过程编程" aria-hidden="true">#</a> 面向过程编程</h3><p>强调于程序的执行过程，着重于每一步的实现。而不是像面向对象一样将一个程序分解为对象来及逆行业务的实现。</p><h2 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h2><h3 id="事务四大特征" tabindex="-1"><a class="header-anchor" href="#事务四大特征" aria-hidden="true">#</a> 事务四大特征</h3><p>原子性：要么都成功，要么都失败</p><p>一致性：事务完成，所有数据保持一致</p><p>隔离性：事务和事务时相互独立的</p><p>持久性：一旦数据修改，是永久的</p><h3 id="数据库的范式" tabindex="-1"><a class="header-anchor" href="#数据库的范式" aria-hidden="true">#</a> 数据库的范式</h3><p>第一范式 列中的数据，不能在分割。对应的一列数据只能是这一列的属性</p><p>第二范式 非主键的字段要完全依赖于主键</p><p>第三范式 不存在依赖传递，如果存在需要把依赖传递的表分为两个表格</p><p>在实际设计中需要权衡学习范式化设计和反范式设计之间的平衡。</p><h3 id="隔离级别" tabindex="-1"><a class="header-anchor" href="#隔离级别" aria-hidden="true">#</a> 隔离级别</h3><p>读未提交</p><p>读已提交</p><p>可重复读</p><p>可串行化</p><p>Mysql默认使用的是可重复读</p><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h3><p>Redis是运行在内存上的键值对高性能数据库，是介于用户和mysql数据库之间的数据库。其目的是为了更快的响应数据和缓解Mysql访问压力。</p><h3 id="spring是什么" tabindex="-1"><a class="header-anchor" href="#spring是什么" aria-hidden="true">#</a> Spring是什么</h3><p>是一个开源的Java框架，有三个主要的特性依赖注入（DI），控制反转（IoC），切面编程（AOP）。可以将主流框架于Spring框架进行整合。</p><p>依赖注入（DI） 通过xml文件方式或者注解动态注入到对象当中，可以使用set方法，构造方法，自动装配</p><p>控制反转（IoC） 不再是用户自己new对象了，而是交给Ioc容器来进行管理。管理对象叫Bean</p><p>切面编程（AOP）可以无侵入式的对代码进行增强，通过切点切面切片</p><h3 id="springmvc是什么" tabindex="-1"><a class="header-anchor" href="#springmvc是什么" aria-hidden="true">#</a> SpringMVC是什么</h3><p>是一个基于Java的mvc架构的轻量级框架，用于处理web的请求和响应。</p><h3 id="springboot" tabindex="-1"><a class="header-anchor" href="#springboot" aria-hidden="true">#</a> SpringBoot</h3><p>可以对之前学过的Spring和SpringMVC进行加速开发，不用过多的关心文件配置上。而是着重于编写MVC架构层的内容编写。</p><p>内嵌了Tomcat，简化了Web开发的部署过程。在使用的时候，只需要把起步依赖配置好，能省很多事。</p>',98);function c(o,l){return r(),h("div",null,[t,d(" more "),s])}const f=e(n,[["render",c],["__file","Interview.html.vue"]]);export{f as default};

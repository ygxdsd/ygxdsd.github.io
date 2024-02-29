import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as p,c as l,d as c,a as n,f as o,w as u,b as s,e as r}from"./app-c1xsNO-R.js";const i={},d=n("hr",null,null,-1),k=n("p",null,[n("code",null,"more"),s(" MybatisPlus中QueryWrapper和LambdaQueryWrapper和QueryWapper常用方法和区别")],-1),m=r(`<p><strong>QueryWrapper</strong></p><p><strong>QueryWrapper</strong> 是 MyBatis-Plus 最基础的查询条件构造器之一。它通过链式调用的方式构建查询条件，并使用普通的字符串作为字段名、操作符和值。它的使用方式类似于传统的 SQL 查询。</p><p><strong>LambdaQueryWrapper</strong></p><p><strong>LambdaQueryWrapper</strong> 是在 <strong>QueryWrapper</strong> 的基础上****增加了使用 Lambda 表达式的功能****，使得构建查询条件更加类型安全、易读，并且能够在编译时进行语法检查。它通过方法引用的方式来指定实体类的属性，并提供了丰富的方法来构建查询条件。</p><p><strong>常见的拼接方法查询</strong></p><table><thead><tr><th style="text-align:left;">函数</th><th style="text-align:center;">说明</th><th style="text-align:left;">例子</th></tr></thead><tbody><tr><td style="text-align:left;">eq</td><td style="text-align:center;">等于(=)</td><td style="text-align:left;">queryWrapper.eq(“user_name”, “张三”); //user_name=“张三”</td></tr><tr><td style="text-align:left;">ne</td><td style="text-align:center;">不等于(&lt;&gt;)</td><td style="text-align:left;">queryWrapper.ne(“user_name”, “张三”); //user_name&lt;&gt;“张三”</td></tr><tr><td style="text-align:left;">gt</td><td style="text-align:center;">大于(&gt;)</td><td style="text-align:left;">queryWrapper.gt(“level”, 1); //level&gt;1</td></tr><tr><td style="text-align:left;">ge</td><td style="text-align:center;">大于等于(&gt;=)</td><td style="text-align:left;">queryWrapper.ge(“level”, 1); //level&gt;=1</td></tr><tr><td style="text-align:left;">lt</td><td style="text-align:center;">小于(&lt;)</td><td style="text-align:left;">queryWrapper.lt(“level”, 1); //level&lt;1</td></tr><tr><td style="text-align:left;">le</td><td style="text-align:center;">小于等于(&lt;=)</td><td style="text-align:left;">queryWrapper.le(“level”, 1); //level&lt;=1</td></tr><tr><td style="text-align:left;">between</td><td style="text-align:center;">值1和值2之间</td><td style="text-align:left;">queryWrapper.between(“level”, 1,10); //level&gt;=1 and level &lt;=10</td></tr><tr><td style="text-align:left;">notBetween</td><td style="text-align:center;">不在值1和值2之间</td><td style="text-align:left;">queryWrapper.notBetween(“level”, 1,10);//level&lt;1 or level &gt;10</td></tr><tr><td style="text-align:left;">like</td><td style="text-align:center;">模糊匹配 like %值%</td><td style="text-align:left;">queryWrapper.like(“user_name”, “张三”); //user_name like “%张三%”</td></tr><tr><td style="text-align:left;">isNull</td><td style="text-align:center;">字段 为空</td><td style="text-align:left;">queryWrapper.isNull(“user_name”);//user_name is null</td></tr><tr><td style="text-align:left;">isNotNull</td><td style="text-align:center;">字段 不为空</td><td style="text-align:left;">queryWrapper.isNotNull(“user_name”);//user_name is not null</td></tr><tr><td style="text-align:left;">in</td><td style="text-align:center;">字段 in (v0，v1，…)</td><td style="text-align:left;">queryWrapper.in(“user_name”, {“张三”,“李四”,“王五”}); // user_name in （“张三”,“李四”,“王五”）</td></tr><tr><td style="text-align:left;">or</td><td style="text-align:center;">拼接 OR</td><td style="text-align:left;">说明:主动调用or表示紧接着下一个方法不是用and连接!(不调用or则默认为使用and连接);queryWrapper.eq(“id”, “1”).or().eq(“user_name”, “张三”); //id = 1 or name =‘张三’</td></tr><tr><td style="text-align:left;">and</td><td style="text-align:center;">拼接 AND</td><td style="text-align:left;">queryWrapper.eq(“id”, “1”).and(i-&gt;i.eq(“user_name”, “张三”)); //id = 1 and name =‘张三’</td></tr></tbody></table><h3 id="lambdaquerywrapper和querywrapper的区别" tabindex="-1"><a class="header-anchor" href="#lambdaquerywrapper和querywrapper的区别" aria-hidden="true">#</a> LambdaQueryWrapper和QueryWrapper的区别</h3><ul><li><p><code>QueryWrapper</code>：使用字符串表示列名，通过字符串拼接的方式构建查询条件，这种方法编译器无法去验证列名的正确性，可能会存在不合法的列名风向</p></li><li><p><code>LambdaQueryWrapper</code>：使用Lambda表达式表示列名，通过Lambda表达式的方式构建查询条件。这种方式更加类型安全，可以在编译时捕获拼写错误。</p></li></ul><h3 id="lambdaquerywrapper的高级运用" tabindex="-1"><a class="header-anchor" href="#lambdaquerywrapper的高级运用" aria-hidden="true">#</a> LambdaQueryWrapper的高级运用</h3><ul><li>基本条件构建</li></ul><p>查询年龄大于30岁且名字包含&quot;John&quot;的用户</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> queryWrapper <span class="token operator">=</span> <span class="token class-name">Wrappers</span><span class="token punctuation">.</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span><span class="token function">lambdaQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">ge</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token operator">::</span><span class="token function">getAge</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token operator">::</span><span class="token function">getName</span><span class="token punctuation">,</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> userList <span class="token operator">=</span> userDao<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span>queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>多表关联查询</li></ul><p>假设我们有一个名为<code>Device</code>的实体类，表示设备详情信息，其中包含了设备的<code>Id</code>字段，我们想要查询该用户关注设备的详细信息</p><p>userId是要查找用户的id</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Device</span><span class="token punctuation">&gt;</span></span> device <span class="token operator">=</span> <span class="token class-name">Wrappers</span><span class="token punctuation">.</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Device</span><span class="token punctuation">&gt;</span></span><span class="token function">lambdaQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">inSql</span><span class="token punctuation">(</span><span class="token class-name">Device</span><span class="token operator">::</span><span class="token function">getId</span> <span class="token punctuation">,</span> <span class="token string">&quot;select device_id from focus_device where sys_user_id = &quot;</span> <span class="token operator">+</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Device</span><span class="token punctuation">&gt;</span></span> devices <span class="token operator">=</span> deviceMapper<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span>device<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个示例，创建了对设备表的LambdaQueryWrapper语句，用id去进行in查找数据库中关注表中用户关注的设备进行匹配。返回</p><ul><li>动态条件构建</li></ul><p>LambdaQueryWrapper也支持动态条件构建，你可以根据实际情况添加或删除条件。例如，如果你有一个搜索页面，用户可以选择性地输入查询条件，你可以像这样动态构建查询条</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> queryWrapper <span class="token operator">=</span> <span class="token class-name">Wrappers</span><span class="token punctuation">.</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span><span class="token function">lambdaQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// StringUtils.isNotBlank使用了Java的Lang库中的方法，判断指定字符串是非空且至少包含一个非空白字符时，返回true</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    queryWrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token operator">::</span><span class="token function">getUsername</span><span class="token punctuation">,</span> username<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>minAge <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    queryWrapper<span class="token punctuation">.</span><span class="token function">ge</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token operator">::</span><span class="token function">getAge</span><span class="token punctuation">,</span> minAge<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>maxAge <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    queryWrapper<span class="token punctuation">.</span><span class="token function">le</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token operator">::</span><span class="token function">getAge</span><span class="token punctuation">,</span> maxAge<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> userList <span class="token operator">=</span> userDao<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span>queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实际运用</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// QueryWrapper的用法</span>
<span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> queryWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
queryWrapper<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">or</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token string">&quot;address&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;New%&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> userList <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span>queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// LambdaQueryWrapper的用法</span>
<span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> lambdaQueryWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
lambdaQueryWrapper<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token operator">::</span><span class="token function">getAge</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token operator">::</span><span class="token function">getName</span><span class="token punctuation">,</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> userList <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span>lambdaQueryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当同时使用Or和and请参考以下博客↓</p>`,23);function g(v,y){const a=e("RouterLink");return p(),l("div",null,[d,k,c(" more "),m,n("p",null,[o(a,{to:"/blog/QueryWrapperAndOr.html"},{default:u(()=>[s("QueryWapper中or()和and()连用问题")]),_:1})])])}const x=t(i,[["render",g],["__file","QueryWrapper.html.vue"]]);export{x as default};

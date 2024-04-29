import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o,c as p,d as i,a as n,b as s,f as c,e as l}from"./app-s3LKCCkT.js";const r="/assets/image-20240430001319438-GDaINqjq.png",u="/assets/image-20240430001429228-fAHZWzHq.png",d="/assets/image-20240430001605219-Qw3BcbPu.png",g="/assets/image-20240430002204792-AJ49NI-9.png",k="/assets/image-20240430002404720-BFigPZfz.png",m="/assets/image-20240430003151903-6gjPEpZl.png",f="/assets/image-20240430003411635-vDD6eOfc.png",_={},v=n("p",null,[n("code",null,"more"),s(" Jeecg代码生成后，自定义接口进行访问")],-1),h=n("h3",{id:"_1-前端编写",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-前端编写","aria-hidden":"true"},"#"),s(" 1：前端编写")],-1),b=n("p",null,"1：首先在api.ts中定义自己的接口路径",-1),x=n("figure",null,[n("img",{src:r,alt:"定义接口路径",tabindex:"0",loading:"lazy"}),n("figcaption",null,"定义接口路径")],-1),q=n("p",null,"2：暴露写好的Post接口方法，其中defHttp用的是Axios框架。可以点击源码进行查看。",-1),y={href:"https://blog.csdn.net/yangyangkl123/article/details/109024222",target:"_blank",rel:"noopener noreferrer"},z=l('<p>经过作者测试，Jeecg框架尽量使用params变量，不然使用data可能会出现不必要的问题</p><figure><img src="'+u+'" alt="暴露已经写好的方法" tabindex="0" loading="lazy"><figcaption>暴露已经写好的方法</figcaption></figure><figure><img src="'+d+'" alt="defHttp源码" tabindex="0" loading="lazy"><figcaption>defHttp源码</figcaption></figure><p>3：在Vue页面中，Improt定义的接口</p><figure><img src="'+g+'" alt="导入接口" tabindex="0" loading="lazy"><figcaption>导入接口</figcaption></figure><figure><img src="'+k+'" alt="发送接口，获取结果" tabindex="0" loading="lazy"><figcaption>发送接口，获取结果</figcaption></figure><p><strong>！！！！ 注意后端传回来的是一个对象，包含了返回码，但是使用接口后，res只有结果！！！</strong></p><p>实际上是因为项目中的，Axios中的index.ts进行了拦截。</p><figure><img src="'+m+'" alt="请求拦截" tabindex="0" loading="lazy"><figcaption>请求拦截</figcaption></figure><p><strong>————————————————————————————————————</strong></p><p>为了避免拦截，可以复制一个相同的文件。对这段代码进行修改。请求成功后，返回data变量。这样就可以拿到所有的值了</p><figure><img src="'+f+`" alt="修改拦截器的data" tabindex="0" loading="lazy"><figcaption>修改拦截器的data</figcaption></figure><h3 id="_2-后端编写" tabindex="-1"><a class="header-anchor" href="#_2-后端编写" aria-hidden="true">#</a> 2：后端编写</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Api</span><span class="token punctuation">(</span>tags<span class="token operator">=</span><span class="token string">&quot;车间信息表&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/information/tWrokshop&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TWrokshopController</span> <span class="token keyword">extends</span> <span class="token class-name">JeecgController</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TWrokshop</span><span class="token punctuation">,</span> <span class="token class-name">ITWrokshopService</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
	 <span class="token annotation punctuation">@AutoLog</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;车间-编码生成&quot;</span><span class="token punctuation">)</span>
	 <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/code&quot;</span><span class="token punctuation">)</span>
	 <span class="token keyword">public</span> <span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">code</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		 <span class="token class-name">String</span> code <span class="token operator">=</span> <span class="token class-name"><span class="token namespace">tWrokshopService<span class="token punctuation">.</span></span>WrokshopCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		 <span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">OK</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>
	 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function A(S,H){const a=e("ExternalLinkIcon");return o(),p("div",null,[v,i(" more "),h,b,x,q,n("p",null,[s("PS：请求定义变量需要注意"),n("a",y,[s("Axios post 传参的params 与data 的两种形式"),c(a)])]),z])}const j=t(_,[["render",A],["__file","JeecgApi.html.vue"]]);export{j as default};

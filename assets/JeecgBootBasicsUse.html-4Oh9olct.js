import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as g,o as s,c as r,d as c,a as i,f as t,w as n,b as e,e as l}from"./app-FqxNkaNW.js";const p="/assets/image-20240429232756487-_i_hRZYD.png",f="/assets/image-20240429233356425-Ye1Rq6qv.png",d="/assets/image-20240429233740779-7CN-dcst.png",m="/assets/image-20240429233927416-uxOCQd1E.png",_="/assets/image-20240429234003983-gKbJcyyQ.png",u="/assets/image-20240429234315555-06CO7jED.png",h="/assets/image-20240429234323549-nLIGVdJ-.png",x="/assets/image-20240429234410454-z_Ud3-l6.png",b="/assets/image-20240429234504503-OtpfXDw2.png",y="/assets/image-20240429234641380-EySsvCxG.png",z="/assets/image-20240429234950035-JOnK8Net.png",O="/assets/image-20240429235127130-KrH3ClIE.png",C="/assets/image-20240429235323864-B2Cc7VXR.png",J="/assets/image-20240429235923351-NbN4pAGx.png",N={},B=i("p",null,[i("code",null,"more"),e(" 关于Jeecg框架的使用心得，包含了表单开发控件使用，代码生成，一对一表格，一对多表格，Online报表的使用")],-1),k=l('<h3 id="_1-online表格创建-基础控件使用" tabindex="-1"><a class="header-anchor" href="#_1-online表格创建-基础控件使用" aria-hidden="true">#</a> 1：Online表格创建，基础控件使用</h3><blockquote><p>online表单字段的控件类型，支持 下拉、radio、checkbox、选择人、选择部门、popup、下拉搜索、省市县、下拉多选等，已经满足在线低代码开发需求 。</p></blockquote><figure><img src="'+p+'" alt="进入系统，通过Online新增数据库" tabindex="0" loading="lazy"><figcaption>进入系统，通过Online新增数据库</figcaption></figure><figure><img src="'+f+'" alt="数据库的创建，列表的控件选择" tabindex="0" loading="lazy"><figcaption>数据库的创建，列表的控件选择</figcaption></figure><h3 id="_2-下拉框字典实现" tabindex="-1"><a class="header-anchor" href="#_2-下拉框字典实现" aria-hidden="true">#</a> 2：下拉框字典实现</h3><p>1：系统创建字典</p><figure><img src="'+d+'" alt="创建字典，配置字典值" tabindex="0" loading="lazy"><figcaption>创建字典，配置字典值</figcaption></figure><p>2：控件类型选择下拉框，并且校验字段中的<strong>字典Code</strong>写入上图的3。即可实现下拉字典功能。</p><figure><img src="'+m+'" alt="下拉框定义" tabindex="0" loading="lazy"><figcaption>下拉框定义</figcaption></figure><figure><img src="'+_+'" alt="字典填写" tabindex="0" loading="lazy"><figcaption>字典填写</figcaption></figure><h3 id="_3-online报表配置" tabindex="-1"><a class="header-anchor" href="#_3-online报表配置" aria-hidden="true">#</a> 3：Online报表配置</h3><p>在表单窗体中，可以通过Online报表配置。实现<strong>自定义Sql语句结果查找</strong>，并且进行选择。</p><figure><img src="'+u+'" alt="image-20240429234315555" tabindex="0" loading="lazy"><figcaption>image-20240429234315555</figcaption></figure><figure><img src="'+h+'" alt="选择用户" tabindex="0" loading="lazy"><figcaption>选择用户</figcaption></figure><figure><img src="'+x+'" alt="填入对应的值" tabindex="0" loading="lazy"><figcaption>填入对应的值</figcaption></figure><p>1：录入Online报表信息</p><figure><img src="'+b+'" alt="录入基础信息" tabindex="0" loading="lazy"><figcaption>录入基础信息</figcaption></figure><figure><img src="'+y+'" alt="定义Online报表" tabindex="0" loading="lazy"><figcaption>定义Online报表</figcaption></figure><p>2：表单定义</p><figure><img src="'+z+'" alt="image-20240429234950035" tabindex="0" loading="lazy"><figcaption>image-20240429234950035</figcaption></figure><h3 id="_4-单表的代码生成" tabindex="-1"><a class="header-anchor" href="#_4-单表的代码生成" aria-hidden="true">#</a> 4：单表的代码生成</h3><p><code>当表设计完毕时，可以将代码生成出来。</code></p><figure><img src="'+O+'" alt="单表的代码生成" tabindex="0" loading="lazy"><figcaption>单表的代码生成</figcaption></figure><figure><img src="'+C+'" alt="代码生成" tabindex="0" loading="lazy"><figcaption>代码生成</figcaption></figure><p><strong>重点！！！ 这个sql文件中需要修改前端的文件路径，修改完毕后，可以直接执行sql避免自己创建菜单和按钮权限</strong></p><figure><img src="'+J+'" alt="生成出来的文件，需要修改的文件路径" tabindex="0" loading="lazy"><figcaption>生成出来的文件，需要修改的文件路径</figcaption></figure>',26);function q(V,v){const a=g("RouterLink");return s(),r("div",null,[B,c(" more "),i("p",null,[t(a,{to:"/blog/JeecgIntro.html"},{default:n(()=>[e("Jeecg的搭建")]),_:1})]),i("p",null,[t(a,{to:"/blog/JeecgApi.html"},{default:n(()=>[e("Jeecg自定义接口")]),_:1})]),k])}const w=o(N,[["render",q],["__file","JeecgBootBasicsUse.html.vue"]]);export{w as default};
import{_ as s}from"./locales-be796722.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const d={},l={class:"van-doc-markdown-body"},e=n(`<h1>ContactCard 联系人卡片</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>以卡片的形式展示联系人信息。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ContactCard</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ContactCard</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="tian-jia-lian-xi-ren" tabindex="-1">添加联系人</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-contact-card</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;add&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onAdd&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onAdd</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;新增&#39;</span>);
    <span class="hljs-keyword">return</span> {
      onAdd,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="bian-ji-lian-xi-ren" tabindex="-1">编辑联系人</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-contact-card</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;edit&quot;</span> <span class="hljs-attr">:tel</span>=<span class="hljs-string">&quot;tel&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;name&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onEdit&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> tel = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;13000000000&#39;</span>);
    <span class="hljs-keyword">const</span> name = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;张三&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onEdit</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;edit&#39;</span>);
    <span class="hljs-keyword">return</span> {
      tel,
      name,
      onEdit,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="bu-ke-bian-ji" tabindex="-1">不可编辑</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-contact-card</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;edit&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;张三&quot;</span> <span class="hljs-attr">tel</span>=<span class="hljs-string">&quot;13000000000&quot;</span> <span class="hljs-attr">:editable</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>卡片类型，可选值为 <code>edit</code></td><td><em>string</em></td><td><code>add</code></td></tr><tr><td>name</td><td>联系人姓名</td><td><em>string</em></td><td>-</td></tr><tr><td>tel</td><td>联系人手机号</td><td><em>string</em></td><td>-</td></tr><tr><td>add-text</td><td>添加时的文案提示</td><td><em>string</em></td><td><code>添加联系人</code></td></tr><tr><td>editable</td><td>是否可以编辑联系人</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击时触发</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ContactCardType</span>, <span class="hljs-title class_">ContactCardProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-contact-card-padding</td><td><em>var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-contact-card-add-icon-size</td><td><em>40px</em></td><td>-</td></tr><tr><td>--van-contact-card-add-icon-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-contact-card-title-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr></tbody></table></div>`,13),p=[e];function c(r,o){return a(),t("div",l,p)}const j=s(d,[["render",c]]);export{j as default};

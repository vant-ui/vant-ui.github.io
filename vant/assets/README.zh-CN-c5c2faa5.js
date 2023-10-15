import{_ as t}from"./locales-be796722.js";import{o as s,a,z as n}from"./vue-libs-19c20d28.js";const d={},e={class:"van-doc-markdown-body"},l=n(`<h1>ContactEdit 联系人编辑</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>编辑并保存联系人信息。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ContactEdit</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ContactEdit</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-contact-edit</span>
  <span class="hljs-attr">is-edit</span>
  <span class="hljs-attr">show-set-default</span>
  <span class="hljs-attr">:contact-info</span>=<span class="hljs-string">&quot;editingContact&quot;</span>
  <span class="hljs-attr">set-default-label</span>=<span class="hljs-string">&quot;设为默认联系人&quot;</span>
  @<span class="hljs-attr">save</span>=<span class="hljs-string">&quot;onSave&quot;</span>
  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> editingContact = <span class="hljs-title function_">ref</span>({
      <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;&#39;</span>,
    });
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSave</span> = (<span class="hljs-params">contactInfo</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;保存&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onDelete</span> = (<span class="hljs-params">contactInfo</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;删除&#39;</span>);
    <span class="hljs-keyword">return</span> {
      onSave,
      onDelete,
      editingContact,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>contact-info</td><td>联系人信息</td><td><em>ContactEditInfo</em></td><td><code>{}</code></td></tr><tr><td>is-edit</td><td>是否为编辑联系人</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>is-saving</td><td>是否显示保存按钮加载动画</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>is-deleting</td><td>是否显示删除按钮加载动画</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>tel-validator</td><td>手机号格式校验函数</td><td><em>(tel: string) =&gt; boolean</em></td><td>-</td></tr><tr><td>show-set-default</td><td>是否显示默认联系人栏</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>set-default-label</td><td>默认联系人栏文案</td><td><em>string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>save</td><td>点击保存按钮时触发</td><td>content：表单内容</td></tr><tr><td>delete</td><td>点击删除按钮时触发</td><td>content：表单内容</td></tr><tr><td>change-default</td><td>切换是否为默认联系人时触发</td><td>checked：是否默认</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="contacteditinfo-shu-ju-jie-gou" tabindex="-1">ContactEditInfo 数据结构</h3><table><thead><tr><th>键名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>name</td><td>联系人姓名</td><td><em>string</em></td></tr><tr><td>tel</td><td>联系人手机号</td><td><em>string</em></td></tr><tr><td>isDefault</td><td>是否默认</td><td><em>boolean | undefined</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ContactEditInfo</span>, <span class="hljs-title class_">ContactEditProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-contact-edit-padding</td><td><em>var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-contact-edit-fields-radius</td><td><em>var(--van-radius-md)</em></td><td>-</td></tr><tr><td>--van-contact-edit-buttons-padding</td><td><em>var(--van-padding-xl) 0</em></td><td>-</td></tr><tr><td>--van-contact-edit-button-margin-bottom</td><td><em>var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-contact-edit-button-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-contact-edit-field-label-width</td><td><em>4.1em</em></td><td>-</td></tr></tbody></table></div>`,12),c=[l];function o(p,r){return s(),a("div",e,c)}const j=t(d,[["render",o]]);export{j as default};

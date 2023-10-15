import{_ as s}from"./locales-be796722.js";import{o as t,a,z as n}from"./vue-libs-19c20d28.js";const d={},l={class:"van-doc-markdown-body"},e=n(`<h1>ContactList 联系人列表</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>展示联系人列表。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ContactList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ContactList</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-contact-list</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;chosenContactId&quot;</span>
  <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;list&quot;</span>
  <span class="hljs-attr">default-tag-text</span>=<span class="hljs-string">&quot;默认&quot;</span>
  @<span class="hljs-attr">add</span>=<span class="hljs-string">&quot;onAdd&quot;</span>
  @<span class="hljs-attr">edit</span>=<span class="hljs-string">&quot;onEdit&quot;</span>
  @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;onSelect&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> chosenContactId = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;1&#39;</span>);
    <span class="hljs-keyword">const</span> list = <span class="hljs-title function_">ref</span>([
      {
        <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;1&#39;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;张三&#39;</span>,
        <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;13000000000&#39;</span>,
        <span class="hljs-attr">isDefault</span>: <span class="hljs-literal">true</span>,
      },
      {
        <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;2&#39;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;李四&#39;</span>,
        <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;1310000000&#39;</span>,
      },
    ]);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onAdd</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;新增&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onEdit</span> = (<span class="hljs-params">contact</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;编辑&#39;</span> + contact.<span class="hljs-property">id</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSelect</span> = (<span class="hljs-params">contact</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;选择&#39;</span> + contact.<span class="hljs-property">id</span>);

    <span class="hljs-keyword">return</span> {
      list,
      onAdd,
      onEdit,
      onSelect,
      chosenContactId,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前选中联系人的 id</td><td><em>number | string</em></td><td>-</td></tr><tr><td>list</td><td>联系人列表</td><td><em>ContactListItem[]</em></td><td><code>[]</code></td></tr><tr><td>add-text</td><td>新建按钮文案</td><td><em>string</em></td><td><code>新建联系人</code></td></tr><tr><td>default-tag-text</td><td>默认联系人标签文案</td><td><em>string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>add</td><td>点击新增按钮时触发</td><td>-</td></tr><tr><td>edit</td><td>点击编辑按钮时触发</td><td><em>contact: ContactListItem，index: number</em></td></tr><tr><td>select</td><td>切换选中的联系人时触发</td><td><em>contact: ContactListItem，index: number</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="contactlistitem-shu-ju-jie-gou" tabindex="-1">ContactListItem 数据结构</h3><table><thead><tr><th>键名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>id</td><td>每位联系人的唯一标识</td><td><em>number | string</em></td></tr><tr><td>name</td><td>联系人姓名</td><td><em>string</em></td></tr><tr><td>tel</td><td>联系人手机号</td><td><em>number | string</em></td></tr><tr><td>isDefault</td><td>是否为默认联系人</td><td><em>boolean | undefined</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ContactListItem</span>, <span class="hljs-title class_">ContactListProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-contact-list-padding</td><td><em>var(--van-padding-sm) var(--van-padding-sm) 80px</em></td><td>-</td></tr><tr><td>--van-contact-list-edit-icon-size</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-contact-list-add-button-z-index</td><td><em>999</em></td><td>-</td></tr><tr><td>--van-contact-list-radio-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-contact-list-item-padding</td><td><em>var(--van-padding-md)</em></td><td>-</td></tr></tbody></table></div>`,12),p=[e];function c(r,o){return t(),a("div",l,p)}const j=s(d,[["render",c]]);export{j as default};

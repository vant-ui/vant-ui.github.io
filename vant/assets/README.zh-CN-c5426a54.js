import{_ as s}from"./locales-be796722.js";import{o as t,a as d,z as a}from"./vue-libs-19c20d28.js";const n={},e={class:"van-doc-markdown-body"},r=a(`<h1>AddressList 地址列表</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>展示地址信息列表。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">AddressList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">AddressList</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-address-list</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;chosenAddressId&quot;</span>
  <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;list&quot;</span>
  <span class="hljs-attr">:disabled-list</span>=<span class="hljs-string">&quot;disabledList&quot;</span>
  <span class="hljs-attr">disabled-text</span>=<span class="hljs-string">&quot;以下地址超出配送范围&quot;</span>
  <span class="hljs-attr">default-tag-text</span>=<span class="hljs-string">&quot;默认&quot;</span>
  @<span class="hljs-attr">add</span>=<span class="hljs-string">&quot;onAdd&quot;</span>
  @<span class="hljs-attr">edit</span>=<span class="hljs-string">&quot;onEdit&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> chosenAddressId = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;1&#39;</span>);
    <span class="hljs-keyword">const</span> list = [
      {
        <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;1&#39;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;张三&#39;</span>,
        <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;13000000000&#39;</span>,
        <span class="hljs-attr">address</span>: <span class="hljs-string">&#39;浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室&#39;</span>,
        <span class="hljs-attr">isDefault</span>: <span class="hljs-literal">true</span>,
      },
      {
        <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;2&#39;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;李四&#39;</span>,
        <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;1310000000&#39;</span>,
        <span class="hljs-attr">address</span>: <span class="hljs-string">&#39;浙江省杭州市拱墅区莫干山路 50 号&#39;</span>,
      },
    ];
    <span class="hljs-keyword">const</span> disabledList = [
      {
        <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;3&#39;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;王五&#39;</span>,
        <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;1320000000&#39;</span>,
        <span class="hljs-attr">address</span>: <span class="hljs-string">&#39;浙江省杭州市滨江区江南大道 15 号&#39;</span>,
      },
    ];

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onAdd</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;新增地址&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onEdit</span> = (<span class="hljs-params">item, index</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;编辑地址:&#39;</span> + index);

    <span class="hljs-keyword">return</span> {
      list,
      onAdd,
      onEdit,
      disabledList,
      chosenAddressId,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前选中地址的 id</td><td><em>number | string</em></td><td>-</td></tr><tr><td>list</td><td>地址列表</td><td><em>AddressListAddress[]</em></td><td><code>[]</code></td></tr><tr><td>disabled-list</td><td>不可配送地址列表</td><td><em>AddressListAddress[]</em></td><td><code>[]</code></td></tr><tr><td>disabled-text</td><td>不可配送提示文案</td><td><em>string</em></td><td>-</td></tr><tr><td>switchable</td><td>是否允许切换地址</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-add-button</td><td>是否显示底部按钮</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>add-button-text</td><td>底部按钮文字</td><td><em>string</em></td><td><code>新增地址</code></td></tr><tr><td>default-tag-text</td><td>默认地址标签文字</td><td><em>string</em></td><td>-</td></tr><tr><td>right-icon <code>v4.5.0</code></td><td>右侧图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td><td><em>string</em></td><td><code>edit</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>add</td><td>点击新增按钮时触发</td><td>-</td></tr><tr><td>edit</td><td>点击编辑按钮时触发</td><td><em>item: AddressListAddress, index: number</em></td></tr><tr><td>select</td><td>切换选中的地址时触发</td><td><em>item: AddressListAddress, index: number</em></td></tr><tr><td>edit-disabled</td><td>编辑不可配送的地址时触发</td><td><em>item: AddressListAddress, index: number</em></td></tr><tr><td>select-disabled</td><td>选中不可配送的地址时触发</td><td><em>item: AddressListAddress, index: number</em></td></tr><tr><td>click-item</td><td>点击任意地址时触发</td><td><em>item: AddressListAddress, index: number</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="addresslistaddress-shu-ju-jie-gou" tabindex="-1">AddressListAddress 数据结构</h3><table><thead><tr><th>键名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>id</td><td>每条地址的唯一标识</td><td><em>number | string</em></td></tr><tr><td>name</td><td>姓名</td><td><em>string</em></td></tr><tr><td>tel</td><td>手机号</td><td><em>number | string</em></td></tr><tr><td>address</td><td>详细地址</td><td><em>string</em></td></tr><tr><td>isDefault</td><td>是否为默认地址</td><td><em>boolean</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>default</td><td>在列表下方插入内容</td><td>-</td></tr><tr><td>top</td><td>在顶部插入内容</td><td>-</td></tr><tr><td>item-bottom</td><td>在列表项底部插入内容</td><td><em>item: AddressListAddress</em></td></tr><tr><td>tag</td><td>自定义列表项标签内容</td><td><em>item: AddressListAddress</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">AddressListProps</span>, <span class="hljs-title class_">AddressListAddress</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-address-list-padding</td><td><em>var(--van-padding-sm) var(--van-padding-sm) 80px</em></td><td>-</td></tr><tr><td>--van-address-list-disabled-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-address-list-disabled-text-padding</td><td><em>var(--van-padding-base) * 5 0 var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-address-list-disabled-text-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-address-list-disabled-text-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-address-list-add-button-z-index</td><td><em>999</em></td><td>-</td></tr><tr><td>--van-address-list-item-padding</td><td><em>var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-address-list-item-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-address-list-item-disabled-text-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-address-list-item-font-size</td><td><em>13px</em></td><td>-</td></tr><tr><td>--van-address-list-item-line-height</td><td><em>var(--van-line-height-sm)</em></td><td>-</td></tr><tr><td>--van-address-list-radio-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-address-list-edit-icon-size</td><td><em>20px</em></td><td>-</td></tr></tbody></table></div>`,13),l=[r];function i(p,c){return t(),d("div",e,l)}const m=s(n,[["render",i]]);export{m as default};

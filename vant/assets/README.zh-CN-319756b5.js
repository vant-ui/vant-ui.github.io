import{_ as t}from"./locales-be796722.js";import{o as s,a as d,z as a}from"./vue-libs-19c20d28.js";const e={},n={class:"van-doc-markdown-body"},r=a(`<h1>AddressEdit 地址编辑</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>地址编辑组件，用于新建、更新、删除地址信息。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">AddressEdit</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">AddressEdit</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-address-edit</span>
  <span class="hljs-attr">:area-list</span>=<span class="hljs-string">&quot;areaList&quot;</span>
  <span class="hljs-attr">show-delete</span>
  <span class="hljs-attr">show-set-default</span>
  <span class="hljs-attr">show-search-result</span>
  <span class="hljs-attr">:search-result</span>=<span class="hljs-string">&quot;searchResult&quot;</span>
  <span class="hljs-attr">:area-columns-placeholder</span>=<span class="hljs-string">&quot;[&#39;请选择&#39;, &#39;请选择&#39;, &#39;请选择&#39;]&quot;</span>
  @<span class="hljs-attr">save</span>=<span class="hljs-string">&quot;onSave&quot;</span>
  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>
  @<span class="hljs-attr">change-detail</span>=<span class="hljs-string">&quot;onChangeDetail&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> searchResult = <span class="hljs-title function_">ref</span>([]);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSave</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;save&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onDelete</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;delete&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChangeDetail</span> = (<span class="hljs-params">val</span>) =&gt; {
      <span class="hljs-keyword">if</span> (val) {
        searchResult.<span class="hljs-property">value</span> = [
          {
            <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;黄龙万科中心&#39;</span>,
            <span class="hljs-attr">address</span>: <span class="hljs-string">&#39;杭州市西湖区&#39;</span>,
          },
        ];
      } <span class="hljs-keyword">else</span> {
        searchResult.<span class="hljs-property">value</span> = [];
      }
    };

    <span class="hljs-keyword">return</span> {
      onSave,
      onDelete,
      areaList,
      searchResult,
      onChangeDetail,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>area-list</td><td>地区列表</td><td><em>object</em></td><td>-</td></tr><tr><td>area-columns-placeholder</td><td>地区选择列占位提示文字</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td>area-placeholder</td><td>地区输入框占位提示文字</td><td><em>string</em></td><td><code>选择省 / 市 / 区</code></td></tr><tr><td>address-info</td><td>地址信息初始值</td><td><em>AddressEditInfo</em></td><td><code>{}</code></td></tr><tr><td>search-result</td><td>详细地址搜索结果</td><td><em>AddressEditSearchItem[]</em></td><td><code>[]</code></td></tr><tr><td>show-delete</td><td>是否显示删除按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-set-default</td><td>是否显示默认地址栏</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-search-result</td><td>是否显示搜索结果</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-area</td><td>是否显示地区</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-detail</td><td>是否显示详细地址</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>disable-area</td><td>是否禁用地区选择</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>save-button-text</td><td>保存按钮文字</td><td><em>string</em></td><td><code>保存</code></td></tr><tr><td>delete-button-text</td><td>删除按钮文字</td><td><em>string</em></td><td><code>删除</code></td></tr><tr><td>detail-rows</td><td>详细地址输入框行数</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>detail-maxlength</td><td>详细地址最大长度</td><td><em>number | string</em></td><td><code>200</code></td></tr><tr><td>is-saving</td><td>是否显示保存按钮加载动画</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>is-deleting</td><td>是否显示删除按钮加载动画</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>tel-validator</td><td>手机号格式校验函数</td><td><em>(val: string) =&gt; boolean</em></td><td>-</td></tr><tr><td>tel-maxlength</td><td>手机号最大长度</td><td><em>number | string</em></td><td>-</td></tr><tr><td>validator</td><td>自定义校验函数</td><td><em>(key: string, val: string) =&gt; string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>save</td><td>点击保存按钮时触发</td><td><em>info: AddressEditInfo</em></td></tr><tr><td>focus</td><td>输入框聚焦时触发</td><td><em>key: string</em></td></tr><tr><td>change <code>v4.7.0</code></td><td>仅 <code>name</code> 和 <code>tel</code> 输入框值改变触发</td><td><em>{key: string, value: string}</em></td></tr><tr><td>delete</td><td>确认删除地址时触发</td><td><em>info: AddressEditInfo</em></td></tr><tr><td>select-search</td><td>选中搜索结果时触发</td><td><em>value: string</em></td></tr><tr><td>click-area</td><td>点击收件地区时触发</td><td>-</td></tr><tr><td>change-area</td><td>修改收件地区时触发</td><td><em>selectedOptions: PickerOption[]</em></td></tr><tr><td>change-detail</td><td>修改详细地址时触发</td><td><em>value: string</em></td></tr><tr><td>change-default</td><td>切换是否使用默认地址时触发</td><td><em>checked: boolean</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>在邮政编码下方插入内容</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">方法</h3><p>通过 ref 可以获取到 AddressEdit 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>setAddressDetail</td><td>设置详细地址</td><td><em>addressDetail: string</em></td><td>-</td></tr><tr><td>setAreaCode</td><td>设置地区编号</td><td><em>code: string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">AddressEditInfo</span>,
  <span class="hljs-title class_">AddressEditProps</span>,
  <span class="hljs-title class_">AddressEditInstance</span>,
  <span class="hljs-title class_">AddressEditSearchItem</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>AddressEditInstance</code> 是组件实例的类型，用法如下：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">AddressEditInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> addressEditRef = ref&lt;<span class="hljs-title class_">AddressEditInstance</span>&gt;();

addressEditRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">setAddressDetail</span>(<span class="hljs-string">&#39;&#39;</span>);
</code></pre></div><div class="van-doc-card"><h3 id="addresseditinfo-shu-ju-ge-shi" tabindex="-1">AddressEditInfo 数据格式</h3><p>注意：<code>AddressEditInfo</code> 仅作为初始值传入，表单最终内容可以在 save 事件中获取。</p><table><thead><tr><th>key</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>name</td><td>姓名</td><td><em>string</em></td></tr><tr><td>tel</td><td>手机号</td><td><em>string</em></td></tr><tr><td>province</td><td>省份</td><td><em>string</em></td></tr><tr><td>city</td><td>城市</td><td><em>string</em></td></tr><tr><td>county</td><td>区县</td><td><em>string</em></td></tr><tr><td>addressDetail</td><td>详细地址</td><td><em>string</em></td></tr><tr><td>areaCode</td><td>地区编码，通过 <a href="#/zh-CN/area" target="_blank">省市区选择</a> 获取（必填）</td><td><em>string</em></td></tr><tr><td>isDefault</td><td>是否为默认地址</td><td><em>boolean</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="addresseditsearchitem-shu-ju-ge-shi" tabindex="-1">AddressEditSearchItem 数据格式</h3><table><thead><tr><th>key</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>name</td><td>地名</td><td><em>string</em></td></tr><tr><td>address</td><td>详细地址</td><td><em>string</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="sheng-shi-xian-lie-biao-shu-ju-ge-shi" tabindex="-1">省市县列表数据格式</h3><p>请参考 <a href="#/zh-CN/area" target="_blank">Area 省市区选择</a> 组件。</p></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-address-edit-padding</td><td><em>var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-address-edit-buttons-padding</td><td><em>var(--van-padding-xl) var(--van-padding-base)</em></td><td>-</td></tr><tr><td>--van-address-edit-button-margin-bottom</td><td><em>var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-address-edit-button-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr></tbody></table></div>`,16),l=[r];function c(o,i){return s(),d("div",n,l)}const m=t(e,[["render",c]]);export{m as default};

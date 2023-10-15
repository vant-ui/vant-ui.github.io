import{_ as s}from"./locales-be796722.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const e={},d={class:"van-doc-markdown-body"},l=n(`<h1>Area 省市区选择</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>省市区三级联动选择，通常与<a href="#/zh-CN/popup" target="_blank">弹出层</a>组件配合使用。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Area</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Area</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>初始化省市区组件时，需要通过 <code>area-list</code> 属性传入省市区数据。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-area</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span> <span class="hljs-attr">:area-list</span>=<span class="hljs-string">&quot;areaList&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="arealist-ge-shi" tabindex="-1">areaList 格式</h3><p>areaList 为对象结构，包含 <code>province_list</code>、<code>city_list</code>、<code>county_list</code> 三个 key。</p><p>每项以地区码作为 key，省市区名字作为 value。地区码为 6 位数字，前两位代表省份，中间两位代表城市，后两位代表区县，以 0 补足 6 位。比如北京的地区码为 <code>11</code>，以 0 补足 6 位，为 <code>110000</code>。</p><p>示例数据如下：</p><pre><code class="language-js"><span class="hljs-keyword">const</span> areaList = {
  <span class="hljs-attr">province_list</span>: {
    <span class="hljs-number">110000</span>: <span class="hljs-string">&#39;北京市&#39;</span>,
    <span class="hljs-number">120000</span>: <span class="hljs-string">&#39;天津市&#39;</span>,
  },
  <span class="hljs-attr">city_list</span>: {
    <span class="hljs-number">110100</span>: <span class="hljs-string">&#39;北京市&#39;</span>,
    <span class="hljs-number">120100</span>: <span class="hljs-string">&#39;天津市&#39;</span>,
  },
  <span class="hljs-attr">county_list</span>: {
    <span class="hljs-number">110101</span>: <span class="hljs-string">&#39;东城区&#39;</span>,
    <span class="hljs-number">110102</span>: <span class="hljs-string">&#39;西城区&#39;</span>,
    <span class="hljs-comment">// ....</span>
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zhong-guo-sheng-shi-qu-shu-ju" tabindex="-1">中国省市区数据</h3><p>Vant 提供了一份中国省市区数据，你可以安装 <a href="https://github.com/vant-ui/vant/tree/main/packages/vant-area-data" target="_blank">@vant/area-data</a> npm 包来引入：</p><pre><code class="language-bash"><span class="hljs-comment"># 通过 npm</span>
npm i @vant/area-data

<span class="hljs-comment"># 通过 yarn</span>
yarn add @vant/area-data

<span class="hljs-comment"># 通过 pnpm</span>
pnpm add @vant/area-data

<span class="hljs-comment"># 通过 Bun</span>
bun add @vant/area-data
</code></pre><pre><code class="language-ts"><span class="hljs-keyword">import</span> { areaList } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/area-data&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> { areaList };
  },
};
</code></pre><blockquote><p>Tips: 中国的行政区划每年都会有变动，如果发现省市区数据未及时更新，欢迎提 Pull Request 帮助我们更新。你可以在<a href="http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/" target="_blank">「国家统计局 - 全国区划代码」</a> 和<a href="https://www.mca.gov.cn/article/sj/xzqh/1980/" target="_blank">「民政部 - 行政区划代码」</a>上查询到最新数据，请根据官方数据进行核实。</p></blockquote></div><div class="van-doc-card"><h3 id="kong-zhi-xuan-zhong-xiang" tabindex="-1">控制选中项</h3><p>通过 <code>v-model</code> 绑定当前选中的地区码。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-area</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span> <span class="hljs-attr">:area-list</span>=<span class="hljs-string">&quot;areaList&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;330302&#39;</span>);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="pei-zhi-xian-shi-lie" tabindex="-1">配置显示列</h3><p>可以通过 <code>columns-num</code> 属性配置省市区显示的列数，默认情况下会显示省市区，当你设置为 <code>2</code>，则只会显示省市选择。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-area</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span> <span class="hljs-attr">:area-list</span>=<span class="hljs-string">&quot;areaList&quot;</span> <span class="hljs-attr">:columns-num</span>=<span class="hljs-string">&quot;2&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="pei-zhi-lie-zhan-wei-ti-shi-wen-zi" tabindex="-1">配置列占位提示文字</h3><p>可以通过 <code>columns-placeholder</code> 属性配置每一列的占位提示文字。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-area</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span>
  <span class="hljs-attr">:area-list</span>=<span class="hljs-string">&quot;areaList&quot;</span>
  <span class="hljs-attr">:columns-placeholder</span>=<span class="hljs-string">&quot;[&#39;请选择&#39;, &#39;请选择&#39;, &#39;请选择&#39;]&quot;</span>
/&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前选中项对应的地区码</td><td><em>string</em></td><td>-</td></tr><tr><td>title</td><td>顶部栏标题</td><td><em>string</em></td><td>-</td></tr><tr><td>confirm-button-text</td><td>确认按钮文字</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td>cancel-button-text</td><td>取消按钮文字</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td>area-list</td><td>省市区数据，格式见下方</td><td><em>object</em></td><td>-</td></tr><tr><td>columns-placeholder</td><td>列占位提示文字</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td>loading</td><td>是否显示加载状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly</td><td>是否为只读状态，只读状态下无法切换选项</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>option-height</td><td>选项高度，支持 <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> 单位，默认 <code>px</code></td><td><em>number | string</em></td><td><code>44</code></td></tr><tr><td>columns-num</td><td>显示列数，3-省市区，2-省市，1-省</td><td><em>number | string</em></td><td><code>3</code></td></tr><tr><td>visible-option-num</td><td>可见的选项个数</td><td><em>number | string</em></td><td><code>6</code></td></tr><tr><td>swipe-duration</td><td>快速滑动时惯性滚动的时长，单位 <code>ms</code></td><td><em>number | string</em></td><td><code>1000</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>confirm</td><td>点击完成按钮时触发</td><td><em>{ selectedValues, selectedOptions, selectedIndexes }</em></td></tr><tr><td>cancel</td><td>点击取消按钮时触发</td><td><em>{ selectedValues, selectedOptions, selectedIndexes }</em></td></tr><tr><td>change</td><td>选项改变时触发</td><td><em>{ selectedValues, selectedOptions, selectedIndexes, columnIndex }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>toolbar</td><td>自定义整个顶部栏的内容</td><td>-</td></tr><tr><td>title</td><td>自定义标题内容</td><td>-</td></tr><tr><td>confirm</td><td>自定义确认按钮内容</td><td>-</td></tr><tr><td>cancel</td><td>自定义取消按钮内容</td><td>-</td></tr><tr><td>columns-top</td><td>自定义选项上方内容</td><td>-</td></tr><tr><td>columns-bottom</td><td>自定义选项下方内容</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">方法</h3><p>通过 ref 可以获取到 Area 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>confirm</td><td>停止惯性滚动并触发 <code>confirm</code> 事件</td><td>-</td><td>-</td></tr><tr><td>getSelectedOptions</td><td>获取当前选中的选项</td><td>-</td><td><em>PickerOption[]</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">AreaProps</span>, <span class="hljs-title class_">AreaList</span>, <span class="hljs-title class_">AreaInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>AreaInstance</code> 是组件实例的类型，用法如下：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">AreaInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> areaRef = ref&lt;<span class="hljs-title class_">AreaInstance</span>&gt;();

areaRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">confirm</span>();
</code></pre></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="zai-zhuo-mian-duan-wu-fa-cao-zuo-zu-jian" tabindex="-1">在桌面端无法操作组件？</h3><p>参见<a href="#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei" target="_blank">桌面端适配</a>。</p></div>`,18),c=[l];function p(r,o){return a(),t("div",d,c)}const m=s(e,[["render",p]]);export{m as default};

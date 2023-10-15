import{_ as s}from"./locales-be796722.js";import{o as t,a,z as e}from"./vue-libs-19c20d28.js";const n={},d={class:"van-doc-markdown-body"},l=e(`<h1>Area</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>A three-level linkage selection of provinces and cities, usually used in conjunction with <a href="#/en-US/popup" target="_blank">Popup</a> component.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Area</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Area</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><p>To initialize <code>Area</code> component, <code>area-list</code> property is required.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-area</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">:area-list</span>=<span class="hljs-string">&quot;areaList&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="arealist-data-structure" tabindex="-1">areaList Data Structure</h3><p>An object contains three properties: <code>province_list</code>, <code>city_list</code> and <code>county_list</code>. Each property is a simple key-value object, key is a 6-bit code of the area of which first two bits stand for the province or state, middle two bits are used as city code and the last two are district code, value is the name of the area. If the code stands for an area that has sub-areas, lower bits of it will be filled with 0.</p><p>Sample data:</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">province_list</span>: {
    <span class="hljs-number">110000</span>: <span class="hljs-string">&#39;Beijing&#39;</span>,
    <span class="hljs-number">330000</span>: <span class="hljs-string">&#39;Zhejiang Province&#39;</span>,
  },
  <span class="hljs-attr">city_list</span>: {
    <span class="hljs-number">110100</span>: <span class="hljs-string">&#39;Beijing City&#39;</span>,
    <span class="hljs-number">330100</span>: <span class="hljs-string">&#39;Hangzhou&#39;</span>,
  },
  <span class="hljs-attr">county_list</span>: {
    <span class="hljs-number">110101</span>: <span class="hljs-string">&#39;Dongcheng District&#39;</span>,
    <span class="hljs-number">110102</span>: <span class="hljs-string">&#39;Xicheng District&#39;</span>,
    <span class="hljs-comment">// ....</span>
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="china-area-data" tabindex="-1">China Area Data</h3><p>Vant officially provides a default china area data, which can be imported through <a href="https://github.com/vant-ui/vant/tree/main/packages/vant-area-data" target="_blank">@vant/area-data</a>:</p><pre><code class="language-bash"><span class="hljs-comment"># with npm</span>
npm i @vant/area-data

<span class="hljs-comment"># with yarn</span>
yarn add @vant/area-data

<span class="hljs-comment"># with pnpm</span>
pnpm add @vant/area-data

<span class="hljs-comment"># with Bun</span>
bun add @vant/area-data
</code></pre><pre><code class="language-ts"><span class="hljs-keyword">import</span> { areaList } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/area-data&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> { areaList };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="model-value" tabindex="-1">Model Value</h3><p>Bind the currently selected area code via <code>v-model</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-area</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">:area-list</span>=<span class="hljs-string">&quot;areaList&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;330302&#39;</span>);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="columns-number" tabindex="-1">Columns Number</h3><p><code>columns-num</code> property is used to config number of columns to be displayed. This component has 3 columns corresponding to a 3 level picker by default. Set <code>columns-num</code> with 2, you&#39;ll have a 2 level picker.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-area</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">:area-list</span>=<span class="hljs-string">&quot;areaList&quot;</span> <span class="hljs-attr">:columns-num</span>=<span class="hljs-string">&quot;2&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="columns-placeholder" tabindex="-1">Columns Placeholder</h3><p><code>columns-placeholder</code> property is used to config placeholder of columns.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-area</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>
  <span class="hljs-attr">:area-list</span>=<span class="hljs-string">&quot;areaList&quot;</span>
  <span class="hljs-attr">:columns-placeholder</span>=<span class="hljs-string">&quot;[&#39;Choose&#39;, &#39;Choose&#39;, &#39;Choose&#39;]&quot;</span>
/&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>the <code>code</code> of selected area</td><td><em>string</em></td><td>-</td></tr><tr><td>title</td><td>Toolbar title</td><td><em>string</em></td><td>-</td></tr><tr><td>confirm-button-text</td><td>Text of confirm button</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td>cancel-button-text</td><td>Text of cancel button</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td>area-list</td><td>Area list data</td><td><em>object</em></td><td>-</td></tr><tr><td>columns-placeholder</td><td>Placeholder of columns</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td>loading</td><td>Whether to show loading prompt</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly</td><td>Whether to be readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>option-height</td><td>Option height, supports <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> unit, default <code>px</code></td><td><em>number | string</em></td><td><code>44</code></td></tr><tr><td>columns-num</td><td>Level of picker</td><td><em>number | string</em></td><td><code>3</code></td></tr><tr><td>visible-option-num</td><td>Count of visible columns</td><td><em>number | string</em></td><td><code>6</code></td></tr><tr><td>swipe-duration</td><td>Duration of the momentum animation, unit <code>ms</code></td><td><em>number | string</em></td><td><code>1000</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>confirm</td><td>Emitted when the confirm button is clicked</td><td><em>{ selectedValues, selectedOptions, selectedIndexes }</em></td></tr><tr><td>cancel</td><td>Emitted when the cancel button is clicked</td><td><em>{ selectedValues, selectedOptions, selectedIndexes }</em></td></tr><tr><td>change</td><td>Emitted when current option is changed</td><td><em>{ selectedValues, selectedOptions, selectedIndexes, columnIndex }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td>toolbar <code>3.1.2</code></td><td>Custom toolbar content</td><td>-</td></tr><tr><td>title</td><td>Custom title</td><td>-</td></tr><tr><td>confirm <code>3.1.2</code></td><td>Custom confirm button text</td><td>-</td></tr><tr><td>cancel <code>3.1.2</code></td><td>Custom cancel button text</td><td>-</td></tr><tr><td>columns-top</td><td>Custom content above columns</td><td>-</td></tr><tr><td>columns-bottom</td><td>Custom content below columns</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3><p>Use <a href="https://vuejs.org/guide/essentials/template-refs.html" target="_blank">ref</a> to get Area instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>confirm</td><td>Stop scrolling and emit confirm event</td><td>-</td><td>-</td></tr><tr><td>getSelectedOptions</td><td>Get current selected options</td><td>-</td><td><em>PickerOption[]</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">AreaProps</span>, <span class="hljs-title class_">AreaList</span>, <span class="hljs-title class_">AreaInstance</span>, <span class="hljs-title class_">AreaColumnOption</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>AreaInstance</code> is the type of component instance:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">AreaInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> areaRef = ref&lt;<span class="hljs-title class_">AreaInstance</span>&gt;();

areaRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">confirm</span>();
</code></pre></div>`,16),o=[l];function c(r,p){return t(),a("div",d,o)}const m=s(n,[["render",c]]);export{m as default};

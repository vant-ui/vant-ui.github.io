import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as t}from"./vue-libs-19c20d28.js";const l={},p={class:"van-doc-markdown-body"},c=t(`<h1>Radio 单选框</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>在一组备选项中进行单选。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RadioGroup</span>, <span class="hljs-title class_">Radio</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Radio</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">RadioGroup</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>通过 <code>v-model</code> 绑定值当前选中项的 name。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>单选框 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>单选框 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;1&#39;</span>);
    <span class="hljs-keyword">return</span> { checked };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="shui-ping-pai-lie" tabindex="-1">水平排列</h3><p>将 <code>direction</code> 属性设置为 <code>horizontal</code> 后，单选框组会变成水平排列。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>单选框 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>单选框 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-zhuang-tai" tabindex="-1">禁用状态</h3><p>通过 <code>disabled</code> 属性禁止选项切换，在 <code>Radio</code> 上设置 <code>disabled</code> 可以禁用单个选项。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>单选框 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>单选框 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-xing-zhuang" tabindex="-1">自定义形状</h3><p><code>shape</code> 属性可选值为 <code>square</code> 和 <code>dot</code>，单选框形状分别对应方形和圆点形。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>单选框 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>单选框 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;dot&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>Radio 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>Radio 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yan-se" tabindex="-1">自定义颜色</h3><p>通过 <code>checked-color</code> 属性设置选中状态的图标颜色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">checked-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>&gt;</span>单选框 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">checked-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>&gt;</span>单选框 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-da-xiao" tabindex="-1">自定义大小</h3><p>通过 <code>icon-size</code> 属性可以自定义图标的大小。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">icon-size</span>=<span class="hljs-string">&quot;24px&quot;</span>&gt;</span>单选框 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">icon-size</span>=<span class="hljs-string">&quot;24px&quot;</span>&gt;</span>单选框 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-tu-biao" tabindex="-1">自定义图标</h3><p>通过 <code>icon</code> 插槽自定义图标，并通过 <code>slotProps</code> 判断是否为选中状态。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
    单选框 1
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;props&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;img-icon&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;props.checked ? activeIcon : inactiveIcon&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
    单选框 2
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;props&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;img-icon&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;props.checked ? activeIcon : inactiveIcon&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.img-icon</span> {
    <span class="hljs-attribute">height</span>: <span class="hljs-number">20px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;1&#39;</span>);
    <span class="hljs-keyword">return</span> {
      checked,
      <span class="hljs-attr">activeIcon</span>:
        <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png&#39;</span>,
      <span class="hljs-attr">inactiveIcon</span>:
        <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png&#39;</span>,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zuo-ce-wen-ben" tabindex="-1">左侧文本</h3><p>将 <code>label-position</code> 属性设置为 <code>&#39;left&#39;</code>，可以将文本位置调整到单选框左侧。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">label-position</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>单选框 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">label-position</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>单选框 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-wen-ben-dian-ji" tabindex="-1">禁用文本点击</h3><p>设置 <code>label-disabled</code> 属性后，点击图标以外的内容不会触发单选框切换。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">label-disabled</span>&gt;</span>单选框 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">label-disabled</span>&gt;</span>单选框 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="da-pei-dan-yuan-ge-zu-jian-shi-yong" tabindex="-1">搭配单元格组件使用</h3><p>搭配单元格组件使用时，需要再引入 <code>Cell</code> 和 <code>CellGroup</code> 组件。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单选框 1&quot;</span> <span class="hljs-attr">clickable</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;checked = &#39;1&#39;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单选框 2&quot;</span> <span class="hljs-attr">clickable</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;checked = &#39;2&#39;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="radio-props" tabindex="-1">Radio Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>标识符，通常为一个唯一的字符串或数字</td><td><em>any</em></td><td>-</td></tr><tr><td>shape</td><td>形状，可选值为 <code>square</code> <code>dot</code></td><td><em>string</em></td><td><code>round</code></td></tr><tr><td>disabled</td><td>是否为禁用状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>label-disabled</td><td>是否禁用文本内容点击</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>label-position</td><td>文本位置，可选值为 <code>left</code></td><td><em>string</em></td><td><code>right</code></td></tr><tr><td>icon-size</td><td>图标大小，默认单位为 <code>px</code></td><td><em>number | string</em></td><td><code>20px</code></td></tr><tr><td>checked-color</td><td>选中状态颜色</td><td><em>string</em></td><td><code>#1989fa</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="radiogroup-props" tabindex="-1">RadioGroup Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前选中项的标识符</td><td><em>any</em></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用所有单选框</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>direction</td><td>排列方向，可选值为 <code>horizontal</code></td><td><em>string</em></td><td><code>vertical</code></td></tr><tr><td>icon-size</td><td>所有单选框的图标大小，默认单位为 <code>px</code></td><td><em>number | string</em></td><td><code>20px</code></td></tr><tr><td>checked-color</td><td>所有单选框的选中状态颜色</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>shape <code>v4.6.3</code></td><td>形状，可选值为 <code>square</code> <code>dot</code></td><td><em>string</em></td><td><code>round</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="radio-events" tabindex="-1">Radio Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击单选框时触发</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="radiogroup-events" tabindex="-1">RadioGroup Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>当绑定值变化时触发的事件</td><td><em>name: string</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="radio-slots" tabindex="-1">Radio Slots</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>default</td><td>自定义文本</td><td>-</td></tr><tr><td>icon</td><td>自定义图标</td><td><em>{ checked: boolean, disabled: boolean }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">RadioProps</span>,
  <span class="hljs-title class_">RadioShape</span>,
  <span class="hljs-title class_">RadioGroupProps</span>,
  <span class="hljs-title class_">RadioLabelPosition</span>,
  <span class="hljs-title class_">RadioGroupDirection</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-radio-size</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-radio-dot-size</td><td><em>8px</em></td><td>圆点到边界的距离</td></tr><tr><td>--van-radio-border-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-radio-duration</td><td><em>var(--van-duration-fast)</em></td><td>-</td></tr><tr><td>--van-radio-label-margin</td><td><em>var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-radio-label-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-radio-checked-icon-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-radio-disabled-icon-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-radio-disabled-label-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-radio-disabled-background</td><td><em>var(--van-border-color)</em></td><td>-</td></tr></tbody></table></div>`,23),d=[c];function e(o,h){return a(),n("div",p,d)}const j=s(l,[["render",e]]);export{j as default};

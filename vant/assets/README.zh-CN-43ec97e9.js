import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as t}from"./vue-libs-19c20d28.js";const l={},e={class:"van-doc-markdown-body"},d=t(`<h1>Slider 滑块</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>滑动输入条，用于在给定的范围内选择一个值。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Slider</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Slider</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">50</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">value</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;当前值：&#39;</span> + value);
    <span class="hljs-keyword">return</span> {
      value,
      onChange,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="shuang-hua-kuai" tabindex="-1">双滑块</h3><p>添加 <code>range</code> 属性就可以开启双滑块模式，确保 <code>value</code> 的值是一个数组。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">range</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-comment">// 双滑块模式时，值必须是数组</span>
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>([<span class="hljs-number">10</span>, <span class="hljs-number">50</span>]);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">value</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;当前值：&#39;</span> + value);
    <span class="hljs-keyword">return</span> {
      value,
      onChange,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zhi-ding-xuan-ze-fan-wei" tabindex="-1">指定选择范围</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;-50&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;50&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong" tabindex="-1">禁用</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zhi-ding-bu-chang" tabindex="-1">指定步长</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:step</span>=<span class="hljs-string">&quot;10&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yang-shi" tabindex="-1">自定义样式</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">bar-height</span>=<span class="hljs-string">&quot;4px&quot;</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-an-niu" tabindex="-1">自定义按钮</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-button&quot;</span>&gt;</span>{{ value }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-slider</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.custom-button</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">26px</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">18px</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">var</span>(--van-primary-color);
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">100px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="chui-zhi-fang-xiang" tabindex="-1">垂直方向</h3><p>设置 <code>vertical</code> 属性后，滑块会垂直展示，且高度为 100% 父元素高度。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;150px&#39; }&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">vertical</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>
    <span class="hljs-attr">range</span>
    <span class="hljs-attr">vertical</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-left: 100px;&quot;</span>
    @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">50</span>);
    <span class="hljs-keyword">const</span> value2 = <span class="hljs-title function_">ref</span>([<span class="hljs-number">10</span>, <span class="hljs-number">50</span>]);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">value</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;当前值：&#39;</span> + value);
    <span class="hljs-keyword">return</span> {
      value,
      value2,
      onChange,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前进度百分比，在双滑块模式下为数组格式</td><td><em>number | [number, number]</em></td><td><code>0</code></td></tr><tr><td>max</td><td>最大值</td><td><em>number | string</em></td><td><code>100</code></td></tr><tr><td>min</td><td>最小值</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>step</td><td>步长</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>bar-height</td><td>进度条高度，默认单位为 <code>px</code></td><td><em>number | string</em></td><td><code>2px</code></td></tr><tr><td>button-size</td><td>滑块按钮大小，默认单位为 <code>px</code></td><td><em>number | string</em></td><td><code>24px</code></td></tr><tr><td>active-color</td><td>进度条激活态颜色</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>inactive-color</td><td>进度条非激活态颜色</td><td><em>string</em></td><td><code>#e5e5e5</code></td></tr><tr><td>range</td><td>是否开启双滑块模式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>reverse</td><td>是否将进度条反转</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用滑块</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly</td><td>是否为只读状态，只读状态下无法修改滑块的值</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>vertical</td><td>是否垂直展示</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:model-value</td><td>进度变化时实时触发</td><td><em>value: number</em></td></tr><tr><td>change</td><td>进度变化且结束拖动后触发</td><td><em>value: number</em></td></tr><tr><td>drag-start</td><td>开始拖动时触发</td><td><em>event: TouchEvent</em></td></tr><tr><td>drag-end</td><td>结束拖动时触发</td><td><em>event: TouchEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>button</td><td>自定义滑块按钮</td><td><em>{ value: number, dragging: boolean }</em></td></tr><tr><td>left-button</td><td>自定义左侧滑块按钮（双滑块模式下）</td><td><em>{ value: number, dragging: boolean, dragIndex?: number }</em></td></tr><tr><td>right-button</td><td>自定义右侧滑块按钮（双滑块模式下）</td><td><em>{ value: number, dragging: boolean, dragIndex?: number }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SliderProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-slider-active-background</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-slider-inactive-background</td><td><em>var(--van-gray-3)</em></td><td>-</td></tr><tr><td>--van-slider-disabled-opacity</td><td><em>var(--van-disabled-opacity)</em></td><td>-</td></tr><tr><td>--van-slider-bar-height</td><td><em>2px</em></td><td>-</td></tr><tr><td>--van-slider-button-width</td><td><em>24px</em></td><td>-</td></tr><tr><td>--van-slider-button-height</td><td><em>24px</em></td><td>-</td></tr><tr><td>--van-slider-button-radius</td><td><em>50%</em></td><td>-</td></tr><tr><td>--van-slider-button-background</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-slider-button-shadow</td><td><em>0 1px 2px rgba(0, 0, 0, 0.5)</em></td><td>-</td></tr></tbody></table></div>`,19),p=[d];function c(r,o){return a(),n("div",e,p)}const u=s(l,[["render",c]]);export{u as default};

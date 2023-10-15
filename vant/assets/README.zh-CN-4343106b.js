import{_ as s}from"./locales-be796722.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const l={},e={class:"van-doc-markdown-body"},d=n(`<h1>Switch 开关</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于在打开和关闭状态之间进行切换。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Switch</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Switch</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>通过 <code>v-model</code> 绑定开关的选中状态，<code>true</code> 表示开，<code>false</code> 表示关。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">return</span> { checked };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-zhuang-tai" tabindex="-1">禁用状态</h3><p>通过 <code>disabled</code> 属性来禁用开关，禁用状态下开关不可点击。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jia-zai-zhuang-tai" tabindex="-1">加载状态</h3><p>通过 <code>loading</code> 属性设置开关为加载状态，加载状态下开关不可点击。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">loading</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-da-xiao" tabindex="-1">自定义大小</h3><p>通过 <code>size</code> 属性自定义开关的大小。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;22px&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yan-se" tabindex="-1">自定义颜色</h3><p><code>active-color</code> 属性表示打开时的背景色，<code>inactive-color</code> 表示关闭时的背景色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span> <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;#dcdee0&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-an-niu" tabindex="-1">自定义按钮</h3><p>通过 <code>node</code> 插槽自定义按钮的内容。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">node</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon-wrapper&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;checked ? &#39;success&#39; : &#39;cross&#39;&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-switch</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.icon-wrapper</span> {
    <span class="hljs-attribute">display</span>: flex;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute">justify-content</span>: center;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">18px</span>;
  }

  <span class="hljs-selector-class">.icon-wrapper</span> <span class="hljs-selector-class">.van-icon-success</span> {
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">32px</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--van-blue);
  }

  <span class="hljs-selector-class">.icon-wrapper</span> <span class="hljs-selector-class">.van-icon-cross</span> {
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">32px</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--van-gray-<span class="hljs-number">5</span>);
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="yi-bu-kong-zhi" tabindex="-1">异步控制</h3><p>需要异步控制开关时，可以使用 <code>modelValue</code> 属性和 <code>update:model-value</code> 事件代替 <code>v-model</code>，并在事件回调函数中手动处理开关状态。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">:model-value</span>=<span class="hljs-string">&quot;checked&quot;</span> @<span class="hljs-attr">update:model-value</span>=<span class="hljs-string">&quot;onUpdateValue&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showConfirmDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onUpdateValue</span> = (<span class="hljs-params">newValue</span>) =&gt; {
      <span class="hljs-title function_">showConfirmDialog</span>({
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;提醒&#39;</span>,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;是否切换开关？&#39;</span>,
      }).<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {
        checked.<span class="hljs-property">value</span> = newValue;
      });
    };

    <span class="hljs-keyword">return</span> {
      checked,
      onUpdateValue,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="da-pei-dan-yuan-ge-shi-yong" tabindex="-1">搭配单元格使用</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">center</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>开关选中状态</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td>loading</td><td>是否为加载状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否为禁用状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>size</td><td>开关按钮的尺寸，默认单位为 <code>px</code></td><td><em>number | string</em></td><td><code>26px</code></td></tr><tr><td>active-color</td><td>打开时的背景色</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>inactive-color</td><td>关闭时的背景色</td><td><em>string</em></td><td><code>rgba(120, 120, 128, 0.16)</code></td></tr><tr><td>active-value</td><td>打开时对应的值</td><td><em>any</em></td><td><code>true</code></td></tr><tr><td>inactive-value</td><td>关闭时对应的值</td><td><em>any</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>开关状态切换时触发</td><td><em>value: any</em></td></tr><tr><td>click</td><td>点击时触发</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>node</td><td>自定义按钮的内容</td><td>-</td></tr><tr><td>background</td><td>自定义开关的背景内容</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SwitchProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-switch-size</td><td><em>26px</em></td><td>-</td></tr><tr><td>--van-switch-width</td><td><em>calc(1.8em + 4px)</em></td><td>-</td></tr><tr><td>--van-switch-height</td><td><em>calc(1em + 4px)</em></td><td>-</td></tr><tr><td>--van-switch-node-size</td><td><em>1em</em></td><td>-</td></tr><tr><td>--van-switch-node-background</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-switch-node-shadow</td><td><em>0 3px 1px 0 rgba(0, 0, 0, 0.05)</em></td><td>-</td></tr><tr><td>--van-switch-background</td><td><em>rgba(120, 120, 128, 0.16)</em></td><td>-</td></tr><tr><td>--van-switch-on-background</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-switch-duration</td><td><em>var(--van-duration-base)</em></td><td>-</td></tr><tr><td>--van-switch-disabled-opacity</td><td><em>var(--van-disabled-opacity)</em></td><td>-</td></tr></tbody></table></div>`,19),c=[d];function p(h,o){return a(),t("div",e,c)}const j=s(l,[["render",p]]);export{j as default};

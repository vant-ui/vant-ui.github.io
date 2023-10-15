import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as t}from"./vue-libs-19c20d28.js";const e={},d={class:"van-doc-markdown-body"},l=t(`<h1>Rate 评分</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于对事物进行评级操作。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Rate</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Rate</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>通过 <code>v-model</code> 来绑定当前评分值。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">3</span>);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-tu-biao" tabindex="-1">自定义图标</h3><p>通过 <code>icon</code> 属性设置选中时的图标，<code>void-icon</code> 属性设置未选中时的图标。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;like&quot;</span> <span class="hljs-attr">void-icon</span>=<span class="hljs-string">&quot;like-o&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yang-shi" tabindex="-1">自定义样式</h3><p>通过 <code>size</code> 属性设置图标大小，<code>color</code> 属性设置选中时的颜色，<code>void-color</code> 设置未选中时的颜色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;25&quot;</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ffd21e&quot;</span>
  <span class="hljs-attr">void-icon</span>=<span class="hljs-string">&quot;star&quot;</span>
  <span class="hljs-attr">void-color</span>=<span class="hljs-string">&quot;#eee&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="ban-xing" tabindex="-1">半星</h3><p>设置 <code>allow-half</code> 属性后可以选中半星。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">allow-half</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">2.5</span>);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-shu-liang" tabindex="-1">自定义数量</h3><p>通过 <code>count</code> 属性设置评分总数。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:count</span>=<span class="hljs-string">&quot;6&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="ke-qing-kong" tabindex="-1">可清空</h3><p>当 <code>clearable</code> 属性设置为 <code>true</code>，再次点击相同的值时，可以将值重置为 <code>0</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">clearable</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-zhuang-tai" tabindex="-1">禁用状态</h3><p>通过 <code>disabled</code> 属性来禁用评分。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zhi-du-zhuang-tai" tabindex="-1">只读状态</h3><p>通过 <code>readonly</code> 属性将评分设置为只读状态。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">readonly</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zhi-du-zhuang-tai-xian-shi-xiao-shu" tabindex="-1">只读状态显示小数</h3><p>设置 <code>readonly</code> 和 <code>allow-half</code> 属性后，Rate 组件可以展示任意小数结果。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">readonly</span> <span class="hljs-attr">allow-half</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">3.3</span>);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="jian-ting-change-shi-jian" tabindex="-1">监听 change 事件</h3><p>评分变化时，会触发 <code>change</code> 事件。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">3</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">value</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;当前值：&#39;</span> + value);
    <span class="hljs-keyword">return</span> {
      value,
      onChange,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前分值</td><td><em>number</em></td><td>-</td></tr><tr><td>count</td><td>图标总数</td><td><em>number | string</em></td><td><code>5</code></td></tr><tr><td>size</td><td>图标大小，默认单位为<code>px</code></td><td><em>number | string</em></td><td><code>20px</code></td></tr><tr><td>gutter</td><td>图标间距，默认单位为<code>px</code></td><td><em>number | string</em></td><td><code>4px</code></td></tr><tr><td>color</td><td>选中时的颜色</td><td><em>string</em></td><td><code>#ee0a24</code></td></tr><tr><td>void-color</td><td>未选中时的颜色</td><td><em>string</em></td><td><code>#c8c9cc</code></td></tr><tr><td>disabled-color</td><td>禁用时的颜色</td><td><em>string</em></td><td><code>#c8c9cc</code></td></tr><tr><td>icon</td><td>选中时的图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td><td><em>string</em></td><td><code>star</code></td></tr><tr><td>void-icon</td><td>未选中时的图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td><td><em>string</em></td><td><code>star-o</code></td></tr><tr><td>icon-prefix</td><td>图标类名前缀，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">class-prefix 属性</a></td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>allow-half</td><td>是否允许半选</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>clearable <code>v4.6.0</code></td><td>是否允许再次点击后清除</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly</td><td>是否为只读状态，只读状态下无法修改评分</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用评分</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>touchable</td><td>是否可以通过滑动手势选择评分</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>当前分值变化时触发的事件</td><td><em>currentValue: number</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">RateProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-rate-icon-size</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-rate-icon-gutter</td><td><em>var(--van-padding-base)</em></td><td>-</td></tr><tr><td>--van-rate-icon-void-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-rate-icon-full-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-rate-icon-disabled-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr></tbody></table></div>`,20),c=[l];function p(o,r){return a(),n("div",d,c)}const j=s(e,[["render",p]]);export{j as default};

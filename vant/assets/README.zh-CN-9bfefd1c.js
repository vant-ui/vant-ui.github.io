import{_ as s}from"./locales-be796722.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const l={},e={class:"van-doc-markdown-body"},p=n(`<h1>PullRefresh 下拉刷新</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于提供下拉刷新的交互操作。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">PullRefresh</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">PullRefresh</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>下拉刷新时会触发 <code>refresh</code> 事件，在事件的回调函数中可以进行同步或异步操作，操作完成后将 <code>v-model</code> 设置为 <code>false</code>，表示加载完成。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-pull-refresh</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;loading&quot;</span> @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;onRefresh&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>刷新次数: {{ count }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-pull-refresh</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> count = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> loading = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onRefresh</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;刷新成功&#39;</span>);
        loading.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
        count.<span class="hljs-property">value</span>++;
      }, <span class="hljs-number">1000</span>);
    };

    <span class="hljs-keyword">return</span> {
      count,
      loading,
      onRefresh,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="cheng-gong-ti-shi" tabindex="-1">成功提示</h3><p>通过 <code>success-text</code> 可以设置刷新成功后的顶部提示文案。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-pull-refresh</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;isLoading&quot;</span>
  <span class="hljs-attr">success-text</span>=<span class="hljs-string">&quot;刷新成功&quot;</span>
  @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;onRefresh&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>刷新次数: {{ count }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-pull-refresh</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-ti-shi" tabindex="-1">自定义提示</h3><p>通过插槽可以自定义下拉刷新过程中的提示内容。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-pull-refresh</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;isLoading&quot;</span> <span class="hljs-attr">:head-height</span>=<span class="hljs-string">&quot;80&quot;</span> @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;onRefresh&quot;</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- 下拉提示，通过 scale 实现一个缩放效果 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">pulling</span>=<span class="hljs-string">&quot;props&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;doge&quot;</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/doge.png&quot;</span>
      <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ transform: \`scale(\${props.distance / 80})\` }&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

  <span class="hljs-comment">&lt;!-- 释放提示 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">loosing</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;doge&quot;</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/doge.png&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

  <span class="hljs-comment">&lt;!-- 加载提示 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">loading</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;doge&quot;</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/doge-fire.jpeg&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>刷新次数: {{ count }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-pull-refresh</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.doge</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">140px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">72px</span>;
    <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">8px</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">4px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>是否处于加载中状态</td><td><em>boolean</em></td><td>-</td></tr><tr><td>pulling-text</td><td>下拉过程提示文案</td><td><em>string</em></td><td><code>下拉即可刷新...</code></td></tr><tr><td>loosing-text</td><td>释放过程提示文案</td><td><em>string</em></td><td><code>释放即可刷新...</code></td></tr><tr><td>loading-text</td><td>加载过程提示文案</td><td><em>string</em></td><td><code>加载中...</code></td></tr><tr><td>success-text</td><td>刷新成功提示文案</td><td><em>string</em></td><td>-</td></tr><tr><td>success-duration</td><td>刷新成功提示展示时长(ms)</td><td><em>number | string</em></td><td><code>500</code></td></tr><tr><td>animation-duration</td><td>动画时长</td><td><em>number | string</em></td><td><code>300</code></td></tr><tr><td>head-height</td><td>顶部内容高度</td><td><em>number | string</em></td><td><code>50</code></td></tr><tr><td>pull-distance</td><td>触发下拉刷新的距离</td><td><em>number | string</em></td><td>与 <code>head-height</code> 一致</td></tr><tr><td>disabled</td><td>是否禁用下拉刷新</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>refresh</td><td>下拉刷新时触发</td><td>-</td></tr><tr><td>change</td><td>拖动时或状态改变时触发</td><td><em>{ status: string, distance: number }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>default</td><td>自定义内容</td><td>-</td></tr><tr><td>normal</td><td>非下拉状态时顶部内容</td><td>-</td></tr><tr><td>pulling</td><td>下拉过程中顶部内容</td><td><em>{ distance: number }</em></td></tr><tr><td>loosing</td><td>释放过程中顶部内容</td><td><em>{ distance: number }</em></td></tr><tr><td>loading</td><td>加载过程中顶部内容</td><td><em>{ distance: number }</em></td></tr><tr><td>success</td><td>刷新成功提示内容</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">PullRefreshProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-pull-refresh-head-height</td><td><em>50px</em></td><td>-</td></tr><tr><td>--van-pull-refresh-head-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-pull-refresh-head-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-pull-refresh-loading-icon-size</td><td><em>16px</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="pullrefresh-de-nei-rong-wei-tian-man-ping-mu-shi-zhi-you-yi-bu-fen-qu-yu-ke-yi-xia-la" tabindex="-1">PullRefresh 的内容未填满屏幕时，只有一部分区域可以下拉？</h3><p>默认情况下，下拉区域的高度是和内容高度保持一致的，如果需要让下拉区域始终为全屏，可以给 PullRefresh 设置一个与屏幕大小相等的最小高度：</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-pull-refresh</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;min-height: 100vh;&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="pullrefresh-de-chu-fa-tiao-jian-shi" tabindex="-1">PullRefresh 的触发条件是？</h3><p>PullRefresh 的触发条件是「父级滚动元素的滚动条在顶部位置」。</p><ul><li>如果最近一个可滚动的父级元素是 <code>window</code>，则要求 <code>window.pageYOffset === 0</code>。</li><li>如果最近一个可滚动的父级元素是 <code>Element</code>，则要求 <code>Element.scrollTop === 0</code>。</li></ul></div><div class="van-doc-card"><h3 id="zai-zhuo-mian-duan-wu-fa-cao-zuo-zu-jian" tabindex="-1">在桌面端无法操作组件？</h3><p>参见<a href="#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei" target="_blank">桌面端适配</a>。</p></div>`,18),d=[p];function c(h,r){return a(),t("div",e,d)}const g=s(l,[["render",c]]);export{g as default};

import{_ as s}from"./locales-be796722.js";import{o as t,a,z as n}from"./vue-libs-19c20d28.js";const d={},l={class:"van-doc-markdown-body"},e=n(`<h1>NavBar 导航栏</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>为页面提供导航功能，常用于页面顶部。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NavBar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">NavBar</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>通过 <code>title</code> 属性设置导航栏标题。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-nav-bar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="fan-hui-shang-ji" tabindex="-1">返回上级</h3><p>在导航栏实现返回上级功能。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-nav-bar</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span>
  <span class="hljs-attr">left-text</span>=<span class="hljs-string">&quot;返回&quot;</span>
  <span class="hljs-attr">left-arrow</span>
  @<span class="hljs-attr">click-left</span>=<span class="hljs-string">&quot;onClickLeft&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickLeft</span> = (<span class="hljs-params"></span>) =&gt; history.<span class="hljs-title function_">back</span>();
    <span class="hljs-keyword">return</span> {
      onClickLeft,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="you-ce-an-niu" tabindex="-1">右侧按钮</h3><p>在导航栏右侧添加可点击的按钮。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-nav-bar</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span>
  <span class="hljs-attr">left-text</span>=<span class="hljs-string">&quot;返回&quot;</span>
  <span class="hljs-attr">right-text</span>=<span class="hljs-string">&quot;按钮&quot;</span>
  <span class="hljs-attr">left-arrow</span>
  @<span class="hljs-attr">click-left</span>=<span class="hljs-string">&quot;onClickLeft&quot;</span>
  @<span class="hljs-attr">click-right</span>=<span class="hljs-string">&quot;onClickRight&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickLeft</span> = (<span class="hljs-params"></span>) =&gt; history.<span class="hljs-title function_">back</span>();
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickRight</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;按钮&#39;</span>);
    <span class="hljs-keyword">return</span> {
      onClickLeft,
      onClickRight,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="shi-yong-cha-cao" tabindex="-1">使用插槽</h3><p>可以通过插槽自定义导航栏两侧的内容。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-nav-bar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span> <span class="hljs-attr">left-text</span>=<span class="hljs-string">&quot;返回&quot;</span> <span class="hljs-attr">left-arrow</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;18&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-nav-bar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-an-niu" tabindex="-1">禁用按钮</h3><p>通过 <code>left-disabled</code> 或 <code>right-disabled</code> 属性来禁用两侧的按钮。按钮被禁用时透明度降低，且无法点击。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-nav-bar</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span>
  <span class="hljs-attr">left-text</span>=<span class="hljs-string">&quot;返回&quot;</span>
  <span class="hljs-attr">right-text</span>=<span class="hljs-string">&quot;按钮&quot;</span>
  <span class="hljs-attr">left-arrow</span>
  <span class="hljs-attr">left-disabled</span>
  <span class="hljs-attr">right-disabled</span>
/&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>left-text</td><td>左侧文案</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>right-text</td><td>右侧文案</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>left-disabled <code>v4.6.8</code></td><td>是否禁用左侧按钮，禁用时透明度降低，且无法点击</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>right-disabled <code>v4.6.8</code></td><td>是否禁用右侧按钮，禁用时透明度降低，且无法点击</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>left-arrow</td><td>是否显示左侧箭头</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>border</td><td>是否显示下边框</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>fixed</td><td>是否固定在顶部</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>固定在顶部时，是否在标签位置生成一个等高的占位元素</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>z-index</td><td>导航栏 z-index</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>safe-area-inset-top</td><td>是否开启<a href="#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei" target="_blank">顶部安全区适配</a></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>clickable</td><td>是否开启两侧按钮的点击反馈</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>自定义标题</td></tr><tr><td>left</td><td>自定义左侧区域内容</td></tr><tr><td>right</td><td>自定义右侧区域内容</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click-left</td><td>点击左侧按钮时触发</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-right</td><td>点击右侧按钮时触发</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">NavBarProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-nav-bar-height</td><td><em>46px</em></td><td>-</td></tr><tr><td>--van-nav-bar-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-nav-bar-arrow-size</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-nav-bar-icon-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-nav-bar-text-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-nav-bar-title-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-nav-bar-title-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-nav-bar-z-index</td><td><em>1</em></td><td>-</td></tr></tbody></table></div>`,16),c=[e];function p(r,o){return t(),a("div",l,c)}const j=s(d,[["render",p]]);export{j as default};

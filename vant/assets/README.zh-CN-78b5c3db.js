import{_ as s}from"./locales-be796722.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const l={},e={class:"van-doc-markdown-body"},p=n(`<h1>TextEllipsis 文本省略</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>对长文本进行省略，支持展开/收起。请升级 <code>vant</code> 到 &gt;= 4.1.0 版本来使用该组件。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">TextEllipsis</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">TextEllipsis</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>默认展示 <code>1</code> 行，超过 <code>1</code> 行显示省略号。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-text-ellipsis</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> text = <span class="hljs-string">&#39;慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。&#39;</span>;
    <span class="hljs-keyword">return</span> { text };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zhan-kai-shou-qi" tabindex="-1">展开/收起</h3><p>超过行数支持展开/收起。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-text-ellipsis</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">expand-text</span>=<span class="hljs-string">&quot;展开&quot;</span> <span class="hljs-attr">collapse-text</span>=<span class="hljs-string">&quot;收起&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> text =
      <span class="hljs-string">&#39;似水流年是一个人所有的一切，只有这个东西，才真正归你所有。其余的一切，都是片刻的欢娱和不幸，转眼间就已跑到那似水流年里去了。&#39;</span>;
    <span class="hljs-keyword">return</span> { text };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-zhan-shi-xing-shu" tabindex="-1">自定义展示行数</h3><p>通过设置 <code>rows</code> 限制展示行数。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-text-ellipsis</span>
  <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;3&quot;</span>
  <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;text&quot;</span>
  <span class="hljs-attr">expand-text</span>=<span class="hljs-string">&quot;展开&quot;</span>
  <span class="hljs-attr">collapse-text</span>=<span class="hljs-string">&quot;收起&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> text =
      <span class="hljs-string">&#39;那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己会永远生猛下去，什么也锤不了我。&#39;</span>;
    <span class="hljs-keyword">return</span> { text };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-sheng-lue-wei-zhi" tabindex="-1">自定义省略位置</h3><p>通过设置 <code>position</code> 控制省略位置。</p><ul><li>头部省略：</li></ul><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-text-ellipsis</span>
  <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;1&quot;</span>
  <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;text&quot;</span>
  <span class="hljs-attr">expand-text</span>=<span class="hljs-string">&quot;展开&quot;</span>
  <span class="hljs-attr">collapse-text</span>=<span class="hljs-string">&quot;收起&quot;</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;start&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> text =
      <span class="hljs-string">&#39;那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己会永远生猛下去，什么也锤不了我。&#39;</span>;
    <span class="hljs-keyword">return</span> { text };
  },
};
</code></pre><ul><li>中部省略：</li></ul><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-text-ellipsis</span>
  <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;2&quot;</span>
  <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;text&quot;</span>
  <span class="hljs-attr">expand-text</span>=<span class="hljs-string">&quot;展开&quot;</span>
  <span class="hljs-attr">collapse-text</span>=<span class="hljs-string">&quot;收起&quot;</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;middle&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> text =
      <span class="hljs-string">&#39;那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己会永远生猛下去，什么也锤不了我。&#39;</span>;
    <span class="hljs-keyword">return</span> { text };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>rows</td><td>展示的行数</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>content</td><td>需要展示的文本</td><td><em>string</em></td><td>-</td></tr><tr><td>expand-text</td><td>展开操作的文案</td><td><em>string</em></td><td>-</td></tr><tr><td>collapse-text</td><td>收起操作的文案</td><td><em>string</em></td><td>-</td></tr><tr><td>dots <code>v4.2.0</code></td><td>省略号的文本内容</td><td><em>string</em></td><td><code>&#39;...&#39;</code></td></tr><tr><td>position <code>v4.6.2</code></td><td>省略位置，可选值为 <code>start</code> <code>middle</code></td><td><em>string</em></td><td><code>&#39;end&#39;</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click-action</td><td>点击展开/收起时触发</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">TextEllipsisProps</span>, <span class="hljs-title class_">TextEllipsisThemeVars</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-text-ellipsis-action-color</td><td><em>var(--van-blue)</em></td><td>操作按钮的颜色</td></tr><tr><td>--van-text-ellipsis-line-height</td><td><em>1.6</em></td><td>文本的行高</td></tr></tbody></table></div>`,14),d=[p];function c(o,r){return a(),t("div",e,d)}const j=s(l,[["render",c]]);export{j as default};

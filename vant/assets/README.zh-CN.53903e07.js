import{o as a,a as n,z as t}from"./vue-libs.d5ee895a.js";const l={class:"van-doc-markdown-body"},p=t(`<h1>Badge \u5FBD\u6807</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u5728\u53F3\u4E0A\u89D2\u5C55\u793A\u5FBD\u6807\u6570\u5B57\u6216\u5C0F\u7EA2\u70B9\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Badge</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Badge</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>\u8BBE\u7F6E <code>content</code> \u5C5E\u6027\u540E\uFF0CBadge \u4F1A\u5728\u5B50\u5143\u7D20\u7684\u53F3\u4E0A\u89D2\u663E\u793A\u5BF9\u5E94\u7684\u5FBD\u6807\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>dot</code> \u6765\u663E\u793A\u5C0F\u7EA2\u70B9\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;10&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;Hot&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">dot</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.child</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">40px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">40px</span>;
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#f2f3f5</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">4px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zui-da-zhi" tabindex="-1">\u6700\u5927\u503C</h3><p>\u8BBE\u7F6E <code>max</code> \u5C5E\u6027\u540E\uFF0C\u5F53 <code>content</code> \u7684\u6570\u503C\u8D85\u8FC7\u6700\u5927\u503C\u65F6\uFF0C\u4F1A\u81EA\u52A8\u663E\u793A\u4E3A <code>{max}+</code>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;20&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;9&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;20&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;200&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;99&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yan-se" tabindex="-1">\u81EA\u5B9A\u4E49\u989C\u8272</h3><p>\u901A\u8FC7 <code>color</code> \u5C5E\u6027\u6765\u8BBE\u7F6E\u5FBD\u6807\u7684\u989C\u8272\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#1989fa&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#1989fa&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">dot</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#1989fa&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-hui-biao-nei-rong" tabindex="-1">\u81EA\u5B9A\u4E49\u5FBD\u6807\u5185\u5BB9</h3><p>\u901A\u8FC7 <code>content</code> \u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5FBD\u6807\u7684\u5185\u5BB9\uFF0C\u6BD4\u5982\u63D2\u5165\u4E00\u4E2A\u56FE\u6807\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;badge-icon&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;cross&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;badge-icon&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;down&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;badge-icon&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.badge-icon</span> {
  <span class="hljs-attribute">display</span>: block;
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">10px</span>;
  <span class="hljs-attribute">line-height</span>: <span class="hljs-number">16px</span>;
}
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-hui-biao-wei-zhi" tabindex="-1">\u81EA\u5B9A\u4E49\u5FBD\u6807\u4F4D\u7F6E</h3><p>\u901A\u8FC7 <code>position</code> \u5C5E\u6027\u6765\u8BBE\u7F6E\u5FBD\u6807\u7684\u4F4D\u7F6E\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top-left&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom-left&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom-right&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="du-li-zhan-shi" tabindex="-1">\u72EC\u7ACB\u5C55\u793A</h3><p>\u5F53 Badge \u6CA1\u6709\u5B50\u5143\u7D20\u65F6\uFF0C\u4F1A\u4F5C\u4E3A\u4E00\u4E2A\u72EC\u7ACB\u7684\u5143\u7D20\u8FDB\u884C\u5C55\u793A\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;200&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;99&quot;</span> /&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>content</td><td>\u5FBD\u6807\u5185\u5BB9</td><td><em>number | string</em></td><td>-</td></tr><tr><td>color</td><td>\u5FBD\u6807\u80CC\u666F\u989C\u8272</td><td><em>string</em></td><td><code>#ee0a24</code></td></tr><tr><td>dot</td><td>\u662F\u5426\u5C55\u793A\u4E3A\u5C0F\u7EA2\u70B9</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>max</td><td>\u6700\u5927\u503C\uFF0C\u8D85\u8FC7\u6700\u5927\u503C\u4F1A\u663E\u793A <code>{max}+</code>\uFF0C\u4EC5\u5F53 content \u4E3A\u6570\u5B57\u65F6\u6709\u6548</td><td><em>number | string</em></td><td>-</td></tr><tr><td>offset <code>v3.0.5</code></td><td>\u8BBE\u7F6E\u5FBD\u6807\u7684\u504F\u79FB\u91CF\uFF0C\u6570\u7EC4\u7684\u4E24\u9879\u5206\u522B\u5BF9\u5E94\u6C34\u5E73\u548C\u5782\u76F4\u65B9\u5411\u7684\u504F\u79FB\u91CF\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td><td><em>[number | string, number | string]</em></td><td>-</td></tr><tr><td>show-zero <code>v3.0.10</code></td><td>\u5F53 content \u4E3A\u6570\u5B57 0 \u6216\u5B57\u7B26\u4E32 &#39;0&#39; \u65F6\uFF0C\u662F\u5426\u5C55\u793A\u5FBD\u6807</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>position <code>v3.2.7</code></td><td>\u5FBD\u6807\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A <code>top-left</code> <code>bottom-left</code> <code>bottom-right</code></td><td><em>string</em></td><td><code>top-right</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u5FBD\u6807\u5305\u88F9\u7684\u5B50\u5143\u7D20</td></tr><tr><td>content</td><td>\u81EA\u5B9A\u4E49\u5FBD\u6807\u5185\u5BB9</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">BadgeProps</span>, <span class="hljs-title class_">BadgePosition</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-badge-size</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-badge-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-badge-padding</td><td><em>0 3px</em></td><td>-</td></tr><tr><td>--van-badge-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-badge-font-weight</td><td><em>var(--van-font-bold)</em></td><td>-</td></tr><tr><td>--van-badge-border-width</td><td><em>var(--van-border-width)</em></td><td>-</td></tr><tr><td>--van-badge-background</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-badge-dot-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-badge-dot-size</td><td><em>8px</em></td><td>-</td></tr><tr><td>--van-badge-font</td><td><em>-apple-system-font, Helvetica Neue, Arial, sans-serif</em></td><td>-</td></tr></tbody></table></div>`,16),c=[p],r={__name:"README.zh-CN",setup(e,{expose:s}){return s({frontmatter:{}}),(h,o)=>(a(),n("div",l,c))}};export{r as default};

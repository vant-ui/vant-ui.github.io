import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as i}from"./vue-libs-19c20d28.js";const t={},l={class:"van-doc-markdown-body"},e=i(`<h1>usePageVisibility</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>获取页面的可见状态。</p></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">基本用法</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { watch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { usePageVisibility } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> pageVisibility = <span class="hljs-title function_">usePageVisibility</span>();

    <span class="hljs-title function_">watch</span>(pageVisibility, <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;visibility: &#39;</span>, value);
    });
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">VisibilityState</span> = <span class="hljs-string">&#39;visible&#39;</span> | <span class="hljs-string">&#39;hidden&#39;</span>;

<span class="hljs-keyword">function</span> <span class="hljs-title function_">usePageVisibility</span>(<span class="hljs-params"></span>): <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-title class_">VisibilityState</span>&gt;;
</code></pre></div><div class="van-doc-card"><h3 id="fan-hui-zhi" tabindex="-1">返回值</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>visibilityState</td><td>页面当前的可见状态，<code>visible</code> 为可见，<code>hidden</code> 为隐藏</td><td><em>Ref&lt;VisibilityState&gt;</em></td></tr></tbody></table></div>`,7),c=[e];function p(d,o){return a(),n("div",l,c)}const j=s(t,[["render",p]]);export{j as default};

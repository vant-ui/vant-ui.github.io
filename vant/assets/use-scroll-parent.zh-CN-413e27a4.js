import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as t}from"./vue-libs-19c20d28.js";const l={},e={class:"van-doc-markdown-body"},c=t(`<h1>useScrollParent</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>获取元素最近的可滚动父元素。</p></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">基本用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;root&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, watch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { useScrollParent, useEventListener } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> root = <span class="hljs-title function_">ref</span>();
    <span class="hljs-keyword">const</span> scrollParent = <span class="hljs-title function_">useScrollParent</span>(root);

    <span class="hljs-title function_">useEventListener</span>(
      <span class="hljs-string">&#39;scroll&#39;</span>,
      <span class="hljs-function">() =&gt;</span> {
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;scroll&#39;</span>);
      },
      { <span class="hljs-attr">target</span>: scrollParent },
    );

    <span class="hljs-keyword">return</span> { root };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useScrollParent</span>(<span class="hljs-params">
  element: Ref&lt;Element | <span class="hljs-literal">undefined</span>&gt;,
</span>): <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-title class_">Element</span> | <span class="hljs-title class_">Window</span> | <span class="hljs-literal">undefined</span>&gt;;
</code></pre></div><div class="van-doc-card"><h3 id="can-shu" tabindex="-1">参数</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>element</td><td>当前元素</td><td><em>Ref&lt;Element&gt;</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fan-hui-zhi" tabindex="-1">返回值</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>scrollParent</td><td>最近的可滚动父元素</td><td><em>Ref&lt;Element&gt;</em></td></tr></tbody></table></div>`,8),d=[c];function r(o,p){return a(),n("div",e,d)}const j=s(l,[["render",r]]);export{j as default};

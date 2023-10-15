import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as t}from"./vue-libs-19c20d28.js";const l={},e={class:"van-doc-markdown-body"},i=t(`<h1>useWindowSize</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>获取浏览器窗口的视口宽度和高度，并在窗口大小变化时自动更新。</p></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">基本用法</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { watch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { useWindowSize } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> { width, height } = <span class="hljs-title function_">useWindowSize</span>();

    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(width.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; 窗口宽度</span>
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(height.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; 窗口高度</span>

    <span class="hljs-title function_">watch</span>([width, height], <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;window resized&#39;</span>);
    });
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useWindowSize</span>(<span class="hljs-params"></span>): {
  <span class="hljs-attr">width</span>: <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-built_in">number</span>&gt;;
  <span class="hljs-attr">height</span>: <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-built_in">number</span>&gt;;
};
</code></pre></div><div class="van-doc-card"><h3 id="fan-hui-zhi" tabindex="-1">返回值</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>width</td><td>浏览器窗口宽度</td><td><em>Ref&lt;number&gt;</em></td></tr><tr><td>height</td><td>浏览器窗口高度</td><td><em>Ref&lt;number&gt;</em></td></tr></tbody></table></div>`,7),c=[i];function p(d,h){return a(),n("div",e,c)}const j=s(l,[["render",p]]);export{j as default};

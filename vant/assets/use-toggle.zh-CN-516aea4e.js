import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as l}from"./vue-libs-19c20d28.js";const t={},e={class:"van-doc-markdown-body"},p=l(`<h1>useToggle</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于在 <code>true</code> 和 <code>false</code> 之间进行切换。</p></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">基本用法</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { useToggle } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> [state, toggle] = <span class="hljs-title function_">useToggle</span>();

    <span class="hljs-title function_">toggle</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(state.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; true</span>

    <span class="hljs-title function_">toggle</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(state.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; false</span>

    <span class="hljs-title function_">toggle</span>();
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(state.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; true</span>
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="she-zhi-mo-ren-zhi" tabindex="-1">设置默认值</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { useToggle } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> [state, toggle] = <span class="hljs-title function_">useToggle</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(state.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; true</span>
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useToggle</span>(<span class="hljs-params">
  defaultValue: <span class="hljs-built_in">boolean</span>,
</span>): [<span class="hljs-title class_">Ref</span>&lt;<span class="hljs-built_in">boolean</span>&gt;, <span class="hljs-function">(<span class="hljs-params">newValue: <span class="hljs-built_in">boolean</span></span>) =&gt;</span> <span class="hljs-built_in">void</span>];
</code></pre></div><div class="van-doc-card"><h3 id="can-shu" tabindex="-1">参数</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>defaultValue</td><td>默认值</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fan-hui-zhi" tabindex="-1">返回值</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>state</td><td>状态值</td><td><em>Ref&lt;boolean&gt;</em></td></tr><tr><td>toggle</td><td>切换状态值的函数</td><td><em>(newValue?: boolean) =&gt; void</em></td></tr></tbody></table></div>`,9),c=[p];function o(d,h){return a(),n("div",e,c)}const u=s(t,[["render",o]]);export{u as default};

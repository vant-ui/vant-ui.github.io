import{_ as s}from"./locales-be796722.js";import{o as t,a as n,z as a}from"./vue-libs-19c20d28.js";const e={},d={class:"van-doc-markdown-body"},l=a(`<h1>useRect</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>获取元素的大小及其相对于视口的位置，等价于 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect" target="_blank">Element.getBoundingClientRect</a>。</p></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">基本用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;root&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, onMounted } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { useRect } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> root = <span class="hljs-title function_">ref</span>();

    <span class="hljs-title function_">onMounted</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">const</span> rect = <span class="hljs-title function_">useRect</span>(root);
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(rect); <span class="hljs-comment">// -&gt; 元素的大小及其相对于视口的位置</span>
    });

    <span class="hljs-keyword">return</span> { root };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useRect</span>(<span class="hljs-params">
  element: Element | Window | Ref&lt;Element | Window | <span class="hljs-literal">undefined</span>&gt;,
</span>): <span class="hljs-title class_">DOMRect</span>;
</code></pre></div><div class="van-doc-card"><h3 id="fan-hui-zhi" tabindex="-1">返回值</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>width</td><td>宽度</td><td><em>number</em></td></tr><tr><td>height</td><td>高度</td><td><em>number</em></td></tr><tr><td>top</td><td>顶部与视图窗口左上角的距离</td><td><em>number</em></td></tr><tr><td>left</td><td>左侧与视图窗口左上角的距离</td><td><em>number</em></td></tr><tr><td>right</td><td>右侧与视图窗口左上角的距离</td><td><em>number</em></td></tr><tr><td>bottom</td><td>底部与视图窗口左上角的距离</td><td><em>number</em></td></tr></tbody></table></div>`,7),c=[l];function o(r,p){return t(),n("div",d,c)}const m=s(e,[["render",o]]);export{m as default};

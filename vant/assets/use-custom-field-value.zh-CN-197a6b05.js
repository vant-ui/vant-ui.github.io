import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as l}from"./vue-libs-19c20d28.js";const t={},e={class:"van-doc-markdown-body"},p=l(`<h1>useCustomFieldValue</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于自定义 Form 组件中的表单项。</p></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">基本用法</h3><p>如果需要自定义表单项，可以在 Field 组件的 <code>input</code> 插槽中插入你的自定义组件，并在自定义组件内部调用 <code>useCustomFieldValue</code> 方法。</p><h4 id="zi-ding-yi-zu-jian" tabindex="-1">自定义组件</h4><p>首先，在你的自定义组件中，调用 <code>useCustomFieldValue</code> 方法，并传入一个回调函数，这个函数返回值为表单项的值。</p><pre><code class="language-js"><span class="hljs-comment">// MyComponent.vue</span>
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { useCustomFieldValue } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> myValue = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);

    <span class="hljs-comment">// 此处传入的值会替代 Field 组件内部的 value</span>
    <span class="hljs-title function_">useCustomFieldValue</span>(<span class="hljs-function">() =&gt;</span> myValue.<span class="hljs-property">value</span>);

    <span class="hljs-keyword">return</span> { myValue };
  },
};
</code></pre><h4 id="biao-dan" tabindex="-1">表单</h4><p>接着，在 Form 组件中嵌入你的自定义组件，当提交表单时，即可获取到自定义表单项的值。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-form</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- 这是一个自定义表单项 --&gt;</span>
  <span class="hljs-comment">&lt;!-- 当表单提交时，会包括 useCustomFieldValue 中传入的值 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;my-field&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;自定义表单项&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">my-component</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-form</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useCustomFieldValue</span>(<span class="hljs-params">customValue: () =&gt; <span class="hljs-built_in">unknown</span></span>): <span class="hljs-built_in">void</span>;
</code></pre></div><div class="van-doc-card"><h3 id="can-shu" tabindex="-1">参数</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>customValue</td><td>获取表单项值的函数</td><td><em>() =&gt; unknown</em></td><td>-</td></tr></tbody></table></div>`,7),c=[p];function d(o,i){return a(),n("div",e,c)}const r=s(t,[["render",d]]);export{r as default};

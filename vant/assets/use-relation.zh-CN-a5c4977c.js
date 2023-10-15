import{_ as s}from"./locales-be796722.js";import{o as n,a,z as t}from"./vue-libs-19c20d28.js";const l={},e={class:"van-doc-markdown-body"},p=t(`<h1>useRelation</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>建立父子组件之间的关联关系，进行数据通信和方法调用，基于 <code>provide</code> 和 <code>inject</code> 实现。</p></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">基本用法</h3><p>在父组件中使用 <code>useChildren</code> 关联子组件:</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { useChildren } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">const</span> <span class="hljs-variable constant_">RELATION_KEY</span> = <span class="hljs-title class_">Symbol</span>(<span class="hljs-string">&#39;my-relation&#39;</span>);

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> { linkChildren } = <span class="hljs-title function_">useChildren</span>(<span class="hljs-variable constant_">RELATION_KEY</span>);

    <span class="hljs-keyword">const</span> count = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">add</span> = (<span class="hljs-params"></span>) =&gt; {
      count.<span class="hljs-property">value</span>++;
    };

    <span class="hljs-comment">// 向子组件提供数据和方法</span>
    <span class="hljs-title function_">linkChildren</span>({ add, count });
  },
};
</code></pre><p>在子组件中使用 <code>useParent</code> 获取父组件提供的数据和方法:</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { useParent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> { parent } = <span class="hljs-title function_">useParent</span>(<span class="hljs-variable constant_">RELATION_KEY</span>);

    <span class="hljs-comment">// 调用父组件提供的数据和方法</span>
    <span class="hljs-keyword">if</span> (parent) {
      parent.<span class="hljs-title function_">add</span>();
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(parent.<span class="hljs-property">count</span>.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; 1</span>
    }
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><pre><code class="language-ts"><span class="hljs-keyword">function</span> useParent&lt;T&gt;(<span class="hljs-attr">key</span>: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">symbol</span>): {
  parent?: T;
  index?: <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-built_in">number</span>&gt;;
};

<span class="hljs-keyword">function</span> <span class="hljs-title function_">useChildren</span>(<span class="hljs-params">key: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">symbol</span></span>): {
  <span class="hljs-attr">children</span>: <span class="hljs-title class_">ComponentPublicInstance</span>[];
  <span class="hljs-attr">linkChildren</span>: <span class="hljs-function">(<span class="hljs-params">value: <span class="hljs-built_in">any</span></span>) =&gt;</span> <span class="hljs-built_in">void</span>;
};
</code></pre></div><div class="van-doc-card"><h3 id="useparent-fan-hui-zhi" tabindex="-1">useParent 返回值</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>parent</td><td>父组件提供的值</td><td><em>any</em></td></tr><tr><td>index</td><td>当前组件在父组件的所有子组件中对应的索引位置</td><td><em>Ref&lt;number&gt;</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="usechildren-fan-hui-zhi" tabindex="-1">useChildren 返回值</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>children</td><td>子组件列表</td><td><em>ComponentPublicInstance[]</em></td></tr><tr><td>linkChildren</td><td>向子组件提供值的方法</td><td><em>(value: any) =&gt; void</em></td></tr></tbody></table></div>`,8),c=[p];function d(i,o){return n(),a("div",e,c)}const j=s(l,[["render",d]]);export{j as default};

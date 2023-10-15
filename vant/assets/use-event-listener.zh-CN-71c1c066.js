import{_ as s}from"./locales-be796722.js";import{o as n,a,z as t}from"./vue-libs-19c20d28.js";const e={},l={class:"van-doc-markdown-body"},d=t(`<h1>useEventListener</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>方便地进行事件绑定，在组件 <code>mounted</code> 和 <code>activated</code> 时绑定事件，<code>unmounted</code> 和 <code>deactivated</code> 时解绑事件。</p></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">基本用法</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { useEventListener } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-comment">// 在 window 上绑定 resize 事件</span>
    <span class="hljs-comment">// 未指定监听对象时，默认会监听 window 的事件</span>
    <span class="hljs-title function_">useEventListener</span>(<span class="hljs-string">&#39;resize&#39;</span>, <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;window resize&#39;</span>);
    });

    <span class="hljs-comment">// 在 body 元素上绑定 click 事件</span>
    <span class="hljs-title function_">useEventListener</span>(
      <span class="hljs-string">&#39;click&#39;</span>,
      <span class="hljs-function">() =&gt;</span> {
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;click body&#39;</span>);
      },
      { <span class="hljs-attr">target</span>: <span class="hljs-variable language_">document</span>.<span class="hljs-property">body</span> },
    );
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="qu-xiao-shi-jian-jian-ting" tabindex="-1">取消事件监听</h3><p><code>useEventListener</code> 会返回一个 <code>cleanup</code> 函数，调用该函数可以取消事件监听。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { useEventListener } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> cleanup = <span class="hljs-title function_">useEventListener</span>(<span class="hljs-string">&#39;resize&#39;</span>, <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;window resize&#39;</span>);
    });

    <span class="hljs-title function_">cleanup</span>();
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">Options</span> = {
  target?: <span class="hljs-title class_">EventTarget</span> | <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-title class_">EventTarget</span>&gt;;
  capture?: <span class="hljs-built_in">boolean</span>;
  passive?: <span class="hljs-built_in">boolean</span>;
};

<span class="hljs-keyword">function</span> <span class="hljs-title function_">useEventListener</span>(<span class="hljs-params">
  <span class="hljs-keyword">type</span>: <span class="hljs-built_in">string</span>,
  listener: EventListener,
  options?: Options,
</span>): <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">void</span>;
</code></pre></div><div class="van-doc-card"><h3 id="can-shu" tabindex="-1">参数</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>监听的事件类型</td><td><em>string</em></td><td>-</td></tr><tr><td>listener</td><td>事件回调函数</td><td><em>EventListener</em></td><td>-</td></tr><tr><td>options</td><td>可选的配置项</td><td><em>Options</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="options" tabindex="-1">Options</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>target</td><td>绑定事件的元素</td><td><em>EventTarget | Ref&lt;EventTarget&gt;</em></td><td><code>window</code></td></tr><tr><td>capture</td><td>是否在事件捕获阶段触发</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>passive</td><td>设置为 <code>true</code> 时，表示 <code>listener</code> 永远不会调用 <code>preventDefault</code></td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div>`,9),c=[d];function p(o,i){return n(),a("div",l,c)}const j=s(e,[["render",p]]);export{j as default};

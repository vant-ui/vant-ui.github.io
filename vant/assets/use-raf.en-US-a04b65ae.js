import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as e}from"./vue-libs-19c20d28.js";const l={},t={class:"van-doc-markdown-body"},c=e(`<h1>useRaf</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Provide convenient call and cancellation of <a href="https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame" target="_blank">requestAnimationFrame</a>.</p></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="single-call" tabindex="-1">Single Call</h3><p>By using the <code>useRaf</code> method, you can execute a function before the next browser repaint.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { useRaf } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">let</span> count = <span class="hljs-number">0</span>;
    <span class="hljs-title function_">useRaf</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(++count); <span class="hljs-comment">// It will only be executed once.</span>
    });
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="loop-calls" tabindex="-1">Loop Calls</h3><p>By using the <code>isLoop</code> option, you can execution of a function repeatedly at a specified interval until it is canceled.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { useRaf } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">let</span> count = <span class="hljs-number">0</span>;
    <span class="hljs-keyword">const</span> cancelRaf = <span class="hljs-title function_">useRaf</span>(
      <span class="hljs-function">() =&gt;</span> {
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(++count); <span class="hljs-comment">// Execute infinitely until canceled</span>

        <span class="hljs-keyword">if</span> (count === <span class="hljs-number">5</span>) {
          <span class="hljs-title function_">cancelRaf</span>();
        }
      },
      {
        <span class="hljs-attr">isLoop</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// Enable the loop</span>
        <span class="hljs-attr">interval</span>: <span class="hljs-number">100</span>, <span class="hljs-comment">// Set call interval</span>
      },
    );
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="type-declarations" tabindex="-1">Type Declarations</h3><pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useRaf</span>(<span class="hljs-params">
  callback: () =&gt; <span class="hljs-built_in">void</span>,
  options: {
    interval?: <span class="hljs-built_in">number</span>;
    isLoop?: <span class="hljs-built_in">boolean</span>;
  },
</span>): <span class="hljs-built_in">void</span>;
</code></pre></div><div class="van-doc-card"><h3 id="params" tabindex="-1">Params</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>callback</td><td>Callback</td><td><em>() =&gt; void</em></td><td>-</td></tr><tr><td>options</td><td>Options</td><td><em>{ interval?: number; isLoop?: boolean }</em></td><td><em>{ interval: 0; isLoop: false }</em></td></tr></tbody></table></div>`,8),o=[c];function p(i,d){return a(),n("div",t,o)}const u=s(l,[["render",p]]);export{u as default};

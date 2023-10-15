import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as l}from"./vue-libs-19c20d28.js";const t={},e={class:"van-doc-markdown-body"},c=l(`<h1>useRaf</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>提供便捷的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/window/requestAnimationFrame" target="_blank">requestAnimationFrame</a> 的调用和取消。</p></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="dan-ci-diao-yong" tabindex="-1">单次调用</h3><p>通过 <code>useRaf</code> 方法，可以在下一次浏览器重新绘制之前调用指定的函数。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { useRaf } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">let</span> count = <span class="hljs-number">0</span>;
    <span class="hljs-title function_">useRaf</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(++count); <span class="hljs-comment">// 只会执行 1 次</span>
    });
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xun-huan-diao-yong" tabindex="-1">循环调用</h3><p>通过开启 <code>isLoop</code> 选项，你可以按指定的间隔重复执行某个函数，直到被取消。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { useRaf } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">let</span> count = <span class="hljs-number">0</span>;
    <span class="hljs-keyword">const</span> cancelRaf = <span class="hljs-title function_">useRaf</span>(
      <span class="hljs-function">() =&gt;</span> {
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(++count); <span class="hljs-comment">// 无限执行，直到被 cancel</span>

        <span class="hljs-keyword">if</span> (count === <span class="hljs-number">5</span>) {
          <span class="hljs-title function_">cancelRaf</span>();
        }
      },
      {
        <span class="hljs-attr">isLoop</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// 开启循环</span>
        <span class="hljs-attr">interval</span>: <span class="hljs-number">100</span>, <span class="hljs-comment">// 设置调用间隔</span>
      },
    );
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useRaf</span>(<span class="hljs-params">
  callback: () =&gt; <span class="hljs-built_in">void</span>,
  options: {
    interval?: <span class="hljs-built_in">number</span>;
    isLoop?: <span class="hljs-built_in">boolean</span>;
  },
</span>): <span class="hljs-built_in">void</span>;
</code></pre></div><div class="van-doc-card"><h3 id="can-shu" tabindex="-1">参数</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认</th></tr></thead><tbody><tr><td>callback</td><td>回调函数</td><td><em>() =&gt; void</em></td><td>-</td></tr><tr><td>options</td><td>配置参数</td><td><em>{ interval?: number; isLoop?: boolean }</em></td><td><em>{ interval: 0; isLoop: false }</em></td></tr></tbody></table></div>`,8),p=[c];function o(d,i){return a(),n("div",e,p)}const u=s(t,[["render",o]]);export{u as default};

import{_ as s}from"./locales-be796722.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const l={},e={class:"van-doc-markdown-body"},p=n(`<h1>Lazyload 懒加载</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>当页面需要加载大量内容时，使用懒加载可以实现延迟加载页面可视区域外的内容，从而使页面加载更流畅。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><p><code>Lazyload</code> 是 <code>Vue</code> 指令，使用前需要对指令进行注册。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Lazyload</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Lazyload</span>);

<span class="hljs-comment">// 注册时可以配置额外的选项</span>
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Lazyload</span>, {
  <span class="hljs-attr">lazyComponent</span>: <span class="hljs-literal">true</span>,
});
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>将 <code>v-lazy</code> 指令的值设置为你需要懒加载的图片。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;img in imageList&quot;</span> <span class="hljs-attr">v-lazy</span>=<span class="hljs-string">&quot;img&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">imageList</span>: [
        <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#39;</span>,
        <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#39;</span>,
      ],
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="bei-jing-tu-lan-jia-zai" tabindex="-1">背景图懒加载</h3><p>和图片懒加载不同，背景图懒加载需要使用 <code>v-lazy:background-image</code>，值设置为背景图片的地址，需要注意的是必须声明容器高度。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;img in imageList&quot;</span> <span class="hljs-attr">v-lazy:background-image</span>=<span class="hljs-string">&quot;img&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zu-jian-lan-jia-zai" tabindex="-1">组件懒加载</h3><p>将需要懒加载的组件放在 <code>lazy-component</code> 标签中，即可实现组件懒加载。</p><pre><code class="language-js"><span class="hljs-comment">// 注册时设置\`lazyComponent\`选项</span>
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Lazyload</span>, {
  <span class="hljs-attr">lazyComponent</span>: <span class="hljs-literal">true</span>,
});
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">lazy-component</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;img in imageList&quot;</span> <span class="hljs-attr">v-lazy</span>=<span class="hljs-string">&quot;img&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">lazy-component</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="options" tabindex="-1">Options</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>loading</td><td>加载时的图片</td><td><em>string</em></td><td>-</td></tr><tr><td>error</td><td>错误时的图片</td><td><em>string</em></td><td>-</td></tr><tr><td>preload</td><td>预加载高度的比例</td><td><em>string</em></td><td>-</td></tr><tr><td>attempt</td><td>尝试次数</td><td><em>number</em></td><td><code>3</code></td></tr><tr><td>listenEvents</td><td>监听的事件</td><td><em>string[]</em></td><td><code>scroll</code>等</td></tr><tr><td>adapter</td><td>适配器</td><td><em>object</em></td><td>-</td></tr><tr><td>filter</td><td>图片 URL 过滤</td><td><em>object</em></td><td>-</td></tr><tr><td>lazyComponent</td><td>是否能懒加载模块</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><blockquote><p>更多内容请参照：<a href="https://github.com/hilongjw/vue-lazyload" target="_blank">vue-lazyload 官方文档</a></p></blockquote></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="tong-guo-cdn-yin-ru-vant-shi-mei-you-zi-dong-zhu-ce-lazyload-zu-jian" tabindex="-1">通过 CDN 引入 Vant 时，没有自动注册 Lazyload 组件？</h3><p>由于 Lazyload 组件在注册时可以传入一些配置项，所以我们不会自动注册 Lazyload 组件，需要手动进行注册：</p><pre><code class="language-js"><span class="hljs-keyword">const</span> app = <span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">createApp</span>();

app.<span class="hljs-title function_">use</span>(vant.<span class="hljs-property">Lazyload</span>, {
  <span class="hljs-attr">lazyComponent</span>: <span class="hljs-literal">true</span>,
});
</code></pre></div>`,11),d=[p];function c(o,i){return a(),t("div",e,d)}const j=s(l,[["render",c]]);export{j as default};

import{o as a,a as t,z as n}from"./vue-libs-12a1683e.js";const d={class:"van-doc-markdown-body"},e=n(`<h1>Signature 签名</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于签名场景的组件，基于 Canvas 实现。请升级 <code>vant</code> 到 &gt;= 4.3.0 版本来使用该组件。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Signature</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Signature</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-signature</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span> @<span class="hljs-attr">clear</span>=<span class="hljs-string">&quot;onClear&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-image</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;demoUrl&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;demoUrl&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> demoUrl = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSubmit</span> = (<span class="hljs-params">data</span>) =&gt; {
      <span class="hljs-keyword">const</span> { filePath, canvas } = data;
      demoUrl.<span class="hljs-property">value</span> = filePath;

      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;submit&#39;</span>, canvas, filePath);
    };

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClear</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;clear&#39;</span>);

    <span class="hljs-keyword">return</span> {
      onSubmit,
      onClear,
      demoUrl,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yan-se" tabindex="-1">自定义颜色</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-signature</span> <span class="hljs-attr">pen-color</span>=<span class="hljs-string">&quot;#ff0000&quot;</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span> @<span class="hljs-attr">clear</span>=<span class="hljs-string">&quot;onClear&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-xian-kuan" tabindex="-1">自定义线宽</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-signature</span> <span class="hljs-attr">:line-width</span>=<span class="hljs-string">&quot;6&quot;</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span> @<span class="hljs-attr">clear</span>=<span class="hljs-string">&quot;onClear&quot;</span> /&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>导出图片类型</td><td><em>string</em></td><td><code>png</code></td></tr><tr><td>pen-color</td><td>笔触颜色，默认黑色</td><td><em>string</em></td><td><code>#000</code></td></tr><tr><td>line-width</td><td>线条宽度</td><td><em>number</em></td><td><code>3</code></td></tr><tr><td>tips</td><td>当不支持 Canvas 的时候出现的提示文案</td><td><em>string</em></td><td>-</td></tr><tr><td>cancel-button-text</td><td>取消按钮文案</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td>confirm-button-text</td><td>确认按钮文案</td><td><em>string</em></td><td><code>确认</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>start</td><td>签名开始事件回调</td><td>-</td></tr><tr><td>end</td><td>签名结束事件回调</td><td>-</td></tr><tr><td>signing</td><td>签名过程事件回调</td><td><em>event: TouchEvent</em></td></tr><tr><td>submit</td><td>确定按钮事件回调</td><td><em>data: {canvas: HTMLCanvasElement, filePath: string}</em></td></tr><tr><td>clear</td><td>取消按钮事件回调</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-js"><span class="hljs-keyword">import</span> type { <span class="hljs-title class_">SignatureProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-signature-padding</td><td><em>var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-signature-content-height</td><td><em>200px</em></td><td>画布高度</td></tr><tr><td>--van-signature-content-background</td><td><em>var(--van-background-2)</em></td><td>画布背景色</td></tr><tr><td>--van-signature-content-border</td><td><em>1px dotted #dadada</em></td><td>画布边框样式</td></tr></tbody></table></div>`,13),l=[e],h={__name:"README.zh-CN",setup(p,{expose:s}){return s({frontmatter:{}}),(c,o)=>(a(),t("div",d,l))}};export{h as default};

import{_ as s}from"./locales-ed8bb270.js";import{o as a,a as t,z as n}from"./vue-libs-83dbabed.js";const d={},e={class:"van-doc-markdown-body"},l=n(`<h1>Highlight 高亮文本</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>高亮指定文本内容。请升级 <code>vant</code> 到 &gt;= 4.8.0 版本来使用该组件。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Highlight</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Highlight</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>你可以通过 <code>keywords</code> 指定需要高亮的关键字，通过 <code>source-string</code> 指定源文本。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-highlight</span> <span class="hljs-attr">:keywords</span>=<span class="hljs-string">&quot;keywords&quot;</span> <span class="hljs-attr">:source-string</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> text = <span class="hljs-string">&#39;慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。&#39;</span>;
    <span class="hljs-keyword">const</span> keywords = <span class="hljs-string">&#39;难题&#39;</span>;

    <span class="hljs-keyword">return</span> {
      text,
      keywords,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="duo-zi-fu-pi-pei" tabindex="-1">多字符匹配</h3><p>如果需要指定多个关键字，可以以数组的形式传入 <code>keywords</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-highlight</span> <span class="hljs-attr">:keywords</span>=<span class="hljs-string">&quot;keywords&quot;</span> <span class="hljs-attr">:source-string</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> text = <span class="hljs-string">&#39;慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。&#39;</span>;
    <span class="hljs-keyword">const</span> keywords = [<span class="hljs-string">&#39;难题&#39;</span>, <span class="hljs-string">&#39;终有一天&#39;</span>, <span class="hljs-string">&#39;答案&#39;</span>];

    <span class="hljs-keyword">return</span> {
      text,
      keywords,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="she-zhi-gao-liang-biao-qian-lei-ming" tabindex="-1">设置高亮标签类名</h3><p>通过 <code>highlight-class</code> 可以设置高亮标签的类名，以便自定义样式。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-highlight</span>
  <span class="hljs-attr">:keywords</span>=<span class="hljs-string">&quot;keywords&quot;</span>
  <span class="hljs-attr">:source-string</span>=<span class="hljs-string">&quot;text&quot;</span>
  <span class="hljs-attr">highlight-class</span>=<span class="hljs-string">&quot;custom-class&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> text = <span class="hljs-string">&#39;慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。&#39;</span>;
    <span class="hljs-keyword">const</span> keywords = <span class="hljs-string">&#39;生活&#39;</span>;

    <span class="hljs-keyword">return</span> {
      text,
      keywords,
    };
  },
};
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.custom-class</span> {
  <span class="hljs-attribute">color</span>: red;
}
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>auto-escape</td><td>是否自动转义</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>case-sensitive</td><td>是否区分大小写</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>highlight-class</td><td>高亮元素的类名</td><td><em>string</em></td><td>-</td></tr><tr><td>highlight-tag</td><td>高亮元素对应的 HTML 标签名</td><td><em>string</em></td><td><code>span</code></td></tr><tr><td>keywords</td><td>期望高亮的文本</td><td><em>string | string[]</em></td><td>-</td></tr><tr><td>source-string</td><td>源文本</td><td><em>string</em></td><td>-</td></tr><tr><td>tag</td><td>根节点对应的 HTML 标签名</td><td><em>string</em></td><td><code>div</code></td></tr><tr><td>unhighlight-class</td><td>非高亮元素的类名</td><td><em>string</em></td><td>-</td></tr><tr><td>unhighlight-tag</td><td>非高亮元素对应的 HTML 标签名</td><td><em>string</em></td><td><code>span</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">HighlightProps</span>, <span class="hljs-title class_">HighlightThemeVars</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-highlight-tag-color</td><td><em>var(--van-primary-color)</em></td><td>高亮文本颜色</td></tr></tbody></table></div>`,12),p=[l];function c(r,o){return a(),t("div",e,p)}const g=s(d,[["render",c]]);export{g as default};

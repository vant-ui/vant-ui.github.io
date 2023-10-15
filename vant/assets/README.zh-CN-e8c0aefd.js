import{_ as t}from"./locales-be796722.js";import{o as s,a,z as n}from"./vue-libs-19c20d28.js";const e={},d={class:"van-doc-markdown-body"},l=n(`<h1>Skeleton 骨架屏</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于在内容加载过程中展示一组占位图形。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">Skeleton</span>,
  <span class="hljs-title class_">SkeletonTitle</span>,
  <span class="hljs-title class_">SkeletonImage</span>,
  <span class="hljs-title class_">SkeletonAvatar</span>,
  <span class="hljs-title class_">SkeletonParagraph</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Skeleton</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SkeletonTitle</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SkeletonImage</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SkeletonAvatar</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SkeletonParagraph</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>通过 <code>title</code> 属性显示标题占位图，通过 <code>row</code> 属性配置占位段落行数。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-skeleton</span> <span class="hljs-attr">title</span> <span class="hljs-attr">:row</span>=<span class="hljs-string">&quot;3&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="xian-shi-tou-xiang" tabindex="-1">显示头像</h3><p>通过 <code>avatar</code> 属性显示头像占位图。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-skeleton</span> <span class="hljs-attr">title</span> <span class="hljs-attr">avatar</span> <span class="hljs-attr">:row</span>=<span class="hljs-string">&quot;3&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zhan-shi-zi-zu-jian" tabindex="-1">展示子组件</h3><p>将 <code>loading</code> 属性设置成 <code>false</code> 表示内容加载完成，此时会隐藏占位图，并显示 <code>Skeleton</code> 的子组件。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-skeleton</span> <span class="hljs-attr">title</span> <span class="hljs-attr">avatar</span> <span class="hljs-attr">:row</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>实际内容<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-skeleton</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, onMounted } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> loading = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);

    <span class="hljs-title function_">onMounted</span>(<span class="hljs-function">() =&gt;</span> {
      loading.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
    });

    <span class="hljs-keyword">return</span> {
      loading,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-zhan-shi-nei-rong" tabindex="-1">自定义展示内容</h3><p>通过 <code>template</code> 插槽完成自定义内容的展示。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-skeleton</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ display: &#39;flex&#39;, width: &#39;100%&#39; }&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-skeleton-image</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ flex: 1, marginLeft: &#39;16px&#39; }&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-skeleton-paragraph</span> <span class="hljs-attr">row-width</span>=<span class="hljs-string">&quot;60%&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-skeleton-paragraph</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-skeleton-paragraph</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-skeleton-paragraph</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-skeleton</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="skeleton-props" tabindex="-1">Skeleton Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>row</td><td>段落占位图行数</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>row-width</td><td>段落占位图宽度，可传数组来设置每一行的宽度</td><td><em>number | string |<br>(number | string)[]</em></td><td><code>100%</code></td></tr><tr><td>title</td><td>是否显示标题占位图</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>avatar</td><td>是否显示头像占位图</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>loading</td><td>是否显示骨架屏，传 <code>false</code> 时会展示子组件内容</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>animate</td><td>是否开启动画</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>round</td><td>是否将标题和段落显示为圆角风格</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>title-width</td><td>标题占位图宽度</td><td><em>number | string</em></td><td><code>40%</code></td></tr><tr><td>avatar-size</td><td>头像占位图大小</td><td><em>number | string</em></td><td><code>32px</code></td></tr><tr><td>avatar-shape</td><td>头像占位图形状，可选值为 <code>square</code></td><td><em>string</em></td><td><code>round</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="skeletonparagraph-props" tabindex="-1">SkeletonParagraph Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>round</td><td>是否将段落显示为圆角风格</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>row-width</td><td>段落占位图宽度</td><td><em>string</em></td><td><code>100%</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="skeletontitle-props" tabindex="-1">SkeletonTitle Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>round</td><td>是否将标题显示为圆角风格</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>title-width</td><td>标题占位图宽度</td><td><em>number | string</em></td><td><code>40%</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="skeletonavatar-props" tabindex="-1">SkeletonAvatar Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>avatar-size</td><td>头像占位图大小</td><td><em>number | string</em></td><td><code>32px</code></td></tr><tr><td>avatar-shape</td><td>头像占位图形状，可选值为 <code>square</code></td><td><em>string</em></td><td><code>round</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="skeletonimage-props" tabindex="-1">SkeletonImage Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>image-size</td><td>图片占位图大小</td><td><em>number | string</em></td><td><code>32px</code></td></tr><tr><td>image-shape</td><td>图片占位图形状，可选值为 <code>square</code></td><td><em>string</em></td><td><code>round</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="skeleton-slots" tabindex="-1">Skeleton Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>骨架屏内容</td></tr><tr><td>template</td><td>自定义内容</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">SkeletonProps</span>,
  <span class="hljs-title class_">SkeletonImageProps</span>,
  <span class="hljs-title class_">SkeletonTitleProps</span>,
  <span class="hljs-title class_">SkeletonImageShape</span>,
  <span class="hljs-title class_">SkeletonAvatarShape</span>,
  <span class="hljs-title class_">SkeletonParagraphProps</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-skeleton-paragraph-height</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-skeleton-paragraph-background</td><td><em>var(--van-active-color)</em></td><td>-</td></tr><tr><td>--van-skeleton-paragraph-margin-top</td><td><em>var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-skeleton-title-width</td><td><em>40%</em></td><td>-</td></tr><tr><td>--van-skeleton-avatar-size</td><td><em>32px</em></td><td>-</td></tr><tr><td>--van-skeleton-avatar-background</td><td><em>var(--van-active-color)</em></td><td>-</td></tr><tr><td>--van-skeleton-duration</td><td><em>1.2s</em></td><td>-</td></tr><tr><td>--van-skeleton-image-size</td><td><em>96px</em></td><td></td></tr><tr><td>--van-skeleton-image-radius</td><td><em>24px</em></td><td>-</td></tr></tbody></table></div>`,18),p=[l];function o(r,c){return s(),a("div",d,p)}const g=t(e,[["render",o]]);export{g as default};

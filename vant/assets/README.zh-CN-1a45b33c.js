import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as t}from"./vue-libs-19c20d28.js";const l={},c={class:"van-doc-markdown-body"},e=t(`<h1>Icon 图标</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 <code>icon</code> 属性引用。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Icon</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Icon</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>通过 <code>name</code> 属性来指定需要使用的图标，Vant 内置了一套图标库（见右侧示例），可以直接传入对应的名称来使用。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;chat-o&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="shi-yong-tu-pian-url" tabindex="-1">使用图片 URL</h3><p>你也可以直接在 <code>name</code> 属性中传入一个图片 URL 来作为图标。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="hui-biao-ti-shi" tabindex="-1">徽标提示</h3><p>设置 <code>dot</code> 属性后，会在图标右上角展示一个小红点；设置 <code>badge</code> 属性后，会在图标右上角展示相应的徽标。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">dot</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;9&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;99+&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="tu-biao-yan-se" tabindex="-1">图标颜色</h3><p>通过 <code>color</code> 属性来设置图标的颜色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;cart-o&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#1989fa&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;fire-o&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="tu-biao-da-xiao" tabindex="-1">图标大小</h3><p>通过 <code>size</code> 属性来设置图标的尺寸大小，可以指定任意 CSS 单位。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 不指定单位，默认使用 px --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;40&quot;</span> /&gt;</span>
<span class="hljs-comment">&lt;!-- 指定使用 rem 单位 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;3rem&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-tu-biao" tabindex="-1">自定义图标</h3><p>如果需要在现有 Icon 的基础上使用更多图标，可以引入第三方 iconfont 对应的字体文件和 CSS 文件，之后就可以在 Icon 组件中直接使用。</p><pre><code class="language-css"><span class="hljs-comment">/* 引入第三方或自定义的字体图标样式 */</span>
<span class="hljs-keyword">@font-face</span> {
  <span class="hljs-attribute">font-family</span>: <span class="hljs-string">&#39;my-icon&#39;</span>;
  <span class="hljs-attribute">src</span>: <span class="hljs-built_in">url</span>(<span class="hljs-string">&#39;./my-icon.ttf&#39;</span>) <span class="hljs-built_in">format</span>(<span class="hljs-string">&#39;truetype&#39;</span>);
}

<span class="hljs-selector-class">.my-icon</span> {
  <span class="hljs-attribute">font-family</span>: <span class="hljs-string">&#39;my-icon&#39;</span>;
}

<span class="hljs-selector-class">.my-icon-extra</span><span class="hljs-selector-pseudo">::before</span> {
  <span class="hljs-attribute">content</span>: <span class="hljs-string">&#39;\\e626&#39;</span>;
}
</code></pre><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 通过 class-prefix 指定类名为 my-icon --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">class-prefix</span>=<span class="hljs-string">&quot;my-icon&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;extra&quot;</span> /&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>图标名称或图片链接</td><td><em>string</em></td><td>-</td></tr><tr><td>dot</td><td>是否显示图标右上角小红点</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>badge</td><td>图标右上角徽标的内容</td><td><em>number | string</em></td><td>-</td></tr><tr><td>badge-props</td><td>自定义徽标的属性，传入的对象会被透传给 <a href="#/zh-CN/badge#props" target="_blank">Badge 组件的 props</a></td><td><em>BadgeProps</em></td><td>-</td></tr><tr><td>color</td><td>图标颜色</td><td><em>string</em></td><td><code>inherit</code></td></tr><tr><td>size</td><td>图标大小，如 <code>20px</code> <code>2em</code>，默认单位为 <code>px</code></td><td><em>number | string</em></td><td><code>inherit</code></td></tr><tr><td>class-prefix</td><td>类名前缀，用于使用自定义图标</td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>tag</td><td>根节点对应的 HTML 标签名</td><td><em>string</em></td><td><code>i</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击图标时触发</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">IconProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-icon-font-family</td><td><em>&#39;van-icon&#39;</em></td><td>-</td></tr></tbody></table></div>`,16),p=[e];function d(o,i){return a(),n("div",c,p)}const g=s(l,[["render",d]]);export{g as default};
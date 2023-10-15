import{_ as s}from"./locales-be796722.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const l={},p={class:"van-doc-markdown-body"},o=n(`<h1>Popup 弹出层</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Popup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Popup</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>通过 <code>v-model:show</code> 控制弹出层是否展示。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;展示弹出层&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showPopup&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ padding: &#39;64px&#39; }&quot;</span>&gt;</span>内容<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">showPopup</span> = (<span class="hljs-params"></span>) =&gt; {
      show.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;
    };
    <span class="hljs-keyword">return</span> {
      show,
      showPopup,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="dan-chu-wei-zhi" tabindex="-1">弹出位置</h3><p>通过 <code>position</code> 属性设置弹窗的弹出位置，默认为居中弹出，可以设置为 <code>top</code>、<code>bottom</code>、<code>left</code>、<code>right</code>。</p><ul><li>当弹窗从顶部或底部弹出时，默认宽度与屏幕宽度保持一致，弹窗高度取决于内容的高度。</li><li>当弹窗从左侧或右侧弹出时，默认不设置宽度和高度，弹窗的宽高取决于内容的宽高。</li></ul><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 顶部弹出 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showTop&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top&quot;</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;30%&#39; }&quot;</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- 底部弹出 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showBottom&quot;</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;30%&#39; }&quot;</span>
/&gt;</span>

<span class="hljs-comment">&lt;!-- 左侧弹出 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showLeft&quot;</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ width: &#39;30%&#39;, height: &#39;100%&#39; }&quot;</span>
/&gt;</span>

<span class="hljs-comment">&lt;!-- 右侧弹出 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showRight&quot;</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ width: &#39;30%&#39;, height: &#39;100%&#39; }&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="guan-bi-tu-biao" tabindex="-1">关闭图标</h3><p>设置 <code>closeable</code> 属性后，会在弹出层的右上角显示关闭图标，并且可以通过 <code>close-icon</code> 属性自定义图标，使用 <code>close-icon-position</code> 属性可以自定义图标位置。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">closeable</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;30%&#39; }&quot;</span>
/&gt;</span>
<span class="hljs-comment">&lt;!-- 自定义图标 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">closeable</span>
  <span class="hljs-attr">close-icon</span>=<span class="hljs-string">&quot;close&quot;</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;30%&#39; }&quot;</span>
/&gt;</span>
<span class="hljs-comment">&lt;!-- 图标位置 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">closeable</span>
  <span class="hljs-attr">close-icon-position</span>=<span class="hljs-string">&quot;top-left&quot;</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;30%&#39; }&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="yuan-jiao-dan-chuang" tabindex="-1">圆角弹窗</h3><p>设置 <code>round</code> 属性后，弹窗会根据弹出位置添加不同的圆角样式。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 圆角弹窗（居中） --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showCenter&quot;</span> <span class="hljs-attr">round</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ padding: &#39;64px&#39; }&quot;</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- 圆角弹窗（底部） --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showBottom&quot;</span>
  <span class="hljs-attr">round</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;30%&#39; }&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jian-ting-dian-ji-shi-jian" tabindex="-1">监听点击事件</h3><p>Popup 支持以下点击事件：</p><ul><li><code>click</code>: 点击弹出层时触发。</li><li><code>click-overlay</code>: 点击遮罩层时触发。</li><li><code>click-close-icon</code>: 点击关闭图标时触发。</li></ul><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;监听点击事件&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;30%&#39; }&quot;</span>
  <span class="hljs-attr">closeable</span>
  @<span class="hljs-attr">click-overlay</span>=<span class="hljs-string">&quot;onClickOverlay&quot;</span>
  @<span class="hljs-attr">click-close-icon</span>=<span class="hljs-string">&quot;onClickCloseIcon&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickOverlay</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;click-overlay&#39;</span>);
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickCloseIcon</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;click-close-icon&#39;</span>);
    };
    <span class="hljs-keyword">return</span> {
      show,
      onClickOverlay,
      onClickCloseIcon,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="jian-ting-xian-shi-shi-jian" tabindex="-1">监听显示事件</h3><p>当 Popup 被打开或关闭时，会触发以下事件：</p><ul><li><code>open</code>: 打开弹出层时立即触发。</li><li><code>opened</code>: 打开弹出层且动画结束后触发。</li><li><code>close</code>: 关闭弹出层时立即触发。</li><li><code>closed</code>: 关闭弹出层且动画结束后触发。</li></ul><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;监听显示事件&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;30%&#39; }&quot;</span>
  @<span class="hljs-attr">open</span>=<span class="hljs-string">&quot;showToast(&#39;open&#39;)&quot;</span>
  @<span class="hljs-attr">opened</span>=<span class="hljs-string">&quot;showToast(&#39;opened&#39;)&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;showToast(&#39;close&#39;)&quot;</span>
  @<span class="hljs-attr">closed</span>=<span class="hljs-string">&quot;showToast(&#39;closed&#39;)&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">return</span> {
      show,
      showToast,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zhi-ding-gua-zai-wei-zhi" tabindex="-1">指定挂载位置</h3><p>弹出层默认挂载到组件标签所在位置，可以通过 <code>teleport</code> 属性指定挂载位置。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 挂载到 body 节点下 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">teleport</span>=<span class="hljs-string">&quot;body&quot;</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- 挂载到 #app 节点下 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">teleport</span>=<span class="hljs-string">&quot;#app&quot;</span> /&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:show</td><td>是否显示弹出层</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>overlay</td><td>是否显示遮罩层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>position</td><td>弹出位置，可选值为 <code>top</code> <code>bottom</code> <code>right</code> <code>left</code></td><td><em>string</em></td><td><code>center</code></td></tr><tr><td>overlay-class</td><td>自定义遮罩层类名</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlay-style</td><td>自定义遮罩层样式</td><td><em>object</em></td><td>-</td></tr><tr><td>duration</td><td>动画时长，单位秒，设置为 0 可以禁用动画</td><td><em>number | string</em></td><td><code>0.3</code></td></tr><tr><td>z-index</td><td>将弹窗的 z-index 层级设置为一个固定值</td><td><em>number | string</em></td><td><code>2000+</code></td></tr><tr><td>round</td><td>是否显示圆角</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>lock-scroll</td><td>是否锁定背景滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>lazy-render</td><td>是否在显示弹层时才渲染节点</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-popstate</td><td>是否在页面回退时自动关闭</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>close-on-click-overlay</td><td>是否在点击遮罩层后关闭</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>closeable</td><td>是否显示关闭图标</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>close-icon</td><td>关闭图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td><td><em>string</em></td><td><code>cross</code></td></tr><tr><td>close-icon-position</td><td>关闭图标位置，可选值为 <code>top-left</code><br><code>bottom-left</code> <code>bottom-right</code></td><td><em>string</em></td><td><code>top-right</code></td></tr><tr><td>before-close</td><td>关闭前的回调函数，返回 <code>false</code> 可阻止关闭，支持返回 Promise</td><td><em>(action: string) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td>-</td></tr><tr><td>icon-prefix</td><td>图标类名前缀，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">class-prefix 属性</a></td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>transition</td><td>动画类名，等价于 <a href="https://cn.vuejs.org/api/built-in-components.html#transition" target="_blank">transition</a> 的 <code>name</code> 属性</td><td><em>string</em></td><td>-</td></tr><tr><td>transition-appear</td><td>是否在初始渲染时启用过渡动画</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>teleport</td><td>指定挂载的节点，等同于 Teleport 组件的 <a href="https://cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to 属性</a></td><td><em>string | Element</em></td><td>-</td></tr><tr><td>safe-area-inset-top</td><td>是否开启<a href="#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei" target="_blank">顶部安全区适配</a></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>safe-area-inset-bottom</td><td>是否开启<a href="#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei" target="_blank">底部安全区适配</a></td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击弹出层时触发</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-overlay</td><td>点击遮罩层时触发</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-close-icon</td><td>点击关闭图标时触发</td><td><em>event: MouseEvent</em></td></tr><tr><td>open</td><td>打开弹出层时立即触发</td><td>-</td></tr><tr><td>close</td><td>关闭弹出层时立即触发</td><td>-</td></tr><tr><td>opened</td><td>打开弹出层且动画结束后触发</td><td>-</td></tr><tr><td>closed</td><td>关闭弹出层且动画结束后触发</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>弹窗内容</td></tr><tr><td>overlay-content</td><td>遮罩层的内容</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">PopupProps</span>,
  <span class="hljs-title class_">PopupPosition</span>,
  <span class="hljs-title class_">PopupInstance</span>,
  <span class="hljs-title class_">PopupCloseIconPosition</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-popup-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-popup-transition</td><td><em>transform var(--van-duration-base)</em></td><td>-</td></tr><tr><td>--van-popup-round-radius</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-popup-close-icon-size</td><td><em>22px</em></td><td>-</td></tr><tr><td>--van-popup-close-icon-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-popup-close-icon-margin</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-popup-close-icon-z-index</td><td><em>1</em></td><td>-</td></tr></tbody></table></div>`,18),e=[o];function d(c,r){return a(),t("div",p,e)}const j=s(l,[["render",d]]);export{j as default};

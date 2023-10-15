import{_ as s}from"./locales-be796722.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const e={},d={class:"van-doc-markdown-body"},l=n(`<h1>ShareSheet 分享面板</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ShareSheet</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ShareSheet</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>分享面板通过 <code>options</code> 属性来定义分享选项，数组的每一项是一个对象，对象格式见文档下方表格。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;显示分享面板&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showShare = true&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-share-sheet</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showShare&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;立即分享给好友&quot;</span>
  <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
  @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;onSelect&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> showShare = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> options = [
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;微信&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;wechat&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;微博&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;weibo&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;复制链接&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;link&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;分享海报&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;poster&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;二维码&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;qrcode&#39;</span> },
    ];

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSelect</span> = (<span class="hljs-params">option</span>) =&gt; {
      <span class="hljs-title function_">showToast</span>(option.<span class="hljs-property">name</span>);
      showShare.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
    };

    <span class="hljs-keyword">return</span> {
      options,
      onSelect,
      showShare,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zhan-shi-duo-xing-xuan-xiang" tabindex="-1">展示多行选项</h3><p>当分享选项的数量较多时，可以将 <code>options</code> 定义为数组嵌套的格式，每个子数组会作为一行选项展示。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-share-sheet</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showShare&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;立即分享给好友&quot;</span>
  <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> showShare = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> options = [
      [
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;微信&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;wechat&#39;</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;朋友圈&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;wechat-moments&#39;</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;微博&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;weibo&#39;</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;QQ&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;qq&#39;</span> },
      ],
      [
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;复制链接&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;link&#39;</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;分享海报&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;poster&#39;</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;二维码&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;qrcode&#39;</span> },
        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;小程序码&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;weapp-qrcode&#39;</span> },
      ],
    ];

    <span class="hljs-keyword">return</span> {
      options,
      showShare,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-tu-biao" tabindex="-1">自定义图标</h3><p>除了使用内置的几种图标外，可以直接在 <code>icon</code> 中传入图片 URL 来使用自定义的图标。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-share-sheet</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showShare&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> showShare = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> options = [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;名称&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/custom-icon-fire.png&#39;</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;名称&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/custom-icon-light.png&#39;</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;名称&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/custom-icon-water.png&#39;</span>,
      },
    ];

    <span class="hljs-keyword">return</span> {
      options,
      showShare,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zhan-shi-miao-shu-xin-xi" tabindex="-1">展示描述信息</h3><p>通过 <code>description</code> 属性可以设置标题下方的描述文字, 在 <code>options</code> 内设置 <code>description</code> 属性可以添加分享选项描述。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-share-sheet</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showShare&quot;</span>
  <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;立即分享给好友&quot;</span>
  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;描述信息&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> showShare = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> options = [
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;微信&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;wechat&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;微博&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;weibo&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;复制链接&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;link&#39;</span>, <span class="hljs-attr">description</span>: <span class="hljs-string">&#39;描述信息&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;分享海报&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;poster&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;二维码&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;qrcode&#39;</span> },
    ];

    <span class="hljs-keyword">return</span> {
      options,
      showShare,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:show</td><td>是否显示分享面板</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>options</td><td>分享选项</td><td><em>Option[]</em></td><td><code>[]</code></td></tr><tr><td>title</td><td>顶部标题</td><td><em>string</em></td><td>-</td></tr><tr><td>cancel-text</td><td>取消按钮文字，传入空字符串可以隐藏按钮</td><td><em>string</em></td><td><code>&#39;取消&#39;</code></td></tr><tr><td>description</td><td>标题下方的辅助描述文字</td><td><em>string</em></td><td>-</td></tr><tr><td>duration</td><td>动画时长，单位秒，设置为 0 可以禁用动画</td><td><em>number | string</em></td><td><code>0.3</code></td></tr><tr><td>z-index</td><td>将面板的 z-index 层级设置为一个固定值</td><td><em>number | string</em></td><td><code>2000+</code></td></tr><tr><td>round</td><td>是否显示圆角</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>overlay</td><td>是否显示遮罩层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>overlay-class</td><td>自定义遮罩层类名</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlay-style</td><td>自定义遮罩层样式</td><td><em>object</em></td><td>-</td></tr><tr><td>lock-scroll</td><td>是否锁定背景滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>lazy-render</td><td>是否在显示弹层时才渲染内容</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-popstate</td><td>是否在页面回退时自动关闭</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-click-overlay</td><td>是否在点击遮罩层后关闭</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>safe-area-inset-bottom</td><td>是否开启<a href="#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei" target="_blank">底部安全区适配</a></td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>teleport</td><td>指定挂载的节点，等同于 Teleport 组件的 <a href="https://cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to 属性</a></td><td><em>string | Element</em></td><td>-</td></tr><tr><td>before-close</td><td>关闭前的回调函数，返回 <code>false</code> 可阻止关闭，支持返回 Promise</td><td><em>(action: string) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="option-shu-ju-jie-gou" tabindex="-1">Option 数据结构</h3><p><code>options</code> 属性为一个对象数组，数组中的每个对象配置一列，对象可以包含以下值：</p><table><thead><tr><th>键名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>name</td><td>分享渠道名称</td><td><em>string</em></td></tr><tr><td>description</td><td>分享选项描述</td><td><em>string</em></td></tr><tr><td>icon</td><td>图标，可选值为 <code>wechat</code> <code>weibo</code> <code>qq</code> <code>link</code> <code>qrcode</code> <code>poster</code> <code>weapp-qrcode</code> <code>wechat-moments</code>，支持传入图片 URL</td><td><em>string</em></td></tr><tr><td>className</td><td>分享选项类名</td><td><em>string</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>select</td><td>点击分享选项时触发</td><td><em>option: Option, index: number</em></td></tr><tr><td>cancel</td><td>点击取消按钮时触发</td><td>-</td></tr><tr><td>open</td><td>打开面板时触发</td><td>-</td></tr><tr><td>close</td><td>关闭面板时触发</td><td>-</td></tr><tr><td>opened</td><td>打开面板且动画结束后触发</td><td>-</td></tr><tr><td>closed</td><td>关闭面板且动画结束后触发</td><td>-</td></tr><tr><td>click-overlay</td><td>点击遮罩层时触发</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>自定义顶部标题</td></tr><tr><td>description</td><td>自定义描述文字</td></tr><tr><td>cancel</td><td>自定义取消按钮内容</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">ShareSheetProps</span>,
  <span class="hljs-title class_">ShareSheetOption</span>,
  <span class="hljs-title class_">ShareSheetOptions</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-share-sheet-header-padding</td><td><em>var(--van-padding-sm) var(--van-padding-md) var(--van-padding-base)</em></td><td>-</td></tr><tr><td>--van-share-sheet-title-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-share-sheet-title-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-share-sheet-title-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-share-sheet-description-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-share-sheet-description-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-share-sheet-description-line-height</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-share-sheet-icon-size</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-share-sheet-option-name-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-share-sheet-option-name-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-share-sheet-option-description-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-share-sheet-option-description-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-share-sheet-cancel-button-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-share-sheet-cancel-button-height</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-share-sheet-cancel-button-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="ru-he-shi-xian-fen-xiang-luo-ji" tabindex="-1">如何实现分享逻辑？</h3><p>在不同的 App 或浏览器中，存在各式各样的分享接口或分享方式，因此 ShareSheet 组件不提供具体的分享逻辑，需要开发者根据业务场景自行实现。</p><h4 id="wei-xin-nei-fen-xiang" tabindex="-1">微信内分享</h4><p>由于微信未提供分享相关的 API，需要引导用户点击右上角进行分享。</p><h4 id="app-nei-fen-xiang" tabindex="-1">App 内分享</h4><p>可以通过 JSBridge 调用原生应用的 SDK 进行分享。</p><h4 id="fen-xiang-hai-bao-huo-er-wei-ma" tabindex="-1">分享海报或二维码</h4><p>可以通过 <a href="#/zh-CN/popup" target="_blank">Popup</a> 组件以弹层的形式展示图片，然后引导用户保存图片进行分享。</p></div>`,18),p=[l];function r(o,c){return a(),t("div",d,p)}const j=s(e,[["render",r]]);export{j as default};

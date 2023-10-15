import{_ as s}from"./locales-be796722.js";import{o as t,a,z as n}from"./vue-libs-19c20d28.js";const e={},l={class:"van-doc-markdown-body"},d=n(`<h1>NumberKeyboard 数字键盘</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>虚拟数字键盘，可以配合<a href="#/zh-CN/password-input" target="_blank">密码输入框组件</a>或自定义的输入框组件使用。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NumberKeyboard</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">NumberKeyboard</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="mo-ren-yang-shi" tabindex="-1">默认样式</h3><p>数字键盘提供了 <code>input</code>、<code>delete</code>、<code>blur</code> 事件，分别对应输入内容、删除内容和失去焦点的动作。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> @<span class="hljs-attr">touchstart.stop</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>弹出默认键盘<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>
  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;show = false&quot;</span>
  @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span>
  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onInput</span> = (<span class="hljs-params">value</span>) =&gt; <span class="hljs-title function_">showToast</span>(value);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onDelete</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;删除&#39;</span>);

    <span class="hljs-keyword">return</span> {
      show,
      onInput,
      onDelete,
    };
  },
};
</code></pre><blockquote><p>点击键盘以外的区域时，键盘会自动收起，通过阻止元素上的 touchstart 事件冒泡可以避免键盘收起。</p></blockquote></div><div class="van-doc-card"><h3 id="dai-you-ce-lan-de-jian-pan" tabindex="-1">带右侧栏的键盘</h3><p>将 theme 属性设置为 <code>custom</code> 来展示键盘的右侧栏，常用于输入金额的场景。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>
  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;custom&quot;</span>
  <span class="hljs-attr">extra-key</span>=<span class="hljs-string">&quot;.&quot;</span>
  <span class="hljs-attr">close-button-text</span>=<span class="hljs-string">&quot;完成&quot;</span>
  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;show = false&quot;</span>
  @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span>
  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="shen-fen-zheng-hao-jian-pan" tabindex="-1">身份证号键盘</h3><p>通过 <code>extra-key</code> 属性可以设置左下角按键内容，比如需要输入身份证号时，可以将 <code>extra-key</code> 设置为 <code>X</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">touchstart.stop</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>
  弹出身份证号键盘
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>
  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">extra-key</span>=<span class="hljs-string">&quot;X&quot;</span>
  <span class="hljs-attr">close-button-text</span>=<span class="hljs-string">&quot;完成&quot;</span>
  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;show = false&quot;</span>
  @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span>
  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jian-pan-biao-ti" tabindex="-1">键盘标题</h3><p>通过 <code>title</code> 属性可以设置键盘标题。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">touchstart.stop</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>
  弹出带标题的键盘
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>
  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;键盘标题&quot;</span>
  <span class="hljs-attr">extra-key</span>=<span class="hljs-string">&quot;.&quot;</span>
  <span class="hljs-attr">close-button-text</span>=<span class="hljs-string">&quot;完成&quot;</span>
  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;show = false&quot;</span>
  @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span>
  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="pei-zhi-duo-ge-an-jian" tabindex="-1">配置多个按键</h3><p>当 theme 为 <code>custom</code> 时，支持以数组的形式配置两个 <code>extra-key</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">touchstart.stop</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>
  弹出配置多个按键的键盘
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>
  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;custom&quot;</span>
  <span class="hljs-attr">:extra-key</span>=<span class="hljs-string">&quot;[&#39;00&#39;, &#39;.&#39;]&quot;</span>
  <span class="hljs-attr">close-button-text</span>=<span class="hljs-string">&quot;完成&quot;</span>
  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;show = false&quot;</span>
  @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span>
  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="sui-ji-shu-zi-jian-pan" tabindex="-1">随机数字键盘</h3><p>通过 <code>random-key-order</code> 属性可以随机排序数字键盘，常用于安全等级较高的场景。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> @<span class="hljs-attr">touchstart.stop</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span> 弹出配置随机数字的键盘 <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>
  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">random-key-order</span>
  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;show = false&quot;</span>
  @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span>
  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="shuang-xiang-bang-ding" tabindex="-1">双向绑定</h3><p>可以通过 <code>v-model</code> 绑定键盘当前输入值，并通过 <code>maxlength</code> 属性来限制输入长度。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">readonly</span> <span class="hljs-attr">clickable</span> @<span class="hljs-attr">touchstart.stop</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">:maxlength</span>=<span class="hljs-string">&quot;6&quot;</span>
  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;show = false&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">return</span> {
      show,
      value,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前输入值</td><td><em>string</em></td><td>-</td></tr><tr><td>show</td><td>是否显示键盘</td><td><em>boolean</em></td><td>-</td></tr><tr><td>title</td><td>键盘标题</td><td><em>string</em></td><td>-</td></tr><tr><td>theme</td><td>样式风格，可选值为 <code>custom</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td>maxlength</td><td>输入值最大长度</td><td><em>number | string</em></td><td><code>Infinity</code></td></tr><tr><td>transition</td><td>是否开启过场动画</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>z-index</td><td>键盘 z-index 层级</td><td><em>number | string</em></td><td><code>100</code></td></tr><tr><td>extra-key</td><td>底部额外按键的内容</td><td><em>string | string[]</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>close-button-text</td><td>关闭按钮文字，空则不展示</td><td><em>string</em></td><td>-</td></tr><tr><td>delete-button-text</td><td>删除按钮文字，空则展示删除图标</td><td><em>string</em></td><td>-</td></tr><tr><td>close-button-loading</td><td>是否将关闭按钮设置为加载中状态，仅在 <code>theme=&quot;custom&quot;</code> 时有效</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-delete-key</td><td>是否展示删除图标</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>blur-on-close</td><td>是否在点击关闭按钮时触发 blur 事件</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>hide-on-click-outside</td><td>是否在点击外部时收起键盘</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>teleport</td><td>指定挂载的节点，等同于 Teleport 组件的 <a href="https://cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to 属性</a></td><td><em>string | Element</em></td><td>-</td></tr><tr><td>safe-area-inset-bottom</td><td>是否开启<a href="#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei" target="_blank">底部安全区适配</a></td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>random-key-order</td><td>是否将通过随机顺序展示按键</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>input</td><td>点击按键时触发</td><td><em>key: string</em></td></tr><tr><td>delete</td><td>点击删除键时触发</td><td>-</td></tr><tr><td>close</td><td>点击关闭按钮时触发</td><td>-</td></tr><tr><td>blur</td><td>点击关闭按钮或非键盘区域时触发</td><td>-</td></tr><tr><td>show</td><td>键盘完全弹出时触发</td><td>-</td></tr><tr><td>hide</td><td>键盘完全收起时触发</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>delete</td><td>自定义删除按键内容</td></tr><tr><td>extra-key</td><td>自定义左下角按键内容</td></tr><tr><td>title-left</td><td>自定义标题栏左侧内容</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">NumberKeyboardProps</span>, <span class="hljs-title class_">NumberKeyboardTheme</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-number-keyboard-background</td><td><em>var(--van-gray-2)</em></td><td>-</td></tr><tr><td>--van-number-keyboard-key-height</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-number-keyboard-key-font-size</td><td><em>28px</em></td><td>-</td></tr><tr><td>--van-number-keyboard-key-active-color</td><td><em>var(--van-gray-3)</em></td><td>-</td></tr><tr><td>--van-number-keyboard-key-background</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-number-keyboard-delete-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-number-keyboard-title-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-number-keyboard-title-height</td><td><em>34px</em></td><td>-</td></tr><tr><td>--van-number-keyboard-title-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-number-keyboard-close-padding</td><td><em>0 var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-number-keyboard-close-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-number-keyboard-close-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-number-keyboard-button-text-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-number-keyboard-button-background</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-number-keyboard-z-index</td><td><em>100</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="zai-zhuo-mian-duan-wu-fa-cao-zuo-zu-jian" tabindex="-1">在桌面端无法操作组件？</h3><p>参见<a href="#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei" target="_blank">桌面端适配</a>。</p></div>`,20),p=[d];function r(o,c){return t(),a("div",l,p)}const u=s(e,[["render",r]]);export{u as default};

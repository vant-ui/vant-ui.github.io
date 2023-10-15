import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as l}from"./vue-libs-19c20d28.js";const t={},p={class:"van-doc-markdown-body"},c=l(`<h1>常见问题</h1><div class="van-doc-card"><h3 id="ru-he-zi-ding-yi-vant-zu-jian-de-yang-shi" tabindex="-1">如何自定义 Vant 组件的样式？</h3><h4 id="1.-zhu-ti-ding-zhi" tabindex="-1">1. 主题定制</h4><p>Vant 基于 CSS 变量提供了主题定制的能力，可以对组件样式进行统一修改，详见 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 全局配置</a> 组件。</p><h4 id="2.-fu-gai-mo-ren-yang-shi" tabindex="-1">2. 覆盖默认样式</h4><p>如果主题定制不能满足你的需求，也可以通过<strong>自定义样式类</strong>来覆盖默认样式，参考下面的示例：</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-button&quot;</span>&gt;</span>按钮<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-comment">/** 覆盖 Button 最外层元素的样式 */</span>
  <span class="hljs-selector-class">.my-button</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;
  }

  <span class="hljs-comment">/** 覆盖 Button 内部子元素的样式 */</span>
  <span class="hljs-selector-class">.my-button</span> <span class="hljs-selector-class">.van-button__text</span> {
    <span class="hljs-attribute">color</span>: red;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zai-html-zhong-wu-fa-zheng-que-xuan-ran-zu-jian" tabindex="-1">在 HTML 中无法正确渲染组件？</h3><p>在 HTML 中使用 Vant 组件时，你可能会碰到部分示例代码无法正确渲染的情况，比如下面的用法：</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单元格&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;内容&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单元格&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;内容&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre><p>这是因为 HTML 并不支持自闭合的自定义元素，也就是说 <code>&lt;van-cell /&gt;</code> 这样的语法是不被识别的，使用完整的闭合标签可以避免这个问题：</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单元格&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;内容&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单元格&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;内容&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre><p>在单文件组件、字符串模板和 JSX 中可以使用自闭合的自定义元素，因此不会出现这个问题。</p></div><div class="van-doc-card"><h3 id="zai-ios-shang-wu-fa-chu-fa-zu-jian-de-dian-ji-fan-kui-xiao-guo" tabindex="-1">在 iOS 上无法触发组件的点击反馈效果？</h3><p>这是因为 iOS Safari 默认不会触发 <code>:active</code> 伪类，解决方法是在 <code>body</code> 标签上添加一个空的 <code>ontouchstart</code> 属性：</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">body</span> <span class="hljs-attr">ontouchstart</span>=<span class="hljs-string">&quot;&quot;</span>&gt;</span>
  ...
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
</code></pre><p>参考链接：<a href="https://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari/33681490#33681490" target="_blank">stackoverflow - :active pseudo-class doesn&#39;t work in mobile safari</a></p></div><div class="van-doc-card"><h3 id="wei-shi-me-mei-you-select-zu-jian" tabindex="-1">为什么没有 Select 组件？</h3><p>Select 是桌面端常用的组件，但它的交互形式不适合移动端。</p><p>在移动端，我们推荐使用 <a href="#/zh-CN/picker" target="_blank">Picker 选择器组件</a> 作为代替。</p></div><div class="van-doc-card"><h3 id="shi-fou-zhi-chi-zai-uni-app-zhong-shi-yong" tabindex="-1">是否支持在 uni-app 中使用？</h3><p>Vant 所有组件都是基于 Vue 框架实现的，没有针对 uni-app 进行适配，因此不保证各个组件在 uni-app 下的可用性。</p><p>如果你在 uni-app 中使用 Vant 遇到问题，建议向 uni-app 进行反馈。</p></div><div class="van-doc-card"><h3 id="bu-fen-zu-jian-wu-fa-zai-zhuo-mian-duan-jin-xing-cao-zuo" tabindex="-1">部分组件无法在桌面端进行操作？</h3><p>参见<a href="#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei" target="_blank">桌面端适配</a>。</p></div><div class="van-doc-card"><h3 id="ru-he-jin-xing-yi-dong-duan-xiang-ying-shi-gua-pei" tabindex="-1">如何进行移动端响应式适配？</h3><p>参见<a href="#/zh-CN/advanced-usage#liu-lan-qi-gua-pei" target="_blank">浏览器适配</a>。</p></div>`,8),e=[c];function i(h,o){return a(),n("div",p,e)}const g=s(t,[["render",i]]);export{g as default};

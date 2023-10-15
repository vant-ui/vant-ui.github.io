import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as p}from"./vue-libs-19c20d28.js";const t={},l={class:"van-doc-markdown-body"},e=p(`<h1>进阶用法</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>通过本章节你可以了解到 Vant 的一些进阶用法，比如组件插槽用法、多种浏览器适配方式。</p></div><h2 id="zu-jian-yong-fa" tabindex="-1">组件用法</h2><div class="van-doc-card"><h3 id="zu-jian-zhu-ce" tabindex="-1">组件注册</h3><p>Vant 支持多种组件注册方式，请根据实际业务需要进行选择。</p><h4 id="quan-ju-zhu-ce" tabindex="-1">全局注册</h4><p>全局注册后，你可以在 app 下的任意子组件中使用注册的 Vant 组件。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();

<span class="hljs-comment">// 方式一. 通过 app.use 注册</span>
<span class="hljs-comment">// 注册完成后，在模板中通过 &lt;van-button&gt; 或 &lt;VanButton&gt; 标签来使用按钮组件</span>
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Button</span>);

<span class="hljs-comment">// 方式二. 通过 app.component 注册</span>
<span class="hljs-comment">// 注册完成后，在模板中通过 &lt;van-button&gt; 标签来使用按钮组件</span>
app.<span class="hljs-title function_">component</span>(<span class="hljs-title class_">Button</span>.<span class="hljs-property">name</span>, <span class="hljs-title class_">Button</span>);
</code></pre><h4 id="ju-bu-zhu-ce" tabindex="-1">局部注册</h4><p>局部注册后，你可以在当前组件中使用注册的 Vant 组件。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: {
    [<span class="hljs-title class_">Button</span>.<span class="hljs-property">name</span>]: <span class="hljs-title class_">Button</span>,
  },
};
</code></pre><blockquote><p>对于组件注册更详细的介绍，请参考 <a href="https://cn.vuejs.org/guide/components/registration.html" target="_blank">Vue 官方文档 - 组件注册</a>。</p></blockquote><h4 id="script-setup" tabindex="-1">&lt;script setup&gt;</h4><p>在 <code>&lt;script setup&gt;</code> 中可以直接使用 Vant 组件，不需要进行组件注册。</p><pre><code class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><h4 id="jsx-tsx" tabindex="-1">JSX/TSX</h4><p>在 JSX 和 TSX 中可以直接使用 Vant 组件，不需要进行组件注册。</p><pre><code class="language-jsx"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">render</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> /&gt;</span></span>;
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zu-jian-cha-cao" tabindex="-1">组件插槽</h3><p>Vant 提供了丰富的组件插槽，通过插槽可以对组件的某一部分进行个性化定制。如果你对 Vue 的插槽不太熟悉，可以阅读 Vue 官方文档中的<a href="https://cn.vuejs.org/guide/components/slots.html" target="_blank">插槽章节</a>。下面是通过插槽来定制 Checkbox 图标的示例：</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- 使用组件提供的 icon 插槽 --&gt;</span>
  <span class="hljs-comment">&lt;!-- 将默认图标替换为个性化图片 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;props&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;props.checked ? activeIcon : inactiveIcon&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">data</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">checked</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">activeIcon</span>:
        <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png&#39;</span>,
      <span class="hljs-attr">inactiveIcon</span>:
        <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png&#39;</span>,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zu-jian-shi-li-fang-fa" tabindex="-1">组件实例方法</h3><p>Vant 中的许多组件提供了实例方法，调用实例方法时，我们需要通过 <a href="https://cn.vuejs.org/guide/essentials/template-refs.html" target="_blank">ref</a> 来注册组件引用信息，引用信息将会注册在父组件的<code>$refs</code>对象上。注册完成后，我们可以通过<code>this.$refs.xxx</code>访问到对应的组件实例，并调用上面的实例方法。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 通过 ref 属性将组件绑定到 this.$refs.checkbox 上 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;checkbox&quot;</span>&gt;</span> 复选框 <span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">data</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">checked</span>: <span class="hljs-literal">false</span>,
    };
  },
  <span class="hljs-comment">// 注意：组件挂载后才能访问到 ref 对象</span>
  <span class="hljs-title function_">mounted</span>(<span class="hljs-params"></span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">$refs</span>.<span class="hljs-property">checkbox</span>.<span class="hljs-title function_">toggle</span>();
  },
};
</code></pre></div><h2 id="liu-lan-qi-gua-pei" tabindex="-1">浏览器适配</h2><div class="van-doc-card"><h3 id="viewport-bu-ju" tabindex="-1">Viewport 布局</h3><p>Vant 默认使用 <code>px</code> 作为样式单位，如果需要使用 <code>viewport</code> 单位 (vw, vh, vmin, vmax)，推荐使用 <a href="https://github.com/evrone/postcss-px-to-viewport" target="_blank">postcss-px-to-viewport</a> 进行转换。</p><p><a href="https://github.com/evrone/postcss-px-to-viewport" target="_blank">postcss-px-to-viewport</a> 是一款 PostCSS 插件，用于将 px 单位转化为 vw/vh 单位。</p><h4 id="postcss-postcss-shi-li-pei-zhi" tabindex="-1">PostCSS PostCSS 示例配置</h4><p>下面提供了一份基本的 PostCSS 示例配置，可以在此配置的基础上根据项目需求进行修改。</p><pre><code class="language-js"><span class="hljs-comment">// postcss.config.js</span>
<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">plugins</span>: {
    <span class="hljs-string">&#39;postcss-px-to-viewport&#39;</span>: {
      <span class="hljs-attr">viewportWidth</span>: <span class="hljs-number">375</span>,
    },
  },
};
</code></pre><blockquote><p>Tips: 在配置 postcss-loader 时，应避免 ignore node_modules 目录，否则将导致 Vant 样式无法被编译。</p></blockquote></div><div class="van-doc-card"><h3 id="rem-bu-ju-gua-pei" tabindex="-1">Rem 布局适配</h3><p>如果需要使用 <code>rem</code> 单位进行适配，推荐使用以下两个工具：</p><ul><li><a href="https://github.com/cuth/postcss-pxtorem" target="_blank">postcss-pxtorem</a> 是一款 PostCSS 插件，用于将 px 单位转化为 rem 单位</li><li><a href="https://github.com/amfe/lib-flexible" target="_blank">lib-flexible</a> 用于设置 rem 基准值</li></ul><h4 id="postcss-shi-li-pei-zhi" tabindex="-1">PostCSS 示例配置</h4><p>下面提供了一份基本的 PostCSS 示例配置，可以在此配置的基础上根据项目需求进行修改。</p><pre><code class="language-js"><span class="hljs-comment">// postcss.config.js</span>
<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">plugins</span>: {
    <span class="hljs-string">&#39;postcss-pxtorem&#39;</span>: {
      <span class="hljs-attr">rootValue</span>: <span class="hljs-number">37.5</span>,
      <span class="hljs-attr">propList</span>: [<span class="hljs-string">&#39;*&#39;</span>],
    },
  },
};
</code></pre><blockquote><p>Tips: 在配置 postcss-pxtorem 时，同样应避免 ignore node_modules 目录，否则会导致 Vant 样式无法被编译。</p></blockquote><h4 id="qi-ta-she-ji-gao-chi-cun" tabindex="-1">其他设计稿尺寸</h4><p>如果设计稿的尺寸不是 375，而是 750 或其他大小，可以将 <code>rootValue</code> 配置调整为:</p><pre><code class="language-js"><span class="hljs-comment">// postcss.config.js</span>
<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">plugins</span>: {
    <span class="hljs-comment">// postcss-pxtorem 插件的版本需要 &gt;= 5.0.0</span>
    <span class="hljs-string">&#39;postcss-pxtorem&#39;</span>: {
      <span class="hljs-title function_">rootValue</span>(<span class="hljs-params">{ file }</span>) {
        <span class="hljs-keyword">return</span> file.<span class="hljs-title function_">indexOf</span>(<span class="hljs-string">&#39;vant&#39;</span>) !== -<span class="hljs-number">1</span> ? <span class="hljs-number">37.5</span> : <span class="hljs-number">75</span>;
      },
      <span class="hljs-attr">propList</span>: [<span class="hljs-string">&#39;*&#39;</span>],
    },
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zhuo-mian-duan-gua-pei" tabindex="-1">桌面端适配</h3><p>Vant 是一个面向移动端的组件库，因此默认只适配了移动端设备，这意味着组件只监听了移动端的 <code>touch</code> 事件，没有监听桌面端的 <code>mouse</code> 事件。</p><p>如果你需要在桌面端使用 Vant，可以引入我们提供的 <a href="https://github.com/vant-ui/vant/tree/main/packages/vant-touch-emulator" target="_blank">@vant/touch-emulator</a>，这个库会在桌面端自动将 <code>mouse</code> 事件转换成对应的 <code>touch</code> 事件，使得组件能够在桌面端使用。</p><pre><code class="language-bash"><span class="hljs-comment"># 安装模块</span>
npm i @vant/touch-emulator -S
</code></pre><pre><code class="language-js"><span class="hljs-comment">// 引入模块后自动生效</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@vant/touch-emulator&#39;</span>;
</code></pre></div><div class="van-doc-card"><h3 id="di-bu-an-quan-qu-gua-pei" tabindex="-1">底部安全区适配</h3><p>iPhone X 等机型底部存在底部指示条，指示条的操作区域与页面底部存在重合，容易导致用户误操作，因此我们需要针对这些机型进行安全区适配。Vant 中部分组件提供了 <code>safe-area-inset-top</code> 或 <code>safe-area-inset-bottom</code> 属性，设置该属性后，即可在对应的机型上开启适配，如下示例：</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 在 head 标签中添加 meta 标签，并设置 viewport-fit=cover 值 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">meta</span>
  <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;viewport&quot;</span>
  <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover&quot;</span>
/&gt;</span>

<span class="hljs-comment">&lt;!-- 开启顶部安全区适配 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-nav-bar</span> <span class="hljs-attr">safe-area-inset-top</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- 开启底部安全区适配 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span> <span class="hljs-attr">safe-area-inset-bottom</span> /&gt;</span>
</code></pre><img src="https://fastly.jsdelivr.net/npm/@vant/assets/safearea.png"></div>`,11),c=[e];function o(h,r){return a(),n("div",l,c)}const j=s(t,[["render",o]]);export{j as default};

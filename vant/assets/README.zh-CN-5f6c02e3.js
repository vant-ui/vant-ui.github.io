import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as t}from"./vue-libs-19c20d28.js";const l={},p={class:"van-doc-markdown-body"},e=t(`<h1>ConfigProvider 全局配置</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于全局配置 Vant 组件，提供深色模式、主题定制等能力。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ConfigProvider</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ConfigProvider</span>);
</code></pre></div><h2 id="shen-se-mo-shi" tabindex="-1">深色模式</h2><div class="van-doc-card"><h3 id="kai-qi-shen-se-mo-shi" tabindex="-1">开启深色模式</h3><p>将 ConfigProvider 组件的 <code>theme</code> 属性设置为 <code>dark</code>，可以开启深色模式。</p><p>深色模式会全局生效，使页面上的所有 Vant 组件变为深色风格。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-config-provider</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;dark&quot;</span>&gt;</span>...<span class="hljs-tag">&lt;/<span class="hljs-name">van-config-provider</span>&gt;</span>
</code></pre><p>值得注意的是，开启 Vant 的深色模式只会影响 Vant 组件的 UI，并不会影响全局的文字颜色或背景颜色，你可以参考以下 CSS 来设置一些全局样式：</p><pre><code class="language-css"><span class="hljs-selector-class">.van-theme-dark</span> <span class="hljs-selector-tag">body</span> {
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#f5f5f5</span>;
  <span class="hljs-attribute">background-color</span>: black;
}
</code></pre></div><div class="van-doc-card"><h3 id="dong-tai-qie-huan" tabindex="-1">动态切换</h3><p>通过动态设置 <code>theme</code> 属性，可以在浅色风格和深色风格之间进行切换。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-config-provider</span> <span class="hljs-attr">:theme</span>=<span class="hljs-string">&quot;theme&quot;</span>&gt;</span>...<span class="hljs-tag">&lt;/<span class="hljs-name">van-config-provider</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> theme = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;light&#39;</span>);

    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      theme.<span class="hljs-property">value</span> = <span class="hljs-string">&#39;dark&#39;</span>;
    }, <span class="hljs-number">1000</span>);

    <span class="hljs-keyword">return</span> { theme };
  },
};
</code></pre></div><h2 id="ding-zhi-zhu-ti" tabindex="-1">定制主题</h2><div class="van-doc-card"><h3 id="jie-shao-1" tabindex="-1">介绍</h3><p>Vant 组件通过丰富的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties" target="_blank">CSS 变量</a> 来组织样式，通过覆盖这些 CSS 变量，可以实现<strong>定制主题、动态切换主题</strong>等效果。</p><h4 id="shi-li" tabindex="-1">示例</h4><p>以 Button 组件为例，查看组件的样式，可以看到 <code>.van-button--primary</code> 类名上存在以下变量：</p><pre><code class="language-css"><span class="hljs-selector-class">.van-button--primary</span> {
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--van-button-primary-color);
  <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">var</span>(--van-button-primary-background);
}
</code></pre><p>这些变量的默认值被定义在 <code>:root</code> 节点上，HTML 里的所有子节点都可以访问到这些变量：</p><pre><code class="language-css"><span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-attr">--van-white</span>: <span class="hljs-number">#fff</span>;
  <span class="hljs-attr">--van-blue</span>: <span class="hljs-number">#1989fa</span>;
  <span class="hljs-attr">--van-button-primary-color</span>: <span class="hljs-built_in">var</span>(--van-white);
  <span class="hljs-attr">--van-button-primary-background</span>: <span class="hljs-built_in">var</span>(--van-primary-color);
}
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-css-bian-liang" tabindex="-1">自定义 CSS 变量</h3><h4 id="tong-guo-css-fu-gai" tabindex="-1">通过 CSS 覆盖</h4><p>你可以直接在代码中覆盖这些 CSS 变量，Button 组件的样式会随之发生改变：</p><pre><code class="language-css"><span class="hljs-comment">/* 添加这段样式后，Primary Button 会变成红色 */</span>
<span class="hljs-selector-pseudo">:root</span><span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-attr">--van-button-primary-background</span>: red;
}
</code></pre><blockquote><p>注意：为什么要写两个重复的 <code>:root</code>？</p><p>由于 vant 中的主题变量也是在 <code>:root</code> 下声明的，所以在有些情况下会由于优先级的问题无法成功覆盖。通过 <code>:root:root</code> 可以显式地让你所写内容的优先级更高一些，从而确保主题变量的成功覆盖。</p></blockquote><h4 id="tong-guo-configprovider-fu-gai" tabindex="-1">通过 ConfigProvider 覆盖</h4><p><code>ConfigProvider</code> 组件提供了覆盖 CSS 变量的能力，你需要在根节点包裹一个 <code>ConfigProvider</code> 组件，并通过 <code>theme-vars</code> 属性来配置一些主题变量。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-config-provider</span> <span class="hljs-attr">:theme-vars</span>=<span class="hljs-string">&quot;themeVars&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-form</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;rate&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;评分&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;rate&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;slider&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;滑块&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;slider&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 16px&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">round</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">native-type</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>
        提交
      <span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-form</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-config-provider</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> rate = <span class="hljs-title function_">ref</span>(<span class="hljs-number">4</span>);
    <span class="hljs-keyword">const</span> slider = <span class="hljs-title function_">ref</span>(<span class="hljs-number">50</span>);

    <span class="hljs-comment">// themeVars 内的值会被转换成对应 CSS 变量</span>
    <span class="hljs-comment">// 比如 sliderBarHeight 会转换成 \`--van-slider-bar-height\`</span>
    <span class="hljs-keyword">const</span> themeVars = <span class="hljs-title function_">reactive</span>({
      <span class="hljs-attr">rateIconFullColor</span>: <span class="hljs-string">&#39;#07c160&#39;</span>,
      <span class="hljs-attr">sliderBarHeight</span>: <span class="hljs-string">&#39;4px&#39;</span>,
      <span class="hljs-attr">sliderButtonWidth</span>: <span class="hljs-string">&#39;20px&#39;</span>,
      <span class="hljs-attr">sliderButtonHeight</span>: <span class="hljs-string">&#39;20px&#39;</span>,
      <span class="hljs-attr">sliderActiveBackground</span>: <span class="hljs-string">&#39;#07c160&#39;</span>,
      <span class="hljs-attr">buttonPrimaryBackground</span>: <span class="hljs-string">&#39;#07c160&#39;</span>,
      <span class="hljs-attr">buttonPrimaryBorderColor</span>: <span class="hljs-string">&#39;#07c160&#39;</span>,
    });

    <span class="hljs-keyword">return</span> {
      rate,
      slider,
      themeVars,
    };
  },
};
</code></pre><h4 id="css-bian-liang-sheng-xiao-fan-wei" tabindex="-1">CSS 变量生效范围</h4><p>默认情况下，themeVars 产生的 CSS 变量是设置在组件根节点上的，因此只会影响它的子组件的样式，不会影响整个页面。</p><p>你可以通过 <code>theme-vars-scope</code> 属性来修改 CSS 变量的生效范围。比如将 <code>theme-vars-scope</code> 设置为 <code>global</code>，此时 themeVars 产生的 CSS 变量会设置到 HTML 的根节点，并对整个页面内的所有组件生效。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-config-provider</span> <span class="hljs-attr">:theme-vars</span>=<span class="hljs-string">&quot;themeVars&quot;</span> <span class="hljs-attr">theme-vars-scope</span>=<span class="hljs-string">&quot;global&quot;</span>&gt;</span>
  ...
<span class="hljs-tag">&lt;/<span class="hljs-name">van-config-provider</span>&gt;</span>
</code></pre><h4 id="zai-typescript-zhong-shi-yong" tabindex="-1">在 TypeScript 中使用</h4><p>在 TypeScript 中定义 themeVars 时，建议使用 Vant 提供的 <code>ConfigProviderThemeVars</code> 类型，可以提供完善的类型提示：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ConfigProviderThemeVars</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> <span class="hljs-attr">themeVars</span>: <span class="hljs-title class_">ConfigProviderThemeVars</span> = {
  <span class="hljs-attr">sliderBarHeight</span>: <span class="hljs-string">&#39;4px&#39;</span>,
};
</code></pre></div><div class="van-doc-card"><h3 id="jie-he-shen-se-mo-shi-yu-css-bian-liang" tabindex="-1">结合深色模式与 CSS 变量</h3><p>如果需要单独定义深色模式或浅色模式下的 CSS 变量，可以使用 <code>theme-vars-dark</code> 和 <code>theme-vars-light</code> 属性。</p><ul><li><code>theme-vars-dark</code>: 仅在深色模式下生效的 CSS 变量，优先级高于 <code>theme-vars</code> 中定义的变量。</li><li><code>theme-vars-light</code>: 仅在浅色模式下生效的 CSS 变量，优先级高于 <code>theme-vars</code> 中定义的变量。</li></ul><h4 id="shi-li-1" tabindex="-1">示例</h4><p>以下方的 <code>buttonPrimaryBackground</code> 变量为例, 在深色模式下的值为 <code>blue</code>，在浅色模式下的值为 <code>green</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-config-provider</span>
  <span class="hljs-attr">:theme-vars</span>=<span class="hljs-string">&quot;themeVars&quot;</span>
  <span class="hljs-attr">:theme-vars-dark</span>=<span class="hljs-string">&quot;themeVarsDark&quot;</span>
  <span class="hljs-attr">:theme-vars-light</span>=<span class="hljs-string">&quot;themeVarsLight&quot;</span>
&gt;</span>
  ...
<span class="hljs-tag">&lt;/<span class="hljs-name">van-config-provider</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> themeVars = <span class="hljs-title function_">reactive</span>({ <span class="hljs-attr">buttonPrimaryBackground</span>: <span class="hljs-string">&#39;red&#39;</span> });
    <span class="hljs-keyword">const</span> themeVarsDark = <span class="hljs-title function_">reactive</span>({ <span class="hljs-attr">buttonPrimaryBackground</span>: <span class="hljs-string">&#39;blue&#39;</span> });
    <span class="hljs-keyword">const</span> themeVarsLight = <span class="hljs-title function_">reactive</span>({ <span class="hljs-attr">buttonPrimaryBackground</span>: <span class="hljs-string">&#39;green&#39;</span> });

    <span class="hljs-keyword">return</span> {
      themeVars,
      themeVarsDark,
      themeVarsLight,
    };
  },
};
</code></pre><h4 id="shi-yong-lei-ming" tabindex="-1">使用类名</h4><p>此外，你也可以使用 <code>.van-theme-light</code> 和 <code>.van-theme-dark</code> 这两个类名选择器来单独修改浅色或深色模式下的基础变量和组件变量。</p><pre><code class="language-css"><span class="hljs-selector-class">.van-theme-light</span> {
  <span class="hljs-attr">--van-white</span>: white;
}

<span class="hljs-selector-class">.van-theme-dark</span> {
  <span class="hljs-attr">--van-white</span>: black;
}
</code></pre></div><h2 id="zhu-ti-bian-liang" tabindex="-1">主题变量</h2><div class="van-doc-card"><h3 id="bian-liang-lei-xing" tabindex="-1">变量类型</h3><p>Vant 中的 CSS 变量分为 <strong>基础变量</strong> 和 <strong>组件变量</strong>。组件变量会继承基础变量，因此在修改基础变量后，会影响所有相关的组件。</p><h4 id="xiu-gai-bian-liang" tabindex="-1">修改变量</h4><p>CSS 变量存在继承关系，组件变量会寻找最近的父级基础变量进行继承。</p><p>因此修改基础变量存在一定限制，你需要使用 <code>:root</code> 选择器或 ConfigProvider 组件的 global 模式来修改基础变量。否则，组件变量可能会无法正确继承基础变量。</p><p>以 <code>--van-primary-color</code> 这个基础变量为例：</p><ul><li>可以通过 <code>:root</code> 选择器修改：</li></ul><pre><code class="language-css"><span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-attr">--van-primary-color</span>: red;
}
</code></pre><ul><li>可以通过 ConfigProvider 组件的 global 模式修改：</li></ul><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-config-provider</span>
  <span class="hljs-attr">:theme-vars</span>=<span class="hljs-string">&quot;{ primaryColor: &#39;red&#39; }&quot;</span>
  <span class="hljs-attr">theme-vars-scope</span>=<span class="hljs-string">&quot;global&quot;</span>
&gt;</span>
  ...
<span class="hljs-tag">&lt;/<span class="hljs-name">van-config-provider</span>&gt;</span>
</code></pre><ul><li>不可以通过 ConfigProvider 组件默认的 <code>local</code> 模式修改：</li></ul><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-config-provider</span> <span class="hljs-attr">:theme-vars</span>=<span class="hljs-string">&quot;{ primaryColor: &#39;red&#39; }&quot;</span>&gt;</span>
  ...
<span class="hljs-tag">&lt;/<span class="hljs-name">van-config-provider</span>&gt;</span>
</code></pre><p>对于组件变量，则没有上述限制，可以通过任意方式修改。</p></div><div class="van-doc-card"><h3 id="ji-chu-bian-liang-lie-biao" tabindex="-1">基础变量列表</h3><p>下面是所有的基础变量：</p><pre><code class="language-less"><span class="hljs-comment">// Color Palette</span>
<span class="hljs-attr">--van-black</span>: #000;
<span class="hljs-attr">--van-white</span>: #fff;
<span class="hljs-attr">--van-gray-1</span>: #f7f8fa;
<span class="hljs-attr">--van-gray-2</span>: #f2f3f5;
<span class="hljs-attr">--van-gray-3</span>: #ebedf0;
<span class="hljs-attr">--van-gray-4</span>: #dcdee0;
<span class="hljs-attr">--van-gray-5</span>: #c8c9cc;
<span class="hljs-attr">--van-gray-6</span>: #969799;
<span class="hljs-attr">--van-gray-7</span>: #646566;
<span class="hljs-attr">--van-gray-8</span>: #323233;
<span class="hljs-attr">--van-red</span>: #ee0a24;
<span class="hljs-attr">--van-blue</span>: #1989fa;
<span class="hljs-attr">--van-orange</span>: #ff976a;
<span class="hljs-attr">--van-orange-dark</span>: #ed6a0c;
<span class="hljs-attr">--van-orange-light</span>: #fffbe8;
<span class="hljs-attr">--van-green</span>: #07c160;

<span class="hljs-comment">// Gradient Colors</span>
<span class="hljs-attr">--van-gradient-red</span>: linear-gradient(to <span class="hljs-attribute">right, #ff6034, #ee0a24);
--van-gradient-orange</span>: <span class="hljs-built_in">linear-gradient</span>(to right, <span class="hljs-number">#ffd01e</span>, <span class="hljs-number">#ff8917</span>);

<span class="hljs-comment">// Component Colors</span>
<span class="hljs-attr">--van-primary-color</span>: var(<span class="hljs-attr">--van-blue</span>);
<span class="hljs-attr">--van-success-color</span>: var(<span class="hljs-attr">--van-green</span>);
<span class="hljs-attr">--van-danger-color</span>: var(<span class="hljs-attr">--van-red</span>);
<span class="hljs-attr">--van-warning-color</span>: var(<span class="hljs-attr">--van-orange</span>);
<span class="hljs-attr">--van-text-color</span>: var(<span class="hljs-attr">--van-gray-8</span>);
<span class="hljs-attr">--van-text-color-2</span>: var(<span class="hljs-attr">--van-gray-6</span>);
<span class="hljs-attr">--van-text-color-3</span>: var(<span class="hljs-attr">--van-gray-5</span>);
<span class="hljs-attr">--van-active-color</span>: var(<span class="hljs-attr">--van-gray-2</span>);
<span class="hljs-attr">--van-active-opacity</span>: 0.6;
<span class="hljs-attr">--van-disabled-opacity</span>: 0.5;
<span class="hljs-attr">--van-background</span>: var(<span class="hljs-attr">--van-gray-1</span>);
<span class="hljs-attr">--van-background-2</span>: var(<span class="hljs-attr">--van-white</span>);

<span class="hljs-comment">// Padding</span>
<span class="hljs-attr">--van-padding-base</span>: 4px;
<span class="hljs-attr">--van-padding-xs</span>: 8px;
<span class="hljs-attr">--van-padding-sm</span>: 12px;
<span class="hljs-attr">--van-padding-md</span>: 16px;
<span class="hljs-attr">--van-padding-lg</span>: 24px;
<span class="hljs-attr">--van-padding-xl</span>: 32px;

<span class="hljs-comment">// Font</span>
<span class="hljs-attr">--van-font-size-xs</span>: 10px;
<span class="hljs-attr">--van-font-size-sm</span>: 12px;
<span class="hljs-attr">--van-font-size-md</span>: 14px;
<span class="hljs-attr">--van-font-size-lg</span>: 16px;
<span class="hljs-attr">--van-font-bold</span>: 600;
<span class="hljs-attr">--van-line-height-xs</span>: 14px;
<span class="hljs-attr">--van-line-height-sm</span>: 18px;
<span class="hljs-attr">--van-line-height-md</span>: 20px;
<span class="hljs-attr">--van-line-height-lg</span>: 22px;
<span class="hljs-attr">--van-base-font</span>: -apple-system, BlinkMacSystemFont, &#39;Helvetica Neue&#39;, Helvetica,
  Segoe UI, Arial, Roboto, &#39;PingFang SC&#39;, &#39;miui&#39;, &#39;Hiragino Sans GB&#39;, &#39;Microsoft Yahei&#39;,
  sans-serif;
<span class="hljs-attr">--van-price-font</span>: Avenir-Heavy, PingFang SC, Helvetica Neue, Arial, sans-serif;

<span class="hljs-comment">// Animation</span>
<span class="hljs-attr">--van-duration-base</span>: 0.3s;
<span class="hljs-attr">--van-duration-fast</span>: 0.2s;
<span class="hljs-attr">--van-ease-out</span>: ease-out;
<span class="hljs-attr">--van-ease-in</span>: ease-in;

<span class="hljs-comment">// Border</span>
<span class="hljs-attr">--van-border-color</span>: var(<span class="hljs-attr">--van-gray-3</span>);
<span class="hljs-attr">--van-border-width</span>: 1px;
<span class="hljs-attr">--van-radius-sm</span>: 2px;
<span class="hljs-attr">--van-radius-md</span>: 4px;
<span class="hljs-attr">--van-radius-lg</span>: 8px;
<span class="hljs-attr">--van-radius-max</span>: 999px;
</code></pre><p>你可以在各个组件文档底部的表格中查看组件变量。</p></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>theme</td><td>主题风格，设置为 <code>dark</code> 来开启深色模式，全局生效</td><td><em>ConfigProviderTheme</em></td><td><code>light</code></td></tr><tr><td>theme-vars</td><td>自定义主题变量，局部生效</td><td><em>object</em></td><td>-</td></tr><tr><td>theme-vars-dark</td><td>仅在深色模式下生效的主题变量，优先级高于 <code>theme-vars</code></td><td><em>object</em></td><td>-</td></tr><tr><td>theme-vars-light</td><td>仅在浅色模式下生效的主题变量，优先级高于 <code>theme-vars</code></td><td><em>object</em></td><td>-</td></tr><tr><td>theme-vars-scope</td><td>默认仅影响子组件的样式，设置为 <code>global</code> 整个页面生效</td><td><em>ConfigProviderThemeVarsScope</em></td><td><code>local</code></td></tr><tr><td>tag</td><td>根节点对应的 HTML 标签名</td><td><em>string</em></td><td><code>div</code></td></tr><tr><td>z-index</td><td>设置所有弹窗类组件的 z-index，该属性对全局生效</td><td><em>number</em></td><td><code>2000</code></td></tr><tr><td>icon-prefix</td><td>所有图标的类名前缀，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">class-prefix 属性</a></td><td><em>string</em></td><td><code>van-icon</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">ConfigProviderProps</span>,
  <span class="hljs-title class_">ConfigProviderTheme</span>,
  <span class="hljs-title class_">ConfigProviderThemeVars</span>,
  <span class="hljs-title class_">ConfigProviderThemeVarsScope</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div>`,16),r=[e];function c(o,h){return a(),n("div",p,r)}const j=s(l,[["render",c]]);export{j as default};

import{o as a,a as n,z as t}from"./vue-libs.d5ee895a.js";const l={class:"van-doc-markdown-body"},p=t(`<h1>ConfigProvider \u5168\u5C40\u914D\u7F6E</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5168\u5C40\u914D\u7F6E Vant \u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u6DF1\u8272\u6A21\u5F0F\u3001\u4E3B\u9898\u5B9A\u5236\u7B49\u80FD\u529B\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ConfigProvider</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ConfigProvider</span>);
</code></pre></div><h2 id="shen-se-mo-shi" tabindex="-1">\u6DF1\u8272\u6A21\u5F0F</h2><div class="van-doc-card"><h3 id="kai-qi-shen-se-mo-shi" tabindex="-1">\u5F00\u542F\u6DF1\u8272\u6A21\u5F0F</h3><p>\u5C06 ConfigProvider \u7EC4\u4EF6\u7684 <code>theme</code> \u5C5E\u6027\u8BBE\u7F6E\u4E3A <code>dark</code>\uFF0C\u53EF\u4EE5\u5F00\u542F\u6DF1\u8272\u6A21\u5F0F\u3002</p><p>\u6DF1\u8272\u6A21\u5F0F\u4F1A\u5168\u5C40\u751F\u6548\uFF0C\u4F7F\u9875\u9762\u4E0A\u7684\u6240\u6709 Vant \u7EC4\u4EF6\u53D8\u4E3A\u6DF1\u8272\u98CE\u683C\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-config-provider</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;dark&quot;</span>&gt;</span>...<span class="hljs-tag">&lt;/<span class="hljs-name">van-config-provider</span>&gt;</span>
</code></pre><p>\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u5F00\u542F Vant \u7684\u6DF1\u8272\u6A21\u5F0F\u53EA\u4F1A\u5F71\u54CD Vant \u7EC4\u4EF6\u7684 UI\uFF0C\u5E76\u4E0D\u4F1A\u5F71\u54CD\u5168\u5C40\u7684\u6587\u5B57\u989C\u8272\u6216\u80CC\u666F\u989C\u8272\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003\u4EE5\u4E0B CSS \u6765\u8BBE\u7F6E\u4E00\u4E9B\u5168\u5C40\u6837\u5F0F\uFF1A</p><pre><code class="language-css"><span class="hljs-selector-class">.van-theme-dark</span> <span class="hljs-selector-tag">body</span> {
  text-<span class="hljs-attribute">color</span>: <span class="hljs-number">#f5f5f5</span>;
  <span class="hljs-attribute">background-color</span>: black;
}
</code></pre></div><div class="van-doc-card"><h3 id="dong-tai-qie-huan" tabindex="-1">\u52A8\u6001\u5207\u6362</h3><p>\u901A\u8FC7\u52A8\u6001\u8BBE\u7F6E <code>theme</code> \u5C5E\u6027\uFF0C\u53EF\u4EE5\u5728\u6D45\u8272\u98CE\u683C\u548C\u6DF1\u8272\u98CE\u683C\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-config-provider</span> <span class="hljs-attr">:theme</span>=<span class="hljs-string">&quot;theme&quot;</span>&gt;</span>...<span class="hljs-tag">&lt;/<span class="hljs-name">van-config-provider</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> theme = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;light&#39;</span>);

    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      theme.<span class="hljs-property">value</span> = <span class="hljs-string">&#39;dark&#39;</span>;
    }, <span class="hljs-number">1000</span>);

    <span class="hljs-keyword">return</span> { theme };
  },
};
</code></pre></div><h2 id="ding-zhi-zhu-ti" tabindex="-1">\u5B9A\u5236\u4E3B\u9898</h2><div class="van-doc-card"><h3 id="jie-shao-1" tabindex="-1">\u4ECB\u7ECD</h3><p>Vant \u7EC4\u4EF6\u901A\u8FC7\u4E30\u5BCC\u7684 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties" target="_blank">CSS \u53D8\u91CF</a> \u6765\u7EC4\u7EC7\u6837\u5F0F\uFF0C\u901A\u8FC7\u8986\u76D6\u8FD9\u4E9B CSS \u53D8\u91CF\uFF0C\u53EF\u4EE5\u5B9E\u73B0<strong>\u5B9A\u5236\u4E3B\u9898\u3001\u52A8\u6001\u5207\u6362\u4E3B\u9898</strong>\u7B49\u6548\u679C\u3002</p><h4 id="shi-li" tabindex="-1">\u793A\u4F8B</h4><p>\u4EE5 Button \u7EC4\u4EF6\u4E3A\u4F8B\uFF0C\u67E5\u770B\u7EC4\u4EF6\u7684\u6837\u5F0F\uFF0C\u53EF\u4EE5\u770B\u5230 <code>.van-button--primary</code> \u7C7B\u540D\u4E0A\u5B58\u5728\u4EE5\u4E0B\u53D8\u91CF\uFF1A</p><pre><code class="language-css"><span class="hljs-selector-class">.van-button--primary</span> {
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--van-button-primary-color);
  <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">var</span>(--van-button-primary-background);
}
</code></pre><p>\u8FD9\u4E9B\u53D8\u91CF\u7684\u9ED8\u8BA4\u503C\u88AB\u5B9A\u4E49\u5728 <code>:root</code> \u8282\u70B9\u4E0A\uFF0CHTML \u91CC\u7684\u6240\u6709\u5B50\u8282\u70B9\u90FD\u53EF\u4EE5\u8BBF\u95EE\u5230\u8FD9\u4E9B\u53D8\u91CF\uFF1A</p><pre><code class="language-css"><span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-attr">--van-white</span>: <span class="hljs-number">#fff</span>;
  <span class="hljs-attr">--van-blue</span>: <span class="hljs-number">#1989fa</span>;
  <span class="hljs-attr">--van-button-primary-color</span>: <span class="hljs-built_in">var</span>(--van-white);
  <span class="hljs-attr">--van-button-primary-background</span>: <span class="hljs-built_in">var</span>(--van-primary-color);
}
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-css-bian-liang" tabindex="-1">\u81EA\u5B9A\u4E49 CSS \u53D8\u91CF</h3><h4 id="tong-guo-css-fu-gai" tabindex="-1">\u901A\u8FC7 CSS \u8986\u76D6</h4><p>\u4F60\u53EF\u4EE5\u76F4\u63A5\u5728\u4EE3\u7801\u4E2D\u8986\u76D6\u8FD9\u4E9B CSS \u53D8\u91CF\uFF0CButton \u7EC4\u4EF6\u7684\u6837\u5F0F\u4F1A\u968F\u4E4B\u53D1\u751F\u6539\u53D8\uFF1A</p><pre><code class="language-css"><span class="hljs-comment">/* \u6DFB\u52A0\u8FD9\u6BB5\u6837\u5F0F\u540E\uFF0CPrimary Button \u4F1A\u53D8\u6210\u7EA2\u8272 */</span>
<span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-attr">--van-button-primary-background</span>: red;
}
</code></pre><h4 id="tong-guo-configprovider-fu-gai" tabindex="-1">\u901A\u8FC7 ConfigProvider \u8986\u76D6</h4><p><code>ConfigProvider</code> \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u8986\u76D6 CSS \u53D8\u91CF\u7684\u80FD\u529B\uFF0C\u4F60\u9700\u8981\u5728\u6839\u8282\u70B9\u5305\u88F9\u4E00\u4E2A <code>ConfigProvider</code> \u7EC4\u4EF6\uFF0C\u5E76\u901A\u8FC7 <code>theme-vars</code> \u5C5E\u6027\u6765\u914D\u7F6E\u4E00\u4E9B\u4E3B\u9898\u53D8\u91CF\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-config-provider</span> <span class="hljs-attr">:theme-vars</span>=<span class="hljs-string">&quot;themeVars&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-form</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;rate&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u8BC4\u5206&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;rate&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;slider&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6ED1\u5757&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;slider&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 16px&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">round</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">native-type</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>
        \u63D0\u4EA4
      <span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-form</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-config-provider</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> rate = <span class="hljs-title function_">ref</span>(<span class="hljs-number">4</span>);
    <span class="hljs-keyword">const</span> slider = <span class="hljs-title function_">ref</span>(<span class="hljs-number">50</span>);

    <span class="hljs-comment">// themeVars \u5185\u7684\u503C\u4F1A\u88AB\u8F6C\u6362\u6210\u5BF9\u5E94 CSS \u53D8\u91CF</span>
    <span class="hljs-comment">// \u6BD4\u5982 sliderBarHeight \u4F1A\u8F6C\u6362\u6210 \`--van-slider-bar-height\`</span>
    <span class="hljs-keyword">const</span> themeVars = {
      <span class="hljs-attr">rateIconFullColor</span>: <span class="hljs-string">&#39;#07c160&#39;</span>,
      <span class="hljs-attr">sliderBarHeight</span>: <span class="hljs-string">&#39;4px&#39;</span>,
      <span class="hljs-attr">sliderButtonWidth</span>: <span class="hljs-string">&#39;20px&#39;</span>,
      <span class="hljs-attr">sliderButtonHeight</span>: <span class="hljs-string">&#39;20px&#39;</span>,
      <span class="hljs-attr">sliderActiveBackground</span>: <span class="hljs-string">&#39;#07c160&#39;</span>,
      <span class="hljs-attr">buttonPrimaryBackground</span>: <span class="hljs-string">&#39;#07c160&#39;</span>,
      <span class="hljs-attr">buttonPrimaryBorderColor</span>: <span class="hljs-string">&#39;#07c160&#39;</span>,
    };

    <span class="hljs-keyword">return</span> {
      rate,
      slider,
      themeVars,
    };
  },
};
</code></pre><blockquote><p>\u6CE8\u610F\uFF1AConfigProvider \u4EC5\u5F71\u54CD\u5B83\u7684\u5B50\u7EC4\u4EF6\u7684\u6837\u5F0F\uFF0C\u4E0D\u5F71\u54CD\u5168\u5C40 root \u8282\u70B9\u3002</p></blockquote><h4 id="zai-typescript-zhong-shi-yong" tabindex="-1">\u5728 TypeScript \u4E2D\u4F7F\u7528</h4><p>\u5728 TypeScript \u4E2D\u5B9A\u4E49 themeVars \u65F6\uFF0C\u5EFA\u8BAE\u4F7F\u7528 Vant \u63D0\u4F9B\u7684 <code>ConfigProviderThemeVars</code> \u7C7B\u578B\uFF0C\u53EF\u4EE5\u63D0\u4F9B\u5B8C\u5584\u7684\u7C7B\u578B\u63D0\u793A\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ConfigProviderThemeVars</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> <span class="hljs-attr">themeVars</span>: <span class="hljs-title class_">ConfigProviderThemeVars</span> = {
  <span class="hljs-attr">sliderBarHeight</span>: <span class="hljs-string">&#39;4px&#39;</span>,
};
</code></pre></div><div class="van-doc-card"><h3 id="jie-he-shen-se-mo-shi-yu-css-bian-liang" tabindex="-1">\u7ED3\u5408\u6DF1\u8272\u6A21\u5F0F\u4E0E CSS \u53D8\u91CF</h3><p>\u5982\u679C\u9700\u8981\u5355\u72EC\u5B9A\u4E49\u6DF1\u8272\u6A21\u5F0F\u6216\u6D45\u8272\u6A21\u5F0F\u4E0B\u7684 CSS \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>theme-vars-dark</code> \u548C <code>theme-vars-light</code> \u5C5E\u6027\u3002</p><ul><li><code>theme-vars-dark</code>: \u4EC5\u5728\u6DF1\u8272\u6A21\u5F0F\u4E0B\u751F\u6548\u7684 CSS \u53D8\u91CF\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E <code>theme-vars</code> \u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF\u3002</li><li><code>theme-vars-light</code>: \u4EC5\u5728\u6D45\u8272\u6A21\u5F0F\u4E0B\u751F\u6548\u7684 CSS \u53D8\u91CF\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E <code>theme-vars</code> \u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF\u3002</li></ul><h4 id="shi-li-1" tabindex="-1">\u793A\u4F8B</h4><p>\u4EE5\u4E0B\u65B9\u7684 <code>buttonPrimaryBackground</code> \u53D8\u91CF\u4E3A\u4F8B, \u5728\u6DF1\u8272\u6A21\u5F0F\u4E0B\u7684\u503C\u4E3A <code>blue</code>\uFF0C\u5728\u6D45\u8272\u6A21\u5F0F\u4E0B\u7684\u503C\u4E3A <code>green</code>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-config-provider</span>
  <span class="hljs-attr">:theme-vars</span>=<span class="hljs-string">&quot;themeVars&quot;</span>
  <span class="hljs-attr">:theme-vars-dark</span>=<span class="hljs-string">&quot;themeVarsDark&quot;</span>
  <span class="hljs-attr">:theme-vars-light</span>=<span class="hljs-string">&quot;themeVarsLight&quot;</span>
&gt;</span>
  ...
<span class="hljs-tag">&lt;/<span class="hljs-name">van-config-provider</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> themeVars = { <span class="hljs-attr">buttonPrimaryBackground</span>: <span class="hljs-string">&#39;red&#39;</span> };
    <span class="hljs-keyword">const</span> themeVarsDark = { <span class="hljs-attr">buttonPrimaryBackground</span>: <span class="hljs-string">&#39;blue&#39;</span> };
    <span class="hljs-keyword">const</span> themeVarsLight = { <span class="hljs-attr">buttonPrimaryBackground</span>: <span class="hljs-string">&#39;green&#39;</span> };

    <span class="hljs-keyword">return</span> {
      themeVars,
      themeVarsDark,
      themeVarsLight,
    };
  },
};
</code></pre></div><h2 id="zhu-ti-bian-liang" tabindex="-1">\u4E3B\u9898\u53D8\u91CF</h2><div class="van-doc-card"><h3 id="ji-chu-bian-liang" tabindex="-1">\u57FA\u7840\u53D8\u91CF</h3><p>Vant \u4E2D\u7684 CSS \u53D8\u91CF\u5206\u4E3A <strong>\u57FA\u7840\u53D8\u91CF</strong> \u548C <strong>\u7EC4\u4EF6\u53D8\u91CF</strong>\u3002\u7EC4\u4EF6\u53D8\u91CF\u4F1A\u7EE7\u627F\u57FA\u7840\u53D8\u91CF\uFF0C\u56E0\u6B64\u5728\u4FEE\u6539\u57FA\u7840\u53D8\u91CF\u540E\uFF0C\u4F1A\u5F71\u54CD\u6240\u6709\u76F8\u5173\u7684\u7EC4\u4EF6\u3002</p><h4 id="xiu-gai-bian-liang" tabindex="-1">\u4FEE\u6539\u53D8\u91CF</h4><p>\u7531\u4E8E CSS \u53D8\u91CF\u7EE7\u627F\u673A\u5236\u7684\u539F\u56E0\uFF0C\u4E24\u8005\u7684\u4FEE\u6539\u65B9\u5F0F\u6709\u4E00\u5B9A\u5DEE\u5F02\uFF1A</p><ul><li>\u57FA\u7840\u53D8\u91CF\u53EA\u80FD\u901A\u8FC7 <code>:root \u9009\u62E9\u5668</code> \u4FEE\u6539\uFF0C\u4E0D\u80FD\u901A\u8FC7 <code>ConfigProvider \u7EC4\u4EF6</code> \u4FEE\u6539\u3002</li><li>\u7EC4\u4EF6\u53D8\u91CF\u53EF\u4EE5\u901A\u8FC7 <code>:root \u9009\u62E9\u5668</code> \u548C <code>ConfigProvider \u7EC4\u4EF6</code> \u4FEE\u6539\u3002</li></ul><p>\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>.van-theme-light</code> \u548C <code>.van-theme-dark</code> \u8FD9\u4E24\u4E2A\u7C7B\u540D\u9009\u62E9\u5668\u6765\u5355\u72EC\u4FEE\u6539\u6D45\u8272\u6216\u6DF1\u8272\u6A21\u5F0F\u4E0B\u7684\u57FA\u7840\u53D8\u91CF\u548C\u7EC4\u4EF6\u53D8\u91CF\u3002</p><h4 id="bian-liang-lie-biao" tabindex="-1">\u53D8\u91CF\u5217\u8868</h4><p>\u4E0B\u9762\u662F\u6240\u6709\u7684\u57FA\u7840\u53D8\u91CF\uFF1A</p><pre><code class="language-less"><span class="hljs-comment">// Color Palette</span>
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
<span class="hljs-attr">--van-link-color</span>: #576b95;
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
</code></pre><p>\u4F60\u53EF\u4EE5\u5728\u5404\u4E2A\u7EC4\u4EF6\u6587\u6863\u5E95\u90E8\u7684\u8868\u683C\u4E2D\u67E5\u770B\u7EC4\u4EF6\u53D8\u91CF\u3002</p></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>theme</td><td>\u4E3B\u9898\u98CE\u683C\uFF0C\u8BBE\u7F6E\u4E3A <code>dark</code> \u6765\u5F00\u542F\u6DF1\u8272\u6A21\u5F0F\uFF0C\u5168\u5C40\u751F\u6548</td><td><em>ConfigProviderTheme</em></td><td><code>light</code></td></tr><tr><td>theme-vars</td><td>\u81EA\u5B9A\u4E49\u4E3B\u9898\u53D8\u91CF\uFF0C\u5C40\u90E8\u751F\u6548</td><td><em>object</em></td><td>-</td></tr><tr><td>theme-vars-dark</td><td>\u4EC5\u5728\u6DF1\u8272\u6A21\u5F0F\u4E0B\u751F\u6548\u7684\u4E3B\u9898\u53D8\u91CF\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E <code>theme-vars</code></td><td><em>object</em></td><td>-</td></tr><tr><td>theme-vars-light</td><td>\u4EC5\u5728\u6D45\u8272\u6A21\u5F0F\u4E0B\u751F\u6548\u7684\u4E3B\u9898\u53D8\u91CF\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E <code>theme-vars</code></td><td><em>object</em></td><td>-</td></tr><tr><td>tag <code>v3.1.2</code></td><td>\u6839\u8282\u70B9\u5BF9\u5E94\u7684 HTML \u6807\u7B7E\u540D</td><td><em>string</em></td><td><code>div</code></td></tr><tr><td>z-index <code>v3.6.0</code></td><td>\u8BBE\u7F6E\u6240\u6709\u5F39\u7A97\u7C7B\u7EC4\u4EF6\u7684 z-index\uFF0C\u8BE5\u5C5E\u6027\u5BF9\u5168\u5C40\u751F\u6548</td><td><em>number</em></td><td><code>2000</code></td></tr><tr><td>icon-prefix <code>v3.1.3</code></td><td>\u6240\u6709\u56FE\u6807\u7684\u7C7B\u540D\u524D\u7F00\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">class-prefix \u5C5E\u6027</a></td><td><em>string</em></td><td><code>van-icon</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">ConfigProviderProps</span>,
  <span class="hljs-title class_">ConfigProviderTheme</span>,
  <span class="hljs-title class_">ConfigProviderThemeVars</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div>`,15),e=[p],i={__name:"README.zh-CN",setup(r,{expose:s}){return s({frontmatter:{}}),(o,h)=>(a(),n("div",l,e))}};export{i as default};

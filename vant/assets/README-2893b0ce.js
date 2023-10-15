import{_ as s}from"./locales-be796722.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const l={},p={class:"van-doc-markdown-body"},e=n(`<h1>Barrage</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>To realize the critical subtitle function when watching the video. Please upgrade <code>vant</code> to &gt;= v4.4.0 before using this component.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Barrage</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Barrage</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-barrage</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;list&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;video&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 100%; height: 150px&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-barrage</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-space</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-top: 10px&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;add&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span> barrage <span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-space</span>&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> defaultList = [
      { <span class="hljs-attr">id</span>: <span class="hljs-number">100</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Lightweight&#39;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">101</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Customizable&#39;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">102</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Mobile&#39;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">103</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Vue&#39;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">104</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Library&#39;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">105</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;VantUI&#39;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">106</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;666&#39;</span> },
    ];

    <span class="hljs-keyword">const</span> list = <span class="hljs-title function_">ref</span>([...defaultList]);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">add</span> = (<span class="hljs-params"></span>) =&gt; {
      list.<span class="hljs-property">value</span>.<span class="hljs-title function_">push</span>({ <span class="hljs-attr">id</span>: <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>(), <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Barrage&#39;</span> });
    };
    <span class="hljs-keyword">return</span> { list, add };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="imitate-video-barrage" tabindex="-1">Imitate video barrage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-barrage</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;list&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;barrage&quot;</span> <span class="hljs-attr">:auto-play</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;video&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 100%; height: 150px&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-barrage</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-space</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-top: 10px&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;add&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;!isPlay&quot;</span>&gt;</span>
    barrage
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggle()&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>
    {{ isPlay ? &#39;pause&#39; : &#39;play&#39; }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-space</span>&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> defaultList = [
      { <span class="hljs-attr">id</span>: <span class="hljs-number">100</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Lightweight&#39;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">101</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Customizable&#39;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">102</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Mobile&#39;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">103</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Vue&#39;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">104</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Library&#39;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">105</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;VantUI&#39;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">106</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;666&#39;</span> },
    ];

    <span class="hljs-keyword">const</span> list = <span class="hljs-title function_">ref</span>([...defaultList]);
    <span class="hljs-keyword">const</span> barrage = ref&lt;<span class="hljs-title class_">BarrageInstance</span>&gt;();
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">add</span> = (<span class="hljs-params"></span>) =&gt; {
      list.<span class="hljs-property">value</span>.<span class="hljs-title function_">push</span>({ <span class="hljs-attr">id</span>: <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>(), <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Barrage&#39;</span> });
    };

    <span class="hljs-keyword">const</span> [isPlay, toggle] = <span class="hljs-title function_">useToggle</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-title function_">watch</span>(isPlay, <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">if</span> (isPlay.<span class="hljs-property">value</span>) barrage.<span class="hljs-property">value</span>?.<span class="hljs-title function_">play</span>();
      <span class="hljs-keyword">else</span> barrage.<span class="hljs-property">value</span>?.<span class="hljs-title function_">pause</span>();
    });

    <span class="hljs-keyword">return</span> { list, barrage, isPlay, toggle, add };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Barrage data</td><td><em>BarrageItem[]</em></td><td>-</td></tr><tr><td>auto-play</td><td>Whether to play the bullet screen automatically</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>rows</td><td>The number of lines of text</td><td><em>number | string</em></td><td><code>4</code></td></tr><tr><td>top</td><td>Spacing between the top of the barrage area, unit <code>px</code></td><td><em>number | string</em></td><td><code>10</code></td></tr><tr><td>duration</td><td>Text animation duration, unit <code>ms</code></td><td><em>number | string</em></td><td><code>4000</code></td></tr><tr><td>delay</td><td>Barrage animation delay, unit <code>ms</code></td><td><em>number</em></td><td><code>300</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3><p>Use <a href="https://vuejs.org/guide/essentials/template-refs.html" target="_blank">ref</a> to get Barrage instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>play</td><td>Play barrage</td><td>-</td><td>-</td></tr><tr><td>pause</td><td>Pause barrage</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Default slot</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">BarrageProps</span>, <span class="hljs-title class_">BarrageItem</span>, <span class="hljs-title class_">BarrageInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-barrage-font-size</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-barrage-space</td><td><em>10px</em></td><td>-</td></tr><tr><td>--van-barrage-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-barrage-font</td><td><em>inherit</em></td><td>-</td></tr></tbody></table></div>`,13),r=[e];function c(h,d){return a(),t("div",p,r)}const j=s(l,[["render",c]]);export{j as default};

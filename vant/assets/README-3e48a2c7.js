import{_ as l}from"./locales-e2cb6d3e.js";import{o as d,a as o,d as t,g as s,t as e,z as a}from"./vue-libs-19c20d28.js";const p={},c={class:"van-doc-markdown-body"},r=a(`<h1>PullRefresh</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to provide interactive operations for pull-down refresh.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">PullRefresh</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">PullRefresh</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2>`,4),h={class:"van-doc-card"},i=t("h3",{id:"basic-usage",tabindex:"-1"},"Basic Usage",-1),u=t("p",null,[s("The "),t("code",null,"refresh"),s(" event will be Emitted when pull refresh, you should set "),t("code",null,"v-model"),s(" to "),t("code",null,"false"),s(" to reset loading status after process refresh event.")],-1),g={class:"language-html"},m=a('<span class="hljs-tag">&lt;<span class="hljs-name">van-pull-refresh</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;loading&quot;</span> @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;onRefresh&quot;</span>&gt;</span>',1),j=t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"p"),s(">")],-1),f=t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"p"),s(">")],-1),_=t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"van-pull-refresh"),s(">")],-1),v=a(`<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> count = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> loading = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onRefresh</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;Refresh Success&#39;</span>);
        loading.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
        count.<span class="hljs-property">value</span>++;
      }, <span class="hljs-number">1000</span>);
    };

    <span class="hljs-keyword">return</span> {
      count,
      loading,
      onRefresh,
    };
  },
};
</code></pre>`,1),b={class:"van-doc-card"},y=t("h3",{id:"success-tip",tabindex:"-1"},"Success Tip",-1),w=t("p",null,[s("Use "),t("code",null,"success-text"),s(" to set the success prompt after the refresh is successful")],-1),x={class:"language-html"},q=a(`<span class="hljs-tag">&lt;<span class="hljs-name">van-pull-refresh</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;isLoading&quot;</span>
  <span class="hljs-attr">success-text</span>=<span class="hljs-string">&quot;Refresh success&quot;</span>
  @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;onRefresh&quot;</span>
&gt;</span>`,1),k=t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"p"),s(">")],-1),R=t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"p"),s(">")],-1),T=t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"van-pull-refresh"),s(">")],-1),C={class:"van-doc-card"},S=t("h3",{id:"custom-tips",tabindex:"-1"},"Custom Tips",-1),P=t("p",null,"Use slots to custom tips.",-1),D={class:"language-html"},E=a('<span class="hljs-tag">&lt;<span class="hljs-name">van-pull-refresh</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;isLoading&quot;</span> <span class="hljs-attr">:head-height</span>=<span class="hljs-string">&quot;80&quot;</span> @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;onRefresh&quot;</span>&gt;</span>',1),z=t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"pulling"),s("="),t("span",{class:"hljs-string"},'"props"'),s(">")],-1),U=a(`<span class="hljs-tag">&lt;<span class="hljs-name">img</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;doge&quot;</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/doge.png&quot;</span>
      <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ transform: \`scale(\${props.distance / 80})\` }&quot;</span>
    /&gt;</span>`,1),A=t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")],-1),L=t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"loosing"),s(">")],-1),N=a(`<span class="hljs-tag">&lt;<span class="hljs-name">img</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;doge&quot;</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/doge.png&quot;</span>
    /&gt;</span>`,1),V=t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")],-1),B=t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"loading"),s(">")],-1),I=a(`<span class="hljs-tag">&lt;<span class="hljs-name">img</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;doge&quot;</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/doge-fire.jpeg&quot;</span>
    /&gt;</span>`,1),H=t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")],-1),M=t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"p"),s(">")],-1),W=t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"p"),s(">")],-1),$=t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"van-pull-refresh"),s(">")],-1),F=a(`<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.doge</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">140px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">72px</span>;
    <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">8px</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">4px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>`,3),G=a(`<h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Loading status</td><td><em>boolean</em></td><td>-</td></tr><tr><td>pulling-text</td><td>Text to show when pulling</td><td><em>string</em></td><td><code>Pull to refresh...</code></td></tr><tr><td>loosing-text</td><td>Text to show when loosing</td><td><em>string</em></td><td><code>Loose to refresh...</code></td></tr><tr><td>loading-text</td><td>Text to show when loading</td><td><em>string</em></td><td><code>Loading...</code></td></tr><tr><td>success-text</td><td>Text to show when loading success</td><td><em>string</em></td><td>-</td></tr><tr><td>success-duration</td><td>Success text display duration(ms)</td><td><em>number | string</em></td><td><code>500</code></td></tr><tr><td>animation-duration</td><td>Animation duration</td><td><em>number | string</em></td><td><code>300</code></td></tr><tr><td>head-height</td><td>Height of head</td><td><em>number | string</em></td><td><code>50</code></td></tr><tr><td>pull-distance</td><td>The distance to trigger the pull refresh</td><td><em>number | string</em></td><td>same as <code>head-height</code></td></tr><tr><td>disabled</td><td>Whether to disable pull refresh</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>refresh</td><td>Emitted after pulling refresh</td><td>-</td></tr><tr><td>change</td><td>Emitted when draging or status changed</td><td><em>{ status: string, distance: number }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td>default</td><td>Default slot</td><td>-</td></tr><tr><td>normal</td><td>Content of head when at normal status</td><td>-</td></tr><tr><td>pulling</td><td>Content of head when at pulling</td><td><em>{ distance: number }</em></td></tr><tr><td>loosing</td><td>Content of head when at loosing</td><td><em>{ distance: number }</em></td></tr><tr><td>loading</td><td>Content of head when at loading</td><td><em>{ distance: number }</em></td></tr><tr><td>success</td><td>Content of head when succeed</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">PullRefreshProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-pull-refresh-head-height</td><td><em>50px</em></td><td>-</td></tr><tr><td>--van-pull-refresh-head-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-pull-refresh-head-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-pull-refresh-loading-icon-size</td><td><em>16px</em></td><td>-</td></tr></tbody></table></div>`,7);function J(n,K){return d(),o("div",c,[r,t("div",h,[i,u,t("pre",null,[t("code",g,[m,s(`
  `),j,s("Refresh Count: "+e(n.count),1),f,s(`
`),_,s(`
`)])]),v]),t("div",b,[y,w,t("pre",null,[t("code",x,[q,s(`
  `),k,s("Refresh Count: "+e(n.count),1),R,s(`
`),T,s(`
`)])])]),t("div",C,[S,P,t("pre",null,[t("code",D,[E,s(`
  `),z,s(`
    `),U,s(`
  `),A,s(`

  `),L,s(`
    `),N,s(`
  `),V,s(`

  `),B,s(`
    `),I,s(`
  `),H,s(`
  `),M,s("Refresh Count: "+e(n.count),1),W,s(`
`),$,s(`

`),F,s(`
`)])])]),G])}const X=l(p,[["render",J]]);export{X as default};

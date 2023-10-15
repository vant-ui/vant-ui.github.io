import{_ as s}from"./locales-be796722.js";import{o as n,a,z as t}from"./vue-libs-19c20d28.js";const e={},l={class:"van-doc-markdown-body"},p=t(`<h1>Quickstart</h1><h2 id="install" tabindex="-1">Install</h2><div class="van-doc-card"><h3 id="npm" tabindex="-1">npm</h3><p>Using <code>npm</code> to install:</p><pre><code class="language-bash"><span class="hljs-comment"># install latest Vant for Vue 3 project</span>
npm i vant

<span class="hljs-comment"># install Vant 2 for Vue 2 project</span>
npm i vant@latest-v2
</code></pre><p>Using <code>yarn</code>, <code>pnpm</code>, or <code>bun</code>:</p><pre><code class="language-bash"><span class="hljs-comment"># with yarn</span>
yarn add vant

<span class="hljs-comment"># with pnpm</span>
pnpm add vant

<span class="hljs-comment"># with Bun</span>
bun add vant
</code></pre></div><div class="van-doc-card"><h3 id="using-in-a-new-project" tabindex="-1">Using in a New Project</h3><p>If you need to create a new project, we recommend using <a href="https://vitejs.dev/" target="_blank">Vite</a> or <a href="https://nuxtjs.org/" target="_blank">Nuxt framework</a>.</p><p>Here are the example projects provided by Vant official. You can clone these projects and copy the code.</p><ul><li><a href="https://github.com/vant-ui/vant-demo/tree/master/vant/vite" target="_blank">vant-demo - vite</a>: Build an application using Vue 3, Vant 4, and Vite.</li><li><a href="https://github.com/vant-ui/vant-demo/tree/master/vant/nuxt3" target="_blank">vant-demo - nuxt3</a>: Build an application using Vue 3, Nuxt 3, and Vant 4.</li></ul></div><div class="van-doc-card"><h3 id="cdn" tabindex="-1">CDN</h3><p>If you only need to develop a simple HTML page, you can directly include the CDN links in the HTML file. After that, you can access all the components through the global variable <code>vant</code>.</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- import style --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span>
  <span class="hljs-attr">rel</span>=<span class="hljs-string">&quot;stylesheet&quot;</span>
  <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/vant@4/lib/index.css&quot;</span>
/&gt;</span>

<span class="hljs-comment">&lt;!-- import script --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/vue@3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/vant@4/lib/vant.min.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-comment">// Render the Button component</span>
  <span class="hljs-keyword">const</span> app = <span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">createApp</span>({
    <span class="hljs-attr">template</span>: <span class="hljs-string">\`&lt;van-button&gt;Button&lt;/van-button&gt;\`</span>,
  });
  app.<span class="hljs-title function_">use</span>(vant);

  <span class="hljs-comment">// Register Lazyload directive</span>
  app.<span class="hljs-title function_">use</span>(vant.<span class="hljs-property">Lazyload</span>);

  <span class="hljs-comment">// Call function component</span>
  vant.<span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;Message&#39;</span>);

  app.<span class="hljs-title function_">mount</span>(<span class="hljs-string">&#39;#app&#39;</span>);
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><h4 id="free-cdn" tabindex="-1">Free CDN</h4><p>You can use Vant through these free CDN services:</p><ul><li><a href="https://www.jsdelivr.com/package/npm/vant" target="_blank">jsdelivr</a></li><li><a href="https://cdnjs.com/libraries/vant" target="_blank">cdnjs</a></li><li><a href="https://unpkg.com/" target="_blank">unpkg</a></li></ul><p>Note: Free CDN is generally used for making prototypes or personal projects. It is not recommended to use free CDN in production environment.</p><p>For enterprise developers, we recommend:</p><ul><li>install with npm, use build tools to bundle it</li><li>download the scripts, host it on your own server</li></ul></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><p>The basic usage of Vant components:</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// 1. Import the components you need</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
<span class="hljs-comment">// 2. Import the components style</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;vant/lib/index.css&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();

<span class="hljs-comment">// 3. Register the components you need</span>
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Button</span>);
</code></pre><blockquote><p>Tip: Vant supports Tree Shaking by default, so you don&#39;t need to configure any plugins, the unused JS code will be removed by Tree Shaking, but CSS styles cannot be optimized by it.</p></blockquote></div><div class="van-doc-card"><h3 id="import-on-demand" tabindex="-1">Import on demand</h3><p>If you are using <code>vite</code>, <code>webpack</code> or <code>vue-cli</code>, you can use <a href="https://github.com/unplugin/unplugin-vue-components" target="_blank">unplugin-vue-components</a>, this plugin can help you to auto importing components.</p><p>Vant officially wrote an automatic import style parser <a href="https://github.com/youzan/vant/tree/main/packages/vant-auto-import-resolver" target="_blank">@vant/auto-import-resolver</a> based on <code>unplugin-vue-components</code>, both of which are used together.</p><p>Compared with conventional usage, this method can introduce the CSS style of components on demand, thus reducing part of the code volume, but it will become more cumbersome to use. If the business&#39;s volume requirements for CSS are not particularly extreme, we recommend a simpler general usage.</p><h4 id="1.-install-plugin" tabindex="-1">1. Install Plugin</h4><pre><code class="language-bash"><span class="hljs-comment"># with npm</span>
npm i @vant/auto-import-resolver unplugin-vue-components -D

<span class="hljs-comment"># with yarn</span>
yarn add @vant/auto-import-resolver unplugin-vue-components -D

<span class="hljs-comment"># with pnpm</span>
pnpm add @vant/auto-import-resolver unplugin-vue-components -D

<span class="hljs-comment"># with Bun</span>
bun add @vant/auto-import-resolver unplugin-vue-components -D
</code></pre><h4 id="2.-configure-plugin" tabindex="-1">2. Configure Plugin</h4><p>For <code>vite</code> based project，configure the plugin in the <code>vite.config.js</code> file:</p><pre><code class="language-js"><span class="hljs-keyword">import</span> vue <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vitejs/plugin-vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Components</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;unplugin-vue-components/vite&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">VantResolver</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/auto-import-resolver&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">plugins</span>: [
    <span class="hljs-title function_">vue</span>(),
    <span class="hljs-title class_">Components</span>({
      <span class="hljs-attr">resolvers</span>: [<span class="hljs-title class_">VantResolver</span>()],
    }),
  ],
};
</code></pre><p>For <code>vue-cli</code> based project，configure the plugin in the <code>vue.config.js</code> file:</p><pre><code class="language-js"><span class="hljs-keyword">const</span> { <span class="hljs-title class_">VantResolver</span> } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;@vant/auto-import-resolver&#39;</span>);
<span class="hljs-keyword">const</span> <span class="hljs-title class_">ComponentsPlugin</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;unplugin-vue-components/webpack&#39;</span>);

<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">configureWebpack</span>: {
    <span class="hljs-attr">plugins</span>: [
      <span class="hljs-title class_">ComponentsPlugin</span>({
        <span class="hljs-attr">resolvers</span>: [<span class="hljs-title class_">VantResolver</span>()],
      }),
    ],
  },
};
</code></pre><p>For <code>webpack</code> based project，configure the plugin in the <code>webpack.config.js</code> file:</p><pre><code class="language-js"><span class="hljs-keyword">const</span> { <span class="hljs-title class_">VantResolver</span> } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;@vant/auto-import-resolver&#39;</span>);
<span class="hljs-keyword">const</span> <span class="hljs-title class_">ComponentsPlugin</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;unplugin-vue-components/webpack&#39;</span>);

<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">plugins</span>: [
    <span class="hljs-title class_">ComponentsPlugin</span>({
      <span class="hljs-attr">resolvers</span>: [<span class="hljs-title class_">VantResolver</span>()],
    }),
  ],
};
</code></pre><h4 id="3.-using-components" tabindex="-1">3. Using Components</h4><p>Then you can using components from Vant in the template, the <code>unplugin-vue-components</code> will automatically import the corresponding Vant components,<code>@vant/auto-import-resolver</code> The corresponding component style will be automatically introduced.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><h4 id="4.-style-of-function-components" tabindex="-1">4. Style of Function Components</h4><p>Some components of Vant are provided as function, including <code>Toast</code>, <code>Dialog</code>, <code>Notify</code> and <code>ImagePreview</code>. When using function components, <code>unplugin-vue-components</code> cannot parse the automatic registration component, resulting in <code>@vant/auto-import-resolver</code> unable to parse the style, so the style needs to be introduced manually.</p><pre><code class="language-js"><span class="hljs-comment">// Toast</span>
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;vant/es/toast/style&#39;</span>;

<span class="hljs-comment">// Dialog</span>
<span class="hljs-keyword">import</span> { showDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;vant/es/dialog/style&#39;</span>;

<span class="hljs-comment">// Notify</span>
<span class="hljs-keyword">import</span> { showNotify } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;vant/es/notify/style&#39;</span>;

<span class="hljs-comment">// ImagePreview</span>
<span class="hljs-keyword">import</span> { showImagePreview } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;vant/es/image-preview/style&#39;</span>;
</code></pre><blockquote><p>Tip: &quot;Full Import&quot; and &quot;On-demand Import&quot; should not be used at the same time, otherwise it will lead to problems such as code duplication and style overrides.</p></blockquote><h4 id="tips" tabindex="-1">Tips</h4><ul><li>&quot;Full Import&quot; and &quot;On-demand Import&quot; should not be used at the same time, otherwise it will lead to problems such as code duplication and style overrides.</li><li>During use, if the component cannot be imported, because <code>unplugin-vue-components</code> is not a plug-in officially maintained by <code>Vant</code>, it is recommended to give feedback under the <a href="https://github.com/antfu/unplugin/unplugin-vue-components" target="_blank">unplugin/unplugin-vue-components</a> repository.</li><li>If it is a similar problem that the style does not take effect, feedback under the <code>Vant</code> repository</li></ul></div><h2 id="with-frameworks" tabindex="-1">With Frameworks</h2><div class="van-doc-card"><h3 id="use-vant-in-nuxt-3" tabindex="-1">Use Vant in Nuxt 3</h3><p>When using Vant in Nuxt 3, you can use <a href="https://github.com/vant-ui/vant-nuxt" target="_blank">vant-nuxt</a>, this module can help you to auto importing components and reduce CSS file size.</p><h4 id="1.-install-module" tabindex="-1">1. Install Module</h4><pre><code class="language-bash"><span class="hljs-comment"># with npm</span>
npm i @vant/nuxt -D

<span class="hljs-comment"># with yarn</span>
yarn add @vant/nuxt -D

<span class="hljs-comment"># with pnpm</span>
pnpm add @vant/nuxt -D

<span class="hljs-comment"># with Bun</span>
bun add @vant/nuxt -D
</code></pre><h4 id="2.-add-module" tabindex="-1">2. Add Module</h4><p>add the module in the <code>nuxt.config.js</code> file:</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">defineNuxtConfig</span>({
  <span class="hljs-attr">modules</span>: [<span class="hljs-string">&#39;@vant/nuxt&#39;</span>],
});
</code></pre><h4 id="3.-using-components-1" tabindex="-1">3. Using Components</h4><p>Then you can using components from Vant in the template, Go to the <a href="https://nuxt.com/docs/guide/directory-structure/components" target="_blank">Nuxt documentation</a> to learn more.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showToast(&#39;toast&#39;)&quot;</span>&gt;</span>button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">VanButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showNotify(&#39;notify&#39;)&quot;</span>&gt;</span>button<span class="hljs-tag">&lt;/<span class="hljs-name">VanButton</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">LazyVanButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;default&quot;</span>&gt;</span>lazy button<span class="hljs-tag">&lt;/<span class="hljs-name">LazyVanButton</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre></div>`,10),o=[p];function c(i,r){return n(),a("div",l,o)}const d=s(e,[["render",c]]);export{d as default};

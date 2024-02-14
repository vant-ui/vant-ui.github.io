/*! For license information please see 9558.be610d5a.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["9558"],{30081:function(s,n,a){"use strict";a.r(n);var t=a("69298");let e=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Quickstart</h1>\n<h2 id="install" tabindex="-1">Install</h2>\n<div class="van-doc-card"><h3 id="npm" tabindex="-1">npm</h3>\n<p>Using <code>npm</code> to install:</p>\n<pre><code class="language-bash"><span class="hljs-comment"># install latest Vant for Vue 3 project</span>\nnpm i vant\n\n<span class="hljs-comment"># install Vant 2 for Vue 2 project</span>\nnpm i vant@latest-v2\n</code></pre>\n<p>Using <code>yarn</code>, <code>pnpm</code>, or <code>bun</code>:</p>\n<pre><code class="language-bash"><span class="hljs-comment"># with yarn</span>\nyarn add vant\n\n<span class="hljs-comment"># with pnpm</span>\npnpm add vant\n\n<span class="hljs-comment"># with Bun</span>\nbun add vant\n</code></pre>\n</div><div class="van-doc-card"><h3 id="using-in-a-new-project" tabindex="-1">Using in a New Project</h3>\n<p>If you need to create a new project, we recommend using <a href="https://github.com/web-infra-dev/rsbuild" target="_blank">Rsbuild</a>, <a href="https://vitejs.dev/" target="_blank">Vite</a> or <a href="https://nuxtjs.org/" target="_blank">Nuxt framework</a>.</p>\n<h4 id="rsbuild" tabindex="-1">Rsbuild</h4>\n<p>Rsbuild is a build tool based on Rspack, developed by the author of Vant, with first-class build speed and development experience, providing first-priority support for Vant.</p>\n<p>You can create a Rsbuild project with the following command:</p>\n<pre><code class="language-bash">npm create rsbuild@latest\n</code></pre>\n<p>Please visit the <a href="https://github.com/web-infra-dev/rsbuild" target="_blank">Rsbuild repository</a> for more information.</p>\n<h4 id="example" tabindex="-1">Example</h4>\n<p>Here are the example projects provided by Vant official. You can clone these projects and copy the code.</p>\n<ul>\n<li><a href="https://github.com/vant-ui/vant-demo/tree/master/vant/rsbuild" target="_blank">vant-demo - rsbuild</a>: Build an application using Vue 3, Vant 4, and Rsbuild.</li>\n<li><a href="https://github.com/vant-ui/vant-demo/tree/master/vant/vite" target="_blank">vant-demo - vite</a>: Build an application using Vue 3, Vant 4, and Vite.</li>\n<li><a href="https://github.com/vant-ui/vant-demo/tree/master/vant/nuxt3" target="_blank">vant-demo - nuxt3</a>: Build an application using Vue 3, Nuxt 3, and Vant 4.</li>\n</ul>\n</div><div class="van-doc-card"><h3 id="cdn" tabindex="-1">CDN</h3>\n<p>If you only need to develop a simple HTML page, you can directly include the CDN links in the HTML file. After that, you can access all the components through the global variable <code>vant</code>.</p>\n<pre><code class="language-html"><span class="hljs-comment">&lt;!-- import style --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">link</span>\n  <span class="hljs-attr">rel</span>=<span class="hljs-string">&quot;stylesheet&quot;</span>\n  <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/vant@4/lib/index.css&quot;</span>\n/&gt;</span>\n\n<span class="hljs-comment">&lt;!-- import script --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/vue@3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/vant@4/lib/vant.min.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">\n  <span class="hljs-comment">// Render the Button component</span>\n  <span class="hljs-keyword">const</span> app = <span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">createApp</span>({\n    <span class="hljs-attr">template</span>: <span class="hljs-string">`&lt;van-button&gt;Button&lt;/van-button&gt;`</span>,\n  });\n  app.<span class="hljs-title function_">use</span>(vant);\n\n  <span class="hljs-comment">// Register Lazyload directive</span>\n  app.<span class="hljs-title function_">use</span>(vant.<span class="hljs-property">Lazyload</span>);\n\n  <span class="hljs-comment">// Call function component</span>\n  vant.<span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;Message&#x27;</span>);\n\n  app.<span class="hljs-title function_">mount</span>(<span class="hljs-string">&#x27;#app&#x27;</span>);\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code></pre>\n<h4 id="free-cdn" tabindex="-1">Free CDN</h4>\n<p>You can use Vant through these free CDN services:</p>\n<ul>\n<li><a href="https://www.jsdelivr.com/package/npm/vant" target="_blank">jsdelivr</a></li>\n<li><a href="https://cdnjs.com/libraries/vant" target="_blank">cdnjs</a></li>\n<li><a href="https://unpkg.com/" target="_blank">unpkg</a></li>\n</ul>\n<p>Note: Free CDN is generally used for making prototypes or personal projects. It is not recommended to use free CDN in production environment.</p>\n<p>For enterprise developers, we recommend:</p>\n<ul>\n<li>install with npm, use build tools to bundle it</li>\n<li>download the scripts, host it on your own server</li>\n</ul>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<p>The basic usage of Vant components:</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-comment">// 1. Import the components you need</span>\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n<span class="hljs-comment">// 2. Import the components style</span>\n<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;vant/lib/index.css&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\n\n<span class="hljs-comment">// 3. Register the components you need</span>\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Button</span>);\n</code></pre>\n<blockquote>\n<p>Tip: Vant supports Tree Shaking by default, so you don\'t need to configure any plugins, the unused JS code will be removed by Tree Shaking, but CSS styles cannot be optimized by it.</p>\n</blockquote>\n</div><div class="van-doc-card"><h3 id="import-on-demand" tabindex="-1">Import on demand</h3>\n<p>If you are using Rsbuild, Vite, webpack or vue-cli, you can use <a href="https://github.com/unplugin/unplugin-vue-components" target="_blank">unplugin-vue-components</a>, this plugin can help you to auto importing components.</p>\n<p>Vant officially wrote an automatic import style parser <a href="https://github.com/youzan/vant/tree/main/packages/vant-auto-import-resolver" target="_blank">@vant/auto-import-resolver</a> based on <code>unplugin-vue-components</code>, both of which are used together.</p>\n<p>Compared with conventional usage, this method can introduce the CSS style of components on demand, thus reducing part of the code volume, but it will become more cumbersome to use. If the business\'s volume requirements for CSS are not particularly extreme, we recommend a simpler general usage.</p>\n<h4 id="1.-install-plugin" tabindex="-1">1. Install Plugin</h4>\n<pre><code class="language-bash"><span class="hljs-comment"># with npm</span>\nnpm i @vant/auto-import-resolver unplugin-vue-components -D\n\n<span class="hljs-comment"># with yarn</span>\nyarn add @vant/auto-import-resolver unplugin-vue-components -D\n\n<span class="hljs-comment"># with pnpm</span>\npnpm add @vant/auto-import-resolver unplugin-vue-components -D\n\n<span class="hljs-comment"># with Bun</span>\nbun add @vant/auto-import-resolver unplugin-vue-components -D\n</code></pre>\n<h4 id="2.-configure-plugin" tabindex="-1">2. Configure Plugin</h4>\n<p>For Rsbuild based project\uFF0Cconfigure the plugin in the <code>rsbuild.config.js</code> file:</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { defineConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@rsbuild/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { pluginVue } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@rsbuild/plugin-vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">Components</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;unplugin-vue-components/rspack&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">VantResolver</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/auto-import-resolver&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">defineConfig</span>({\n  <span class="hljs-attr">plugins</span>: [<span class="hljs-title function_">pluginVue</span>()],\n  <span class="hljs-attr">tools</span>: {\n    <span class="hljs-attr">rspack</span>: {\n      <span class="hljs-attr">plugins</span>: [\n        <span class="hljs-title class_">Components</span>({\n          <span class="hljs-attr">resolvers</span>: [<span class="hljs-title class_">VantResolver</span>()],\n        }),\n      ],\n    },\n  },\n});\n</code></pre>\n<p>For Vite based project\uFF0Cconfigure the plugin in the <code>vite.config.js</code> file:</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> vue <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vitejs/plugin-vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">Components</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;unplugin-vue-components/vite&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">VantResolver</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/auto-import-resolver&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">plugins</span>: [\n    <span class="hljs-title function_">vue</span>(),\n    <span class="hljs-title class_">Components</span>({\n      <span class="hljs-attr">resolvers</span>: [<span class="hljs-title class_">VantResolver</span>()],\n    }),\n  ],\n};\n</code></pre>\n<p>For vue-cli based project\uFF0Cconfigure the plugin in the <code>vue.config.js</code> file:</p>\n<pre><code class="language-js"><span class="hljs-keyword">const</span> { <span class="hljs-title class_">VantResolver</span> } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#x27;@vant/auto-import-resolver&#x27;</span>);\n<span class="hljs-keyword">const</span> <span class="hljs-title class_">ComponentsPlugin</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#x27;unplugin-vue-components/webpack&#x27;</span>);\n\n<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {\n  <span class="hljs-attr">configureWebpack</span>: {\n    <span class="hljs-attr">plugins</span>: [\n      <span class="hljs-comment">// When the version of unplugin-vue-components is less than 0.26.0:</span>\n      <span class="hljs-title class_">ComponentsPlugin</span>({ <span class="hljs-attr">resolvers</span>: [<span class="hljs-title class_">VantResolver</span>()] }),\n      <span class="hljs-comment">// when the unplugin-vue-components version is greater than or equal to 0.26.0:</span>\n      <span class="hljs-title class_">ComponentsPlugin</span>.<span class="hljs-title function_">default</span>({ <span class="hljs-attr">resolvers</span>: [<span class="hljs-title class_">VantResolver</span>()] }),\n    ],\n  },\n};\n</code></pre>\n<p>For webpack based project\uFF0Cconfigure the plugin in the <code>webpack.config.js</code> file:</p>\n<pre><code class="language-js"><span class="hljs-keyword">const</span> { <span class="hljs-title class_">VantResolver</span> } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#x27;@vant/auto-import-resolver&#x27;</span>);\n<span class="hljs-keyword">const</span> <span class="hljs-title class_">ComponentsPlugin</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#x27;unplugin-vue-components/webpack&#x27;</span>);\n\n<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {\n  <span class="hljs-attr">plugins</span>: [\n    <span class="hljs-comment">// When the version of unplugin-vue-components is less than 0.26.0:</span>\n    <span class="hljs-title class_">ComponentsPlugin</span>({ <span class="hljs-attr">resolvers</span>: [<span class="hljs-title class_">VantResolver</span>()] }),\n    <span class="hljs-comment">// when the unplugin-vue-components version is greater than or equal to 0.26.0:</span>\n    <span class="hljs-title class_">ComponentsPlugin</span>.<span class="hljs-title function_">default</span>({ <span class="hljs-attr">resolvers</span>: [<span class="hljs-title class_">VantResolver</span>()] }),\n  ],\n};\n</code></pre>\n<h4 id="3.-using-components" tabindex="-1">3. Using Components</h4>\n<p>Then you can using components from Vant in the template, the <code>unplugin-vue-components</code> will automatically import the corresponding Vant components,<code>@vant/auto-import-resolver</code> The corresponding component style will be automatically introduced.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n</code></pre>\n<h4 id="4.-style-of-function-components" tabindex="-1">4. Style of Function Components</h4>\n<p>Some components of Vant are provided as function, including <code>Toast</code>, <code>Dialog</code>, <code>Notify</code> and <code>ImagePreview</code>. When using function components, <code>unplugin-vue-components</code> cannot parse the automatic registration component, resulting in <code>@vant/auto-import-resolver</code> unable to parse the style, so the style needs to be introduced manually.</p>\n<pre><code class="language-js"><span class="hljs-comment">// Toast</span>\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;vant/es/toast/style&#x27;</span>;\n\n<span class="hljs-comment">// Dialog</span>\n<span class="hljs-keyword">import</span> { showDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;vant/es/dialog/style&#x27;</span>;\n\n<span class="hljs-comment">// Notify</span>\n<span class="hljs-keyword">import</span> { showNotify } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;vant/es/notify/style&#x27;</span>;\n\n<span class="hljs-comment">// ImagePreview</span>\n<span class="hljs-keyword">import</span> { showImagePreview } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;vant/es/image-preview/style&#x27;</span>;\n</code></pre>\n<blockquote>\n<p>Tip: &quot;Full Import&quot; and &quot;On-demand Import&quot; should not be used at the same time, otherwise it will lead to problems such as code duplication and style overrides.</p>\n</blockquote>\n<h4 id="tips" tabindex="-1">Tips</h4>\n<ul>\n<li>&quot;Full Import&quot; and &quot;On-demand Import&quot; should not be used at the same time, otherwise it will lead to problems such as code duplication and style overrides.</li>\n<li>During use, if the component cannot be imported, because <code>unplugin-vue-components</code> is not a plug-in officially maintained by <code>Vant</code>, it is recommended to give feedback under the <a href="https://github.com/antfu/unplugin/unplugin-vue-components" target="_blank">unplugin/unplugin-vue-components</a> repository.</li>\n<li>when the version number of <code>unplugin-vue-components</code> is &gt;= 0.26.0, for <code>webpack</code>, <code>vue-cli</code>, and <code>rspack</code>, you need to use <code>ComponentsPlugin.default</code> to register.</li>\n<li><code>@vant/auto-import-resolver</code> provides some configuration options. Please refer to the <a href="https://github.com/youzan/vant/tree/main/packages/vant-auto-import-resolver" target="_blank">README document</a> for more information.</li>\n<li>If it is a similar problem that the style does not take effect, feedback under the <code>Vant</code> repository.</li>\n</ul>\n</div><h2 id="with-frameworks" tabindex="-1">With Frameworks</h2>\n<div class="van-doc-card"><h3 id="use-vant-in-nuxt-3" tabindex="-1">Use Vant in Nuxt 3</h3>\n<p>When using Vant in Nuxt 3, you can use <a href="https://github.com/vant-ui/vant-nuxt" target="_blank">vant-nuxt</a>, this module can help you to auto importing components and reduce CSS file size.</p>\n<h4 id="1.-install-module" tabindex="-1">1. Install Module</h4>\n<pre><code class="language-bash"><span class="hljs-comment"># with npm</span>\nnpm i @vant/nuxt -D\n\n<span class="hljs-comment"># with yarn</span>\nyarn add @vant/nuxt -D\n\n<span class="hljs-comment"># with pnpm</span>\npnpm add @vant/nuxt -D\n\n<span class="hljs-comment"># with Bun</span>\nbun add @vant/nuxt -D\n</code></pre>\n<h4 id="2.-add-module" tabindex="-1">2. Add Module</h4>\n<p>add the module in the <code>nuxt.config.js</code> file:</p>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">defineNuxtConfig</span>({\n  <span class="hljs-attr">modules</span>: [<span class="hljs-string">&#x27;@vant/nuxt&#x27;</span>],\n});\n</code></pre>\n<h4 id="3.-using-components-1" tabindex="-1">3. Using Components</h4>\n<p>Then you can using components from Vant in the template, Go to the <a href="https://nuxt.com/docs/guide/directory-structure/components" target="_blank">Nuxt documentation</a> to learn more.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showToast(&#x27;toast&#x27;)&quot;</span>&gt;</span>button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">VanButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showNotify(&#x27;notify&#x27;)&quot;</span>&gt;</span>button<span class="hljs-tag">&lt;/<span class="hljs-name">VanButton</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">LazyVanButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;default&quot;</span>&gt;</span>lazy button<span class="hljs-tag">&lt;/<span class="hljs-name">LazyVanButton</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n</code></pre>\n</div>'},null,8,e))}}}]);
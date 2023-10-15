import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as l}from"./vue-libs-19c20d28.js";const t={},p={class:"van-doc-markdown-body"},e=l(`<h1>快速上手</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>通过本章节你可以了解到 Vant 的安装方法和基本使用姿势。</p></div><h2 id="an-zhuang" tabindex="-1">安装</h2><div class="van-doc-card"><h3 id="tong-guo-npm-an-zhuang" tabindex="-1">通过 npm 安装</h3><p>在现有项目中使用 Vant 时，可以通过 <code>npm</code> 进行安装：</p><pre><code class="language-bash"><span class="hljs-comment"># Vue 3 项目，安装最新版 Vant</span>
npm i vant

<span class="hljs-comment"># Vue 2 项目，安装 Vant 2</span>
npm i vant@latest-v2
</code></pre><p>当然，你也可以通过 <code>yarn</code>、<code>pnpm</code> 或 <code>bun</code> 进行安装：</p><pre><code class="language-bash"><span class="hljs-comment"># 通过 yarn 安装</span>
yarn add vant

<span class="hljs-comment"># 通过 pnpm 安装</span>
pnpm add vant

<span class="hljs-comment"># 通过 Bun 安装</span>
bun add vant
</code></pre></div><div class="van-doc-card"><h3 id="zai-xin-xiang-mu-zhong-shi-yong" tabindex="-1">在新项目中使用</h3><p>如果你需要新建一个项目，我们推荐使用 <a href="https://cn.vitejs.dev/" target="_blank">Vite</a> 或 <a href="https://nuxt.com" target="_blank">Nuxt 框架</a>。</p><p>以下是 Vant 官方提供的一些示例项目，你可以克隆该项目，并直接拷贝代码来使用。</p><ul><li><a href="https://github.com/vant-ui/vant-demo/tree/master/vant/vite" target="_blank">vant-demo - vite</a>：使用 Vue 3、Vant 4、Vite 搭建应用</li><li><a href="https://github.com/vant-ui/vant-demo/tree/master/vant/nuxt3" target="_blank">vant-demo - nuxt3</a>：使用 Vue 3、Nuxt 3、Vant 4 搭建应用。</li></ul></div><div class="van-doc-card"><h3 id="tong-guo-cdn-an-zhuang" tabindex="-1">通过 CDN 安装</h3><p>如果你只需要开发一个简单的 HTML 页面，那么可以直接在 HTML 文件中引入 CDN 链接，之后你可以通过全局变量 <code>vant</code> 访问到所有组件。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 引入样式文件 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span>
  <span class="hljs-attr">rel</span>=<span class="hljs-string">&quot;stylesheet&quot;</span>
  <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/vant@4/lib/index.css&quot;</span>
/&gt;</span>

<span class="hljs-comment">&lt;!-- 引入 Vue 和 Vant 的 JS 文件 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/vue@3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/vant@4/lib/vant.min.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-comment">// 在 #app 标签下渲染一个按钮组件</span>
  <span class="hljs-keyword">const</span> app = <span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">createApp</span>({
    <span class="hljs-attr">template</span>: <span class="hljs-string">\`&lt;van-button&gt;按钮&lt;/van-button&gt;\`</span>,
  });
  app.<span class="hljs-title function_">use</span>(vant);

  <span class="hljs-comment">// 通过 CDN 引入时不会自动注册 Lazyload 组件</span>
  <span class="hljs-comment">// 可以通过下面的方式手动注册</span>
  app.<span class="hljs-title function_">use</span>(vant.<span class="hljs-property">Lazyload</span>);

  <span class="hljs-comment">// 调用工具函数，弹出一个 Toast</span>
  vant.<span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;提示&#39;</span>);

  app.<span class="hljs-title function_">mount</span>(<span class="hljs-string">&#39;#app&#39;</span>);
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><h4 id="mian-fei-cdn" tabindex="-1">免费 CDN</h4><p>你可以通过以下免费 CDN 服务来使用 Vant:</p><ul><li><a href="https://www.jsdelivr.com/package/npm/vant" target="_blank">jsdelivr</a></li><li><a href="https://cdnjs.com/libraries/vant" target="_blank">cdnjs</a></li><li><a href="https://unpkg.com/" target="_blank">unpkg</a></li></ul><p>注意：免费 CDN 一般用于制作原型或个人小型项目，不推荐在企业生产环境中使用免费 CDN。</p><p>对于企业开发者，建议使用以下方式：</p><ul><li>通过 npm 引入，并通过构建工具进行打包</li><li>下载对应文件，并托管在你自己的服务器或 CDN 上</li></ul></div><h2 id="shi-li" tabindex="-1">示例</h2><div class="van-doc-card"><h3 id="shi-li-gong-cheng" tabindex="-1">示例工程</h3><p>我们提供了丰富的<a href="https://github.com/vant-ui/vant-demo" target="_blank">示例工程</a>，通过示例工程你可以了解如下内容：</p><ul><li>基于 Vite 和 Vant 搭建应用</li><li>基于 Nuxt 和 Vant 搭建应用</li><li>基于 Vue CLI 和 Vant 搭建应用</li><li>配置按需引入组件</li><li>配置基于 Rem 的适配方案</li><li>配置基于 Viewport 的适配方案</li><li>配置基于 TypeScript 的工程</li></ul></div><h2 id="yin-ru-zu-jian" tabindex="-1">引入组件</h2><div class="van-doc-card"><h3 id="fang-fa-yi.-chang-gui-yong-fa" tabindex="-1">方法一. 常规用法</h3><p>下面是使用 Vant 组件的用法示例：</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// 1. 引入你需要的组件</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
<span class="hljs-comment">// 2. 引入组件样式</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;vant/lib/index.css&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();

<span class="hljs-comment">// 3. 注册你需要的组件</span>
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Button</span>);
</code></pre><p>Vant 支持多种组件注册方式，除了在 app 上全局注册组件，你也可以选择其他的方式，比如局部注册，详见 <a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a> 章节。</p><blockquote><p>提示：Vant 默认支持 Tree Shaking，因此你不需要配置任何插件，通过 Tree Shaking 即可移除不需要的 JS 代码，但 CSS 样式无法通过这种方式优化，如果需要按需引入 CSS 样式，请参考下面的方法二。</p></blockquote></div><div class="van-doc-card"><h3 id="fang-fa-er.-an-xu-yin-ru-zu-jian-yang-shi" tabindex="-1">方法二. 按需引入组件样式</h3><p>在基于 <code>vite</code>、<code>webpack</code> 或 <code>vue-cli</code> 的项目中使用 Vant 时，可以使用 <a href="https://github.com/unplugin/unplugin-vue-components" target="_blank">unplugin-vue-components</a> 插件，它可以自动引入组件。</p><p>Vant 官方基于 <code>unplugin-vue-components</code> 提供了自动导入样式的解析器 <a href="https://github.com/youzan/vant/tree/main/packages/vant-auto-import-resolver" target="_blank">@vant/auto-import-resolver</a>，两者可以配合使用。</p><p>相比于常规用法，这种方式可以按需引入组件的 CSS 样式，从而减少一部分代码体积，但使用起来会变得繁琐一些。如果业务对 CSS 的体积要求不是特别极致，我们推荐使用更简便的常规用法。</p><h4 id="1.-an-zhuang-cha-jian" tabindex="-1">1. 安装插件</h4><pre><code class="language-bash"><span class="hljs-comment"># 通过 npm 安装</span>
npm i @vant/auto-import-resolver unplugin-vue-components -D

<span class="hljs-comment"># 通过 yarn 安装</span>
yarn add @vant/auto-import-resolver unplugin-vue-components -D

<span class="hljs-comment"># 通过 pnpm 安装</span>
pnpm add @vant/auto-import-resolver unplugin-vue-components -D

<span class="hljs-comment"># 通过 bun 安装</span>
bun add @vant/auto-import-resolver unplugin-vue-components -D
</code></pre><h4 id="2.-pei-zhi-cha-jian" tabindex="-1">2. 配置插件</h4><p>如果是基于 <code>vite</code> 的项目，在 <code>vite.config.js</code> 文件中配置插件：</p><pre><code class="language-js"><span class="hljs-keyword">import</span> vue <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vitejs/plugin-vue&#39;</span>;
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
</code></pre><p>如果是基于 <code>vue-cli</code> 的项目，在 <code>vue.config.js</code> 文件中配置插件：</p><pre><code class="language-js"><span class="hljs-keyword">const</span> { <span class="hljs-title class_">VantResolver</span> } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;@vant/auto-import-resolver&#39;</span>);
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
</code></pre><p>如果是基于 <code>webpack</code> 的项目，在 <code>webpack.config.js</code> 文件中配置插件：</p><pre><code class="language-js"><span class="hljs-keyword">const</span> { <span class="hljs-title class_">VantResolver</span> } = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;@vant/auto-import-resolver&#39;</span>);
<span class="hljs-keyword">const</span> <span class="hljs-title class_">ComponentsPlugin</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;unplugin-vue-components/webpack&#39;</span>);

<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">plugins</span>: [
    <span class="hljs-title class_">ComponentsPlugin</span>({
      <span class="hljs-attr">resolvers</span>: [<span class="hljs-title class_">VantResolver</span>()],
    }),
  ],
};
</code></pre><h4 id="3.-shi-yong-zu-jian" tabindex="-1">3. 使用组件</h4><p>完成以上两步，就可以直接在模板中使用 Vant 组件了，<code>unplugin-vue-components</code> 会解析模板并自动注册对应的组件, <code>@vant/auto-import-resolver</code> 会自动引入对应的组件样式。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><h4 id="4.-yin-ru-han-shu-zu-jian-de-yang-shi" tabindex="-1">4. 引入函数组件的样式</h4><p>Vant 中有个别组件是以函数的形式提供的，包括 <code>Toast</code>，<code>Dialog</code>，<code>Notify</code> 和 <code>ImagePreview</code> 组件。在使用函数组件时，<code>unplugin-vue-components</code> 无法解析自动注册组件，导致 <code>@vant/auto-import-resolver</code> 无法解析样式，因此需要手动引入样式。</p><pre><code class="language-js"><span class="hljs-comment">// Toast</span>
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
</code></pre><p>你可以在项目的入口文件或公共模块中引入以上组件的样式，这样在业务代码中使用组件时，便不再需要重复引入样式了。</p><h4 id="shi-yong-ti-shi" tabindex="-1">使用提示</h4><ul><li>请避免同时使用「全量引入」和「按需引入」这两种引入方式，否则会导致代码重复、样式错乱等问题。</li><li>在使用过程中，如果你遇到组件不能导入的问题，因为 unplugin-vue-components 并不是 Vant 官方维护的插件，所以建议到 <a href="https://github.com/unplugin/unplugin-vue-components" target="_blank">unplugin/unplugin-vue-components</a> 仓库下反馈。</li><li>如果是样式不生效的相关问题，你可以在 Vant 仓库下反馈。</li></ul></div><h2 id="zai-kuang-jia-zhong-shi-yong" tabindex="-1">在框架中使用</h2><div class="van-doc-card"><h3 id="zai-nuxt-3-zhong-shi-yong" tabindex="-1">在 Nuxt 3 中使用</h3><p>在 Nuxt 3 中使用 Vant 时，可以使用 <a href="https://github.com/vant-ui/vant-nuxt" target="_blank">vant-nuxt</a> 模块，它可以自动引入组件，并按需引入的样式（包括函数组件）。</p><h4 id="1.-an-zhuang-mo-kuai" tabindex="-1">1. 安装模块</h4><pre><code class="language-bash"><span class="hljs-comment"># 通过 npm 安装</span>
npm i @vant/nuxt -D

<span class="hljs-comment"># 通过 yarn 安装</span>
yarn add @vant/nuxt -D

<span class="hljs-comment"># 通过 pnpm 安装</span>
pnpm add @vant/nuxt -D

<span class="hljs-comment"># 通过 Bun 安装</span>
bun add @vant/nuxt -D
</code></pre><h4 id="2.-zeng-jia-mo-kuai" tabindex="-1">2. 增加模块</h4><p>在 <code>nuxt.config.js</code> 文件中增加模块：</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">defineNuxtConfig</span>({
  <span class="hljs-attr">modules</span>: [<span class="hljs-string">&#39;@vant/nuxt&#39;</span>],
});
</code></pre><h4 id="3.-shi-yong-zu-jian-1" tabindex="-1">3. 使用组件</h4><p>完成以上两步，就可以直接在模板中使用 Vant 组件了。前往 <a href="https://nuxt.com/docs/guide/directory-structure/components" target="_blank">Nuxt 文档</a> 了解更多。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showToast(&#39;toast&#39;)&quot;</span>&gt;</span>button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">VanButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showNotify(&#39;notify&#39;)&quot;</span>&gt;</span>button<span class="hljs-tag">&lt;/<span class="hljs-name">VanButton</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">LazyVanButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;default&quot;</span>&gt;</span>lazy button<span class="hljs-tag">&lt;/<span class="hljs-name">LazyVanButton</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre></div><h2 id="qian-yi-ti-shi" tabindex="-1">迁移提示</h2><div class="van-doc-card"><h3 id="yi-chu-babel-plugin-import" tabindex="-1">移除 babel-plugin-import</h3><p>从 Vant 4.0 版本开始，将不再支持 <code>babel-plugin-import</code>，请移除项目中依赖的 <code>babel-plugin-import</code> 插件。</p><p>只需要删除 <code>babel.config.js</code> 中的以下代码即可：</p><pre><code class="language-diff">module.exports = {
  plugins: [
<span class="hljs-deletion">-    [&#39;import&#39;, {</span>
<span class="hljs-deletion">-      libraryName: &#39;vant&#39;,</span>
<span class="hljs-deletion">-      libraryDirectory: &#39;es&#39;,</span>
<span class="hljs-deletion">-      style: true</span>
<span class="hljs-deletion">-    }, &#39;vant&#39;]</span>
  ]
};
</code></pre><h4 id="shou-yi" tabindex="-1">收益</h4><p>移除 <code>babel-plugin-import</code> 有以下收益：</p><ul><li>不再强依赖 babel，项目可以使用 esbuild、swc 等更高效的编译工具，大幅度提升编译效率。</li><li>不再受到 <code>babel-plugin-import</code> 的 import 写法限制，可以从 vant 中导入除了组件以外的其他内容，比如 Vant 4 中新增的 <code>showToast</code> 等方法。</li></ul><pre><code class="language-ts"><span class="hljs-keyword">import</span> { showToast, showDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div>`,15),c=[e];function o(i,h){return a(),n("div",p,c)}const u=s(t,[["render",o]]);export{u as default};

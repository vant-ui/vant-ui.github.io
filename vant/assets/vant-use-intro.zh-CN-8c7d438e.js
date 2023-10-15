import{_ as a}from"./locales-be796722.js";import{o as t,a as s,z as e}from"./vue-libs-19c20d28.js";const n={},d={class:"van-doc-markdown-body"},l=e(`<h1>组合式 API</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>Vant 底层依赖了 <code>@vant/use</code> 包，其中内置了一系列的组合式 API。对于使用了 Vant 的项目，可以复用这些 API 进行开发。</p></div><div class="van-doc-card"><h3 id="an-zhuang" tabindex="-1">安装</h3><p>虽然 Vant 的依赖中已经包含了 <code>@vant/use</code>，但我们仍然推荐显式地安装它：</p><pre><code class="language-shell"><span class="hljs-meta prompt_"># </span><span class="language-bash">with npm</span>
npm i @vant/use
<span class="hljs-meta prompt_">
# </span><span class="language-bash">with yarn</span>
yarn add @vant/use
<span class="hljs-meta prompt_">
# </span><span class="language-bash">with pnpm</span>
pnpm add @vant/use
<span class="hljs-meta prompt_">
# </span><span class="language-bash">with Bun</span>
bun add @vant/use
</code></pre></div><div class="van-doc-card"><h3 id="shi-li" tabindex="-1">示例</h3><p>下面是一个 Vant 组合式 API 的用法示例，我们从 <code>@vant/use</code> 这个包中引入 <code>useWindowSize</code> 方法，然后进行调用，即可获取到当前 Window 的宽度和高度。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { useWindowSize } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">const</span> { width, height } = <span class="hljs-title function_">useWindowSize</span>();

<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(width.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; 窗口宽度</span>
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(height.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; 窗口高度</span>
</code></pre></div><div class="van-doc-card"><h3 id="api-lie-biao" tabindex="-1">API 列表</h3><p>下面是 Vant 对外提供的所有组合式 API，点击名称可以查看详细介绍：</p><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td><a href="#/zh-CN/use-click-away" target="_blank">useClickAway</a></td><td>监听点击元素外部的事件</td></tr><tr><td><a href="#/zh-CN/use-count-down" target="_blank">useCountDown</a></td><td>提供倒计时管理能力</td></tr><tr><td><a href="#/zh-CN/use-custom-field-value" target="_blank">useCustomFieldValue</a></td><td>自定义表单组件中的表单项</td></tr><tr><td><a href="#/zh-CN/use-event-listener" target="_blank">useEventListener</a></td><td>方便地进行事件绑定</td></tr><tr><td><a href="#/zh-CN/use-page-visibility" target="_blank">usePageVisibility</a></td><td>获取页面的可见状态</td></tr><tr><td><a href="#/zh-CN/use-rect" target="_blank">useRect</a></td><td>获取元素的大小及其相对于视口的位置</td></tr><tr><td><a href="#/zh-CN/use-relation" target="_blank">useRelation</a></td><td>建立父子组件之间的关联关系</td></tr><tr><td><a href="#/zh-CN/use-scroll-parent" target="_blank">useScrollParent</a></td><td>获取元素最近的可滚动父元素</td></tr><tr><td><a href="#/zh-CN/use-toggle" target="_blank">useToggle</a></td><td>用于在布尔值之间进行切换</td></tr><tr><td><a href="#/zh-CN/use-window-size" target="_blank">useWindowSize</a></td><td>获取浏览器窗口的视口宽度和高度</td></tr><tr><td><a href="#/zh-CN/use-raf" target="_blank">useRaf</a></td><td>提供requestAnimationFrame管理能力</td></tr></tbody></table></div>`,5),r=[l];function o(c,p){return t(),s("div",d,r)}const u=a(n,[["render",o]]);export{u as default};

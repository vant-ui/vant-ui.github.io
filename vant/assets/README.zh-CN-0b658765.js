import{_ as t}from"./locales-be796722.js";import{o as s,a as d,z as a}from"./vue-libs-19c20d28.js";const n={},e={class:"van-doc-markdown-body"},o=a(`<h1>Dialog 弹出框</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。支持组件调用和函数调用两种方式。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Dialog</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Dialog</span>);
</code></pre></div><div class="van-doc-card"><h3 id="han-shu-diao-yong" tabindex="-1">函数调用</h3><p>为了便于使用 <code>Dialog</code>，Vant 提供了一系列辅助函数，通过辅助函数可以快速唤起全局的弹窗组件。</p><p>比如使用 <code>showDialog</code> 函数，调用后会直接在页面中渲染对应的弹出框。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showDialog</span>({ <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;提示&#39;</span> });
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="xiao-xi-ti-shi" tabindex="-1">消息提示</h3><p>用于提示一些消息，默认只包含一个确认按钮。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showDialog</span>({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;标题&#39;</span>,
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;代码是写出来给人看的，附带能在机器上运行。&#39;</span>,
}).<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-comment">// on close</span>
});

<span class="hljs-title function_">showDialog</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。&#39;</span>,
}).<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-comment">// on close</span>
});
</code></pre></div><div class="van-doc-card"><h3 id="xiao-xi-que-ren" tabindex="-1">消息确认</h3><p>用于确认消息，默认包含确认和取消按钮。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showConfirmDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showConfirmDialog</span>({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;标题&#39;</span>,
  <span class="hljs-attr">message</span>:
    <span class="hljs-string">&#39;如果解决方法是丑陋的，那就肯定还有更好的解决方法，只是还没有发现而已。&#39;</span>,
})
  .<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// on confirm</span>
  })
  .<span class="hljs-title function_">catch</span>(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// on cancel</span>
  });
</code></pre></div><div class="van-doc-card"><h3 id="yuan-jiao-an-niu-feng-ge" tabindex="-1">圆角按钮风格</h3><p>将 theme 选项设置为 <code>round-button</code> 可以展示圆角按钮风格的弹窗。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showDialog</span>({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;标题&#39;</span>,
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;代码是写出来给人看的，附带能在机器上运行。&#39;</span>,
  <span class="hljs-attr">theme</span>: <span class="hljs-string">&#39;round-button&#39;</span>,
}).<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-comment">// on close</span>
});

<span class="hljs-title function_">showDialog</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。&#39;</span>,
  <span class="hljs-attr">theme</span>: <span class="hljs-string">&#39;round-button&#39;</span>,
}).<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-comment">// on close</span>
});
</code></pre></div><div class="van-doc-card"><h3 id="yi-bu-guan-bi" tabindex="-1">异步关闭</h3><p>通过 <code>beforeClose</code> 属性可以传入一个回调函数，在弹窗关闭前进行特定操作。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showConfirmDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeClose</span> = (<span class="hljs-params">action</span>) =&gt;
  <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">if</span> (action === <span class="hljs-string">&#39;confirm&#39;</span>) {
        <span class="hljs-title function_">resolve</span>(<span class="hljs-literal">true</span>);
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-comment">// 拦截取消操作</span>
        <span class="hljs-title function_">resolve</span>(<span class="hljs-literal">false</span>);
      }
    }, <span class="hljs-number">1000</span>);
  });

<span class="hljs-title function_">showConfirmDialog</span>({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;标题&#39;</span>,
  <span class="hljs-attr">message</span>:
    <span class="hljs-string">&#39;如果解决方法是丑陋的，那就肯定还有更好的解决方法，只是还没有发现而已。&#39;</span>,
  beforeClose,
});
</code></pre></div><div class="van-doc-card"><h3 id="shi-yong-dialog-zu-jian" tabindex="-1">使用 Dialog 组件</h3><p>如果你需要在 Dialog 内嵌入组件或其他自定义内容，可以直接使用 Dialog 组件，并使用默认插槽进行定制。使用前需要通过 <code>app.use</code> 等方式注册组件。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dialog</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span> <span class="hljs-attr">show-cancel-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-dialog</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">return</span> { show };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">方法</h3><p>Vant 中导出了以下 Dialog 相关的辅助函数：</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>showDialog</td><td>展示消息提示弹窗，默认包含确认按钮</td><td><em>options: DialogOptions</em></td><td><code>Promise&lt;void&gt;</code></td></tr><tr><td>showConfirmDialog</td><td>展示消息确认弹窗，默认包含确认和取消按钮</td><td><em>options: DialogOptions</em></td><td><code>Promise&lt;void&gt;</code></td></tr><tr><td>closeDialog</td><td>关闭当前展示的弹窗</td><td>-</td><td><code>void</code></td></tr><tr><td>setDialogDefaultOptions</td><td>修改默认配置，影响所有的 <code>showDialog</code> 调用</td><td><em>options: DialogOptions</em></td><td><code>void</code></td></tr><tr><td>resetDialogDefaultOptions</td><td>重置默认配置，影响所有的 <code>showDialog</code> 调用</td><td>-</td><td><code>void</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="dialogoptions" tabindex="-1">DialogOptions</h3><p>调用 <code>showDialog</code> 等方法时，支持传入以下选项：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td><em>string</em></td><td>-</td></tr><tr><td>width</td><td>弹窗宽度，默认单位为 <code>px</code></td><td><em>number | string</em></td><td><code>320px</code></td></tr><tr><td>message</td><td>文本内容，支持通过 <code>\\n</code> 换行</td><td><em>string | () =&gt; JSX.ELement</em></td><td>-</td></tr><tr><td>messageAlign</td><td>内容对齐方式，可选值为 <code>left</code> <code>right</code></td><td><em>string</em></td><td><code>center</code></td></tr><tr><td>theme</td><td>样式风格，可选值为 <code>round-button</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td>className</td><td>自定义类名</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>showConfirmButton</td><td>是否展示确认按钮</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>showCancelButton</td><td>是否展示取消按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>confirmButtonText</td><td>确认按钮文案</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td>confirmButtonColor</td><td>确认按钮颜色</td><td><em>string</em></td><td><code>#ee0a24</code></td></tr><tr><td>confirmButtonDisabled</td><td>是否禁用确认按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>cancelButtonText</td><td>取消按钮文案</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td>cancelButtonColor</td><td>取消按钮颜色</td><td><em>string</em></td><td><code>black</code></td></tr><tr><td>cancelButtonDisabled</td><td>是否禁用取消按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>overlay</td><td>是否展示遮罩层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>overlayClass</td><td>自定义遮罩层类名</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlayStyle</td><td>自定义遮罩层样式</td><td><em>object</em></td><td>-</td></tr><tr><td>closeOnPopstate</td><td>是否在页面回退时自动关闭</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>closeOnClickOverlay</td><td>是否在点击遮罩层后关闭弹窗</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>lockScroll</td><td>是否锁定背景滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>allowHtml</td><td>是否允许 message 内容中渲染 HTML</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>beforeClose</td><td>关闭前的回调函数，返回 <code>false</code> 可阻止关闭，支持返回 Promise</td><td><em>(action: string) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td>-</td></tr><tr><td>transition</td><td>动画类名，等价于 <a href="https://cn.vuejs.org/api/built-in-components.html#transition" target="_blank">transition</a> 的 <code>name</code> 属性</td><td><em>string</em></td><td>-</td></tr><tr><td>teleport</td><td>指定挂载的节点，等同于 Teleport 组件的 <a href="https://cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to 属性</a></td><td><em>string | Element</em></td><td><code>body</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><p>通过组件调用 <code>Dialog</code> 时，支持以下 Props：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:show</td><td>是否显示弹窗</td><td><em>boolean</em></td><td>-</td></tr><tr><td>title</td><td>标题</td><td><em>string</em></td><td>-</td></tr><tr><td>width</td><td>弹窗宽度，默认单位为 <code>px</code></td><td><em>number | string</em></td><td><code>320px</code></td></tr><tr><td>message</td><td>文本内容，支持通过 <code>\\n</code> 换行</td><td><em>string | () =&gt; JSX.Element</em></td><td>-</td></tr><tr><td>message-align</td><td>内容水平对齐方式，可选值为 <code>left</code> <code>right</code> <code>justify</code></td><td><em>string</em></td><td><code>center</code></td></tr><tr><td>theme</td><td>样式风格，可选值为 <code>round-button</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td>show-confirm-button</td><td>是否展示确认按钮</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-cancel-button</td><td>是否展示取消按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>confirm-button-text</td><td>确认按钮文案</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td>confirm-button-color</td><td>确认按钮颜色</td><td><em>string</em></td><td><code>#ee0a24</code></td></tr><tr><td>confirm-button-disabled</td><td>是否禁用确认按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>cancel-button-text</td><td>取消按钮文案</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td>cancel-button-color</td><td>取消按钮颜色</td><td><em>string</em></td><td><code>black</code></td></tr><tr><td>cancel-button-disabled</td><td>是否禁用取消按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>z-index</td><td>将弹窗的 z-index 层级设置为一个固定值</td><td><em>number | string</em></td><td><code>2000+</code></td></tr><tr><td>overlay</td><td>是否展示遮罩层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>overlay-class</td><td>自定义遮罩层类名</td><td><em>string</em></td><td>-</td></tr><tr><td>overlay-style</td><td>自定义遮罩层样式</td><td><em>object</em></td><td>-</td></tr><tr><td>close-on-popstate</td><td>是否在页面回退时自动关闭</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-click-overlay</td><td>是否在点击遮罩层后关闭弹窗</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>lazy-render</td><td>是否在显示弹层时才渲染节点</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>lock-scroll</td><td>是否锁定背景滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>allow-html</td><td>是否允许 message 内容中渲染 HTML</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>before-close</td><td>关闭前的回调函数，返回 <code>false</code> 可阻止关闭，支持返回 Promise</td><td><em>(action: string) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td>-</td></tr><tr><td>transition</td><td>动画类名，等价于 <a href="https://cn.vuejs.org/api/built-in-components.html#transition" target="_blank">transition</a> 的 <code>name</code> 属性</td><td><em>string</em></td><td>-</td></tr><tr><td>teleport</td><td>指定挂载的节点，等同于 Teleport 组件的 <a href="https://cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to 属性</a></td><td><em>string | Element</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><p>通过组件调用 <code>Dialog</code> 时，支持以下事件：</p><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>confirm</td><td>点击确认按钮时触发</td><td>-</td></tr><tr><td>cancel</td><td>点击取消按钮时触发</td><td>-</td></tr><tr><td>open</td><td>打开弹窗时触发</td><td>-</td></tr><tr><td>close</td><td>关闭弹窗时触发</td><td>-</td></tr><tr><td>opened</td><td>打开弹窗且动画结束后触发</td><td>-</td></tr><tr><td>closed</td><td>关闭弹窗且动画结束后触发</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><p>通过组件调用 <code>Dialog</code> 时，支持以下插槽：</p><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义内容</td></tr><tr><td>title</td><td>自定义标题</td></tr><tr><td>footer</td><td>自定义底部按钮区域</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">DialogProps</span>,
  <span class="hljs-title class_">DialogTheme</span>,
  <span class="hljs-title class_">DialogMessage</span>,
  <span class="hljs-title class_">DialogOptions</span>,
  <span class="hljs-title class_">DialogMessageAlign</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-dialog-width</td><td><em>320px</em></td><td>-</td></tr><tr><td>--van-dialog-small-screen-width</td><td><em>90%</em></td><td>-</td></tr><tr><td>--van-dialog-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-dialog-transition</td><td><em>var(--van-duration-base)</em></td><td>-</td></tr><tr><td>--van-dialog-radius</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-dialog-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-dialog-header-font-weight</td><td><em>var(--van-font-bold)</em></td><td>-</td></tr><tr><td>--van-dialog-header-line-height</td><td><em>24px</em></td><td>-</td></tr><tr><td>--van-dialog-header-padding-top</td><td><em>26px</em></td><td>-</td></tr><tr><td>--van-dialog-header-isolated-padding</td><td><em>var(--van-padding-lg) 0</em></td><td>-</td></tr><tr><td>--van-dialog-message-padding</td><td><em>var(--van-padding-lg)</em></td><td>-</td></tr><tr><td>--van-dialog-message-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-dialog-message-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-dialog-message-max-height</td><td><em>60vh</em></td><td>-</td></tr><tr><td>--van-dialog-has-title-message-text-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-dialog-has-title-message-padding-top</td><td><em>var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-dialog-button-height</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-dialog-round-button-height</td><td><em>36px</em></td><td>-</td></tr><tr><td>--van-dialog-confirm-button-text-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="yin-yong-showdialog-shi-chu-xian-bian-yi-bao-cuo" tabindex="-1">引用 showDialog 时出现编译报错？</h3><p>如果引用 <code>showDialog</code> 方法时出现以下报错，说明项目中使用了 <code>babel-plugin-import</code> 插件，导致代码被错误编译。</p><pre><code class="language-bash">These dependencies were not found:

* vant/es/show-dialog <span class="hljs-keyword">in</span> ./src/xxx.js
* vant/es/show-dialog/style <span class="hljs-keyword">in</span> ./src/xxx.js
</code></pre><p>Vant 从 4.0 版本开始不再支持 <code>babel-plugin-import</code> 插件，请参考 <a href="#/zh-CN/migrate-from-v3#yi-chu-babel-plugin-import" target="_blank">迁移指南</a> 移除该插件。</p></div><div class="van-doc-card"><h3 id="zai-beforerouteleave-li-diao-yong-dialog-wu-fa-zhan-shi" tabindex="-1">在 beforeRouteLeave 里调用 Dialog 无法展示？</h3><p>将 <code>closeOnPopstate</code> 属性设置为 false 即可。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showDialog</span>({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;标题&#39;</span>,
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;弹窗内容&#39;</span>,
  <span class="hljs-attr">closeOnPopstate</span>: <span class="hljs-literal">false</span>,
}).<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-comment">// on close</span>
});
</code></pre></div>`,22),l=[o];function c(r,i){return s(),d("div",e,l)}const m=t(n,[["render",c]]);export{m as default};

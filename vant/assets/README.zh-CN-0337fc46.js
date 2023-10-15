import{_ as s}from"./locales-be796722.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const d={},e={class:"van-doc-markdown-body"},o=n(`<h1>Notify 消息提示</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>在页面顶部展示消息提示，支持组件调用和函数调用两种方式。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Notify</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Notify</span>);
</code></pre></div><div class="van-doc-card"><h3 id="han-shu-diao-yong" tabindex="-1">函数调用</h3><p>为了便于使用 <code>Notify</code>，Vant 提供了一系列辅助函数，通过辅助函数可以快速唤起全局的消息提示。</p><p>比如使用 <code>showNotify</code> 函数，调用后会直接在页面中渲染对应的提示。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showNotify } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showNotify</span>({ <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;提示&#39;</span> });
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { showNotify, closeNotify } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-comment">// 3 秒后自动关闭</span>
<span class="hljs-title function_">showNotify</span>(<span class="hljs-string">&#39;通知内容&#39;</span>);

<span class="hljs-comment">// 主动关闭</span>
<span class="hljs-title function_">closeNotify</span>();
</code></pre></div><div class="van-doc-card"><h3 id="tong-zhi-lei-xing" tabindex="-1">通知类型</h3><p>支持 <code>primary</code>、<code>success</code>、<code>warning</code>、<code>danger</code> 四种通知类型，默认为 <code>danger</code>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showNotify } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-comment">// 主要通知</span>
<span class="hljs-title function_">showNotify</span>({ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;primary&#39;</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;通知内容&#39;</span> });

<span class="hljs-comment">// 成功通知</span>
<span class="hljs-title function_">showNotify</span>({ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;success&#39;</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;通知内容&#39;</span> });

<span class="hljs-comment">// 危险通知</span>
<span class="hljs-title function_">showNotify</span>({ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;danger&#39;</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;通知内容&#39;</span> });

<span class="hljs-comment">// 警告通知</span>
<span class="hljs-title function_">showNotify</span>({ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;warning&#39;</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;通知内容&#39;</span> });
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-tong-zhi" tabindex="-1">自定义通知</h3><p>自定义消息通知的颜色、位置和展示时长。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showNotify } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showNotify</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;自定义颜色&#39;</span>,
  <span class="hljs-attr">color</span>: <span class="hljs-string">&#39;#ad0000&#39;</span>,
  <span class="hljs-attr">background</span>: <span class="hljs-string">&#39;#ffe1e1&#39;</span>,
});

<span class="hljs-title function_">showNotify</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;自定义位置&#39;</span>,
  <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;bottom&#39;</span>,
});

<span class="hljs-title function_">showNotify</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;自定义时长&#39;</span>,
  <span class="hljs-attr">duration</span>: <span class="hljs-number">1000</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="shi-yong-notify-zu-jian" tabindex="-1">使用 Notify 组件</h3><p>如果需要在 Notify 内嵌入组件或其他自定义内容，可以直接使用 Notify 组件，并使用默认插槽进行定制。使用前需要通过 <code>app.use</code> 等方式注册组件。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;组件调用&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showNotify&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-notify</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;bell&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-right: 4px;&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>通知内容<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-notify</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">showNotify</span> = (<span class="hljs-params"></span>) =&gt; {
      show.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      }, <span class="hljs-number">2000</span>);
    };

    <span class="hljs-keyword">return</span> {
      show,
      showNotify,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">方法</h3><p>Vant 中导出了以下 Notify 相关的辅助函数：</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>showNotify</td><td>在页面顶部展示 Notify</td><td><code>NotifyOptions | string</code></td><td>notify 实例</td></tr><tr><td>closeNotify</td><td>关闭当前展示的 Notify</td><td>-</td><td><code>void</code></td></tr><tr><td>setNotifyDefaultOptions</td><td>修改默认配置，影响所有的 <code>showNotify</code> 调用</td><td><code>NotifyOptions</code></td><td><code>void</code></td></tr><tr><td>resetNotifyDefaultOptions</td><td>重置默认配置，影响所有的 <code>showNotify</code> 调用</td><td>-</td><td><code>void</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="notifyoptions" tabindex="-1">NotifyOptions</h3><p>调用 <code>showNotify</code> 等方法时，支持传入以下选项：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型，可选值为 <code>primary</code> <code>success</code> <code>warning</code></td><td><em>NotifyType</em></td><td><code>danger</code></td></tr><tr><td>message</td><td>展示文案，支持通过<code>\\n</code>换行</td><td><em>string</em></td><td>-</td></tr><tr><td>duration</td><td>展示时长(ms)，值为 0 时，notify 不会消失</td><td><em>number | string</em></td><td><code>3000</code></td></tr><tr><td>z-index</td><td>将组件的 z-index 层级设置为一个固定值</td><td><em>number | string</em></td><td><code>2000+</code></td></tr><tr><td>position</td><td>弹出位置，可选值为 <code>bottom</code></td><td><em>NotifyPosition</em></td><td><code>top</code></td></tr><tr><td>color</td><td>字体颜色</td><td><em>string</em></td><td><code>white</code></td></tr><tr><td>background</td><td>背景颜色</td><td><em>string</em></td><td>-</td></tr><tr><td>className</td><td>自定义类名</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>lockScroll</td><td>是否锁定背景滚动</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>onClick</td><td>点击时的回调函数</td><td><em>(event: MouseEvent): void</em></td><td>-</td></tr><tr><td>onOpened</td><td>完全展示后的回调函数</td><td><em>() =&gt; void</em></td><td>-</td></tr><tr><td>onClose</td><td>关闭时的回调函数</td><td><em>() =&gt; void</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">NotifyType</span>,
  <span class="hljs-title class_">NotifyProps</span>,
  <span class="hljs-title class_">NotifyOptions</span>,
  <span class="hljs-title class_">NotifyPosition</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-notify-text-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-notify-padding</td><td><em>var(--van-padding-xs) var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-notify-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-notify-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-notify-primary-background</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-notify-success-background</td><td><em>var(--van-success-color)</em></td><td>-</td></tr><tr><td>--van-notify-danger-background</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-notify-warning-background</td><td><em>var(--van-warning-color)</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="yin-yong-shownotify-shi-chu-xian-bian-yi-bao-cuo" tabindex="-1">引用 showNotify 时出现编译报错？</h3><p>如果引用 <code>showNotify</code> 方法时出现以下报错，说明项目中使用了 <code>babel-plugin-import</code> 插件，导致代码被错误编译。</p><pre><code class="language-bash">These dependencies were not found:

* vant/es/show-notify <span class="hljs-keyword">in</span> ./src/xxx.js
* vant/es/show-notify/style <span class="hljs-keyword">in</span> ./src/xxx.js
</code></pre><p>Vant 从 4.0 版本开始不再支持 <code>babel-plugin-import</code> 插件，请参考 <a href="#/zh-CN/migrate-from-v3#yi-chu-babel-plugin-import" target="_blank">迁移指南</a> 移除该插件。</p></div>`,17),l=[o];function p(c,i){return a(),t("div",e,l)}const j=s(d,[["render",p]]);export{j as default};

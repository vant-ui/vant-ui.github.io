import{_ as s}from"./locales-be796722.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const d={},o={class:"van-doc-markdown-body"},e=n(`<h1>Toast 轻提示</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Toast</span>);
</code></pre></div><div class="van-doc-card"><h3 id="han-shu-diao-yong" tabindex="-1">函数调用</h3><p>为了便于使用 <code>Toast</code>，Vant 提供了一系列辅助函数，通过辅助函数可以快速唤起全局的 Toast 组件。</p><p>比如使用 <code>showToast</code> 函数，调用后会直接在页面中渲染对应的轻提示。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;提示内容&#39;</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="wen-zi-ti-shi" tabindex="-1">文字提示</h3><p>使用 <code>showToast</code> 方法在屏幕中间展示一条文字提示。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;提示内容&#39;</span>);
</code></pre></div><div class="van-doc-card"><h3 id="jia-zai-ti-shi" tabindex="-1">加载提示</h3><p>使用 <code>showLoadingToast</code> 方法展示加载提示，通过 <code>forbidClick</code> 选项可以禁用背景点击。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showLoadingToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showLoadingToast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;加载中...&#39;</span>,
  <span class="hljs-attr">forbidClick</span>: <span class="hljs-literal">true</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="cheng-gong-shi-bai-ti-shi" tabindex="-1">成功/失败提示</h3><p>使用 <code>showSuccessToast</code> 方法展示成功提示，使用 <code>showFailToast</code> 方法展示失败提示。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showSuccessToast, showFailToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showSuccessToast</span>(<span class="hljs-string">&#39;成功文案&#39;</span>);
<span class="hljs-title function_">showFailToast</span>(<span class="hljs-string">&#39;失败文案&#39;</span>);
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-tu-biao" tabindex="-1">自定义图标</h3><p>通过 <code>icon</code> 选项可以自定义图标，支持传入图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showToast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;自定义图标&#39;</span>,
  <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;like-o&#39;</span>,
});

<span class="hljs-title function_">showToast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;自定义图片&#39;</span>,
  <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/logo.png&#39;</span>,
});
</code></pre><p>通过 <code>loadingType</code> 属性可以自定义加载图标类型。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showLoadingToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showLoadingToast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;加载中...&#39;</span>,
  <span class="hljs-attr">forbidClick</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">loadingType</span>: <span class="hljs-string">&#39;spinner&#39;</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-wei-zhi" tabindex="-1">自定义位置</h3><p>Toast 默认渲染在屏幕正中位置，通过 <code>position</code> 属性可以控制 Toast 展示的位置。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showToast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;顶部展示&#39;</span>,
  <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;top&#39;</span>,
});

<span class="hljs-title function_">showToast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;底部展示&#39;</span>,
  <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;bottom&#39;</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="wen-zi-huan-xing-fang-shi" tabindex="-1">文字换行方式</h3><p>通过 <code>wordBreak</code> 选项可以控制 Toast 中的文字过长时的截断方式，默认值为 <code>break-all</code>，可选值为 <code>break-word</code> 和 <code>normal</code>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-comment">// 换行时截断单词</span>
<span class="hljs-title function_">showToast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;This message will contain a incomprehensibilities long word.&#39;</span>,
  <span class="hljs-attr">wordBreak</span>: <span class="hljs-string">&#39;break-all&#39;</span>,
});

<span class="hljs-comment">// 换行时不截断单词</span>
<span class="hljs-title function_">showToast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;This message will contain a incomprehensibilities long word.&#39;</span>,
  <span class="hljs-attr">wordBreak</span>: <span class="hljs-string">&#39;break-word&#39;</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="dong-tai-geng-xin-ti-shi" tabindex="-1">动态更新提示</h3><p>执行 Toast 方法时会返回对应的 Toast 实例，通过修改实例上的 <code>message</code> 属性可以实现动态更新提示的效果。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showLoadingToast, closeToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> toast = <span class="hljs-title function_">showLoadingToast</span>({
  <span class="hljs-attr">duration</span>: <span class="hljs-number">0</span>,
  <span class="hljs-attr">forbidClick</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;倒计时 3 秒&#39;</span>,
});

<span class="hljs-keyword">let</span> second = <span class="hljs-number">3</span>;
<span class="hljs-keyword">const</span> timer = <span class="hljs-built_in">setInterval</span>(<span class="hljs-function">() =&gt;</span> {
  second--;
  <span class="hljs-keyword">if</span> (second) {
    toast.<span class="hljs-property">message</span> = <span class="hljs-string">\`倒计时 <span class="hljs-subst">\${second}</span> 秒\`</span>;
  } <span class="hljs-keyword">else</span> {
    <span class="hljs-built_in">clearInterval</span>(timer);
    <span class="hljs-title function_">closeToast</span>();
  }
}, <span class="hljs-number">1000</span>);
</code></pre></div><div class="van-doc-card"><h3 id="dan-li-mo-shi" tabindex="-1">单例模式</h3><p>Toast 默认采用单例模式，即同一时间只会存在一个 Toast，如果需要在同一时间弹出多个 Toast，可以参考下面的示例：</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast, showSuccessToast, allowMultipleToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">allowMultipleToast</span>();

<span class="hljs-keyword">const</span> toast1 = <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;第一个 Toast&#39;</span>);
<span class="hljs-keyword">const</span> toast2 = <span class="hljs-title function_">showSuccessToast</span>(<span class="hljs-string">&#39;第二个 Toast&#39;</span>);

toast1.<span class="hljs-title function_">close</span>();
toast2.<span class="hljs-title function_">close</span>();
</code></pre></div><div class="van-doc-card"><h3 id="xiu-gai-mo-ren-pei-zhi" tabindex="-1">修改默认配置</h3><p>通过 <code>setToastDefaultOptions</code> 函数可以全局修改 <code>showToast</code> 等方法的默认配置。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { setToastDefaultOptions, resetToastDefaultOptions } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">setToastDefaultOptions</span>({ <span class="hljs-attr">duration</span>: <span class="hljs-number">2000</span> });

<span class="hljs-title function_">setToastDefaultOptions</span>(<span class="hljs-string">&#39;loading&#39;</span>, { <span class="hljs-attr">forbidClick</span>: <span class="hljs-literal">true</span> });

<span class="hljs-title function_">resetToastDefaultOptions</span>();

<span class="hljs-title function_">resetToastDefaultOptions</span>(<span class="hljs-string">&#39;loading&#39;</span>);
</code></pre></div><div class="van-doc-card"><h3 id="shi-yong-toast-zu-jian" tabindex="-1">使用 Toast 组件</h3><p>如果你需要在 Toast 内嵌入组件或其他自定义内容，可以直接使用 Toast 组件，并使用 message 插槽进行定制。使用前需要通过 <code>app.use</code> 等方式注册组件。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-toast</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;padding: 0&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">message</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-image</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;image&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;200&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;140&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: block&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-toast</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">return</span> { show };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">方法</h3><p>Vant 中导出了以下 Toast 相关的辅助函数：</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>showToast</td><td>展示文字提示</td><td><code>ToastOptions | string</code></td><td>Toast 实例</td></tr><tr><td>showLoadingToast</td><td>展示加载提示</td><td><code>ToastOptions | string</code></td><td>Toast 实例</td></tr><tr><td>showSuccessToast</td><td>展示成功提示</td><td><code>ToastOptions | string</code></td><td>Toast 实例</td></tr><tr><td>showFailToast</td><td>展示失败提示</td><td><code>ToastOptions | string</code></td><td>Toast 实例</td></tr><tr><td>closeToast</td><td>关闭当前展示的提示</td><td><code>closeAll: boolean</code></td><td><code>void</code></td></tr><tr><td>allowMultipleToast</td><td>允许同时存在多个 Toast</td><td>-</td><td><code>void</code></td></tr><tr><td>setToastDefaultOptions</td><td>修改默认配置，影响所有的 <code>showToast</code> 调用。传入 type 可以修改指定类型 Toast 的默认配置</td><td><code>type | ToastOptions</code></td><td><code>void</code></td></tr><tr><td>resetToastDefaultOptions</td><td>重置默认配置，影响所有的 <code>showToast</code> 调用。传入 type 可以重置指定类型 Toast 的默认配置</td><td><code>type</code></td><td><code>void</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="toastoptions-shu-ju-jie-gou" tabindex="-1">ToastOptions 数据结构</h3><p>调用 <code>showToast</code> 等方法时，支持传入以下选项：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>提示类型，可选值为 <code>loading</code> <code>success</code> <code>fail</code> <code>html</code></td><td><em>ToastType</em></td><td><code>text</code></td></tr><tr><td>position</td><td>位置，可选值为 <code>top</code> <code>bottom</code></td><td><em>ToastPosition</em></td><td><code>middle</code></td></tr><tr><td>message</td><td>文本内容，支持通过<code>\\n</code>换行</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>wordBreak</td><td>文本内容的换行方式，可选值为 <code>normal</code> <code>break-all</code> <code>break-word</code></td><td><em>ToastWordBreak</em></td><td><code>&#39;break-all&#39;</code></td></tr><tr><td>icon</td><td>自定义图标，支持传入图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td><td><em>string</em></td><td>-</td></tr><tr><td>iconSize</td><td>图标大小，如 <code>20px</code> <code>2em</code>，默认单位为 <code>px</code></td><td><em>number | string</em></td><td><code>36px</code></td></tr><tr><td>iconPrefix</td><td>图标类名前缀，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">class-prefix 属性</a></td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>overlay</td><td>是否显示背景遮罩层</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>forbidClick</td><td>是否禁止背景点击</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>closeOnClick</td><td>是否在点击后关闭</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>closeOnClickOverlay</td><td>是否在点击遮罩层后关闭</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>loadingType</td><td><a href="#/zh-CN/loading" target="_blank">加载图标类型</a>, 可选值为 <code>spinner</code></td><td><em>string</em></td><td><code>circular</code></td></tr><tr><td>duration</td><td>展示时长(ms)，值为 0 时，toast 不会消失</td><td><em>number</em></td><td><code>2000</code></td></tr><tr><td>className</td><td>自定义类名</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlayClass</td><td>自定义遮罩层类名</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlayStyle</td><td>自定义遮罩层样式</td><td><em>object</em></td><td>-</td></tr><tr><td>onOpened</td><td>完全展示后的回调函数</td><td><em>Function</em></td><td>-</td></tr><tr><td>onClose</td><td>关闭时的回调函数</td><td><em>Function</em></td><td>-</td></tr><tr><td>transition</td><td>动画类名，等价于 <a href="https://cn.vuejs.org/api/built-in-components.html#transition" target="_blank">transition</a> 的<code>name</code>属性</td><td><em>string</em></td><td><code>van-fade</code></td></tr><tr><td>teleport</td><td>指定挂载的节点，等同于 Teleport 组件的 <a href="https://cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to 属性</a></td><td><em>string | Element</em></td><td><code>body</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><p>使用 <code>Toast</code> 组件时，支持以下插槽：</p><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>message</td><td>自定义文本内容</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">ToastType</span>,
  <span class="hljs-title class_">ToastProps</span>,
  <span class="hljs-title class_">ToastOptions</span>,
  <span class="hljs-title class_">ToastPosition</span>,
  <span class="hljs-title class_">ToastWordBreak</span>,
  <span class="hljs-title class_">ToastWrapperInstance</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-toast-max-width</td><td><em>70%</em></td><td>-</td></tr><tr><td>--van-toast-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-toast-text-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-toast-loading-icon-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-toast-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-toast-radius</td><td><em>var(--van-radius-lg)</em></td><td>-</td></tr><tr><td>--van-toast-background</td><td><em>fade(var(--van-black), 70%)</em></td><td>-</td></tr><tr><td>--van-toast-icon-size</td><td><em>36px</em></td><td>-</td></tr><tr><td>--van-toast-text-min-width</td><td><em>96px</em></td><td>-</td></tr><tr><td>--van-toast-text-padding</td><td><em>var(--van-padding-xs) var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-toast-default-padding</td><td><em>var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-toast-default-width</td><td><em>88px</em></td><td>-</td></tr><tr><td>--van-toast-default-min-height</td><td><em>88px</em></td><td>-</td></tr><tr><td>--van-toast-position-top-distance</td><td><em>20%</em></td><td>-</td></tr><tr><td>--van-toast-position-bottom-distance</td><td><em>20%</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="yin-yong-showtoast-shi-chu-xian-bian-yi-bao-cuo" tabindex="-1">引用 showToast 时出现编译报错？</h3><p>如果引用 <code>showToast</code> 方法时出现以下报错，说明项目中使用了 <code>babel-plugin-import</code> 插件，导致代码被错误编译。</p><pre><code class="language-bash">These dependencies were not found:

* vant/es/show-toast <span class="hljs-keyword">in</span> ./src/xxx.js
* vant/es/show-toast/style <span class="hljs-keyword">in</span> ./src/xxx.js
</code></pre><p>Vant 从 4.0 版本开始不再支持 <code>babel-plugin-import</code> 插件，请参考 <a href="#/zh-CN/migrate-from-v3#yi-chu-babel-plugin-import" target="_blank">迁移指南</a> 移除该插件。</p></div>`,24),l=[e];function c(p,i){return a(),t("div",o,l)}const j=s(d,[["render",c]]);export{j as default};

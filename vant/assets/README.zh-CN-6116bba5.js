import{_ as t}from"./locales-be796722.js";import{o as s,a,z as e}from"./vue-libs-19c20d28.js";const n={},d={class:"van-doc-markdown-body"},l=e(`<h1>ImagePreview 图片预览</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>图片放大预览，支持组件调用和函数调用两种方式。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ImagePreview</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ImagePreview</span>);
</code></pre></div><div class="van-doc-card"><h3 id="han-shu-diao-yong" tabindex="-1">函数调用</h3><p>为了便于使用 <code>ImagePreview</code>，Vant 提供了一系列辅助函数，通过辅助函数可以快速唤起全局的图片预览组件。</p><p>比如使用 <code>showImagePreview</code> 函数，调用后会直接在页面中渲染对应的图片预览组件。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showImagePreview } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showImagePreview</span>([<span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#39;</span>]);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>在调用 <code>showImagePreview</code> 时，直接传入图片数组，即可展示图片预览。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showImagePreview } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showImagePreview</span>([
  <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#39;</span>,
  <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#39;</span>,
]);
</code></pre></div><div class="van-doc-card"><h3 id="zhi-ding-chu-shi-wei-zhi" tabindex="-1">指定初始位置</h3><p><code>showImagePreview</code> 支持传入配置对象，并通过 <code>startPosition</code> 选项指定图片的初始位置（索引值）。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showImagePreview } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showImagePreview</span>({
  <span class="hljs-attr">images</span>: [
    <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#39;</span>,
    <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#39;</span>,
  ],
  <span class="hljs-attr">startPosition</span>: <span class="hljs-number">1</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="zhan-shi-guan-bi-an-niu" tabindex="-1">展示关闭按钮</h3><p>开启 <code>closeable</code> 选项后，会在弹出层的右上角显示关闭图标，并且可以通过 <code>close-icon</code> 属性自定义图标，使用<code>close-icon-position</code> 属性可以自定义图标位置。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showImagePreview } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showImagePreview</span>({
  <span class="hljs-attr">images</span>: [
    <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#39;</span>,
    <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#39;</span>,
  ],
  <span class="hljs-attr">closeable</span>: <span class="hljs-literal">true</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="jian-ting-guan-bi-shi-jian" tabindex="-1">监听关闭事件</h3><p>通过 <code>onClose</code> 选项监听图片预览的关闭事件。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast, showImagePreview } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showImagePreview</span>({
  <span class="hljs-attr">images</span>: [
    <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#39;</span>,
    <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#39;</span>,
  ],
  <span class="hljs-title function_">onClose</span>(<span class="hljs-params"></span>) {
    <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;关闭&#39;</span>);
  },
});
</code></pre></div><div class="van-doc-card"><h3 id="yi-bu-guan-bi" tabindex="-1">异步关闭</h3><p>通过 <code>beforeClose</code> 属性可以传入一个回调函数，在图片预览关闭前进行特定操作。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showImagePreview } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> instance = <span class="hljs-title function_">showImagePreview</span>({
  <span class="hljs-attr">images</span>: [
    <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#39;</span>,
    <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#39;</span>,
  ],
  <span class="hljs-attr">beforeClose</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-literal">false</span>,
});

<span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-comment">// 调用实例上的 close 方法手动关闭图片预览</span>
  instance.<span class="hljs-title function_">close</span>();
}, <span class="hljs-number">2000</span>);
</code></pre></div><div class="van-doc-card"><h3 id="shi-yong-imagepreview-zu-jian" tabindex="-1">使用 ImagePreview 组件</h3><p>如果需要在 ImagePreview 内嵌入组件或其他自定义内容，可以直接使用 ImagePreview 组件，并使用 <code>index</code> 插槽进行定制。使用前需要通过 <code>app.use</code> 等方式注册组件。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image-preview</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;images&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:index</span>&gt;</span>第{{ index + 1 }}页<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-image-preview</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> index = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> images = [
      <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#39;</span>,
      <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#39;</span>,
    ];
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">newIndex</span>) =&gt; {
      index.<span class="hljs-property">value</span> = newIndex;
    };

    <span class="hljs-keyword">return</span> {
      show,
      index,
      images,
      onChange,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="shi-yong-image-cha-cao" tabindex="-1">使用 image 插槽</h3><p>当以组件调用的方式使用 ImagePreview 时，可以通过 <code>image</code> 插槽来插入自定义的内容，比如展示一个视频内容。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image-preview</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;images&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">image</span>=<span class="hljs-string">&quot;{ src }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">video</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 100%;&quot;</span> <span class="hljs-attr">controls</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">source</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;src&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">video</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-image-preview</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> images = [
      <span class="hljs-string">&#39;https://www.w3school.com.cn/i/movie.ogg&#39;</span>,
      <span class="hljs-string">&#39;https://www.w3school.com.cn/i/movie.ogg&#39;</span>,
      <span class="hljs-string">&#39;https://www.w3school.com.cn/i/movie.ogg&#39;</span>,
    ];
    <span class="hljs-keyword">return</span> {
      show,
      images,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">方法</h3><p>Vant 中导出了以下 ImagePreview 相关的辅助函数：</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>showImagePreview</td><td>展示一个全屏的图片预览组件</td><td><em>string[] | ImagePreviewOptions</em></td><td>ImagePreview 实例</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="imagepreviewoptions" tabindex="-1">ImagePreviewOptions</h3><p>调用 <code>showImagePreview</code> 方法时，支持传入以下选项：</p><table><thead><tr><th>参数名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>images</td><td>需要预览的图片 URL 数组</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td>startPosition</td><td>图片预览起始位置索引</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>swipeDuration</td><td>动画时长，单位为 <code>ms</code></td><td><em>number | string</em></td><td><code>300</code></td></tr><tr><td>showIndex</td><td>是否显示页码</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>showIndicators</td><td>是否显示轮播指示器</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>loop</td><td>是否开启循环播放</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>doubleScale <code>v4.7.2</code></td><td>是否启用双击缩放手势，禁用后，点击时会立即关闭图片预览</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>onClose</td><td>关闭时的回调函数</td><td><em>Function</em></td><td>-</td></tr><tr><td>onChange</td><td>切换图片时的回调函数，回调参数为当前索引</td><td><em>Function</em></td><td>-</td></tr><tr><td>onScale</td><td>缩放图片时的回调函数，回调参数为当前索引和当前缩放值组成的对象</td><td><em>Function</em></td><td>-</td></tr><tr><td>beforeClose</td><td>关闭前的回调函数，返回 <code>false</code> 可阻止关闭，支持返回 Promise</td><td><em>(active: number) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td>-</td></tr><tr><td>closeOnPopstate</td><td>是否在页面回退时自动关闭</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>closeOnClickOverlay <code>v4.6.4</code></td><td>是否在点击遮罩层后关闭图片预览</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>className</td><td>自定义类名</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>maxZoom</td><td>手势缩放时，最大缩放比例</td><td><em>number | string</em></td><td><code>3</code></td></tr><tr><td>minZoom</td><td>手势缩放时，最小缩放比例</td><td><em>number | string</em></td><td><code>1/3</code></td></tr><tr><td>closeable</td><td>是否显示关闭图标</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>closeIcon</td><td>关闭图标名称或图片链接</td><td><em>string</em></td><td><code>clear</code></td></tr><tr><td>closeIconPosition</td><td>关闭图标位置，可选值为 <code>top-left</code><br><code>bottom-left</code> <code>bottom-right</code></td><td><em>string</em></td><td><code>top-right</code></td></tr><tr><td>transition</td><td>动画类名，等价于 <a href="https://cn.vuejs.org/api/built-in-components.html#transition" target="_blank">transition</a> 的 <code>name</code> 属性</td><td><em>string</em></td><td><code>van-fade</code></td></tr><tr><td>overlayClass</td><td>自定义遮罩层类名</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlayStyle</td><td>自定义遮罩层样式</td><td><em>object</em></td><td>-</td></tr><tr><td>teleport</td><td>指定挂载的节点，等同于 Teleport 组件的 <a href="https://cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to 属性</a></td><td><em>string | Element</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><p>通过组件调用 <code>ImagePreview</code> 时，支持以下 Props：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:show</td><td>是否展示图片预览</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>images</td><td>需要预览的图片 URL 数组</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td>start-position</td><td>图片预览起始位置索引</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>swipe-duration</td><td>动画时长，单位为 ms</td><td><em>number | string</em></td><td><code>300</code></td></tr><tr><td>show-index</td><td>是否显示页码</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-indicators</td><td>是否显示轮播指示器</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>loop</td><td>是否开启循环播放</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>double-scale <code>v4.7.2</code></td><td>是否启用双击缩放手势，禁用后，点击时会立即关闭图片预览</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>before-close</td><td>关闭前的回调函数，返回 <code>false</code> 可阻止关闭，支持返回 Promise</td><td><em>(active: number) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td>-</td></tr><tr><td>close-on-popstate</td><td>是否在页面回退时自动关闭</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-click-overlay <code>v4.6.4</code></td><td>是否在点击遮罩层后关闭图片预览</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>class-name</td><td>自定义类名</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>max-zoom</td><td>手势缩放时，最大缩放比例</td><td><em>number | string</em></td><td><code>3</code></td></tr><tr><td>min-zoom</td><td>手势缩放时，最小缩放比例</td><td><em>number | string</em></td><td><code>1/3</code></td></tr><tr><td>closeable</td><td>是否显示关闭图标</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>close-icon</td><td>关闭图标名称或图片链接</td><td><em>string</em></td><td><code>clear</code></td></tr><tr><td>close-icon-position</td><td>关闭图标位置，可选值为 <code>top-left</code><br><code>bottom-left</code> <code>bottom-right</code></td><td><em>string</em></td><td><code>top-right</code></td></tr><tr><td>transition</td><td>动画类名，等价于 <a href="https://cn.vuejs.org/api/built-in-components.html#transition" target="_blank">transition</a> 的 <code>name</code> 属性</td><td><em>string</em></td><td><code>van-fade</code></td></tr><tr><td>overlay-class</td><td>自定义遮罩层类名</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlay-style</td><td>自定义遮罩层样式</td><td><em>object</em></td><td>-</td></tr><tr><td>teleport</td><td>指定挂载的节点，等同于 Teleport 组件的 <a href="https://cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to 属性</a></td><td><em>string | Element</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><p>通过组件调用 <code>ImagePreview</code> 时，支持以下事件：</p><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>close</td><td>关闭时触发</td><td><em>{ index: number, url: string }</em></td></tr><tr><td>closed</td><td>关闭且且动画结束后触发</td><td>-</td></tr><tr><td>change</td><td>切换当前图片时触发</td><td><em>index: number</em></td></tr><tr><td>scale</td><td>缩放当前图片时触发</td><td><em>{ index: number, scale: number }</em></td></tr><tr><td>long-press</td><td>长按当前图片时触发</td><td><em>{ index: number }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa-1" tabindex="-1">方法</h3><p>通过组件调用 <code>ImagePreview</code> 时，通过 ref 可以获取到 ImagePreview 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>swipeTo <code>2.9.0</code></td><td>切换到指定位置</td><td><em>index: number, options?: SwipeToOptions</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">ImagePreviewProps</span>,
  <span class="hljs-title class_">ImagePreviewOptions</span>,
  <span class="hljs-title class_">ImagePreviewInstance</span>,
  <span class="hljs-title class_">ImagePreviewScaleEventParams</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>ImagePreviewInstance</code> 是组件实例的类型，用法如下：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ImagePreviewInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> imagePreviewRef = ref&lt;<span class="hljs-title class_">ImagePreviewInstance</span>&gt;();

imagePreviewRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">swipeTo</span>(<span class="hljs-number">1</span>);
</code></pre></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><p>通过组件调用 <code>ImagePreview</code> 时，支持以下插槽：</p><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>index</td><td>自定义页码内容</td><td><em>{ index: 当前图片的索引 }</em></td></tr><tr><td>cover</td><td>自定义覆盖在图片预览上方的内容</td><td>-</td></tr><tr><td>image</td><td>自定义图片内容</td><td><em>{ src: 当前资源地址 }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="onclose-hui-diao-can-shu" tabindex="-1">onClose 回调参数</h3><table><thead><tr><th>参数名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>url</td><td>当前图片 URL</td><td><em>string</em></td></tr><tr><td>index</td><td>当前图片的索引值</td><td><em>number</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="onscale-hui-diao-can-shu" tabindex="-1">onScale 回调参数</h3><table><thead><tr><th>参数名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>index</td><td>当前图片的索引值</td><td><em>number</em></td></tr><tr><td>scale</td><td>当前图片的缩放值</td><td><em>number</em></td></tr></tbody></table></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-image-preview-index-text-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-image-preview-index-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-image-preview-index-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-image-preview-index-text-shadow</td><td><em>0 1px 1px var(--van-gray-8)</em></td><td>-</td></tr><tr><td>--van-image-preview-overlay-background</td><td><em>rgba(0, 0, 0, 0.9)</em></td><td>-</td></tr><tr><td>--van-image-preview-close-icon-size</td><td><em>22px</em></td><td>-</td></tr><tr><td>--van-image-preview-close-icon-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-image-preview-close-icon-margin</td><td><em>var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-image-preview-close-icon-z-index</td><td><em>1</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="zai-zhuo-mian-duan-wu-fa-cao-zuo-zu-jian" tabindex="-1">在桌面端无法操作组件？</h3><p>参见<a href="#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei" target="_blank">桌面端适配</a>。</p></div><div class="van-doc-card"><h3 id="yin-yong-showimagepreview-shi-chu-xian-bian-yi-bao-cuo" tabindex="-1">引用 showImagePreview 时出现编译报错？</h3><p>如果引用 <code>showImagePreview</code> 方法时出现以下报错，说明项目中使用了 <code>babel-plugin-import</code> 插件，导致代码被错误编译。</p><pre><code class="language-bash">These dependencies were not found:

* vant/es/show-image-preview <span class="hljs-keyword">in</span> ./src/xxx.js
* vant/es/show-image-preview/style <span class="hljs-keyword">in</span> ./src/xxx.js
</code></pre><p>Vant 从 4.0 版本开始不再支持 <code>babel-plugin-import</code> 插件，请参考 <a href="#/zh-CN/migrate-from-v3#yi-chu-babel-plugin-import" target="_blank">迁移指南</a> 移除该插件。</p></div>`,27),o=[l];function r(p,c){return s(),a("div",d,o)}const m=t(n,[["render",r]]);export{m as default};

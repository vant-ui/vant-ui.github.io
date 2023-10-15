import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as e}from"./vue-libs-19c20d28.js";const l={},c={class:"van-doc-markdown-body"},t=e(`<h1>从 v3 升级到 v4</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>本文档提供了从 Vant 3 到 Vant 4 的升级指南。</p></div><div class="van-doc-card"><h3 id="an-zhuang-vant-4" tabindex="-1">安装 Vant 4</h3><p>首先你需要安装 Vant 4 以及 <code>@vant/compat</code>。</p><p><code>@vant/compat</code> 是一个兼容包，可以帮助你从 Vant 3 过渡到 Vant 4。</p><pre><code class="language-bash"><span class="hljs-comment"># 通过 npm 安装</span>
npm add vant@^4 @vant/compat@^1

<span class="hljs-comment"># 通过 yarn 安装</span>
yarn add vant@^4 @vant/compat@^1

<span class="hljs-comment"># 通过 pnpm 安装</span>
pnpm add vant@^4 @vant/compat@^1

<span class="hljs-comment"># 通过 Bun 安装</span>
bun add vant@^4 @vant/compat@^1
</code></pre><p>你也可以直接修改 <code>package.json</code> 的 <code>dependencies</code> 字段中的版本号，修改完成后需要重新安装依赖。</p><pre><code class="language-diff">{
  &quot;dependencies&quot;: {
<span class="hljs-deletion">-    &quot;vant&quot;: &quot;^3.0.0&quot;,</span>
<span class="hljs-addition">+    &quot;vant&quot;: &quot;^4.0.0&quot;,</span>
<span class="hljs-addition">+    &quot;@vant/compat&quot;: &quot;^1.0.0&quot;,</span>
  }
}
</code></pre></div><h2 id="diao-zheng-an-xu-yin-ru-fang-shi" tabindex="-1">调整按需引入方式</h2><div class="van-doc-card"><h3 id="yi-chu-babel-plugin-import" tabindex="-1">移除 babel-plugin-import</h3><p>从 Vant 4.0 开始，将不再支持 <code>babel-plugin-import</code>，请移除项目中依赖的 <code>babel-plugin-import</code> 插件。</p><p>只需要删除 <code>babel.config.js</code> 中的以下代码即可：</p><pre><code class="language-diff">module.exports = {
  plugins: [
<span class="hljs-deletion">-    [&#39;import&#39;, {</span>
<span class="hljs-deletion">-      libraryName: &#39;vant&#39;,</span>
<span class="hljs-deletion">-      libraryDirectory: &#39;es&#39;,</span>
<span class="hljs-deletion">-      style: true</span>
<span class="hljs-deletion">-    }, &#39;vant&#39;]</span>
  ]
};
</code></pre><h4 id="shou-yi" tabindex="-1">收益</h4><p>移除 <code>babel-plugin-import</code> 主要带来以下收益：</p><ul><li>不再强依赖 Babel 编译，项目可以使用 SWC、esbuild 等现代编译工具，进而提升编译效率。</li><li>不再受到 <code>babel-plugin-import</code> 的 import 限制，可以从 Vant 中导入除组件以外的内容，比如 Vant 4 中新增的 <code>showToast</code> 方法，或是 <code>buttonProps</code> 对象：</li></ul><pre><code class="language-ts"><span class="hljs-keyword">import</span> { showToast, buttonProps } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><h4 id="yang-shi-yin-ru-fang-an" tabindex="-1">样式引入方案</h4><p>移除 <code>babel-plugin-import</code> 对项目的 JS 体积不会有影响，因为 Vant 默认支持通过 Tree Shaking 来移除不需要的 JS 代码。</p><p>而 CSS 代码的引入方式可以从以下两种方式中进行选择：</p><ul><li>在项目中全量引入 Vant 的样式文件：</li></ul><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;vant/lib/index.css&#39;</span>;
</code></pre><ul><li>通过 <a href="https://github.com/unplugin/unplugin-vue-components" target="_blank">unplugin-vue-components</a> 插件实现按需引入样式，详细用法参见 <a href="#/zh-CN/quickstart" target="_blank">快速上手</a>。</li></ul></div><h2 id="zu-jian-chong-gou" tabindex="-1">组件重构</h2><div class="van-doc-card"><h3 id="jie-shao-1" tabindex="-1">介绍</h3><p>在 Vant 4 中，一共有三个组件被完全重构，它们是：</p><ul><li><code>Area</code></li><li><code>Picker</code></li><li><code>DatetimePicker</code></li></ul><p>这三个组件之所以被重构，是因为在之前的版本中，<code>Picker</code> 组件的 API 设计存在一些不合理的设计，导致大家在使用时经常遇到问题，比如：</p><ul><li>Picker columns 数据格式定义不合理，容易产生误解</li><li>Picker 数据流不清晰，暴露了过多的实例方法来对数据进行操作</li><li>DatetimePicker 逻辑过于复杂，经常在边界场景下出现 bug</li></ul><p>为了解决上述问题，我们在 v4 版本中对 <code>Picker</code> 组件进行了重构，同时也重构了基于 <code>Picker</code> 派生出的 <code>Area</code> 和 <code>DatetimePicker</code> 组件。如果你的项目中使用了这三个组件，请仔细阅读文档并进行升级。</p></div><div class="van-doc-card"><h3 id="picker-zu-jian-chong-gou" tabindex="-1">Picker 组件重构</h3><h4 id="zhu-yao-bian-geng" tabindex="-1">主要变更</h4><ul><li>支持通过 <code>v-model</code> 绑定当前选中的值，移除 <code>default-index</code> 属性</li><li>重新定义了 <code>columns</code> 属性的结构</li><li>移除了操作内部数据的实例方法，仅保留 <code>confirm</code> 方法</li><li>新增 <code>getSelectedOptions</code> 实例方法</li><li>调整了 <code>confirm</code>、<code>cancel</code>、<code>change</code> 事件的参数</li><li>重命名 <code>item-height</code> 属性为 <code>option-height</code></li><li>重命名 <code>visible-item-count</code> 属性为 <code>visible-option-num</code></li></ul><blockquote><p>详细用法请参见 <a href="#/zh-CN/picker" target="_blank">Picker 组件文档</a>。</p></blockquote></div><div class="van-doc-card"><h3 id="datetimepicker-zu-jian-chong-gou" tabindex="-1">DatetimePicker 组件重构</h3><p>DatetimePicker 组件被拆分为三个子组件：</p><ul><li><a href="#/zh-CN/time-picker" target="_blank">TimePicker</a>: 用于时间选择，包括时、分、秒。</li><li><a href="#/zh-CN/date-picker" target="_blank">DatePicker</a>: 用于日期选择，包括年、月、日。</li><li><a href="#/zh-CN/picker-group" target="_blank">PickerGroup</a>: 用于结合多个 Picker 选择器组件，在一次交互中完成多个值的选择。</li></ul><p>同时，TimePicker 和 DatePicker 组件也基于新版 Picker 组件进行重构，并优化了部分 API 设计。</p><h4 id="zhu-yao-bian-geng-1" tabindex="-1">主要变更</h4><p>以下是 TimePicker 和 DatePicker 的主要 API 变化，更多细节请参考 <a href="#/zh-CN/time-picker" target="_blank">TimePicker</a> 和 <a href="#/zh-CN/date-picker" target="_blank">DatePicker</a> 文档。</p><ul><li><code>v-model</code> 绑定的值调整为数组格式</li><li>新增 <code>columns-type</code> 属性，用于控制选项类型和顺序</li><li>移除 <code>type</code> 属性和 <code>columns-order</code> 属性</li><li>移除 <code>getPicker</code> 方法</li><li>调整 <code>confirm</code>、<code>cancel</code>、<code>change</code> 事件的参数，与 Picker 组件保持一致</li></ul><blockquote><p>Vant 4 不再提供旧版的 DatetimePicker 组件，使用 PickerGroup 组件可以实现更灵活、更丰富的交互效果，具体用法请参考 <a href="#/zh-CN/picker-group" target="_blank">PickerGroup</a> 组件文档。</p></blockquote></div><div class="van-doc-card"><h3 id="area-zu-jian-chong-gou" tabindex="-1">Area 组件重构</h3><p>Area 组件是基于 Picker 组件进行封装的，因此本次升级也对 Area 组件进行了内部逻辑的重构，并优化了部分 API。</p><h4 id="zhu-yao-bian-geng-2" tabindex="-1">主要变更</h4><ul><li>支持通过 <code>v-model</code> 绑定当前选中的值</li><li>移除 <code>reset</code> 方法，现在可以通过修改 <code>v-model</code> 来进行重置</li><li>移除 <code>is-oversea-code</code> 属性</li><li>调整 <code>confirm</code>、<code>cancel</code>、<code>change</code> 事件的参数，与 Picker 组件保持一致</li><li>重命名 <code>value</code> 属性为 <code>modelValue</code></li><li>重命名 <code>item-height</code> 属性为 <code>option-height</code></li><li>重命名 <code>visible-item-count</code> 属性为 <code>visible-option-num</code></li></ul><blockquote><p>详细用法请参见 <a href="#/zh-CN/area" target="_blank">Area 组件文档</a>。</p></blockquote></div><h2 id="api-diao-zheng" tabindex="-1">API 调整</h2><div class="van-doc-card"><h3 id="dialog-diao-yong-fang-shi-diao-zheng" tabindex="-1">Dialog 调用方式调整</h3><p>在 Vant 3 中，<code>Dialog</code> 是一个函数，调用函数可以快速唤起全局的弹窗组件，而 <code>Dialog.Component</code> 才是 <code>Dialog</code> 组件对象，这与大部分组件的用法存在差异，容易导致使用错误。</p><p>为了更符合直觉，我们在 Vant 4 中调整了 <code>Dialog</code> 的调用方式，将 <code>Dialog()</code> 函数重命名为 <code>showDialog()</code>，并让 <code>Dialog</code> 直接指向组件对象。</p><pre><code class="language-js"><span class="hljs-comment">// Vant 3</span>
<span class="hljs-title class_">Dialog</span>(); <span class="hljs-comment">// 函数调用</span>
<span class="hljs-title class_">Dialog</span>.<span class="hljs-property">Component</span>; <span class="hljs-comment">// 组件对象</span>

<span class="hljs-comment">// Vant 4</span>
<span class="hljs-title function_">showDialog</span>(); <span class="hljs-comment">// 函数调用</span>
<span class="hljs-title class_">Dialog</span>; <span class="hljs-comment">// 组件对象</span>
</code></pre><p>由于 <code>Dialog</code> 变为了组件对象，<code>Dialog</code> 上挂载的其他方法也进行了重命名，新旧 API 的映射关系如下：</p><pre><code class="language-js"><span class="hljs-title class_">Dialog</span>(); <span class="hljs-comment">// -&gt; showDialog()</span>
<span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">alert</span>(); <span class="hljs-comment">// -&gt; showDialog()</span>
<span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">confirm</span>(); <span class="hljs-comment">// -&gt; showConfirmDialog()</span>
<span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">close</span>(); <span class="hljs-comment">// -&gt; closeDialog();</span>
<span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">setDefaultOptions</span>(); <span class="hljs-comment">// -&gt; setDialogDefaultOptions()</span>
<span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">resetDefaultOptions</span>(); <span class="hljs-comment">// -&gt; resetDialogDefaultOptions()</span>
</code></pre><h4 id="jian-rong-fang-an" tabindex="-1">兼容方案</h4><p>为了便于旧版本代码迁移至 v4，我们提供了兼容方案，你可以使用 <code>@vant/compat</code> 中导出的 <code>Dialog</code> 对象来兼容原有代码。</p><p>从 <code>@vant/compat</code> 中引用 <code>Dialog</code> 方法：</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Dialog</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/compat&#39;</span>;

<span class="hljs-title class_">Dialog</span>();
<span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">close</span>();
</code></pre><p><code>@vant/compat</code> 中导出的 <code>Dialog</code> 与 Vant 3 中的 <code>Dialog</code> 拥有完全一致的 API 和行为，因此你只需要修改 <code>Dialog</code> 的引用路径，其他代码可以保持不变。</p><p>在项目完成升级到 Vant v4 后，建议在迭代中逐步替换为新的 <code>showDialog</code> 等方法，并移除 <code>@vant/compat</code> 包。</p></div><div class="van-doc-card"><h3 id="toast-diao-yong-fang-shi-diao-zheng" tabindex="-1">Toast 调用方式调整</h3><p>Vant 4 中，<code>Toast</code> 组件的调用方式也进行了调整，与 <code>Dialog</code> 组件的改动一致：</p><pre><code class="language-js"><span class="hljs-comment">// Vant 3</span>
<span class="hljs-title class_">Toast</span>(); <span class="hljs-comment">// 函数调用</span>

<span class="hljs-comment">// Vant 4</span>
<span class="hljs-title function_">showToast</span>(); <span class="hljs-comment">// 函数调用</span>
<span class="hljs-title class_">Toast</span>; <span class="hljs-comment">// 组件对象</span>
</code></pre><p><code>Toast</code> 上挂载的其他方法也进行了重命名，新旧 API 的映射关系如下：</p><pre><code class="language-js"><span class="hljs-title class_">Toast</span>(); <span class="hljs-comment">// -&gt; showToast()</span>
<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">fail</span>(); <span class="hljs-comment">// -&gt; showFailToast()</span>
<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">success</span>(); <span class="hljs-comment">// -&gt; showSuccessToast()</span>
<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">loading</span>(); <span class="hljs-comment">// -&gt; showLoadingToast()</span>
<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">clear</span>(); <span class="hljs-comment">// -&gt; closeToast()</span>
<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">setDefaultOptions</span>(); <span class="hljs-comment">// -&gt; setToastDefaultOptions()</span>
<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">resetDefaultOptions</span>(); <span class="hljs-comment">// -&gt; resetToastDefaultOptions()</span>
</code></pre><p>同时，Vant 4 将不再在 <code>this</code> 对象上全局注册 <code>$toast</code> 方法，这意味着 <code>this</code> 对象上将无法访问到 <code>$toast</code>。</p><h4 id="jian-rong-fang-an-1" tabindex="-1">兼容方案</h4><p>为了便于代码迁移，我们提供了兼容方案，你可以使用 <code>@vant/compat</code> 中导出的 <code>Toast</code> 对象来兼容原有代码。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/compat&#39;</span>;

<span class="hljs-title class_">Toast</span>();
<span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">clear</span>();
</code></pre><p><code>@vant/compat</code> 中导出的 <code>Toast</code> 与 Vant 3 中的 <code>Toast</code> 拥有完全一致的 API 和行为，因此你只需要修改 <code>Toast</code> 的引用路径，其他代码可以保持不变。</p></div><div class="van-doc-card"><h3 id="notify-diao-yong-fang-shi-diao-zheng" tabindex="-1">Notify 调用方式调整</h3><p>Vant 4 中，<code>Notify</code> 组件的调用方式也进行了调整，与 <code>Dialog</code> 组件的改动一致：</p><pre><code class="language-js"><span class="hljs-comment">// Vant 3</span>
<span class="hljs-title class_">Notify</span>(); <span class="hljs-comment">// 函数调用</span>
<span class="hljs-title class_">Notify</span>.<span class="hljs-property">Component</span>; <span class="hljs-comment">// 组件对象</span>

<span class="hljs-comment">// Vant 4</span>
<span class="hljs-title function_">showNotify</span>(); <span class="hljs-comment">// 函数调用</span>
<span class="hljs-title class_">Notify</span>; <span class="hljs-comment">// 组件对象</span>
</code></pre><p><code>Notify</code> 上挂载的其他方法也进行了重命名，新旧 API 的映射关系如下：</p><pre><code class="language-js"><span class="hljs-title class_">Notify</span>(); <span class="hljs-comment">// -&gt; showNotify()</span>
<span class="hljs-title class_">Notify</span>.<span class="hljs-title function_">clear</span>(); <span class="hljs-comment">// -&gt; closeNotify()</span>
<span class="hljs-title class_">Notify</span>.<span class="hljs-title function_">setDefaultOptions</span>(); <span class="hljs-comment">// -&gt; setNotifyDefaultOptions()</span>
<span class="hljs-title class_">Notify</span>.<span class="hljs-title function_">resetDefaultOptions</span>(); <span class="hljs-comment">// -&gt; resetNotifyDefaultOptions()</span>
</code></pre><p>同时，Vant 4 将不再在 <code>this</code> 对象上全局注册 <code>$notify</code> 方法，这意味着 <code>this</code> 对象上将无法访问到 <code>$notify</code>。</p><h4 id="jian-rong-fang-an-2" tabindex="-1">兼容方案</h4><p>为了便于代码迁移，我们提供了兼容方案，你可以使用 <code>@vant/compat</code> 中导出的 <code>Notify</code> 对象来兼容原有代码。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Notify</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/compat&#39;</span>;

<span class="hljs-title class_">Notify</span>();
<span class="hljs-title class_">Notify</span>.<span class="hljs-title function_">clear</span>();
</code></pre><p><code>@vant/compat</code> 中导出的 <code>Notify</code> 与 Vant 3 中的 <code>Notify</code> 拥有完全一致的 API 和行为，因此你只需要修改 <code>Notify</code> 的引用路径，其他代码可以保持不变。</p></div><div class="van-doc-card"><h3 id="imagepreview-diao-yong-fang-shi-diao-zheng" tabindex="-1">ImagePreview 调用方式调整</h3><p>Vant 4 中，<code>ImagePreview</code> 组件的调用方式也进行了调整，与 <code>Dialog</code> 组件的改动一致：</p><pre><code class="language-js"><span class="hljs-comment">// Vant 3</span>
<span class="hljs-title class_">ImagePreview</span>(); <span class="hljs-comment">// 函数调用</span>
<span class="hljs-title class_">ImagePreview</span>.<span class="hljs-property">Component</span>; <span class="hljs-comment">// 组件对象</span>

<span class="hljs-comment">// Vant 4</span>
<span class="hljs-title function_">showImagePreview</span>(); <span class="hljs-comment">// 函数调用</span>
<span class="hljs-title class_">ImagePreview</span>; <span class="hljs-comment">// 组件对象</span>
</code></pre><h4 id="jian-rong-fang-an-3" tabindex="-1">兼容方案</h4><p>为了便于代码迁移，我们提供了兼容方案，你可以使用 <code>@vant/compat</code> 中导出的 <code>ImagePreview</code> 对象来兼容原有代码。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">ImagePreview</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/compat&#39;</span>;

<span class="hljs-title class_">ImagePreview</span>();
</code></pre><p><code>@vant/compat</code> 中导出的 <code>ImagePreview</code> 与 Vant 3 中的 <code>ImagePreview</code> 拥有完全一致的 API 和行为，因此你只需要修改 <code>ImagePreview</code> 的引用路径，其他代码可以保持不变。</p></div><div class="van-doc-card"><h3 id="shi-jian-ming-ming-diao-zheng" tabindex="-1">事件命名调整</h3><p>从 Vant 4 开始，所有的事件均采用 Vue 官方推荐的<strong>驼峰格式</strong>进行命名。</p><pre><code class="language-js"><span class="hljs-comment">// Vant 3</span>
<span class="hljs-title function_">emit</span>(<span class="hljs-string">&#39;click-input&#39;</span>);

<span class="hljs-comment">// Vant 4</span>
<span class="hljs-title function_">emit</span>(<span class="hljs-string">&#39;clickInput&#39;</span>);
</code></pre><p>这项改动<strong>不影响原有的模板代码</strong>，Vue 会自动在模板中对事件名进行格式转换，因此你无须做任何更改。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 以下代码可以照常运行，无须做任何更改 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> @<span class="hljs-attr">click-input</span>=<span class="hljs-string">&quot;onClick&quot;</span> /&gt;</span>
</code></pre><p>如果你在 JSX 中使用 Vant 组件，需要将监听的事件名调整为驼峰格式，原有的中划线格式将不再生效，新的监听方式更加符合 JSX 本身的规范：</p><pre><code class="language-jsx"><span class="hljs-comment">// Vant 3</span>
&lt;<span class="hljs-title class_">Field</span> onClick-input={onClick} /&gt;

<span class="hljs-comment">// Vant 4</span>
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">onClickInput</span>=<span class="hljs-string">{onClick}</span> /&gt;</span></span>
</code></pre></div><div class="van-doc-card"><h3 id="qi-ta-api-diao-zheng" tabindex="-1">其他 API 调整</h3><p>在 Vant 4.0 版本中，以下 API 进行了不兼容更新：</p><h4 id="addressedit" tabindex="-1">AddressEdit</h4><ul><li>移除 <code>show-postal</code> 属性</li><li>移除 <code>postal-validator</code> 属性</li><li><code>change-area</code> 事件的参数调整为 <code>PickerOption[]</code> 类型</li><li>移除未在文档中标注的 <code>getArea</code> 实例方法</li></ul><h4 id="popup" tabindex="-1">Popup</h4><p>Popup 的 CSS 样式进行了一定调整，如果你在 Popup 组件上添加了一些自定义的 CSS 样式，请确认本次升级是否对项目中的 UI 产生影响。</p><ul><li>默认添加了 <code>box-sizing: border-box</code> 样式</li><li>调整了 <code>position=&quot;center&quot;</code> 时的水平居中方式，以解决弹窗宽度无法正确自适应的问题：</li></ul><pre><code class="language-less"><span class="hljs-comment">// Vant 3</span>
<span class="hljs-selector-class">.van-popup--center</span> {
  <span class="hljs-attribute">left</span>: <span class="hljs-number">50%</span>;
  <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate3d</span>(-<span class="hljs-number">50%</span>, -<span class="hljs-number">50%</span>, <span class="hljs-number">0</span>);
}

<span class="hljs-comment">// Vant 4</span>
<span class="hljs-selector-class">.van-popup--center</span> {
  <span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">right</span>: <span class="hljs-number">0</span>;
  <span class="hljs-attribute">width</span>: fit-content;
  <span class="hljs-attribute">max-width</span>: <span class="hljs-built_in">calc</span>(<span class="hljs-number">100vw</span> - <span class="hljs-built_in">var</span>(--van-padding-md) * <span class="hljs-number">2</span>);
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> auto;
  <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translateY</span>(-<span class="hljs-number">50%</span>);
}
</code></pre><h4 id="tabs" tabindex="-1">Tabs</h4><ul><li>移除了 <code>click</code> 和 <code>disabled</code> 事件，请使用 <code>click-tab</code> 事件代替</li></ul></div><h2 id="yang-shi-diao-zheng" tabindex="-1">样式调整</h2><div class="van-doc-card"><h3 id="zhu-se-diao-tong-yi" tabindex="-1">主色调统一</h3><p>在之前的版本中，Vant 组件有两种主色调，部分组件采用蓝色（#1989fa）作为主色调，另一部分则采用红色（#ee0a24）。</p><p>为了保持色彩规范的一致性，我们在 Vant 4 中对主色调进行统一，所有组件均采用蓝色作为主色调。</p><p>以下组件的主色调由红色调整为蓝色：</p><ul><li>AddressEdit</li><li>AddressList</li><li>Card</li><li>Calendar</li><li>Cascader</li><li>ContactList</li><li>ContactEdit</li><li>CouponList</li><li>Dialog</li><li>DropdownMenu</li><li>IndexBar</li><li>Sidebar</li><li>Steps</li><li>Tabs</li><li>TreeSelect</li></ul></div><div class="van-doc-card"><h3 id="yi-chu-less-bian-liang" tabindex="-1">移除 Less 变量</h3><p>目前 Vant 已经支持了基于 CSS 变量的主题定制能力，相较于 Less 定制更加灵活。因此，Vant 4 将不再提供基于 Less 的主题定制方式。</p><p>这意味着 Vant 的 npm 包中将不再会包含 <code>.less</code> 样式源文件，只会提供编译后的 <code>.css</code> 样式文件。</p><p>如果你的项目正在使用旧版的 Less 主题定制，请使用 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 全局配置</a> 组件进行替换。</p></div><div class="van-doc-card"><h3 id="jian-hua-css-bian-liang-ming" tabindex="-1">简化 CSS 变量名</h3><p>考虑到 <strong>代码体积</strong> 和 <strong>使用便捷性</strong>，我们对部分 CSS 变量的名称进行了简化，在变量名中使用了更简短的单词，以减小代码体积。</p><p>本次升级涉及以下变量名变更：</p><pre><code class="language-less"><span class="hljs-selector-tag">animation-duration</span>               <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">duration</span>
<span class="hljs-selector-tag">animation-timing-function-enter</span>  <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">ease-out</span>
<span class="hljs-selector-tag">animation-timing-function-leave</span>  <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">ease-in</span>
<span class="hljs-selector-tag">background-color</span>                 <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">background</span>
<span class="hljs-selector-tag">background-color-light</span>           <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">background-2</span>
<span class="hljs-selector-tag">border-radius</span>                    <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">radius</span>
<span class="hljs-selector-tag">border-width-base</span>                <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">border-width</span>
<span class="hljs-selector-tag">box-shadow</span>                       <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">shadow</span>
<span class="hljs-selector-tag">font-family</span>                      <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">font</span>
<span class="hljs-selector-tag">font-weight-bold</span>                 <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">font-bold</span>
<span class="hljs-selector-tag">price-integer-font</span>               <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">price-font</span>
<span class="hljs-selector-tag">text-link</span>                        <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">link</span>
<span class="hljs-selector-tag">transition-duration</span>              <span class="hljs-selector-tag">-</span>&gt;  <span class="hljs-selector-tag">duration</span>
</code></pre><p>由于涉及的 CSS 变量较多，建议在代码仓库中进行全局匹配和替换。</p><p>对于 <code>ConfigProvider</code> 组件，我们新增了 <code>ConfigProviderThemeVars</code> 类型定义，提供完整的类型提示。在 TypeScript 代码中，你可以通过类型提示来确保主题变量被正确替换。</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ConfigProviderThemeVars</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> <span class="hljs-attr">themeVars</span>: <span class="hljs-title class_">ConfigProviderThemeVars</span> = {
  <span class="hljs-attr">sliderBarHeight</span>: <span class="hljs-string">&#39;4px&#39;</span>,
};
</code></pre></div>`,21),o=[t];function p(i,d){return a(),n("div",c,o)}const g=s(l,[["render",p]]);export{g as default};

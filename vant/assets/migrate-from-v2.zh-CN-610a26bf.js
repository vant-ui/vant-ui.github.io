import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as l}from"./vue-libs-19c20d28.js";const e={},t={class:"van-doc-markdown-body"},c=l(`<h1>从 v2 升级到 v3</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>本文档提供了从 Vant 2 到 Vant 3 的升级指南。</p></div><div class="van-doc-card"><h3 id="sheng-ji-bu-zou" tabindex="-1">升级步骤</h3><h4 id="1.-sheng-ji-vue-3" tabindex="-1">1. 升级 Vue 3</h4><p>Vant 3 是基于 Vue 3 开发的，在使用 Vant 3 前，请将项目中的 Vue 升级到 3.0 以上版本。</p><h4 id="2.-chu-li-bu-jian-rong-geng-xin" tabindex="-1">2. 处理不兼容更新</h4><p>Vant 2 到 Vant 3 存在一些不兼容更新，请仔细阅读下方的不兼容更新内容，并依次处理。</p></div><h2 id="bu-jian-rong-geng-xin" tabindex="-1">不兼容更新</h2><div class="van-doc-card"><h3 id="zu-jian-ming-ming-diao-zheng" tabindex="-1">组件命名调整</h3><p>GoodsAction 商品导航组件重命名为 <strong>ActionBar 行动栏</strong>。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Vant 2 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-goods-action</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-goods-action-icon</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;图标&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-goods-action-button</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;按钮&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-goods-action</span>&gt;</span>

<span class="hljs-comment">&lt;!-- Vant 3 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;图标&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-button</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;按钮&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-action-bar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="fei-qi-zu-jian" tabindex="-1">废弃组件</h3><p>移除 SwitchCell 组件，可以直接使用 Cell 和 Switch 组件代替。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Vant 2 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-switch-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- Vant 3 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">center</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="dan-chuang-xing-zu-jian-v-model-bian-geng" tabindex="-1">弹窗型组件 v-model 变更</h3><p>为了适配 Vue 3 的 v-model API 用法变更，所有提供 v-model 属性的组件在用法上有一定调整。以下弹窗类组件的 <code>v-model</code> 被重命名为 <code>v-model:show</code>：</p><ul><li>ActionSheet</li><li>Calendar</li><li>Dialog</li><li>ImagePreview</li><li>Notify</li><li>Popover</li><li>Popup</li><li>ShareSheet</li></ul><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Vant 2 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;show&quot;</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- Vant 3 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="biao-dan-xing-zu-jian-v-model-nei-bu-zhi-bian-geng" tabindex="-1">表单型组件 v-model 内部值变更</h3><p>以下表单型组件 v-model 对应的 prop 重命名为 <code>modelValue</code>，event 重命名为 <code>update:modelValue</code>：</p><ul><li>Checkbox</li><li>CheckboxGroup</li><li>DatetimePicker</li><li>DropdownItem</li><li>Field</li><li>Radio</li><li>RadioGroup</li><li>Search</li><li>Stepper</li><li>Switch</li><li>Sidebar</li><li>Uploader</li></ul><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Vant 2 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- Vant 3 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">:model-value</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">update:model-value</span>=<span class="hljs-string">&quot;onInput&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="qi-ta-v-model-diao-zheng" tabindex="-1">其他 v-model 调整</h3><ul><li>Circle: <code>v-model</code> 重命名为 <code>v-model:currentRate</code></li><li>CouponList: <code>v-model</code> 重命名为 <code>v-model:code</code></li><li>List: <code>v-model</code> 重命名为 <code>v-model:loading</code>，<code>error.sync</code> 重命名为 <code>v-model:error</code></li><li>Tabs: <code>v-model</code> 重命名为 <code>v-model:active</code></li><li>TreeSelect: <code>active-id.sync</code> 重命名为 <code>v-model:active-id</code></li><li>TreeSelect: <code>main-active-index.sync</code> 重命名为 <code>v-model:main-active-index</code></li></ul></div><div class="van-doc-card"><h3 id="hui-biao-shu-xing-ming-ming-diao-zheng" tabindex="-1">徽标属性命名调整</h3><p>在之前的版本中，我们通过 info 属性来展示图标右上角的徽标信息，为了更符合社区的命名习惯，我们将这个属性重命名为 badge，影响以下组件：</p><ul><li>Tab</li><li>Icon</li><li>GridItem</li><li>TreeSelect</li><li>TabbarItem</li><li>SidebarItem</li><li>GoodsActionIcon</li></ul><p>同时内部使用的 Info 组件也会重命名为 Badge。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Vant 2 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">info</span>=<span class="hljs-string">&quot;5&quot;</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- Vant 3 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;5&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="chong-ming-ming-get-container-shu-xing" tabindex="-1">重命名 get-container 属性</h3><p>Vue 3.0 中增加了 <code>Teleport</code> 组件，提供将组件渲染到任意 DOM 位置的能力，Vant 2 也通过 <code>get-container</code> 属性提供了类似的能力。为了与官方的 API 保持一致，Vant 中的 <code>get-container</code> 属性将重命名为 <code>teleport</code>。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Vant 2 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">get-container</span>=<span class="hljs-string">&quot;body&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">:get-container</span>=<span class="hljs-string">&quot;getContainer&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      <span class="hljs-title function_">getContainer</span>(<span class="hljs-params"></span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">&#39;#container&#39;</span>);
      },
    },
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-comment">&lt;!-- Vant 3 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">teleport</span>=<span class="hljs-string">&quot;body&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">:teleport</span>=<span class="hljs-string">&quot;container&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-title function_">beforeCreate</span>(<span class="hljs-params"></span>) {
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">container</span> = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">&#39;#container&#39;</span>);
    },
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="api-diao-zheng" tabindex="-1">API 调整</h3><h4 id="area" tabindex="-1">Area</h4><ul><li><code>change</code> 事件参数不再传入组件实例</li></ul><h4 id="button" tabindex="-1">Button</h4><ul><li>蓝色按钮对应的类型由 <code>info</code> 调整为 <code>primary</code></li><li>绿色按钮对应的类型由 <code>primary</code> 调整为 <code>success</code></li><li><code>native-type</code> 的默认值由 <code>submit</code> 调整为 <code>button</code></li></ul><h4 id="checkbox" tabindex="-1">Checkbox</h4><ul><li>在 Cell 内部使用时，现在需要手动添加 <code>@click.stop</code> 来阻止事件冒泡</li></ul><h4 id="dialog" tabindex="-1">Dialog</h4><ul><li>默认关闭 <code>allow-html</code> 属性</li><li><code>before-close</code> 属性用法调整，不再传入 done 函数，而是通过返回 Promise 来控制</li></ul><h4 id="datetimepicker" tabindex="-1">DatetimePicker</h4><ul><li><code>change</code> 事件参数不再传入组件实例</li></ul><h4 id="imagepreview" tabindex="-1">ImagePreview</h4><ul><li>移除 <code>async-close</code> 属性，可以使用新增的 <code>before-close</code> 属性代替</li></ul><h4 id="picker" tabindex="-1">Picker</h4><ul><li><code>change</code> 事件参数不再传入组件实例</li><li>默认关闭 <code>allow-html</code> 属性</li><li>默认开启 <code>show-toolbar</code> 属性</li><li>级联选择下，<code>confirm</code>、<code>change</code> 事件返回的回调参数将包含为完整的选项对象。</li></ul><h4 id="popover" tabindex="-1">Popover</h4><ul><li><code>trigger</code> 属性的默认值调整为 <code>click</code></li></ul><h4 id="stepper" tabindex="-1">Stepper</h4><ul><li><code>async-change</code> 属性重命名为 <code>before-change</code>，并调整使用方法</li></ul><h4 id="swipecell" tabindex="-1">SwipeCell</h4><ul><li><code>open</code> 事件的 <code>detail</code> 参数重命名为 <code>name</code></li><li><code>on-close</code> 属性重命名为 <code>before-close</code>，并调整参数结构</li><li><code>before-close</code> 属性不再传入组件实例</li></ul><h4 id="toast" tabindex="-1">Toast</h4><ul><li><code>mask</code> 属性重命名为 <code>overlay</code></li></ul><h4 id="treeselect" tabindex="-1">TreeSelect</h4><ul><li><code>navclick</code> 事件重命名为 <code>click-nav</code></li><li><code>itemclick</code> 事件重命名为 <code>click-item</code></li></ul></div><div class="van-doc-card"><h3 id="zhu-ce-quan-ju-fang-fa" tabindex="-1">注册全局方法</h3><p>Vant 2 中默认提供了 <code>$toast</code>、<code>$dialog</code> 等全局方法，但 Vue 3.0 不再支持直接在 Vue 的原型链上挂载方法，因此从 Vant 3.0 开始，使用全局方法前必须先通过 <code>app.use</code> 将组件注册到对应的 app 上。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span>, <span class="hljs-title class_">Dialog</span>, <span class="hljs-title class_">Notify</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-comment">// 将 Toast 等组件注册到 app 上</span>
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Toast</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Dialog</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Notify</span>);

<span class="hljs-comment">// app 内的子组件可以直接调用 $toast 等方法</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">mounted</span>(<span class="hljs-params"></span>) {
    <span class="hljs-variable language_">this</span>.$toast(<span class="hljs-string">&#39;提示文案&#39;</span>);
  },
};
</code></pre></div>`,13),p=[c];function o(i,d){return a(),n("div",t,p)}const g=s(e,[["render",o]]);export{g as default};

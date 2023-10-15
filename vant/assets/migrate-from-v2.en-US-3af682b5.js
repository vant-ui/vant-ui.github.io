import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as e}from"./vue-libs-19c20d28.js";const t={},l={class:"van-doc-markdown-body"},o=e(`<h1>Upgrade from v2 to v3</h1><div class="van-doc-card"><h3 id="introduction" tabindex="-1">Introduction</h3><p>This document provides an upgrade guide from Vant 2 to Vant 3.</p></div><div class="van-doc-card"><h3 id="upgrade-steps" tabindex="-1">Upgrade steps</h3><h4 id="1.-upgrade-to-vue-3" tabindex="-1">1. Upgrade to Vue 3</h4><p>Vant 3 is developed based on Vue 3. Before using Vant 3, please upgrade the Vue in the project to version 3.0 or above.</p><h4 id="2.-handle-incompatible-changes" tabindex="-1">2. Handle incompatible changes</h4><p>There are some incompatible changes from Vant 2 to Vant 3, please read the incompatible changes below carefully and deal with them in order.</p></div><h2 id="incompatible-changes" tabindex="-1">Incompatible changes</h2><div class="van-doc-card"><h3 id="component-renaming" tabindex="-1">Component renaming</h3><p>The GoodsAction component is renamed to <strong>ActionBar</strong>.</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Vant 2 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-goods-action</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-goods-action-icon</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;icon&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-goods-action-button</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;button&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-goods-action</span>&gt;</span>

<span class="hljs-comment">&lt;!-- Vant 3 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;icon&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-button</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;button&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-action-bar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="deprecated-components" tabindex="-1">Deprecated components</h3><p>Vant v3 removed the SwitchCell component, you can use the Cell and Switch components instead.</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Vant 2 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-switch-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- Vant 3 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">center</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="popup-components-v-model-changes" tabindex="-1">Popup components v-model changes</h3><p>In order to adapt to Vue 3&#39;s v-model API usage changes, all components that provide v-model have some adjustments in usage. <code>v-model</code> for the following popup components has been renamed to <code>v-model:show</code>:</p><ul><li>ActionSheet</li><li>Calendar</li><li>Dialog</li><li>Image Preview</li><li>Notify</li><li>Popover</li><li>Popup -ShareSheet</li></ul><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Vant 2 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;show&quot;</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- Vant 3 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="form-component-v-model-internal-value-change" tabindex="-1">Form component v-model internal value change</h3><p>The prop corresponding to the following form component v-model is renamed to <code>modelValue</code>, and the event is renamed to <code>update:modelValue</code>:</p><p>-Checkbox</p><ul><li>CheckboxGroup -DatetimePicker -DropdownItem -Field -Radio</li><li>RadioGroup -Search</li><li>Stepper -Switch</li><li>Sidebar</li><li>Uploader</li></ul><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Vant 2 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- Vant 3 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">:model-value</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">update:model-value</span>=<span class="hljs-string">&quot;onInput&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="other-v-model-tweaks" tabindex="-1">Other v-model tweaks</h3><ul><li>Circle: <code>v-model</code> renamed to <code>v-model:currentRate</code></li><li>CouponList: <code>v-model</code> renamed to <code>v-model:code</code></li><li>List: <code>v-model</code> renamed to <code>v-model:loading</code>, <code>error.sync</code> renamed to <code>v-model:error</code></li><li>Tabs: <code>v-model</code> renamed to <code>v-model:active</code></li><li>TreeSelect: <code>active-id.sync</code> renamed to <code>v-model:active-id</code></li><li>TreeSelect: <code>main-active-index.sync</code> renamed to <code>v-model:main-active-index</code></li></ul></div><div class="van-doc-card"><h3 id="badge-prop-adjustment" tabindex="-1">Badge prop adjustment</h3><p>In the previous version, we used the <code>info</code> prop to display the badge in the upper right corner of the icon. In order to better meet the naming habits of the community, we renamed this prop to badge, which affects the following components:</p><ul><li>Tab</li><li>Icon</li><li>GridItem</li><li>TreeSelect</li><li>TabbarItem</li><li>SidebarItem</li><li>GoodsActionIcon</li></ul><p>At the same time, the Info component will also be renamed to Badge.</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Vant 2 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">info</span>=<span class="hljs-string">&quot;5&quot;</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- Vant 3 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;5&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="rename-the-get-container-prop" tabindex="-1">Rename the get-container prop</h3><p>Vue 3.0 added a new Teleport component, which provides the ability to render the component to any DOM position, and Vant 2 also provides similar capabilities through the <code>get-container</code> prop. For consistency with the official API, the <code>get-container</code> prop in Vant 3 will be renamed to <code>teleport</code>.</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Vant 2 --&gt;</span>
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
</code></pre></div><div class="van-doc-card"><h3 id="api-adjustments" tabindex="-1">API adjustments</h3><h4 id="area" tabindex="-1">Area</h4><ul><li>The <code>change</code> event parameter is no longer passed to the component instance</li></ul><h4 id="button" tabindex="-1">Button</h4><ul><li>The type corresponding to the blue button is adjusted from <code>info</code> to <code>primary</code></li><li>The type corresponding to the green button is adjusted from <code>primary</code> to <code>success</code></li><li>Default value of <code>native-type</code> changed from <code>submit</code> to <code>button</code></li></ul><h4 id="checkbox" tabindex="-1">Checkbox</h4><ul><li>When used inside Cell, you now need to manually add <code>@click.stop</code> to prevent event bubbling</li></ul><h4 id="dialog" tabindex="-1">Dialog</h4><ul><li>The <code>allow-html</code> prop is disabled by default.</li><li><code>before-close</code> prop usage adjustment, no longer pass in the done function, but return Promise to control.</li></ul><h4 id="datetimepicker" tabindex="-1">DatetimePicker</h4><ul><li>The <code>change</code> event parameter is no longer passed to the component instance</li></ul><h4 id="imagepreview" tabindex="-1">ImagePreview</h4><ul><li>Remove the <code>async-close</code> prop, you can use the new <code>before-close</code> prop instead.</li></ul><h4 id="picker" tabindex="-1">Picker</h4><ul><li>The <code>change</code> event parameter is no longer passed to the component instance.</li><li>The <code>allow-html</code> prop is turned off by default.</li><li>The <code>show-toolbar</code> prop is enabled by default.</li><li>Under cascade selection, the callback parameters returned by the <code>confirm</code> and <code>change</code> events will contain a complete option object.</li></ul><h4 id="popover" tabindex="-1">Popover</h4><ul><li>Default value of <code>trigger</code> prop adjusted to <code>click</code>.</li></ul><h4 id="stepper" tabindex="-1">Stepper</h4><ul><li>The <code>async-change</code> prop is renamed to <code>before-change</code>, and the usage method is adjusted.</li></ul><h4 id="swipecell" tabindex="-1">SwipeCell</h4><ul><li><code>detail</code> parameter of <code>open</code> event renamed to <code>name</code>.</li><li><code>on-close</code> prop renamed to <code>before-close</code>, and parameter structure adjusted.</li><li>The <code>before-close</code> prop is no longer passed to the component instance.</li></ul><h4 id="toast" tabindex="-1">Toast</h4><ul><li><code>mask</code> prop renamed to <code>overlay</code>.</li></ul><h4 id="treeselect" tabindex="-1">TreeSelect</h4><ul><li><code>navclick</code> event renamed to <code>click-nav</code>.</li><li><code>itemclick</code> event renamed to <code>click-item</code>.</li></ul></div><div class="van-doc-card"><h3 id="global-methods" tabindex="-1">Global methods</h3><p>Global methods such as <code>$toast</code> and <code>$dialog</code> are provided by default in Vant 2, but Vue 3.0 no longer supports directly mounting methods on Vue&#39;s prototype chain, so starting from Vant 3.0, you must first pass <code>app.use</code> registers the component to the corresponding app.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span>, <span class="hljs-title class_">Dialog</span>, <span class="hljs-title class_">Notify</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-comment">// Register components such as Toast to the app</span>
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Toast</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Dialog</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Notify</span>);

<span class="hljs-comment">// Subcomponents in the app can directly call methods such as $toast</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">mounted</span>(<span class="hljs-params"></span>) {
    <span class="hljs-variable language_">this</span>.$toast(<span class="hljs-string">&#39;prompt text&#39;</span>);
  },
};
</code></pre></div>`,13),p=[o];function c(i,d){return a(),n("div",l,p)}const m=s(t,[["render",c]]);export{m as default};

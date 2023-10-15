import{_ as s}from"./locales-be796722.js";import{o as t,a,z as n}from"./vue-libs-19c20d28.js";const d={},e={class:"van-doc-markdown-body"},l=n(`<h1>Search 搜索</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于搜索场景的输入框组件。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Search</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Search</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p><code>v-model</code> 用于控制搜索框中的文字，<code>background</code> 可以自定义搜索框外部背景色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入搜索关键词&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="shi-jian-jian-ting" tabindex="-1">事件监听</h3><p>Search 组件提供了 <code>search</code> 和 <code>cancel</code> 事件，<code>search</code> 事件在点击键盘上的搜索/回车按钮后触发，<code>cancel</code> 事件在点击搜索框右侧取消按钮时触发。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">action</span>=<span class="hljs-string">&quot;/&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-search</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
    <span class="hljs-attr">show-action</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入搜索关键词&quot;</span>
    @<span class="hljs-attr">search</span>=<span class="hljs-string">&quot;onSearch&quot;</span>
    @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSearch</span> = (<span class="hljs-params">val</span>) =&gt; <span class="hljs-title function_">showToast</span>(val);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onCancel</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;取消&#39;</span>);
    <span class="hljs-keyword">return</span> {
      value,
      onSearch,
      onCancel,
    };
  },
};
</code></pre><blockquote><p>Tips: 在 van-search 外层增加 form 标签，且 action 不为空，即可在 iOS 输入法中显示搜索按钮。</p></blockquote></div><div class="van-doc-card"><h3 id="sou-suo-kuang-nei-rong-dui-qi" tabindex="-1">搜索框内容对齐</h3><p>通过 <code>input-align</code> 属性设置搜索框内容的对齐方式，可选值为 <code>center</code>、<code>right</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入搜索关键词&quot;</span>
  <span class="hljs-attr">input-align</span>=<span class="hljs-string">&quot;center&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-sou-suo-kuang" tabindex="-1">禁用搜索框</h3><p>通过 <code>disabled</code> 属性禁用搜索框。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入搜索关键词&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-bei-jing-se" tabindex="-1">自定义背景色</h3><p>通过 <code>background</code> 属性可以设置搜索框外部的背景色，通过 <code>shape</code> 属性设置搜索框的形状，可选值为 <code>round</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;round&quot;</span>
  <span class="hljs-attr">background</span>=<span class="hljs-string">&quot;#4fc08d&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入搜索关键词&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-an-niu" tabindex="-1">自定义按钮</h3><p>使用 <code>action</code> 插槽可以自定义右侧按钮的内容。使用插槽后，<code>cancel</code> 事件将不再触发。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">show-action</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;地址&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入搜索关键词&quot;</span>
  @<span class="hljs-attr">search</span>=<span class="hljs-string">&quot;onSearch&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">action</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onClickButton&quot;</span>&gt;</span>搜索<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-search</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSearch</span> = (<span class="hljs-params">val</span>) =&gt; <span class="hljs-title function_">showToast</span>(val);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickButton</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(value.<span class="hljs-property">value</span>);
    <span class="hljs-keyword">return</span> {
      value,
      onSearch,
      onClickButton,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前输入的值</td><td><em>number | string</em></td><td>-</td></tr><tr><td>label</td><td>搜索框左侧文本</td><td><em>string</em></td><td>-</td></tr><tr><td>name</td><td>名称，作为提交表单时的标识符</td><td><em>string</em></td><td>-</td></tr><tr><td>shape</td><td>搜索框形状，可选值为 <code>round</code></td><td><em>string</em></td><td><code>square</code></td></tr><tr><td>id</td><td>搜索框 id，同时会设置 label 的 for 属性</td><td><em>string</em></td><td><code>van-search-n-input</code></td></tr><tr><td>background</td><td>搜索框外部背景色</td><td><em>string</em></td><td><code>#f2f2f2</code></td></tr><tr><td>maxlength</td><td>输入的最大字符数</td><td><em>number | string</em></td><td>-</td></tr><tr><td>placeholder</td><td>占位提示文字</td><td><em>string</em></td><td>-</td></tr><tr><td>clearable</td><td>是否启用清除图标，点击清除图标后会清空输入框</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>clear-icon</td><td>清除图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td><td><em>string</em></td><td><code>clear</code></td></tr><tr><td>clear-trigger</td><td>显示清除图标的时机，<code>always</code> 表示输入框不为空时展示，<br><code>focus</code> 表示输入框聚焦且不为空时展示</td><td><em>string</em></td><td><code>focus</code></td></tr><tr><td>autofocus</td><td>是否自动聚焦，iOS 系统不支持该属性</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-action</td><td>是否在搜索框右侧显示取消按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>action-text</td><td>取消按钮文字</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td>disabled</td><td>是否禁用输入框</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly</td><td>是否将输入框设为只读状态，只读状态下无法输入内容</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>error</td><td>是否将输入内容标红</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>error-message</td><td>底部错误提示文案，为空时不展示</td><td><em>string</em></td><td>-</td></tr><tr><td>formatter</td><td>输入内容格式化函数</td><td><em>(val: string) =&gt; string</em></td><td>-</td></tr><tr><td>format-trigger</td><td>格式化函数触发的时机，可选值为 <code>onBlur</code></td><td><em>string</em></td><td><code>onChange</code></td></tr><tr><td>input-align</td><td>输入框内容对齐方式，可选值为 <code>center</code> <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td>left-icon</td><td>输入框左侧图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td><td><em>string</em></td><td><code>search</code></td></tr><tr><td>right-icon</td><td>输入框右侧图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td><td><em>string</em></td><td>-</td></tr><tr><td>autocomplete</td><td>input 标签原生的<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete" target="_blank">自动完成属性</a></td><td><em>string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>search</td><td>确定搜索时触发</td><td><em>value: string (当前输入的值)</em></td></tr><tr><td>update:model-value</td><td>输入框内容变化时触发</td><td><em>value: string (当前输入的值)</em></td></tr><tr><td>focus</td><td>输入框获得焦点时触发</td><td><em>event: Event</em></td></tr><tr><td>blur</td><td>输入框失去焦点时触发</td><td><em>event: Event</em></td></tr><tr><td>click-input</td><td>点击输入区域时触发</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-left-icon</td><td>点击左侧图标时触发</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-right-icon <code>3.4.0</code></td><td>点击右侧图标时触发</td><td><em>event: MouseEvent</em></td></tr><tr><td>clear</td><td>点击清除按钮后触发</td><td><em>event: MouseEvent</em></td></tr><tr><td>cancel</td><td>点击取消按钮时触发</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">方法</h3><p>通过 ref 可以获取到 Search 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>focus</td><td>获取输入框焦点</td><td>-</td><td>-</td></tr><tr><td>blur</td><td>取消输入框焦点</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SearchProps</span>, <span class="hljs-title class_">SearchShape</span>, <span class="hljs-title class_">SearchInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>SearchInstance</code> 是组件实例的类型，用法如下：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SearchInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> searchRef = ref&lt;<span class="hljs-title class_">SearchInstance</span>&gt;();

searchRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">focus</span>();
</code></pre></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>left</td><td>自定义左侧内容（搜索框外）</td></tr><tr><td>action</td><td>自定义右侧内容（搜索框外），设置 <code>show-action</code> 属性后展示</td></tr><tr><td>label</td><td>自定义左侧文本（搜索框内）</td></tr><tr><td>left-icon</td><td>自定义左侧图标（搜索框内）</td></tr><tr><td>right-icon</td><td>自定义右侧图标（搜索框内）</td></tr></tbody></table></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-search-padding</td><td><em>10px var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-search-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-search-content-background</td><td><em>var(--van-gray-1)</em></td><td>-</td></tr><tr><td>--van-search-input-height</td><td><em>34px</em></td><td>-</td></tr><tr><td>--van-search-label-padding</td><td><em>0 5px</em></td><td>-</td></tr><tr><td>--van-search-label-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-search-label-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-search-left-icon-color</td><td><em>var(--van-gray-6)</em></td><td>-</td></tr><tr><td>--van-search-action-padding</td><td><em>0 var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-search-action-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-search-action-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="zai-zhuo-mian-duan-dian-ji-qing-chu-an-niu-wu-xiao" tabindex="-1">在桌面端点击清除按钮无效？</h3><p>清除按钮监听是的移动端 Touch 事件，参见<a href="#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei" target="_blank">桌面端适配</a>。</p></div>`,20),c=[l];function r(p,o){return t(),a("div",e,c)}const u=s(d,[["render",r]]);export{u as default};

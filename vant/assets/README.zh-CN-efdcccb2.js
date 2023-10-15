import{_ as s}from"./locales-be796722.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const d={},l={class:"van-doc-markdown-body"},p=n(`<h1>PasswordInput 密码输入框</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>带网格的输入框组件，可以用于输入密码、短信验证码等场景，通常与<a href="#/zh-CN/number-keyboard" target="_blank">数字键盘</a>组件配合使用。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">PasswordInput</span>, <span class="hljs-title class_">NumberKeyboard</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">PasswordInput</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">NumberKeyboard</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>搭配数字键盘组件来实现密码输入功能。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 密码输入框 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-password-input</span>
  <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:focused</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>
  @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;showKeyboard = true&quot;</span>
/&gt;</span>
<span class="hljs-comment">&lt;!-- 数字键盘 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>
  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;showKeyboard = false&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;123&#39;</span>);
    <span class="hljs-keyword">const</span> showKeyboard = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);

    <span class="hljs-keyword">return</span> {
      value,
      showKeyboard,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-chang-du" tabindex="-1">自定义长度</h3><p>通过 <code>length</code> 属性来设置密码长度。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-password-input</span>
  <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:length</span>=<span class="hljs-string">&quot;4&quot;</span>
  <span class="hljs-attr">:focused</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>
  @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;showKeyboard = true&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="ge-zi-jian-ju" tabindex="-1">格子间距</h3><p>通过 <code>gutter</code> 属性来设置格子之间的间距。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-password-input</span>
  <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:gutter</span>=<span class="hljs-string">&quot;10&quot;</span>
  <span class="hljs-attr">:focused</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>
  @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;showKeyboard = true&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="ming-wen-zhan-shi" tabindex="-1">明文展示</h3><p>将 <code>mask</code> 设置为 <code>false</code> 可以明文展示输入的内容，适用于短信验证码等场景。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-password-input</span>
  <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:mask</span>=<span class="hljs-string">&quot;false&quot;</span>
  <span class="hljs-attr">:focused</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>
  @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;showKeyboard = true&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="ti-shi-xin-xi" tabindex="-1">提示信息</h3><p>通过 <code>info</code> 属性设置提示信息，通过 <code>error-info</code> 属性设置错误提示，例如当输入六位时提示密码错误。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-password-input</span>
  <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">info</span>=<span class="hljs-string">&quot;密码为 6 位数字&quot;</span>
  <span class="hljs-attr">:error-info</span>=<span class="hljs-string">&quot;errorInfo&quot;</span>
  <span class="hljs-attr">:focused</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>
  @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;showKeyboard = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-number-keyboard</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;showKeyboard&quot;</span>
  @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;showKeyboard = false&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, watch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;123&#39;</span>);
    <span class="hljs-keyword">const</span> errorInfo = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> showKeyboard = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);

    <span class="hljs-title function_">watch</span>(value, <span class="hljs-function">(<span class="hljs-params">newVal</span>) =&gt;</span> {
      <span class="hljs-keyword">if</span> (newVal.<span class="hljs-property">length</span> === <span class="hljs-number">6</span> &amp;&amp; newVal !== <span class="hljs-string">&#39;123456&#39;</span>) {
        errorInfo.<span class="hljs-property">value</span> = <span class="hljs-string">&#39;密码错误&#39;</span>;
      } <span class="hljs-keyword">else</span> {
        errorInfo.<span class="hljs-property">value</span> = <span class="hljs-string">&#39;&#39;</span>;
      }
    });

    <span class="hljs-keyword">return</span> {
      value,
      errorInfo,
      showKeyboard,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>密码值</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>info</td><td>输入框下方文字提示</td><td><em>string</em></td><td>-</td></tr><tr><td>error-info</td><td>输入框下方错误提示</td><td><em>string</em></td><td>-</td></tr><tr><td>length</td><td>密码最大长度</td><td><em>number | string</em></td><td><code>6</code></td></tr><tr><td>gutter</td><td>输入框格子之间的间距，如 <code>20px</code> <code>2em</code>，默认单位为<code>px</code></td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>mask</td><td>是否隐藏密码内容</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>focused</td><td>是否已聚焦，聚焦时会显示光标</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>focus</td><td>输入框聚焦时触发</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">PasswordInputProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-password-input-height</td><td><em>50px</em></td><td>-</td></tr><tr><td>--van-password-input-margin</td><td><em>0 var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-password-input-font-size</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-password-input-radius</td><td><em>6px</em></td><td>-</td></tr><tr><td>--van-password-input-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-password-input-info-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-password-input-info-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-password-input-error-info-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-password-input-dot-size</td><td><em>10px</em></td><td>-</td></tr><tr><td>--van-password-input-dot-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-password-input-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-password-input-cursor-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-password-input-cursor-width</td><td><em>1px</em></td><td>-</td></tr><tr><td>--van-password-input-cursor-height</td><td><em>40%</em></td><td>-</td></tr><tr><td>--van-password-input-cursor-duration</td><td><em>1s</em></td><td>-</td></tr></tbody></table></div>`,15),e=[p];function r(o,c){return a(),t("div",l,e)}const u=s(d,[["render",r]]);export{u as default};

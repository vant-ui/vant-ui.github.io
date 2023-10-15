import{_ as s}from"./locales-be796722.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const l={},e={class:"van-doc-markdown-body"},d=n(`<h1>Field 输入框</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用户可以在文本框内输入或编辑文字。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Field</span>, <span class="hljs-title class_">CellGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Field</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CellGroup</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>可以通过 <code>v-model</code> 双向绑定输入框的值，通过 <code>placeholder</code> 设置占位提示文字。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 可以使用 CellGroup 作为容器 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;文本&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入用户名&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-lei-xing" tabindex="-1">自定义类型</h3><p>根据 <code>type</code> 属性定义不同类型的输入框，默认值为 <code>text</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- 输入任意文本 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;文本&quot;</span> /&gt;</span>
  <span class="hljs-comment">&lt;!-- 输入手机号，调起手机号键盘 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;tel&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;tel&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;手机号&quot;</span> /&gt;</span>
  <span class="hljs-comment">&lt;!-- 允许输入正整数，调起纯数字键盘 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;digit&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;digit&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;整数&quot;</span> /&gt;</span>
  <span class="hljs-comment">&lt;!-- 允许输入数字，调起带符号的纯数字键盘 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;number&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;数字&quot;</span> /&gt;</span>
  <span class="hljs-comment">&lt;!-- 输入密码 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;密码&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> tel = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> text = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> digit = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> number = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> password = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);

    <span class="hljs-keyword">return</span> { tel, text, digit, number, password };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-shu-ru-kuang" tabindex="-1">禁用输入框</h3><p>通过 <code>readonly</code> 将输入框设置为只读状态，通过 <code>disabled</code> 将输入框设置为禁用状态。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;文本&quot;</span> <span class="hljs-attr">model-value</span>=<span class="hljs-string">&quot;输入框只读&quot;</span> <span class="hljs-attr">readonly</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;文本&quot;</span> <span class="hljs-attr">model-value</span>=<span class="hljs-string">&quot;输入框已禁用&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="xian-shi-tu-biao" tabindex="-1">显示图标</h3><p>通过 <code>left-icon</code> 和 <code>right-icon</code> 配置输入框两侧的图标，通过设置 <code>clearable</code> 在输入过程中展示清除图标。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;文本&quot;</span>
    <span class="hljs-attr">left-icon</span>=<span class="hljs-string">&quot;smile-o&quot;</span>
    <span class="hljs-attr">right-icon</span>=<span class="hljs-string">&quot;warning-o&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;显示图标&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>
    <span class="hljs-attr">clearable</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;文本&quot;</span>
    <span class="hljs-attr">left-icon</span>=<span class="hljs-string">&quot;music-o&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;显示清除图标&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value1 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> value2 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;123&#39;</span>);
    <span class="hljs-keyword">return</span> {
      value1,
      value2,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="cuo-wu-ti-shi" tabindex="-1">错误提示</h3><p>设置 <code>required</code> 属性表示这是一个必填项，可以配合 <code>error</code> 或 <code>error-message</code> 属性显示对应的错误提示。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;username&quot;</span>
    <span class="hljs-attr">error</span>
    <span class="hljs-attr">required</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;用户名&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入用户名&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;phone&quot;</span>
    <span class="hljs-attr">required</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;手机号&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入手机号&quot;</span>
    <span class="hljs-attr">error-message</span>=<span class="hljs-string">&quot;手机号格式错误&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="cha-ru-an-niu" tabindex="-1">插入按钮</h3><p>通过 button 插槽可以在输入框尾部插入按钮。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;sms&quot;</span>
    <span class="hljs-attr">center</span>
    <span class="hljs-attr">clearable</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;短信验证码&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入短信验证码&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>发送验证码<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="ge-shi-hua-shu-ru-nei-rong" tabindex="-1">格式化输入内容</h3><p>通过 <code>formatter</code> 属性可以对输入的内容进行格式化，通过 <code>format-trigger</code> 属性可以指定执行格式化的时机，默认在输入时进行格式化。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;文本&quot;</span>
    <span class="hljs-attr">:formatter</span>=<span class="hljs-string">&quot;formatter&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;在输入时执行格式化&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;文本&quot;</span>
    <span class="hljs-attr">:formatter</span>=<span class="hljs-string">&quot;formatter&quot;</span>
    <span class="hljs-attr">format-trigger</span>=<span class="hljs-string">&quot;onBlur&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;在失焦时执行格式化&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value1 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> value2 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-comment">// 过滤输入的数字</span>
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">formatter</span> = (<span class="hljs-params">value</span>) =&gt; value.<span class="hljs-title function_">replace</span>(<span class="hljs-regexp">/\\d/g</span>, <span class="hljs-string">&#39;&#39;</span>);

    <span class="hljs-keyword">return</span> {
      value1,
      value2,
      formatter,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="gao-du-zi-gua-ying" tabindex="-1">高度自适应</h3><p>对于 textarea，可以通过 <code>autosize</code> 属性设置高度自适应。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;message&quot;</span>
    <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;1&quot;</span>
    <span class="hljs-attr">autosize</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;留言&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;textarea&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入留言&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="xian-shi-zi-shu-tong-ji" tabindex="-1">显示字数统计</h3><p>设置 <code>maxlength</code> 和 <code>show-word-limit</code> 属性后会在底部显示字数统计。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;message&quot;</span>
    <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;2&quot;</span>
    <span class="hljs-attr">autosize</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;留言&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;textarea&quot;</span>
    <span class="hljs-attr">maxlength</span>=<span class="hljs-string">&quot;50&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入留言&quot;</span>
    <span class="hljs-attr">show-word-limit</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="shu-ru-kuang-nei-rong-dui-qi" tabindex="-1">输入框内容对齐</h3><p>通过 <code>input-align</code> 属性可以设置输入框内容的对齐方式，可选值为 <code>center</code>、<code>right</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;文本&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;输入框内容右对齐&quot;</span>
    <span class="hljs-attr">input-align</span>=<span class="hljs-string">&quot;right&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="shu-ru-kuang-wen-ben-wei-zhi" tabindex="-1">输入框文本位置</h3><p>通过 <code>label-align</code> 属性可以设置输入框文本的位置，可选值为 <code>center</code>、<code>right</code>、<code>top</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;文本&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;顶部对齐&quot;</span>
    <span class="hljs-attr">label-align</span>=<span class="hljs-string">&quot;top&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;文本&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;左对齐&quot;</span>
    <span class="hljs-attr">label-align</span>=<span class="hljs-string">&quot;left&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value3&quot;</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;文本&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;居中对齐&quot;</span>
    <span class="hljs-attr">label-align</span>=<span class="hljs-string">&quot;center&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value4&quot;</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;文本&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;右对齐&quot;</span>
    <span class="hljs-attr">label-align</span>=<span class="hljs-string">&quot;right&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前输入的值</td><td><em>number | string</em></td><td>-</td></tr><tr><td>label</td><td>输入框左侧文本</td><td><em>string</em></td><td>-</td></tr><tr><td>name</td><td>名称，作为提交表单时的标识符</td><td><em>string</em></td><td>-</td></tr><tr><td>id</td><td>输入框 id，同时会设置 label 的 for 属性</td><td><em>string</em></td><td><code>van-field-n-input</code></td></tr><tr><td>type</td><td>输入框类型, 支持原生 input 标签的所有 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#%3Cinput%3E_types" target="_blank">type 属性</a>，额外支持了 <code>digit</code> 类型</td><td><em>FieldType</em></td><td><code>text</code></td></tr><tr><td>size</td><td>大小，可选值为 <code>large</code></td><td><em>string</em></td><td>-</td></tr><tr><td>maxlength</td><td>输入的最大字符数</td><td><em>number | string</em></td><td>-</td></tr><tr><td>placeholder</td><td>输入框占位提示文字</td><td><em>string</em></td><td>-</td></tr><tr><td>border</td><td>是否显示内边框</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>disabled</td><td>是否禁用输入框</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly</td><td>是否为只读状态，只读状态下无法输入内容</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>colon</td><td>是否在 label 后面添加冒号</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>required</td><td>是否显示表单必填星号</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>center</td><td>是否使内容垂直居中</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>clearable</td><td>是否启用清除图标，点击清除图标后会清空输入框</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>clear-icon</td><td>清除图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td><td><em>string</em></td><td><code>clear</code></td></tr><tr><td>clear-trigger</td><td>显示清除图标的时机，<code>always</code> 表示输入框不为空时展示，<br><code>focus</code> 表示输入框聚焦且不为空时展示</td><td><em>FieldClearTrigger</em></td><td><code>focus</code></td></tr><tr><td>clickable</td><td>是否开启点击反馈</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>is-link</td><td>是否展示右侧箭头并开启点击反馈</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>autofocus</td><td>是否自动聚焦，iOS 系统不支持该属性</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-word-limit</td><td>是否显示字数统计，需要设置 <code>maxlength</code> 属性</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>error</td><td>是否将输入内容标红</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>error-message</td><td>底部错误提示文案，为空时不展示</td><td><em>string</em></td><td>-</td></tr><tr><td>error-message-align</td><td>错误提示文案对齐方式，可选值为 <code>center</code> <code>right</code></td><td><em>FieldTextAlign</em></td><td><code>left</code></td></tr><tr><td>formatter</td><td>输入内容格式化函数</td><td><em>(val: string) =&gt; string</em></td><td>-</td></tr><tr><td>format-trigger</td><td>格式化函数触发的时机，可选值为 <code>onBlur</code></td><td><em>FieldFormatTrigger</em></td><td><code>onChange</code></td></tr><tr><td>arrow-direction</td><td>箭头方向，可选值为 <code>left</code> <code>up</code> <code>down</code></td><td><em>string</em></td><td><code>right</code></td></tr><tr><td>label-class</td><td>左侧文本额外类名</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>label-width</td><td>左侧文本宽度，默认单位为 <code>px</code></td><td><em>number | string</em></td><td><code>6.2em</code></td></tr><tr><td>label-align</td><td>左侧文本对齐方式，可选值为 <code>center</code> <code>right</code> <code>top</code></td><td><em>FieldTextAlign</em></td><td><code>left</code></td></tr><tr><td>input-align</td><td>输入框对齐方式，可选值为 <code>center</code> <code>right</code></td><td><em>FieldTextAlign</em></td><td><code>left</code></td></tr><tr><td>autosize</td><td>是否自适应内容高度，只对 textarea 有效，<br>可传入对象,如 { maxHeight: 100, minHeight: 50 }，<br>单位为<code>px</code></td><td><em>boolean | FieldAutosizeConfig</em></td><td><code>false</code></td></tr><tr><td>left-icon</td><td>左侧图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td><td><em>string</em></td><td>-</td></tr><tr><td>right-icon</td><td>右侧图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td><td><em>string</em></td><td>-</td></tr><tr><td>icon-prefix</td><td>图标类名前缀，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">class-prefix 属性</a></td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>rules</td><td>表单校验规则，详见 <a href="#/zh-CN/form#rule-shu-ju-jie-gou" target="_blank">Form 组件</a></td><td><em>FieldRule[]</em></td><td>-</td></tr><tr><td>autocomplete</td><td>HTML 原生属性，用于控制自动完成功能，详见 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete" target="_blank">MDN - autocomplete</a></td><td><em>string</em></td><td>-</td></tr><tr><td>autocapitalize <code>v4.6.2</code></td><td>HTML 原生属性，用于控制文本输入时是否自动大写，此 API 仅在部分浏览器支持，详见 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize" target="_blank">MDN - autocapitalize</a></td><td><em>string</em></td><td>-</td></tr><tr><td>enterkeyhint</td><td>HTML 原生属性，用于控制回车键样式，此 API 仅在部分浏览器支持，详见 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint" target="_blank">MDN - enterkeyhint</a><br></td><td><em>string</em></td><td>-</td></tr><tr><td>spellcheck <code>v4.6.2</code></td><td>HTML 原生属性，用于检查元素的拼写错误，此 API 仅在部分浏览器支持，详见 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck" target="_blank">MDN - spellcheck</a><br></td><td><em>boolean</em></td><td>-</td></tr><tr><td>autocorrect <code>v4.6.2</code></td><td>仅 Safari 适用，用于自动更正输入的文本，详见 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#autocorrect" target="_blank">MDN - autocorrect</a><br></td><td><em>string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:model-value</td><td>输入框内容变化时触发</td><td><em>value: string (当前输入的值)</em></td></tr><tr><td>focus</td><td>输入框获得焦点时触发</td><td><em>event: Event</em></td></tr><tr><td>blur</td><td>输入框失去焦点时触发</td><td><em>event: Event</em></td></tr><tr><td>clear</td><td>点击清除按钮时触发</td><td><em>event: MouseEvent</em></td></tr><tr><td>click</td><td>点击组件时触发</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-input</td><td>点击输入区域时触发</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-left-icon</td><td>点击左侧图标时触发</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-right-icon</td><td>点击右侧图标时触发</td><td><em>event: MouseEvent</em></td></tr><tr><td>start-validate</td><td>开始表单校验时触发</td><td>-</td></tr><tr><td>end-validate</td><td>结束表单校验时触发</td><td><em>{ status: string, message: string }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">方法</h3><p>通过 ref 可以获取到 Field 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>focus</td><td>获取输入框焦点</td><td>-</td><td>-</td></tr><tr><td>blur</td><td>取消输入框焦点</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">FieldType</span>,
  <span class="hljs-title class_">FieldRule</span>,
  <span class="hljs-title class_">FieldProps</span>,
  <span class="hljs-title class_">FieldInstance</span>,
  <span class="hljs-title class_">FieldTextAlign</span>,
  <span class="hljs-title class_">FieldRuleMessage</span>,
  <span class="hljs-title class_">FieldClearTrigger</span>,
  <span class="hljs-title class_">FieldFormatTrigger</span>,
  <span class="hljs-title class_">FieldRuleValidator</span>,
  <span class="hljs-title class_">FieldRuleFormatter</span>,
  <span class="hljs-title class_">FieldValidateError</span>,
  <span class="hljs-title class_">FieldAutosizeConfig</span>,
  <span class="hljs-title class_">FieldValidateTrigger</span>,
  <span class="hljs-title class_">FieldValidationStatus</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>FieldInstance</code> 是组件实例的类型，用法如下：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">FieldInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> fieldRef = ref&lt;<span class="hljs-title class_">FieldInstance</span>&gt;();

fieldRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">focus</span>();
</code></pre></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>label</td><td>自定义输入框左侧文本</td><td>-</td></tr><tr><td>input</td><td>自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效</td><td>-</td></tr><tr><td>left-icon</td><td>自定义输入框头部图标</td><td>-</td></tr><tr><td>right-icon</td><td>自定义输入框尾部图标</td><td>-</td></tr><tr><td>button</td><td>自定义输入框尾部按钮</td><td>-</td></tr><tr><td>error-message</td><td>自定义底部错误提示文案</td><td><em>{ message: string }</em></td></tr><tr><td>extra</td><td>自定义输入框最右侧的额外内容</td><td>-</td></tr></tbody></table></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-field-label-width</td><td><em>6.2em</em></td><td>-</td></tr><tr><td>--van-field-label-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-field-label-margin-right</td><td><em>var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-field-input-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-field-input-error-text-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-field-input-disabled-text-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-field-placeholder-text-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-field-icon-size</td><td><em>18px</em></td><td>-</td></tr><tr><td>--van-field-clear-icon-size</td><td><em>18px</em></td><td>-</td></tr><tr><td>--van-field-clear-icon-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-field-right-icon-color</td><td><em>var(--van-gray-6)</em></td><td>-</td></tr><tr><td>--van-field-error-message-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-field-error-message-font-size</td><td><em>12px</em></td><td>-</td></tr><tr><td>--van-field-text-area-min-height</td><td><em>60px</em></td><td>-</td></tr><tr><td>--van-field-word-limit-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-field-word-limit-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-field-word-limit-line-height</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-field-disabled-text-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-field-required-mark-color</td><td><em>var(--van-red)</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="she-zhi-type-wei-number-hou-wei-shi-me-input-biao-qian-de-lei-xing-reng-wei-text" tabindex="-1">设置 type 为 number 后，为什么 input 标签的类型仍为 text?</h3><p>HTML 原生的 <code>type=&quot;number&quot;</code> 属性在 iOS 和 Android 系统上都存在一定问题，比如 maxlength 属性不生效、无法获取到完整的输入内容等。因此设置 type 为 <code>number</code> 时，Field 不会使用原生的 <code>type=&quot;number&quot;</code> 属性，而是用现代浏览器支持的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/inputmode" target="_blank">inputmode 属性</a>来控制输入键盘的类型。</p></div><div class="van-doc-card"><h3 id="wei-shi-me-v-model-bang-ding-de-zhi-bei-geng-xin-wei-string-lei-xing" tabindex="-1">为什么 v-model 绑定的值被更新为 string 类型？</h3><p>Field 组件内部会将传入的 v-model 格式化为 string 类型，便于组件内部进行处理。</p><p>如果你希望在 v-model 上绑定 number 类型，可以使用 Vue 提供的 <a href="https://vuejs.org/guide/essentials/forms.html#lazy" target="_blank">.number 修饰符</a>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model.number</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;tel&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zai-zhuo-mian-duan-dian-ji-qing-chu-an-niu-wu-xiao" tabindex="-1">在桌面端点击清除按钮无效？</h3><p>清除按钮监听是的移动端 Touch 事件，参见<a href="#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei" target="_blank">桌面端适配</a>。</p></div>`,27),p=[d];function r(c,o){return a(),t("div",e,p)}const g=s(l,[["render",r]]);export{g as default};

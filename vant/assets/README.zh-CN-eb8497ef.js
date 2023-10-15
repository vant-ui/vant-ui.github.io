import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as l}from"./vue-libs-19c20d28.js";const t={},p={class:"van-doc-markdown-body"},e=l(`<h1>Form 表单</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于数据录入、校验，支持输入框、单选框、复选框、文件上传等类型，需要与 <a href="#/zh-CN/field" target="_blank">Field 输入框</a> 组件搭配使用。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Form</span>, <span class="hljs-title class_">Field</span>, <span class="hljs-title class_">CellGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Form</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Field</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CellGroup</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>在表单中，每个 <a href="#/zh-CN/field" target="_blank">Field 组件</a> 代表一个表单项，使用 Field 的 <code>rules</code> 属性定义校验规则。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-form</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;username&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;用户名&quot;</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;用户名&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;用户名&quot;</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ required: true, message: &#39;请填写用户名&#39; }]&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;password&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;密码&quot;</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;密码&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;密码&quot;</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ required: true, message: &#39;请填写密码&#39; }]&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 16px;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">round</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">native-type</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>
      提交
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-form</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> username = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> password = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSubmit</span> = (<span class="hljs-params">values</span>) =&gt; {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;submit&#39;</span>, values);
    };

    <span class="hljs-keyword">return</span> {
      username,
      password,
      onSubmit,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xiao-yan-gui-ze" tabindex="-1">校验规则</h3><p>通过 <code>rules</code> 定义表单校验规则，所有可用字段见<a href="#/zh-CN/form#rule-shu-ju-jie-gou" target="_blank">下方表格</a>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-form</span> @<span class="hljs-attr">failed</span>=<span class="hljs-string">&quot;onFailed&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- 通过 pattern 进行正则校验 --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;pattern&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;正则校验&quot;</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ pattern, message: &#39;请输入正确内容&#39; }]&quot;</span>
    /&gt;</span>
    <span class="hljs-comment">&lt;!-- 通过 validator 进行函数校验 --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;validator&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;函数校验&quot;</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ validator, message: &#39;请输入正确内容&#39; }]&quot;</span>
    /&gt;</span>
    <span class="hljs-comment">&lt;!-- 通过 validator 返回错误提示 --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value3&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;validatorMessage&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;校验函数返回错误提示&quot;</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ validator: validatorMessage }]&quot;</span>
    /&gt;</span>
    <span class="hljs-comment">&lt;!-- 通过 validator 进行异步函数校验 --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value4&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;asyncValidator&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;异步函数校验&quot;</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ validator: asyncValidator, message: &#39;请输入正确内容&#39; }]&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 16px;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">round</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">native-type</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>
      提交
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-form</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { closeToast, showLoadingToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value1 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> value2 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> value3 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;abc&#39;</span>);
    <span class="hljs-keyword">const</span> value4 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> pattern = <span class="hljs-regexp">/\\d{6}/</span>;

    <span class="hljs-comment">// 校验函数返回 true 表示校验通过，false 表示不通过</span>
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">validator</span> = (<span class="hljs-params">val</span>) =&gt; <span class="hljs-regexp">/1\\d{10}/</span>.<span class="hljs-title function_">test</span>(val);

    <span class="hljs-comment">// 校验函数可以直接返回一段错误提示</span>
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">validatorMessage</span> = (<span class="hljs-params">val</span>) =&gt; <span class="hljs-string">\`<span class="hljs-subst">\${val}</span> 不合法，请重新输入\`</span>;

    <span class="hljs-comment">// 校验函数可以返回 Promise，实现异步校验</span>
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">asyncValidator</span> = (<span class="hljs-params">val</span>) =&gt;
      <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {
        <span class="hljs-title function_">showLoadingToast</span>(<span class="hljs-string">&#39;验证中...&#39;</span>);

        <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
          <span class="hljs-title function_">closeToast</span>();
          <span class="hljs-title function_">resolve</span>(val === <span class="hljs-string">&#39;1234&#39;</span>);
        }, <span class="hljs-number">1000</span>);
      });

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onFailed</span> = (<span class="hljs-params">errorInfo</span>) =&gt; {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;failed&#39;</span>, errorInfo);
    };

    <span class="hljs-keyword">return</span> {
      value1,
      value2,
      value3,
      value4,
      pattern,
      onFailed,
      validator,
      asyncValidator,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="biao-dan-xiang-lei-xing---kai-guan" tabindex="-1">表单项类型 - 开关</h3><p>在表单中使用 <a href="#/zh-CN/switch" target="_blank">Switch 组件</a>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;switch&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;开关&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">return</span> { checked };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="biao-dan-xiang-lei-xing---fu-xuan-kuang" tabindex="-1">表单项类型 - 复选框</h3><p>在表单中使用 <a href="#/zh-CN/checkbox" target="_blank">Checkbox 组件</a>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;复选框&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkboxGroup&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;复选框组&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;groupChecked&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>复选框 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>复选框 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> groupChecked = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">return</span> {
      checked,
      groupChecked,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="biao-dan-xiang-lei-xing---dan-xuan-kuang" tabindex="-1">表单项类型 - 单选框</h3><p>在表单中使用 <a href="#/zh-CN/radio" target="_blank">Radio 组件</a>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;radio&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;单选框&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>单选框 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>单选框 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;1&#39;</span>);
    <span class="hljs-keyword">return</span> { checked };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="biao-dan-xiang-lei-xing---bu-jin-qi" tabindex="-1">表单项类型 - 步进器</h3><p>在表单中使用 <a href="#/zh-CN/stepper" target="_blank">Stepper 组件</a>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;stepper&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;步进器&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-stepper</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">1</span>);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="biao-dan-xiang-lei-xing---ping-fen" tabindex="-1">表单项类型 - 评分</h3><p>在表单中使用 <a href="#/zh-CN/rate" target="_blank">Rate 组件</a>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;rate&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;评分&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">3</span>);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="biao-dan-xiang-lei-xing---hua-kuai" tabindex="-1">表单项类型 - 滑块</h3><p>在表单中使用 <a href="#/zh-CN/slider" target="_blank">Slider 组件</a>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;slider&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;滑块&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">50</span>);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="biao-dan-xiang-lei-xing---wen-jian-shang-chuan" tabindex="-1">表单项类型 - 文件上传</h3><p>在表单中使用 <a href="#/zh-CN/uploader" target="_blank">Uploader 组件</a>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;uploader&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;文件上传&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>([
      { <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg&#39;</span> },
    ]);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="biao-dan-xiang-lei-xing---xuan-ze-qi" tabindex="-1">表单项类型 - 选择器</h3><p>在表单中使用 <a href="#/zh-CN/picker" target="_blank">Picker 组件</a>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;result&quot;</span>
  <span class="hljs-attr">is-link</span>
  <span class="hljs-attr">readonly</span>
  <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;picker&quot;</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;选择器&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;点击选择城市&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showPicker = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPicker&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span>
    <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>
    @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;showPicker = false&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> result = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> showPicker = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> columns = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;杭州&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Hangzhou&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;宁波&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Ningbo&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;温州&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Wenzhou&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;绍兴&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Shaoxing&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;湖州&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Huzhou&#39;</span> },
    ];

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">{ selectedOptions }</span>) =&gt; {
      result.<span class="hljs-property">value</span> = selectedOptions[<span class="hljs-number">0</span>]?.<span class="hljs-property">text</span>;
      showPicker.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
    };

    <span class="hljs-keyword">return</span> {
      result,
      columns,
      onConfirm,
      showPicker,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="biao-dan-xiang-lei-xing---ri-qi-xuan-ze-qi" tabindex="-1">表单项类型 - 日期选择器</h3><p>在表单中使用 <a href="#/zh-CN/date-picker" target="_blank">DatePicker 组件</a>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;result&quot;</span>
  <span class="hljs-attr">is-link</span>
  <span class="hljs-attr">readonly</span>
  <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;datePicker&quot;</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;时间选择&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;点击选择时间&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showPicker = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPicker&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-date-picker</span> @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span> @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;showPicker = false&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> result = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> showPicker = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">{ selectedValues }</span>) =&gt; {
      result.<span class="hljs-property">value</span> = selectedValues.<span class="hljs-title function_">join</span>(<span class="hljs-string">&#39;/&#39;</span>);
      showPicker.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
    };

    <span class="hljs-keyword">return</span> {
      result,
      onConfirm,
      showPicker,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="biao-dan-xiang-lei-xing---sheng-shi-qu-xuan-ze-qi" tabindex="-1">表单项类型 - 省市区选择器</h3><p>在表单中使用 <a href="#/zh-CN/area" target="_blank">Area 组件</a>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;result&quot;</span>
  <span class="hljs-attr">is-link</span>
  <span class="hljs-attr">readonly</span>
  <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;area&quot;</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;地区选择&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;点击选择省市区&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showArea = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showArea&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-area</span>
    <span class="hljs-attr">:area-list</span>=<span class="hljs-string">&quot;areaList&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>
    @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;showArea = false&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { areaList } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/area-data&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> result = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> showArea = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">{ selectedOptions }</span>) =&gt; {
      showArea.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      result.<span class="hljs-property">value</span> = selectedOptions.<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> item.<span class="hljs-property">text</span>).<span class="hljs-title function_">join</span>(<span class="hljs-string">&#39;/&#39;</span>);
    };

    <span class="hljs-keyword">return</span> {
      result,
      areaList,
      showArea,
      onConfirm,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="biao-dan-xiang-lei-xing---ri-li" tabindex="-1">表单项类型 - 日历</h3><p>在表单中使用 <a href="#/zh-CN/calendar" target="_blank">Calendar 组件</a>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;result&quot;</span>
  <span class="hljs-attr">is-link</span>
  <span class="hljs-attr">readonly</span>
  <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;calendar&quot;</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;日历&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;点击选择日期&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showCalendar = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showCalendar&quot;</span> @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> result = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> showCalendar = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">date</span>) =&gt; {
      result.<span class="hljs-property">value</span> = <span class="hljs-string">\`<span class="hljs-subst">\${date.getMonth() + <span class="hljs-number">1</span>}</span>/<span class="hljs-subst">\${date.getDate()}</span>\`</span>;
      showCalendar.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
    };

    <span class="hljs-keyword">return</span> {
      result,
      onConfirm,
      showCalendar,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>label-width</td><td>表单项 label 宽度，默认单位为<code>px</code></td><td><em>number | string</em></td><td><code>6.2em</code></td></tr><tr><td>label-align</td><td>表单项 label 对齐方式，可选值为 <code>center</code> <code>right</code> <code>top</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td>input-align</td><td>输入框对齐方式，可选值为 <code>center</code> <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td>error-message-align</td><td>错误提示文案对齐方式，可选值为 <code>center</code> <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td>validate-trigger</td><td>表单校验触发时机，可选值为 <code>onChange</code>、<code>onSubmit</code>，支持通过数组同时设置多个值，具体用法见下方表格</td><td><em>string | string[]</em></td><td><code>onBlur</code></td></tr><tr><td>colon</td><td>是否在 label 后面添加冒号</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用表单中的所有输入框</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly</td><td>是否将表单中的所有输入框设置为只读状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>validate-first</td><td>是否在某一项校验不通过时停止校验</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>scroll-to-error</td><td>是否在提交表单且校验不通过时滚动至错误的表单项</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-error</td><td>是否在校验不通过时标红输入框</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-error-message</td><td>是否在校验不通过时在输入框下方展示错误提示</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>submit-on-enter</td><td>是否在按下回车键时提交表单</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table><blockquote><p>表单项的 API 参见：<a href="#/zh-CN/field#api" target="_blank">Field 组件</a></p></blockquote></div><div class="van-doc-card"><h3 id="rule-shu-ju-jie-gou" tabindex="-1">Rule 数据结构</h3><p>使用 Field 的 <code>rules</code> 属性可以定义校验规则，可选属性如下:</p><table><thead><tr><th>键名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>required</td><td>是否为必选字段，当值为空值时（空字符串、空数组、<code>false</code>、<code>undefined</code>、<code>null</code> ），校验不通过</td><td><em>boolean</em></td></tr><tr><td>message</td><td>错误提示文案，可以设置为一个函数来返回动态的文案内容</td><td><em>string | (value, rule) =&gt; string</em></td></tr><tr><td>validator</td><td>通过函数进行校验，可以返回一个 Promise 来进行异步校验</td><td><em>(value, rule) =&gt; boolean | string | Promise</em></td></tr><tr><td>pattern</td><td>通过正则表达式进行校验，正则无法匹配表示校验不通过</td><td><em>RegExp</em></td></tr><tr><td>trigger</td><td>设置本项规则的触发时机，优先级高于 Form 组件设置的 <code>validate-trigger</code> 属性，可选值为 <code>onChange</code>、<code>onBlur</code>、<code>onSubmit</code></td><td><em>string | string[]</em></td></tr><tr><td>formatter</td><td>格式化函数，将表单项的值转换后进行校验</td><td><em>(value, rule) =&gt; any</em></td></tr><tr><td>validateEmpty</td><td>设置 <code>validator</code> 和 <code>pattern</code> 是否要对空值进行校验，默认值为 <code>true</code>，可以设置为 <code>false</code> 来禁用该行为</td><td><em>boolean</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="validate-trigger-ke-xuan-zhi" tabindex="-1">validate-trigger 可选值</h3><p>通过 <code>validate-trigger</code> 属性可以自定义表单校验的触发时机。</p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>onSubmit</td><td>仅在提交表单时触发校验</td></tr><tr><td>onBlur</td><td>在提交表单和输入框失焦时触发校验</td></tr><tr><td>onChange</td><td>在提交表单和输入框内容变化时触发校验</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>submit</td><td>提交表单且验证通过后触发</td><td><em>values: object</em></td></tr><tr><td>failed</td><td>提交表单且验证不通过后触发</td><td><em>errorInfo: { values: object, errors: object[] }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">方法</h3><p>通过 ref 可以获取到 Form 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>submit</td><td>提交表单，与点击提交按钮的效果等价</td><td>-</td><td>-</td></tr><tr><td>getValues</td><td>获取所有表单项当前的值</td><td>-</td><td><em>Record&lt;string, unknown&gt;</em></td></tr><tr><td>validate</td><td>验证表单，支持传入一个或多个 <code>name</code> 来验证单个或部分表单项，不传入 <code>name</code> 时，会验证所有表单项</td><td><em>name?: string | string[]</em></td><td><em>Promise&lt;void&gt;</em></td></tr><tr><td>resetValidation</td><td>重置表单项的验证提示，支持传入一个或多个 <code>name</code> 来重置单个或部分表单项，不传入 <code>name</code> 时，会重置所有表单项</td><td><em>name?: string | string[]</em></td><td>-</td></tr><tr><td>getValidationStatus</td><td>获取所有表单项的校验状态，状态包括 <code>passed</code>、<code>failed</code>、<code>unvalidated</code></td><td>-</td><td><em>Record&lt;string, FieldValidationStatus&gt;</em></td></tr><tr><td>scrollToField</td><td>滚动到对应表单项的位置，默认滚动到顶部，第二个参数传 false 可滚动至底部</td><td><em>name: string, alignToTop: boolean</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">FormProps</span>, <span class="hljs-title class_">FormInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>FormInstance</code> 是组件实例的类型，用法如下：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">FormInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> formRef = ref&lt;<span class="hljs-title class_">FormInstance</span>&gt;();

formRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">submit</span>();
</code></pre></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>表单内容</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="ru-he-zi-ding-yi-biao-dan-xiang" tabindex="-1">如何自定义表单项？</h3><p>Vant 支持在 Form 组件中插入自定义的表单项，具体用法参见 <a href="#/zh-CN/use-custom-field-value" target="_blank">useCustomFieldValue</a>。</p></div>`,27),c=[e];function r(o,h){return a(),n("div",p,c)}const j=s(t,[["render",r]]);export{j as default};

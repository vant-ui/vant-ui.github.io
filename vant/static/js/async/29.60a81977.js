/*! For license information please see 29.60a81977.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["29"],{46390:function(s,n,a){"use strict";a.r(n);var t=a("69298");let l=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Field</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Field component let users enter and edit text.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Field</span>, <span class="hljs-title class_">CellGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Field</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CellGroup</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<p>The value of field is bound with v-model.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Label&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Text&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">return</span> { value };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-type" tabindex="-1">Custom Type</h3>\n<p>Use <code>type</code> prop to custom different type fields.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Text&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;tel&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;tel&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Phone&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;digit&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;digit&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Digit&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;number&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Number&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Password&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> tel = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> text = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> digit = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> number = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> password = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n\n    <span class="hljs-keyword">return</span> { tel, text, digit, number, password };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="disabled" tabindex="-1">Disabled</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Text&quot;</span> <span class="hljs-attr">model-value</span>=<span class="hljs-string">&quot;Input Readonly&quot;</span> <span class="hljs-attr">readonly</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Text&quot;</span> <span class="hljs-attr">model-value</span>=<span class="hljs-string">&quot;Input Disabled&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="show-icon" tabindex="-1">Show Icon</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>\n    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Text&quot;</span>\n    <span class="hljs-attr">left-icon</span>=<span class="hljs-string">&quot;smile-o&quot;</span>\n    <span class="hljs-attr">right-icon</span>=<span class="hljs-string">&quot;warning-o&quot;</span>\n    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Show Icon&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>\n    <span class="hljs-attr">clearable</span>\n    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Text&quot;</span>\n    <span class="hljs-attr">left-icon</span>=<span class="hljs-string">&quot;music-o&quot;</span>\n    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Show Clear Icon&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value1 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> value2 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;123&#x27;</span>);\n    <span class="hljs-keyword">return</span> {\n      value1,\n      value2,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="required" tabindex="-1">Required</h3>\n<p>Use the <code>required</code> prop to display a required asterisk.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;username&quot;</span>\n    <span class="hljs-attr">required</span>\n    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Username&quot;</span>\n    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Username&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;phone&quot;</span> <span class="hljs-attr">required</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Phone&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Phone&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre>\n<p>Please note that the <code>required</code> prop is only used for controlling the style. For form validation, you need to use the <code>rule.required</code> option to control the validation logic.</p>\n</div><div class="van-doc-card"><h3 id="auto-required" tabindex="-1">Auto Required</h3>\n<p>You can set <code>required=&quot;auto&quot;</code> on the Form component, and all the fields inside the Form will automatically display the asterisk based on the <code>rule.required</code> option.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-form</span> <span class="hljs-attr">required</span>=<span class="hljs-string">&quot;auto&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;username&quot;</span>\n    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ required: true }]&quot;</span>\n    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Username&quot;</span>\n    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Username&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;phone&quot;</span>\n    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ required: false }]&quot;</span>\n    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Phone&quot;</span>\n    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Phone&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-form</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="error-info" tabindex="-1">Error Info</h3>\n<p>Use <code>error</code> or <code>error-message</code> to show error info.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;username&quot;</span> <span class="hljs-attr">error</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Username&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Username&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;phone&quot;</span>\n    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Phone&quot;</span>\n    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Phone&quot;</span>\n    <span class="hljs-attr">error-message</span>=<span class="hljs-string">&quot;Invalid phone&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="insert-button" tabindex="-1">Insert Button</h3>\n<p>Use button slot to insert button.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;sms&quot;</span> <span class="hljs-attr">center</span> <span class="hljs-attr">clearable</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;SMS&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;SMS&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Send SMS<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="format-value" tabindex="-1">Format Value</h3>\n<p>Use <code>formatter</code> prop to format the input value.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>\n    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Text&quot;</span>\n    <span class="hljs-attr">:formatter</span>=<span class="hljs-string">&quot;formatter&quot;</span>\n    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Format On Change&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>\n    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Text&quot;</span>\n    <span class="hljs-attr">:formatter</span>=<span class="hljs-string">&quot;formatter&quot;</span>\n    <span class="hljs-attr">format-trigger</span>=<span class="hljs-string">&quot;onBlur&quot;</span>\n    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Format On Blur&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value1 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> value2 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">formatter</span> = (<span class="hljs-params">value</span>) =&gt; value.<span class="hljs-title function_">replace</span>(<span class="hljs-regexp">/\\d/g</span>, <span class="hljs-string">&#x27;&#x27;</span>);\n\n    <span class="hljs-keyword">return</span> {\n      value1,\n      value2,\n      formatter,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="auto-resize" tabindex="-1">Auto Resize</h3>\n<p>Textarea Field can be auto resize when has <code>autosize</code> prop.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;message&quot;</span>\n    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Message&quot;</span>\n    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;textarea&quot;</span>\n    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Message&quot;</span>\n    <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;1&quot;</span>\n    <span class="hljs-attr">autosize</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="show-word-limit" tabindex="-1">Show Word Limit</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;message&quot;</span>\n    <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;2&quot;</span>\n    <span class="hljs-attr">autosize</span>\n    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Message&quot;</span>\n    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;textarea&quot;</span>\n    <span class="hljs-attr">maxlength</span>=<span class="hljs-string">&quot;50&quot;</span>\n    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Message&quot;</span>\n    <span class="hljs-attr">show-word-limit</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="input-align" tabindex="-1">Input Align</h3>\n<p>Use <code>input-align</code> prop to align the input value.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Text&quot;</span>\n    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Input Align Right&quot;</span>\n    <span class="hljs-attr">input-align</span>=<span class="hljs-string">&quot;right&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="label-align" tabindex="-1">Label Align</h3>\n<p>Use <code>label-align</code> prop to align the input value, can be set to <code>center</code>, <code>right</code> or <code>top</code>.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Label&quot;</span>\n    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Align Top&quot;</span>\n    <span class="hljs-attr">label-align</span>=<span class="hljs-string">&quot;top&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>\n    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Label&quot;</span>\n    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Align Left&quot;</span>\n    <span class="hljs-attr">label-align</span>=<span class="hljs-string">&quot;left&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value3&quot;</span>\n    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Label&quot;</span>\n    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Align Center&quot;</span>\n    <span class="hljs-attr">label-align</span>=<span class="hljs-string">&quot;center&quot;</span>\n  /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>\n    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value4&quot;</span>\n    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Label&quot;</span>\n    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Align Right&quot;</span>\n    <span class="hljs-attr">label-align</span>=<span class="hljs-string">&quot;right&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>Input value</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>label</td>\n<td>Left side label</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>name</td>\n<td>As the identifier when submitting the form</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>id</td>\n<td>Input id, the for attribute of the label also will be set</td>\n<td><em>string</em></td>\n<td><code>van-field-n-input</code></td>\n</tr>\n<tr>\n<td>type</td>\n<td>Input type, support all <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types" target="_blank">native types</a> and <code>digit</code> type</td>\n<td><em>FieldType</em></td>\n<td><code>text</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>Size, can be set to <code>large</code> <code>normal</code></td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>maxlength</td>\n<td>Max length of value</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>Input placeholder</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>border</td>\n<td>Whether to show inner border</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Whether to disable field</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>readonly</td>\n<td>Whether to be readonly</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>colon</td>\n<td>Whether to display colon after label</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>required</td>\n<td>Whether to show required mark</td>\n<td><em>boolean | \'auto\'</em></td>\n<td><code>null</code></td>\n</tr>\n<tr>\n<td>center</td>\n<td>Whether to center content vertically</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>clearable</td>\n<td>Whether to be clearable</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>clear-icon</td>\n<td>Clear icon name</td>\n<td><em>string</em></td>\n<td><code>clear</code></td>\n</tr>\n<tr>\n<td>clear-trigger</td>\n<td>When to display the clear icon, <code>always</code> means to display the icon when value is not empty, <code>focus</code> means to display the icon when input is focused</td>\n<td><em>FieldClearTrigger</em></td>\n<td><code>focus</code></td>\n</tr>\n<tr>\n<td>clickable</td>\n<td>Whether to show click feedback when clicked</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>is-link</td>\n<td>Whether to show link icon</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>autofocus</td>\n<td>Whether to auto focus, unsupported in iOS</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>show-word-limit</td>\n<td>Whether to show word limit, need to set the <code>maxlength</code> prop</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>error</td>\n<td>Whether to mark the input content in red</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>error-message</td>\n<td>Error message</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>error-message-align</td>\n<td>Error message align, can be set to <code>center</code> <code>right</code></td>\n<td><em>FieldTextAlign</em></td>\n<td><code>left</code></td>\n</tr>\n<tr>\n<td>formatter</td>\n<td>Input value formatter</td>\n<td><em>(val: string) =&gt; string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>format-trigger</td>\n<td>When to format value, can be set to <code>onBlur</code></td>\n<td><em>FieldFormatTrigger</em></td>\n<td><code>onChange</code></td>\n</tr>\n<tr>\n<td>arrow-direction</td>\n<td>Can be set to <code>left</code> <code>up</code> <code>down</code></td>\n<td><em>string</em></td>\n<td><code>right</code></td>\n</tr>\n<tr>\n<td>label-class</td>\n<td>Label className</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>label-width</td>\n<td>Label width</td>\n<td><em>number | string</em></td>\n<td><code>6.2em</code></td>\n</tr>\n<tr>\n<td>label-align</td>\n<td>Label align, can be set to <code>center</code> <code>right</code> <code>top</code></td>\n<td><em>FieldTextAlign</em></td>\n<td><code>left</code></td>\n</tr>\n<tr>\n<td>input-align</td>\n<td>Input align, can be set to <code>center</code> <code>right</code></td>\n<td><em>FieldTextAlign</em></td>\n<td><code>left</code></td>\n</tr>\n<tr>\n<td>autosize</td>\n<td>Textarea auto resize, can accept an object,<br>e.g. { maxHeight: 100, minHeight: 50 }</td>\n<td><em>boolean | FieldAutosizeConfig</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>left-icon</td>\n<td>Left side icon name</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>right-icon</td>\n<td>Right side icon name</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>icon-prefix</td>\n<td>Icon className prefix</td>\n<td><em>string</em></td>\n<td><code>van-icon</code></td>\n</tr>\n<tr>\n<td>rules</td>\n<td>Form validation rules</td>\n<td><em>FieldRule[]</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>autocomplete</td>\n<td>HTML native attribute, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete" target="_blank">MDN - autocomplete</a></td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>autocapitalize <code>v4.6.2</code></td>\n<td>HTML native attribute, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize" target="_blank">MDN - autocapitalize</a><br></td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>enterkeyhint</td>\n<td>HTML native attribute, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint" target="_blank">MDN - enterkeyhint</a><br></td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>spellcheck <code>v4.6.2</code></td>\n<td>HTML native attribute, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck" target="_blank">MDN - spellcheck</a><br></td>\n<td><em>boolean</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>autocorrect <code>v4.6.2</code></td>\n<td>Safari only, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#autocorrect" target="_blank">MDN - autocorrect</a><br></td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>update:model-value</td>\n<td>Emitted when input value changed</td>\n<td><em>value: string</em></td>\n</tr>\n<tr>\n<td>focus</td>\n<td>Emitted when input is focused</td>\n<td><em>event: Event</em></td>\n</tr>\n<tr>\n<td>blur</td>\n<td>Emitted when input is blurred</td>\n<td><em>event: Event</em></td>\n</tr>\n<tr>\n<td>clear</td>\n<td>Emitted when the clear icon is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>click</td>\n<td>Emitted when component is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>click-input</td>\n<td>Emitted when the input is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>click-left-icon</td>\n<td>Emitted when the left icon is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>click-right-icon</td>\n<td>Emitted when the right icon is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>start-validate</td>\n<td>Emitted when start validation</td>\n<td>-</td>\n</tr>\n<tr>\n<td>end-validate</td>\n<td>Emitted when end validation</td>\n<td><em>{ status: string, message: string }</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3>\n<p>Use <a href="https://vuejs.org/guide/essentials/template-refs.html" target="_blank">ref</a> to get Field instance and call instance methods.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Attribute</th>\n<th>Return value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>focus</td>\n<td>Trigger input focus</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>blur</td>\n<td>Trigger input blur</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">FieldType</span>,\n  <span class="hljs-title class_">FieldRule</span>,\n  <span class="hljs-title class_">FieldProps</span>,\n  <span class="hljs-title class_">FieldInstance</span>,\n  <span class="hljs-title class_">FieldTextAlign</span>,\n  <span class="hljs-title class_">FieldRuleMessage</span>,\n  <span class="hljs-title class_">FieldClearTrigger</span>,\n  <span class="hljs-title class_">FieldFormatTrigger</span>,\n  <span class="hljs-title class_">FieldRuleValidator</span>,\n  <span class="hljs-title class_">FieldRuleFormatter</span>,\n  <span class="hljs-title class_">FieldValidateError</span>,\n  <span class="hljs-title class_">FieldAutosizeConfig</span>,\n  <span class="hljs-title class_">FieldValidateTrigger</span>,\n  <span class="hljs-title class_">FieldValidationStatus</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n<p><code>FieldInstance</code> is the type of component instance:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">FieldInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> fieldRef = ref&lt;<span class="hljs-title class_">FieldInstance</span>&gt;();\n\nfieldRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">focus</span>();\n</code></pre>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>SlotProps</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>label</td>\n<td>Custom label</td>\n<td>-</td>\n</tr>\n<tr>\n<td>input</td>\n<td>Custom input</td>\n<td>-</td>\n</tr>\n<tr>\n<td>left-icon</td>\n<td>Custom left icon</td>\n<td>-</td>\n</tr>\n<tr>\n<td>right-icon</td>\n<td>Custom right icon</td>\n<td>-</td>\n</tr>\n<tr>\n<td>button</td>\n<td>Insert button</td>\n<td>-</td>\n</tr>\n<tr>\n<td>error-message</td>\n<td>Custom error message</td>\n<td><em>{ message: string }</em></td>\n</tr>\n<tr>\n<td>extra</td>\n<td>Custom content on the right</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-field-label-width</td>\n<td><em>6.2em</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-field-label-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-field-label-margin-right</td>\n<td><em>var(--van-padding-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-field-input-text-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-field-input-error-text-color</td>\n<td><em>var(--van-danger-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-field-input-disabled-text-color</td>\n<td><em>var(--van-text-color-3)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-field-placeholder-text-color</td>\n<td><em>var(--van-text-color-3)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-field-icon-size</td>\n<td><em>18px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-field-clear-icon-size</td>\n<td><em>18px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-field-clear-icon-color</td>\n<td><em>var(--van-gray-5)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-field-right-icon-color</td>\n<td><em>var(--van-gray-6)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-field-error-message-color</td>\n<td><em>var(--van-danger-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-field-error-message-font-size</td>\n<td><em>12px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-field-text-area-min-height</td>\n<td><em>60px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-field-word-limit-color</td>\n<td><em>var(--van-gray-7)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-field-word-limit-font-size</td>\n<td><em>var(--van-font-size-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-field-word-limit-line-height</td>\n<td><em>16px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-field-disabled-text-color</td>\n<td><em>var(--van-text-color-3)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-field-required-mark-color</td>\n<td><em>var(--van-red)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);
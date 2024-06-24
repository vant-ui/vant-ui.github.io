"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1878"],{31525:function(t,n,s){s.r(n);var a=s("38061");let e=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,a.wg)(),(0,a.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>ContactEdit</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Edit and save the contact information.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ContactEdit</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ContactEdit</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-contact-edit</span>\n  <span class="hljs-attr">is-edit</span>\n  <span class="hljs-attr">show-set-default</span>\n  <span class="hljs-attr">:contact-info</span>=<span class="hljs-string">&quot;editingContact&quot;</span>\n  <span class="hljs-attr">set-default-label</span>=<span class="hljs-string">&quot;Set as the default contact&quot;</span>\n  @<span class="hljs-attr">save</span>=<span class="hljs-string">&quot;onSave&quot;</span>\n  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> editingContact = <span class="hljs-title function_">ref</span>({\n      <span class="hljs-attr">tel</span>: <span class="hljs-string">&#x27;&#x27;</span>,\n      <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;&#x27;</span>,\n    });\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSave</span> = (<span class="hljs-params">contactInfo</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;Save&#x27;</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onDelete</span> = (<span class="hljs-params">contactInfo</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;Delete&#x27;</span>);\n    <span class="hljs-keyword">return</span> {\n      onSave,\n      onDelete,\n      editingContact,\n    };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>contact-info</td>\n<td>Contact Info</td>\n<td><em>ContactEditInfo</em></td>\n<td><code>{}</code></td>\n</tr>\n<tr>\n<td>is-edit</td>\n<td>Whether is editing</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>is-saving</td>\n<td>Whether to show save button loading status</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>is-deleting</td>\n<td>Whether to show delete button loading status</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>tel-validator</td>\n<td>The method to validate tel</td>\n<td><em>(tel: string) =&gt; boolean</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>show-set-default</td>\n<td>Whether to show default contact switch</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>set-default-label</td>\n<td>default contact switch label</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>save</td>\n<td>Emitted when the save button is clicked</td>\n<td>content: contact info</td>\n</tr>\n<tr>\n<td>delete</td>\n<td>Emitted when the delete button is clicked</td>\n<td>content: contact info</td>\n</tr>\n<tr>\n<td>change-default</td>\n<td>Emitted when the default contact is switched</td>\n<td>checked\uFF1Acontact is not the default</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="data-structure-of-contacteditinfo" tabindex="-1">Data Structure of ContactEditInfo</h3>\n<table>\n<thead>\n<tr>\n<th>key</th>\n<th>Description</th>\n<th>Type</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>name</td>\n<td>Name</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>tel</td>\n<td>Phone</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>isDefault</td>\n<td>Is Default</td>\n<td><em>boolean | undefined</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ContactEditInfo</span>, <span class="hljs-title class_">ContactEditProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-contact-edit-padding</td>\n<td><em>var(--van-padding-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-contact-edit-fields-radius</td>\n<td><em>var(--van-radius-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-contact-edit-buttons-padding</td>\n<td><em>var(--van-padding-xl) 0</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-contact-edit-button-margin-bottom</td>\n<td><em>var(--van-padding-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-contact-edit-button-font-size</td>\n<td><em>var(--van-font-size-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-contact-edit-field-label-width</td>\n<td><em>4.1em</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);
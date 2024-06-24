"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2442"],{45355:function(s,n,a){a.r(n);var t=a("38061");let l=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.wg)(),(0,t.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>DropdownMenu</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>The menu list that pops down downwards.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">DropdownMenu</span>, <span class="hljs-title class_">DropdownItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">DropdownMenu</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">DropdownItem</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value1 = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">const</span> value2 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;a&#x27;</span>);\n    <span class="hljs-keyword">const</span> option1 = [\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option1&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">0</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option2&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option3&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span> },\n    ];\n    <span class="hljs-keyword">const</span> option2 = [\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option A&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option B&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;b&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option C&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;c&#x27;</span> },\n    ];\n\n    <span class="hljs-keyword">return</span> {\n      value1,\n      value2,\n      option1,\n      option2,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-content" tabindex="-1">Custom Content</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;menuRef&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;item&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">center</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switch1&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">center</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switch2&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;padding: 5px 16px;&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span> <span class="hljs-attr">round</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>&gt;</span>\n        Confirm\n      <span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> menuRef = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);\n    <span class="hljs-keyword">const</span> itemRef = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">const</span> switch1 = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> switch2 = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> options = [\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option1&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">0</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option2&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;Option3&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span> },\n    ];\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params"></span>) =&gt; {\n      item.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggle</span>();\n      <span class="hljs-comment">// or</span>\n      <span class="hljs-comment">// menuRef.value.close();</span>\n    };\n\n    <span class="hljs-keyword">return</span> {\n      menuRef,\n      itemRef,\n      value,\n      switch1,\n      switch2,\n      options,\n      onConfirm,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-active-color" tabindex="-1">Custom Active Color</h3>\n<p>Use <code>active-color</code> prop to custom active color of the title and options.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="swipe-items" tabindex="-1">Swipe Items</h3>\n<p>You can set <code>swipe-threshold</code> prop to customize threshold number.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span> <span class="hljs-attr">swipe-threshold</span>=<span class="hljs-string">&quot;4&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="expand-direction" tabindex="-1">Expand Direction</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;up&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="disabled" tabindex="-1">Disabled</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="dropdownmenu-props" tabindex="-1">DropdownMenu Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>active-color</td>\n<td>Active color of title and option</td>\n<td><em>string</em></td>\n<td><code>#1989fa</code></td>\n</tr>\n<tr>\n<td>direction</td>\n<td>Expand direction, can be set to <code>up</code></td>\n<td><em>string</em></td>\n<td><code>down</code></td>\n</tr>\n<tr>\n<td>z-index</td>\n<td>z-index of menu item</td>\n<td><em>number | string</em></td>\n<td><code>10</code></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>Transition duration, unit second</td>\n<td><em>number | string</em></td>\n<td><code>0.2</code></td>\n</tr>\n<tr>\n<td>overlay</td>\n<td>Whether to show overlay</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-on-click-overlay</td>\n<td>Whether to close when overlay is clicked</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-on-click-outside</td>\n<td>Whether to close when outside is clicked</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>swipe-threshold</td>\n<td>Horizontal scrolling is allowed when the number of items exceeds the threshold and the total width exceeds the width of the menu.</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>auto-locate</td>\n<td>When the ancestor element is set with a transform, the position of the dropdown menu will be automatically adjusted.</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="dropdownitem-props" tabindex="-1">DropdownItem Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>Value of current option</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>title</td>\n<td>Item title</td>\n<td><em>string</em></td>\n<td>Text of selected option</td>\n</tr>\n<tr>\n<td>options</td>\n<td>Options</td>\n<td><em>Option[]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Whether to disable dropdown item</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>lazy-render</td>\n<td>Whether to lazy render util opened</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>title-class</td>\n<td>Title class</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>teleport</td>\n<td>Specifies a target element where DropdownItem will be mounted</td>\n<td><em>string | Element</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="dropdownitem-events" tabindex="-1">DropdownItem Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>change</td>\n<td>Emitted select option and value changed</td>\n<td><em>value: number | string</em></td>\n</tr>\n<tr>\n<td>open</td>\n<td>Emitted when opening menu</td>\n<td>-</td>\n</tr>\n<tr>\n<td>close</td>\n<td>Emitted when closing menu</td>\n<td>-</td>\n</tr>\n<tr>\n<td>opened</td>\n<td>Emitted when menu is opened</td>\n<td>-</td>\n</tr>\n<tr>\n<td>closed</td>\n<td>Emitted when menu is closed</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="dropdownitem-slots" tabindex="-1">DropdownItem Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>Content</td>\n</tr>\n<tr>\n<td>title</td>\n<td>Custom title</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="dropdownmenu-methods" tabindex="-1">DropdownMenu Methods</h3>\n<p>Use <a href="https://vuejs.org/guide/essentials/template-refs.html" target="_blank">ref</a> to get DropdownMenu instance and call instance methods.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Attribute</th>\n<th>Return value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>close</td>\n<td>Close all dropdown items</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="dropdownitem-methods" tabindex="-1">DropdownItem Methods</h3>\n<p>Use <a href="https://vuejs.org/guide/essentials/template-refs.html" target="_blank">ref</a> to get DropdownItem instance and call instance methods.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Attribute</th>\n<th>Return value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>toggle</td>\n<td>Toggle display</td>\n<td><em>show?: boolean</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">DropdownMenuProps</span>,\n  <span class="hljs-title class_">DropdownItemProps</span>,\n  <span class="hljs-title class_">DropdownItemOption</span>,\n  <span class="hljs-title class_">DropdownItemInstance</span>,\n  <span class="hljs-title class_">DropdownMenuInstance</span>,\n  <span class="hljs-title class_">DropdownMenuDirection</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n<p><code>DropdownMenuInstance</code> and <code>DropdownItemInstance</code> are the types of component instances:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">DropdownMenuInstance</span>, <span class="hljs-title class_">DropdownItemInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> dropdownMenuRef = ref&lt;<span class="hljs-title class_">DropdownMenuInstance</span>&gt;();\n<span class="hljs-keyword">const</span> dropdownItemRef = ref&lt;<span class="hljs-title class_">DropdownItemInstance</span>&gt;();\n\ndropdownMenuRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">close</span>();\ndropdownItemRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggle</span>();\n</code></pre>\n</div><div class="van-doc-card"><h3 id="data-structure-of-option" tabindex="-1">Data Structure of Option</h3>\n<table>\n<thead>\n<tr>\n<th>Key</th>\n<th>Description</th>\n<th>Type</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>text</td>\n<td>Text</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>value</td>\n<td>Value</td>\n<td><em>number | string | boolean</em></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Whether to disable option</td>\n<td><em>boolean</em></td>\n</tr>\n<tr>\n<td>icon</td>\n<td>Left icon</td>\n<td><em>string</em></td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-dropdown-menu-height</td>\n<td><em>48px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-dropdown-menu-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-dropdown-menu-shadow</td>\n<td><em>0 2px 12px fade(var(--van-gray-7), 12)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-dropdown-menu-title-font-size</td>\n<td><em>15px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-dropdown-menu-title-text-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-dropdown-menu-title-active-text-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-dropdown-menu-title-disabled-text-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-dropdown-menu-title-padding</td>\n<td><em>0 var(--van-padding-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-dropdown-menu-title-line-height</td>\n<td><em>var(--van-line-height-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-dropdown-menu-option-active-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-dropdown-menu-option-disabled-color</td>\n<td><em>var(--van-text-color-3)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-dropdown-menu-content-max-height</td>\n<td><em>80%</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-dropdown-item-z-index</td>\n<td><em>10</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);
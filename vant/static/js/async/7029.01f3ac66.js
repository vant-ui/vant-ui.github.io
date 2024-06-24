"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7029"],{10613:function(n,s,a){a.r(s);var t=a("38061");let e=["innerHTML"];s.default={setup:()=>({html:""}),render:()=>((0,t.wg)(),(0,t.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Image \u56FE\u7247</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u589E\u5F3A\u7248\u7684 img \u6807\u7B7E\uFF0C\u63D0\u4F9B\u591A\u79CD\u56FE\u7247\u586B\u5145\u6A21\u5F0F\uFF0C\u652F\u6301\u56FE\u7247\u61D2\u52A0\u8F7D\u3001\u52A0\u8F7D\u4E2D\u63D0\u793A\u3001\u52A0\u8F7D\u5931\u8D25\u63D0\u793A\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Image</span> <span class="hljs-keyword">as</span> <span class="hljs-title class_">VanImage</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">VanImage</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<p>\u57FA\u7840\u7528\u6CD5\u4E0E\u539F\u751F <code>img</code> \u6807\u7B7E\u4E00\u81F4\uFF0C\u53EF\u4EE5\u8BBE\u7F6E <code>src</code>\u3001<code>width</code>\u3001<code>height</code>\u3001<code>alt</code> \u7B49\u539F\u751F\u5C5E\u6027\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>\n  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100&quot;</span>\n  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;100&quot;</span>\n  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="tian-chong-mo-shi" tabindex="-1">\u586B\u5145\u6A21\u5F0F</h3>\n<p>\u901A\u8FC7 <code>fit</code> \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u56FE\u7247\u586B\u5145\u6A21\u5F0F\uFF0C\u7B49\u540C\u4E8E\u539F\u751F\u7684 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit" target="_blank">object-fit</a> \u5C5E\u6027\uFF0C\u53EF\u9009\u503C\u89C1\u4E0B\u65B9\u8868\u683C\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>\n  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;10rem&quot;</span>\n  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;10rem&quot;</span>\n  <span class="hljs-attr">fit</span>=<span class="hljs-string">&quot;contain&quot;</span>\n  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="tu-pian-wei-zhi" tabindex="-1">\u56FE\u7247\u4F4D\u7F6E</h3>\n<p>\u901A\u8FC7 <code>position</code> \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u56FE\u7247\u4F4D\u7F6E\uFF0C\u7ED3\u5408 <code>fit</code> \u5C5E\u6027\u4F7F\u7528\uFF0C\u7B49\u540C\u4E8E\u539F\u751F\u7684 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-position" target="_blank">object-position</a> \u5C5E\u6027\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>\n  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;10rem&quot;</span>\n  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;10rem&quot;</span>\n  <span class="hljs-attr">fit</span>=<span class="hljs-string">&quot;cover&quot;</span>\n  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>\n  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="yuan-xing-tu-pian" tabindex="-1">\u5706\u5F62\u56FE\u7247</h3>\n<p>\u901A\u8FC7 <code>round</code> \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u56FE\u7247\u53D8\u5706\uFF0C\u6CE8\u610F\u5F53\u56FE\u7247\u5BBD\u9AD8\u4E0D\u76F8\u7B49\u4E14 <code>fit</code> \u4E3A <code>contain</code> \u6216 <code>scale-down</code> \u65F6\uFF0C\u5C06\u65E0\u6CD5\u586B\u5145\u4E00\u4E2A\u5B8C\u6574\u7684\u5706\u5F62\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>\n  <span class="hljs-attr">round</span>\n  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;10rem&quot;</span>\n  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;10rem&quot;</span>\n  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="tu-pian-lan-jia-zai" tabindex="-1">\u56FE\u7247\u61D2\u52A0\u8F7D</h3>\n<p>\u8BBE\u7F6E <code>lazy-load</code> \u5C5E\u6027\u6765\u5F00\u542F\u56FE\u7247\u61D2\u52A0\u8F7D\uFF0C\u9700\u8981\u642D\u914D <a href="#/zh-CN/lazyload" target="_blank">Lazyload</a> \u7EC4\u4EF6\u4F7F\u7528\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>\n  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100&quot;</span>\n  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;100&quot;</span>\n  <span class="hljs-attr">lazy-load</span>\n  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Lazyload</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Lazyload</span>);\n</code></pre>\n</div><div class="van-doc-card"><h3 id="jia-zai-zhong-ti-shi" tabindex="-1">\u52A0\u8F7D\u4E2D\u63D0\u793A</h3>\n<p><code>Image</code> \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u9ED8\u8BA4\u7684\u52A0\u8F7D\u4E2D\u63D0\u793A\uFF0C\u652F\u6301\u901A\u8FC7 <code>loading</code> \u63D2\u69FD\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:loading</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;spinner&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-image</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="jia-zai-shi-bai-ti-shi" tabindex="-1">\u52A0\u8F7D\u5931\u8D25\u63D0\u793A</h3>\n<p><code>Image</code> \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u9ED8\u8BA4\u7684\u52A0\u8F7D\u5931\u8D25\u63D0\u793A\uFF0C\u652F\u6301\u901A\u8FC7 <code>error</code> \u63D2\u69FD\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:error</span>&gt;</span>\u52A0\u8F7D\u5931\u8D25<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-image</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>src</td>\n<td>\u56FE\u7247\u94FE\u63A5</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>fit</td>\n<td>\u56FE\u7247\u586B\u5145\u6A21\u5F0F\uFF0C\u7B49\u540C\u4E8E\u539F\u751F\u7684 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit" target="_blank">object-fit</a> \u5C5E\u6027</td>\n<td><em>string</em></td>\n<td><code>fill</code></td>\n</tr>\n<tr>\n<td>position</td>\n<td>\u56FE\u7247\u4F4D\u7F6E\uFF0C\u7B49\u540C\u4E8E\u539F\u751F\u7684 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-position" target="_blank">object-position</a> \u5C5E\u6027\uFF0C\u53EF\u9009\u503C\u4E3A <code>top</code> <code>right</code> <code>bottom</code> <code>left</code> \u6216 <code>string</code></td>\n<td><em>string</em></td>\n<td><code>center</code></td>\n</tr>\n<tr>\n<td>alt</td>\n<td>\u66FF\u4EE3\u6587\u672C</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>width</td>\n<td>\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>height</td>\n<td>\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>radius</td>\n<td>\u5706\u89D2\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>round</td>\n<td>\u662F\u5426\u663E\u793A\u4E3A\u5706\u5F62</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>block <code>3.6.3</code></td>\n<td>\u662F\u5426\u5C06\u6839\u8282\u70B9\u8BBE\u7F6E\u4E3A\u5757\u7EA7\u5143\u7D20\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E3A <code>inline-block</code> \u5143\u7D20</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>lazy-load</td>\n<td>\u662F\u5426\u5F00\u542F\u56FE\u7247\u61D2\u52A0\u8F7D\uFF0C\u987B\u914D\u5408 <a href="#/zh-CN/lazyload" target="_blank">Lazyload</a> \u7EC4\u4EF6\u4F7F\u7528</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>show-error</td>\n<td>\u662F\u5426\u5C55\u793A\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u63D0\u793A</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>show-loading</td>\n<td>\u662F\u5426\u5C55\u793A\u56FE\u7247\u52A0\u8F7D\u4E2D\u63D0\u793A</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>error-icon</td>\n<td>\u5931\u8D25\u65F6\u63D0\u793A\u7684\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td>\n<td><em>string</em></td>\n<td><code>photo-fail</code></td>\n</tr>\n<tr>\n<td>loading-icon</td>\n<td>\u52A0\u8F7D\u65F6\u63D0\u793A\u7684\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td>\n<td><em>string</em></td>\n<td><code>photo</code></td>\n</tr>\n<tr>\n<td>icon-size</td>\n<td>\u52A0\u8F7D\u56FE\u6807\u548C\u5931\u8D25\u56FE\u6807\u7684\u5927\u5C0F</td>\n<td><em>number | string</em></td>\n<td><code>32px</code></td>\n</tr>\n<tr>\n<td>icon-prefix</td>\n<td>\u56FE\u6807\u7C7B\u540D\u524D\u7F00\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">class-prefix \u5C5E\u6027</a></td>\n<td><em>string</em></td>\n<td><code>van-icon</code></td>\n</tr>\n<tr>\n<td>crossorigin</td>\n<td>\u7B49\u540C\u4E8E\u539F\u751F\u7684 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement/crossOrigin" target="_blank">crossorigin</a> \u5C5E\u6027</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>referrerpolicy</td>\n<td>\u7B49\u540C\u4E8E\u539F\u751F\u7684 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement/referrerPolicy" target="_blank">referrerpolicy</a> \u5C5E\u6027</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="tu-pian-tian-chong-mo-shi" tabindex="-1">\u56FE\u7247\u586B\u5145\u6A21\u5F0F</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u542B\u4E49</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>contain</td>\n<td>\u4FDD\u6301\u5BBD\u9AD8\u7F29\u653E\u56FE\u7247\uFF0C\u4F7F\u56FE\u7247\u7684\u957F\u8FB9\u80FD\u5B8C\u5168\u663E\u793A\u51FA\u6765</td>\n</tr>\n<tr>\n<td>cover</td>\n<td>\u4FDD\u6301\u5BBD\u9AD8\u7F29\u653E\u56FE\u7247\uFF0C\u4F7F\u56FE\u7247\u7684\u77ED\u8FB9\u80FD\u5B8C\u5168\u663E\u793A\u51FA\u6765\uFF0C\u88C1\u526A\u957F\u8FB9</td>\n</tr>\n<tr>\n<td>fill</td>\n<td>\u62C9\u4F38\u56FE\u7247\uFF0C\u4F7F\u56FE\u7247\u586B\u6EE1\u5143\u7D20</td>\n</tr>\n<tr>\n<td>none</td>\n<td>\u4FDD\u6301\u56FE\u7247\u539F\u6709\u5C3A\u5BF8</td>\n</tr>\n<tr>\n<td>scale-down</td>\n<td>\u53D6 <code>none</code> \u6216 <code>contain</code> \u4E2D\u8F83\u5C0F\u7684\u4E00\u4E2A</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>\u70B9\u51FB\u56FE\u7247\u65F6\u89E6\u53D1</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>load</td>\n<td>\u56FE\u7247\u52A0\u8F7D\u5B8C\u6BD5\u65F6\u89E6\u53D1</td>\n<td><em>event: Event</em></td>\n</tr>\n<tr>\n<td>error</td>\n<td>\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>\u81EA\u5B9A\u4E49\u56FE\u7247\u4E0B\u65B9\u7684\u5185\u5BB9</td>\n</tr>\n<tr>\n<td>loading</td>\n<td>\u81EA\u5B9A\u4E49\u52A0\u8F7D\u4E2D\u7684\u63D0\u793A\u5185\u5BB9</td>\n</tr>\n<tr>\n<td>error</td>\n<td>\u81EA\u5B9A\u4E49\u52A0\u8F7D\u5931\u8D25\u65F6\u7684\u63D0\u793A\u5185\u5BB9</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ImageFit</span>, <span class="hljs-title class_">ImagePosition</span>, <span class="hljs-title class_">ImageProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u63CF\u8FF0</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-image-placeholder-text-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-image-placeholder-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-image-placeholder-background</td>\n<td><em>var(--van-background)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-image-loading-icon-size</td>\n<td><em>32px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-image-loading-icon-color</td>\n<td><em>var(--van-gray-4)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-image-error-icon-size</td>\n<td><em>32px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-image-error-icon-color</td>\n<td><em>var(--van-gray-4)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2>\n<div class="van-doc-card"><h3 id="ru-he-yin-yong-ben-di-tu-pian" tabindex="-1">\u5982\u4F55\u5F15\u7528\u672C\u5730\u56FE\u7247\uFF1F</h3>\n<p>\u5728 .vue \u6587\u4EF6\u4E2D\u901A\u8FC7\u76F8\u5BF9\u8DEF\u5F84\u5F15\u7528\u672C\u5730\u56FE\u7247\u65F6\uFF0C\u9700\u8981\u5728\u56FE\u7247\u7684\u94FE\u63A5\u5916\u5305\u4E0A\u4E00\u5C42 <code>require()</code>\uFF0C\u5C06\u56FE\u7247 URL \u8F6C\u6362\u4E3A webpack \u6A21\u5757\u8BF7\u6C42\uFF0C\u5E76\u7ED3\u5408 <a href="https://github.com/webpack-contrib/file-loader" target="_blank">file-loader</a> \u6216\u8005 <a href="https://github.com/webpack-contrib/url-loader" target="_blank">url-loader</a> \u8FDB\u884C\u5904\u7406\u3002</p>\n<pre><code class="language-html"><span class="hljs-comment">&lt;!-- \u9519\u8BEF\u5199\u6CD5 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;./image.png&quot;</span> /&gt;</span>\n\n<span class="hljs-comment">&lt;!-- \u6B63\u786E\u5199\u6CD5 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-image</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;require(&#x27;./image.png&#x27;)&quot;</span> /&gt;</span>\n</code></pre>\n<blockquote>\n<p>\u5BF9\u6B64\u66F4\u8BE6\u7EC6\u7684\u89E3\u91CA\u53EF\u4EE5\u53C2\u8003 vue-loader \u7684<a href="https://vue-loader.vuejs.org/zh/guide/asset-url.html" target="_blank">\u5904\u7406\u8D44\u6E90\u8DEF\u5F84</a>\u7AE0\u8282\u3002</p>\n</blockquote>\n</div><div class="van-doc-card"><h3 id="shi-yong-image-biao-qian-wu-fa-xuan-ran" tabindex="-1">\u4F7F\u7528 image \u6807\u7B7E\u65E0\u6CD5\u6E32\u67D3\uFF1F</h3>\n<p>\u4F7F\u7528 Image \u7EC4\u4EF6\u65F6\uFF0C\u53EF\u80FD\u4F1A\u9047\u5230\u5C06 &lt;image&gt; \u4F5C\u4E3A\u6807\u7B7E\u540D\u65F6\u65E0\u6CD5\u6E32\u67D3\u7684\u95EE\u9898\uFF0C\u6BD4\u5982\u4E0B\u9762\u7684\u5199\u6CD5\uFF1A</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;xxx&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Image</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">components</span>: {\n    <span class="hljs-title class_">Image</span>,\n  },\n};\n&lt;script&gt;\n</span></code></pre>\n<p>\u8FD9\u662F\u56E0\u4E3A &lt;image&gt; \u6807\u7B7E\u662F\u539F\u751F\u7684 SVG \u6807\u7B7E\uFF0CVue \u4E0D\u5141\u8BB8\u5C06\u539F\u751F\u6807\u7B7E\u540D\u6CE8\u518C\u4E3A\u7EC4\u4EF6\u540D\uFF0C\u4F7F\u7528 &lt;van-image&gt; \u5373\u53EF\u89C4\u907F\u8FD9\u4E2A\u95EE\u9898\u3002</p>\n</div>'},null,8,e))}}}]);
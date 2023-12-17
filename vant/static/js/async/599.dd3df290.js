/*! For license information please see 599.dd3df290.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["599"],{63818:function(s,a,t){"use strict";t.r(a),t.d(a,{default:function(){return e}});var n=t("62655"),l=t("35859"),e=(0,l.default)({},[["render",n.render]])},62655:function(s,a,t){"use strict";t.r(a);var n=t("45492");t.es(n,a)},45492:function(s,a,t){"use strict";t.r(a),t.d(a,{render:function(){return c}});var n=t("38613");let l={class:"van-doc-markdown-body"},e=[(0,n.createStaticVNode)('<h1>Sticky \u7C98\u6027\u5E03\u5C40</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>Sticky \u7EC4\u4EF6\u4E0E CSS \u4E2D <code>position: sticky</code> \u5C5E\u6027\u5B9E\u73B0\u7684\u6548\u679C\u4E00\u81F4\uFF0C\u5F53\u7EC4\u4EF6\u5728\u5C4F\u5E55\u8303\u56F4\u5185\u65F6\uFF0C\u4F1A\u6309\u7167\u6B63\u5E38\u7684\u5E03\u5C40\u6392\u5217\uFF0C\u5F53\u7EC4\u4EF6\u6EDA\u51FA\u5C4F\u5E55\u8303\u56F4\u65F6\uFF0C\u59CB\u7EC8\u4F1A\u56FA\u5B9A\u5728\u5C4F\u5E55\u9876\u90E8\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Sticky</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Sticky</span>);\n</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>\u5C06\u5185\u5BB9\u5305\u88F9\u5728 <code>Sticky</code> \u7EC4\u4EF6\u5185\u5373\u53EF\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-sticky</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u57FA\u7840\u7528\u6CD5<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-sticky</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="xi-ding-ju-chi" tabindex="-1">\u5438\u9876\u8DDD\u79BB</h3><p>\u901A\u8FC7 <code>offset-top</code> \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u7EC4\u4EF6\u5728\u5438\u9876\u65F6\u4E0E\u9876\u90E8\u7684\u8DDD\u79BB\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-sticky</span> <span class="hljs-attr">:offset-top</span>=<span class="hljs-string">&quot;50&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u5438\u9876\u8DDD\u79BB<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-sticky</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="zhi-ding-rong-qi" tabindex="-1">\u6307\u5B9A\u5BB9\u5668</h3><p>\u901A\u8FC7 <code>container</code> \u5C5E\u6027\u53EF\u4EE5\u6307\u5B9A\u7EC4\u4EF6\u7684\u5BB9\u5668\uFF0C\u9875\u9762\u6EDA\u52A8\u65F6\uFF0C\u7EC4\u4EF6\u4F1A\u59CB\u7EC8\u4FDD\u6301\u5728\u5BB9\u5668\u8303\u56F4\u5185\uFF0C\u5F53\u7EC4\u4EF6\u5373\u5C06\u8D85\u51FA\u5BB9\u5668\u5E95\u90E8\u65F6\uFF0C\u4F1A\u56FA\u5B9A\u5728\u5BB9\u5668\u7684\u5E95\u90E8\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;container&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 150px;&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-sticky</span> <span class="hljs-attr">:container</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>\u6307\u5B9A\u5BB9\u5668<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-sticky</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> container = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);\n    <span class="hljs-keyword">return</span> { container };\n  },\n};\n</code></pre></div><div class="van-doc-card"><h3 id="xi-di-ju-chi" tabindex="-1">\u5438\u5E95\u8DDD\u79BB</h3><p>\u5C06 <code>position</code> \u8BBE\u7F6E\u4E3A <code>bottom</code> \u53EF\u4EE5\u8BA9\u7EC4\u4EF6\u5438\u9644\u5728\u5E95\u90E8\u3002\u901A\u8FC7 <code>offset-bottom</code> \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u7EC4\u4EF6\u5728\u5438\u5E95\u65F6\u4E0E\u5E95\u90E8\u7684\u8DDD\u79BB\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-sticky</span> <span class="hljs-attr">:offset-bottom</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u5438\u5E95\u8DDD\u79BB<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-sticky</span>&gt;</span>\n</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>position</td><td>\u5438\u9644\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A <code>bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td>offset-top</td><td>\u5438\u9876\u65F6\u4E0E\u9876\u90E8\u7684\u8DDD\u79BB\uFF0C\u652F\u6301 <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> \u5355\u4F4D\uFF0C\u9ED8\u8BA4 <code>px</code></td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>offset-bottom</td><td>\u5438\u5E95\u65F6\u4E0E\u5E95\u90E8\u7684\u8DDD\u79BB\uFF0C\u652F\u6301 <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> \u5355\u4F4D\uFF0C\u9ED8\u8BA4 <code>px</code></td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>z-index</td><td>\u5438\u9876\u65F6\u7684 z-index</td><td><em>number | string</em></td><td><code>99</code></td></tr><tr><td>container</td><td>\u5BB9\u5668\u5BF9\u5E94\u7684 HTML \u8282\u70B9</td><td><em>Element</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u5438\u9876\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1</td><td><em>isFixed: boolean</em></td></tr><tr><td>scroll</td><td>\u6EDA\u52A8\u65F6\u89E6\u53D1</td><td><em>{ scrollTop: number, isFixed: boolean }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">StickyProps</span>, <span class="hljs-title class_">StickyPosition</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-sticky-z-index</td><td><em>99</em></td><td>-</td></tr></tbody></table></div>',14)];function c(s,a){return(0,n.openBlock)(),(0,n.createElementBlock)("div",l,e)}}}]);
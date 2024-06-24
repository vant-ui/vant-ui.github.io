"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3289"],{36905:function(s,a,n){n.r(a);var l=n("38061");let t=["innerHTML"];a.default={setup:()=>({html:""}),render:()=>((0,l.wg)(),(0,l.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>\u5E38\u89C1\u95EE\u9898</h1>\n<div class="van-doc-card"><h3 id="ru-he-zi-ding-yi-vant-zu-jian-de-yang-shi" tabindex="-1">\u5982\u4F55\u81EA\u5B9A\u4E49 Vant \u7EC4\u4EF6\u7684\u6837\u5F0F\uFF1F</h3>\n<h4 id="1.-zhu-ti-ding-zhi" tabindex="-1">1. \u4E3B\u9898\u5B9A\u5236</h4>\n<p>Vant \u57FA\u4E8E CSS \u53D8\u91CF\u63D0\u4F9B\u4E86\u4E3B\u9898\u5B9A\u5236\u7684\u80FD\u529B\uFF0C\u53EF\u4EE5\u5BF9\u7EC4\u4EF6\u6837\u5F0F\u8FDB\u884C\u7EDF\u4E00\u4FEE\u6539\uFF0C\u8BE6\u89C1 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u5168\u5C40\u914D\u7F6E</a> \u7EC4\u4EF6\u3002</p>\n<h4 id="2.-fu-gai-mo-ren-yang-shi" tabindex="-1">2. \u8986\u76D6\u9ED8\u8BA4\u6837\u5F0F</h4>\n<p>\u5982\u679C\u4E3B\u9898\u5B9A\u5236\u4E0D\u80FD\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7<strong>\u81EA\u5B9A\u4E49\u6837\u5F0F\u7C7B</strong>\u6765\u8986\u76D6\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u53C2\u8003\u4E0B\u9762\u7684\u793A\u4F8B\uFF1A</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-button&quot;</span>&gt;</span>\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-comment">/** \u8986\u76D6 Button \u6700\u5916\u5C42\u5143\u7D20\u7684\u6837\u5F0F */</span>\n  <span class="hljs-selector-class">.my-button</span> {\n    <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;\n  }\n\n  <span class="hljs-comment">/** \u8986\u76D6 Button \u5185\u90E8\u5B50\u5143\u7D20\u7684\u6837\u5F0F */</span>\n  <span class="hljs-selector-class">.my-button</span> <span class="hljs-selector-class">.van-button__text</span> {\n    <span class="hljs-attribute">color</span>: red;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zai-html-zhong-wu-fa-zheng-que-xuan-ran-zu-jian" tabindex="-1">\u5728 HTML \u4E2D\u65E0\u6CD5\u6B63\u786E\u6E32\u67D3\u7EC4\u4EF6\uFF1F</h3>\n<p>\u5728 HTML \u4E2D\u4F7F\u7528 Vant \u7EC4\u4EF6\u65F6\uFF0C\u4F60\u53EF\u80FD\u4F1A\u78B0\u5230\u90E8\u5206\u793A\u4F8B\u4EE3\u7801\u65E0\u6CD5\u6B63\u786E\u6E32\u67D3\u7684\u60C5\u51B5\uFF0C\u6BD4\u5982\u4E0B\u9762\u7684\u7528\u6CD5\uFF1A</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre>\n<p>\u8FD9\u662F\u56E0\u4E3A HTML \u5E76\u4E0D\u652F\u6301\u81EA\u95ED\u5408\u7684\u81EA\u5B9A\u4E49\u5143\u7D20\uFF0C\u4E5F\u5C31\u662F\u8BF4 <code>&lt;van-cell /&gt;</code> \u8FD9\u6837\u7684\u8BED\u6CD5\u662F\u4E0D\u88AB\u8BC6\u522B\u7684\uFF0C\u4F7F\u7528\u5B8C\u6574\u7684\u95ED\u5408\u6807\u7B7E\u53EF\u4EE5\u907F\u514D\u8FD9\u4E2A\u95EE\u9898\uFF1A</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre>\n<p>\u5728\u5355\u6587\u4EF6\u7EC4\u4EF6\u3001\u5B57\u7B26\u4E32\u6A21\u677F\u548C JSX \u4E2D\u53EF\u4EE5\u4F7F\u7528\u81EA\u95ED\u5408\u7684\u81EA\u5B9A\u4E49\u5143\u7D20\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u51FA\u73B0\u8FD9\u4E2A\u95EE\u9898\u3002</p>\n</div><div class="van-doc-card"><h3 id="zai-ios-shang-wu-fa-chu-fa-zu-jian-de-dian-ji-fan-kui-xiao-guo" tabindex="-1">\u5728 iOS \u4E0A\u65E0\u6CD5\u89E6\u53D1\u7EC4\u4EF6\u7684\u70B9\u51FB\u53CD\u9988\u6548\u679C\uFF1F</h3>\n<p>\u8FD9\u662F\u56E0\u4E3A iOS Safari \u9ED8\u8BA4\u4E0D\u4F1A\u89E6\u53D1 <code>:active</code> \u4F2A\u7C7B\uFF0C\u89E3\u51B3\u65B9\u6CD5\u662F\u5728 <code>body</code> \u6807\u7B7E\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u7A7A\u7684 <code>ontouchstart</code> \u5C5E\u6027\uFF1A</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">body</span> <span class="hljs-attr">ontouchstart</span>=<span class="hljs-string">&quot;&quot;</span>&gt;</span>\n  ...\n<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>\n</code></pre>\n<p>\u53C2\u8003\u94FE\u63A5\uFF1A<a href="https://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari/33681490#33681490" target="_blank">stackoverflow - :active pseudo-class doesn\'t work in mobile safari</a></p>\n</div><div class="van-doc-card"><h3 id="wei-shi-me-mei-you-select-zu-jian" tabindex="-1">\u4E3A\u4EC0\u4E48\u6CA1\u6709 Select \u7EC4\u4EF6\uFF1F</h3>\n<p>Select \u662F\u684C\u9762\u7AEF\u5E38\u7528\u7684\u7EC4\u4EF6\uFF0C\u4F46\u5B83\u7684\u4EA4\u4E92\u5F62\u5F0F\u4E0D\u9002\u5408\u79FB\u52A8\u7AEF\u3002</p>\n<p>\u5728\u79FB\u52A8\u7AEF\uFF0C\u6211\u4EEC\u63A8\u8350\u4F7F\u7528 <a href="#/zh-CN/picker" target="_blank">Picker \u9009\u62E9\u5668\u7EC4\u4EF6</a> \u4F5C\u4E3A\u4EE3\u66FF\u3002</p>\n</div><div class="van-doc-card"><h3 id="shi-fou-zhi-chi-zai-uni-app-zhong-shi-yong" tabindex="-1">\u662F\u5426\u652F\u6301\u5728 uni-app \u4E2D\u4F7F\u7528\uFF1F</h3>\n<p>Vant \u6240\u6709\u7EC4\u4EF6\u90FD\u662F\u57FA\u4E8E Vue \u6846\u67B6\u5B9E\u73B0\u7684\uFF0C\u6CA1\u6709\u9488\u5BF9 uni-app \u8FDB\u884C\u9002\u914D\uFF0C\u56E0\u6B64\u4E0D\u4FDD\u8BC1\u5404\u4E2A\u7EC4\u4EF6\u5728 uni-app \u4E0B\u7684\u53EF\u7528\u6027\u3002</p>\n<p>\u5982\u679C\u4F60\u5728 uni-app \u4E2D\u4F7F\u7528 Vant \u9047\u5230\u95EE\u9898\uFF0C\u5EFA\u8BAE\u5411 uni-app \u8FDB\u884C\u53CD\u9988\u3002</p>\n</div><div class="van-doc-card"><h3 id="bu-fen-zu-jian-wu-fa-zai-zhuo-mian-duan-jin-xing-cao-zuo" tabindex="-1">\u90E8\u5206\u7EC4\u4EF6\u65E0\u6CD5\u5728\u684C\u9762\u7AEF\u8FDB\u884C\u64CD\u4F5C\uFF1F</h3>\n<p>\u53C2\u89C1<a href="#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei" target="_blank">\u684C\u9762\u7AEF\u9002\u914D</a>\u3002</p>\n</div><div class="van-doc-card"><h3 id="ru-he-jin-xing-yi-dong-duan-xiang-ying-shi-gua-pei" tabindex="-1">\u5982\u4F55\u8FDB\u884C\u79FB\u52A8\u7AEF\u54CD\u5E94\u5F0F\u9002\u914D\uFF1F</h3>\n<p>\u53C2\u89C1<a href="#/zh-CN/advanced-usage#liu-lan-qi-gua-pei" target="_blank">\u6D4F\u89C8\u5668\u9002\u914D</a>\u3002</p>\n</div>'},null,8,t))}}}]);
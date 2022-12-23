import{o as a,a as n,z as t}from"./vue-libs.d5ee895a.js";const l={class:"van-doc-markdown-body"},p=t(`<h1>PickerGroup \u9009\u62E9\u5668\u7EC4</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u7ED3\u5408\u591A\u4E2A Picker \u9009\u62E9\u5668\u7EC4\u4EF6\uFF0C\u5728\u4E00\u6B21\u4EA4\u4E92\u4E2D\u5B8C\u6210\u591A\u4E2A\u503C\u7684\u9009\u62E9\u3002</p><p>PickerGroup \u4E2D\u53EF\u4EE5\u653E\u7F6E\u4EE5\u4E0B\u7EC4\u4EF6\uFF1A</p><ul><li><a href="#/zh-CN/picker" target="_blank">Picker</a></li><li><a href="#/zh-CN/area" target="_blank">Area</a></li><li><a href="#/zh-CN/date-picker" target="_blank">DatePicker</a></li><li><a href="#/zh-CN/time-picker" target="_blank">TimePicker</a></li><li>\u5176\u4ED6\u57FA\u4E8E Picker \u5C01\u88C5\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6</li></ul></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">PickerGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">PickerGroup</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="xuan-ze-ri-qi-shi-jian" tabindex="-1">\u9009\u62E9\u65E5\u671F\u65F6\u95F4</h3><p>\u5728 <code>PickerGroup</code> \u7684\u9ED8\u8BA4\u63D2\u69FD\u4E2D\u653E\u7F6E\u4E00\u4E2A <code>DatePicker</code> \u7EC4\u4EF6\u548C\u4E00\u4E2A <code>TimePicker</code> \u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u540C\u65F6\u9009\u62E9\u65E5\u671F\u548C\u65F6\u95F4\u7684\u4EA4\u4E92\u6548\u679C\u3002</p><p><code>PickerGroup</code> \u4F1A\u4EE3\u66FF\u5B50\u7EC4\u4EF6\u6765\u6E32\u67D3\u7EDF\u4E00\u7684\u6807\u9898\u680F\uFF0C\u8FD9\u610F\u5473\u7740\u5B50\u7EC4\u4EF6\u4E0D\u4F1A\u6E32\u67D3\u5355\u72EC\u7684\u6807\u9898\u680F\uFF0C\u4E0E\u6807\u9898\u680F\u6709\u5173\u7684 props \u548C events \u9700\u8981\u8BBE\u7F6E\u5230 <code>PickerGroup</code> \u4E0A\uFF0C\u6BD4\u5982 <code>title</code> \u5C5E\u6027\u3001<code>confirm</code> \u4E8B\u4EF6\u3001<code>cancel</code> \u4E8B\u4EF6\u7B49\uFF0C\u800C\u5B50\u7EC4\u4EF6\u4E2D\u4E0E\u6807\u9898\u680F\u65E0\u5173\u7684\u5C5E\u6027\u548C\u4E8B\u4EF6\u53EF\u4EE5\u6B63\u5E38\u4F7F\u7528\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker-group</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9884\u7EA6\u65E5\u671F&quot;</span>
  <span class="hljs-attr">:tabs</span>=<span class="hljs-string">&quot;[&#39;\u9009\u62E9\u65E5\u671F&#39;, &#39;\u9009\u62E9\u65F6\u95F4&#39;]&quot;</span>
  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>
  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-date-picker</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>
    <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span>
    <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-picker-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentDate = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;2022&#39;</span>, <span class="hljs-string">&#39;06&#39;</span>, <span class="hljs-string">&#39;01&#39;</span>]);
    <span class="hljs-keyword">const</span> currentTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;12&#39;</span>, <span class="hljs-string">&#39;00&#39;</span>]);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-title function_">showToast</span>(
        <span class="hljs-string">\`<span class="hljs-subst">\${currentDate.value.join(<span class="hljs-string">&#39;/&#39;</span>)}</span> <span class="hljs-subst">\${currentTime.value.join(<span class="hljs-string">&#39;:&#39;</span>)}</span>\`</span>
      );
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onCancel</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;cancel&#39;</span>);
    };

    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>),
      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2025</span>, <span class="hljs-number">5</span>, <span class="hljs-number">1</span>),
      currentDate,
      currentTime,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xuan-ze-ri-qi-fan-wei" tabindex="-1">\u9009\u62E9\u65E5\u671F\u8303\u56F4</h3><p>\u5728 <code>PickerGroup</code> \u7684\u9ED8\u8BA4\u63D2\u69FD\u4E2D\u653E\u7F6E\u4E24\u4E2A <code>DatePicker</code> \u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u9009\u62E9\u65E5\u671F\u8303\u56F4\u7684\u4EA4\u4E92\u6548\u679C\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker-group</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9884\u7EA6\u65E5\u671F&quot;</span>
  <span class="hljs-attr">:tabs</span>=<span class="hljs-string">&quot;[&#39;\u5F00\u59CB\u65E5\u671F&#39;, &#39;\u7ED3\u675F\u65E5\u671F&#39;]&quot;</span>
  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>
  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-date-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;startDate&quot;</span> <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span> <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-date-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;endDate&quot;</span> <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span> <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-picker-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> startDate = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;2022&#39;</span>, <span class="hljs-string">&#39;06&#39;</span>, <span class="hljs-string">&#39;01&#39;</span>]);
    <span class="hljs-keyword">const</span> endDate = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;2023&#39;</span>, <span class="hljs-string">&#39;06&#39;</span>, <span class="hljs-string">&#39;01&#39;</span>]);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">\`<span class="hljs-subst">\${startDate.value.join(<span class="hljs-string">&#39;/&#39;</span>)}</span> <span class="hljs-subst">\${endDate.value.join(<span class="hljs-string">&#39;/&#39;</span>)}</span>\`</span>);
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onCancel</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;cancel&#39;</span>);
    };

    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>),
      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2025</span>, <span class="hljs-number">5</span>, <span class="hljs-number">1</span>),
      endDate,
      startDate,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xuan-ze-shi-jian-fan-wei" tabindex="-1">\u9009\u62E9\u65F6\u95F4\u8303\u56F4</h3><p>\u5728 <code>PickerGroup</code> \u7684\u9ED8\u8BA4\u63D2\u69FD\u4E2D\u653E\u7F6E\u4E24\u4E2A <code>TimePicker</code> \u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u9009\u62E9\u65F6\u95F4\u8303\u56F4\u7684\u4EA4\u4E92\u6548\u679C\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker-group</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9884\u7EA6\u65F6\u95F4&quot;</span>
  <span class="hljs-attr">:tabs</span>=<span class="hljs-string">&quot;[&#39;\u5F00\u59CB\u65F6\u95F4&#39;, &#39;\u7ED3\u675F\u65F6\u95F4&#39;]&quot;</span>
  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>
  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;startTime&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;endTime&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-picker-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> startTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;12&#39;</span>, <span class="hljs-string">&#39;00&#39;</span>]);
    <span class="hljs-keyword">const</span> endTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;12&#39;</span>, <span class="hljs-string">&#39;00&#39;</span>]);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">\`<span class="hljs-subst">\${startTime.value.join(<span class="hljs-string">&#39;:&#39;</span>)}</span> <span class="hljs-subst">\${endTime.value.join(<span class="hljs-string">&#39;:&#39;</span>)}</span>\`</span>);
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onCancel</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;cancel&#39;</span>);
    };

    <span class="hljs-keyword">return</span> {
      endTime,
      startTime,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u9876\u90E8\u680F\u6807\u9898</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>confirm-button-text</td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u786E\u8BA4</code></td></tr><tr><td>cancel-button-text</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u53D6\u6D88</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>toolbar</td><td>\u81EA\u5B9A\u4E49\u6574\u4E2A\u9876\u90E8\u680F\u7684\u5185\u5BB9</td><td>-</td></tr><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u5185\u5BB9</td><td>-</td></tr><tr><td>confirm</td><td>\u81EA\u5B9A\u4E49\u786E\u8BA4\u6309\u94AE\u5185\u5BB9</td><td>-</td></tr><tr><td>cancel</td><td>\u81EA\u5B9A\u4E49\u53D6\u6D88\u6309\u94AE\u5185\u5BB9</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">PickerGroupProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div>`,11),c=[p],d={__name:"README.zh-CN",setup(e,{expose:s}){return s({frontmatter:{}}),(o,h)=>(a(),n("div",l,c))}};export{d as default};

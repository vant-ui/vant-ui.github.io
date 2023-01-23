import{o as t,a,z as n}from"./vue-libs.d5ee895a.js";const e={class:"van-doc-markdown-body"},d=n(`<h1>TimePicker \u65F6\u95F4\u9009\u62E9</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u65F6\u95F4\u9009\u62E9\u5668\uFF0C\u901A\u5E38\u4E0E<a href="#/zh-CN/popup" target="_blank">\u5F39\u51FA\u5C42</a>\u7EC4\u4EF6\u914D\u5408\u4F7F\u7528\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">TimePicker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">TimePicker</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>\u901A\u8FC7 <code>v-model</code> \u7ED1\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u65F6\u95F4\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u65F6\u95F4&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;12&#39;</span>, <span class="hljs-string">&#39;00&#39;</span>]);
    <span class="hljs-keyword">return</span> { currentTime };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xuan-xiang-lei-xing" tabindex="-1">\u9009\u9879\u7C7B\u578B</h3><p>\u901A\u8FC7 <code>columns-type</code> \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u9009\u9879\u7684\u7C7B\u578B\uFF0C\u652F\u6301\u4EE5\u4EFB\u610F\u987A\u5E8F\u5BF9 <code>hour</code>\u3001<code>minute</code> \u548C <code>second</code> \u8FDB\u884C\u6392\u5217\u7EC4\u5408\u3002</p><p>\u6BD4\u5982\uFF1A</p><ul><li>\u4F20\u5165 <code>[&#39;hour&#39;]</code> \u6765\u5355\u72EC\u9009\u62E9\u5C0F\u65F6\u3002</li><li>\u4F20\u5165 <code>[&#39;minute&#39;]</code> \u6765\u5355\u72EC\u9009\u62E9\u5206\u949F\u3002</li><li>\u4F20\u5165 <code>[&#39;minute&#39;, &#39;second&#39;]</code> \u6765\u9009\u62E9\u5206\u949F\u548C\u79D2\u3002</li><li>\u4F20\u5165 <code>[&#39;hour&#39;, &#39;minute&#39;, &#39;second&#39;]</code> \u6765\u9009\u62E9\u5C0F\u65F6\u3001\u5206\u949F\u548C\u79D2\u3002</li></ul><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u65F6\u95F4&quot;</span>
  <span class="hljs-attr">:columns-type</span>=<span class="hljs-string">&quot;columnsType&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;12&#39;</span>, <span class="hljs-string">&#39;00&#39;</span>, <span class="hljs-string">&#39;00&#39;</span>]);
    <span class="hljs-keyword">const</span> columnsType = [<span class="hljs-string">&#39;hour&#39;</span>, <span class="hljs-string">&#39;minute&#39;</span>, <span class="hljs-string">&#39;second&#39;</span>];
    <span class="hljs-keyword">return</span> {
      currentTime,
      columnsType,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="shi-jian-fan-wei" tabindex="-1">\u65F6\u95F4\u8303\u56F4</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u65F6\u95F4&quot;</span>
  <span class="hljs-attr">:min-hour</span>=<span class="hljs-string">&quot;10&quot;</span>
  <span class="hljs-attr">:max-hour</span>=<span class="hljs-string">&quot;20&quot;</span>
  <span class="hljs-attr">:min-minute</span>=<span class="hljs-string">&quot;30&quot;</span>
  <span class="hljs-attr">:max-minute</span>=<span class="hljs-string">&quot;40&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;12&#39;</span>, <span class="hljs-string">&#39;35&#39;</span>]);
    <span class="hljs-keyword">return</span> { currentTime };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="ge-shi-hua-xuan-xiang" tabindex="-1">\u683C\u5F0F\u5316\u9009\u9879</h3><p>\u901A\u8FC7\u4F20\u5165 <code>formatter</code> \u51FD\u6570\uFF0C\u53EF\u4EE5\u5BF9\u9009\u9879\u7684\u6587\u5B57\u8FDB\u884C\u683C\u5F0F\u5316\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u65F6\u95F4&quot;</span>
  <span class="hljs-attr">:formatter</span>=<span class="hljs-string">&quot;formatter&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;12&#39;</span>, <span class="hljs-string">&#39;00&#39;</span>]);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">formatter</span> = (<span class="hljs-params">type, option</span>) =&gt; {
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;hour&#39;</span>) {
        option.<span class="hljs-property">text</span> += <span class="hljs-string">&#39;\u65F6&#39;</span>;
      }
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;minute&#39;</span>) {
        option.<span class="hljs-property">text</span> += <span class="hljs-string">&#39;\u5206&#39;</span>;
      }
      <span class="hljs-keyword">return</span> option;
    };

    <span class="hljs-keyword">return</span> {
      filter,
      currentTime,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="guo-lu-xuan-xiang" tabindex="-1">\u8FC7\u6EE4\u9009\u9879</h3><p>\u901A\u8FC7\u4F20\u5165 <code>filter</code> \u51FD\u6570\uFF0C\u53EF\u4EE5\u5BF9\u9009\u9879\u6570\u7EC4\u8FDB\u884C\u8FC7\u6EE4\uFF0C\u5254\u9664\u4E0D\u9700\u8981\u7684\u65F6\u95F4\uFF0C\u5B9E\u73B0\u81EA\u5B9A\u4E49\u65F6\u95F4\u95F4\u9694\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u65F6\u95F4&quot;</span> <span class="hljs-attr">:filter</span>=<span class="hljs-string">&quot;filter&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;12&#39;</span>, <span class="hljs-string">&#39;00&#39;</span>]);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">filter</span> = (<span class="hljs-params">type, options</span>) =&gt; {
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;minute&#39;</span>) {
        <span class="hljs-keyword">return</span> options.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> <span class="hljs-title class_">Number</span>(option) % <span class="hljs-number">10</span> === <span class="hljs-number">0</span>);
      }
      <span class="hljs-keyword">return</span> options;
    };

    <span class="hljs-keyword">return</span> {
      filter,
      currentTime,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u5F53\u524D\u9009\u4E2D\u7684\u65F6\u95F4</td><td><em>string[]</em></td><td>-</td></tr><tr><td>columns-type</td><td>\u9009\u9879\u7C7B\u578B\uFF0C\u7531 <code>hour</code>\u3001<code>minute</code> \u548C <code>second</code> \u7EC4\u6210\u7684\u6570\u7EC4</td><td><em>string[]</em></td><td><code>[&#39;hour&#39;, &#39;minute&#39;]</code></td></tr><tr><td>min-hour</td><td>\u53EF\u9009\u7684\u6700\u5C0F\u5C0F\u65F6</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>max-hour</td><td>\u53EF\u9009\u7684\u6700\u5927\u5C0F\u65F6</td><td><em>number | string</em></td><td><code>23</code></td></tr><tr><td>min-minute</td><td>\u53EF\u9009\u7684\u6700\u5C0F\u5206\u949F</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>max-minute</td><td>\u53EF\u9009\u7684\u6700\u5927\u5206\u949F</td><td><em>number | string</em></td><td><code>59</code></td></tr><tr><td>min-second</td><td>\u53EF\u9009\u7684\u6700\u5C0F\u79D2\u6570</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>max-second</td><td>\u53EF\u9009\u7684\u6700\u5927\u79D2\u6570</td><td><em>number | string</em></td><td><code>59</code></td></tr><tr><td>title</td><td>\u9876\u90E8\u680F\u6807\u9898</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>confirm-button-text</td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u786E\u8BA4</code></td></tr><tr><td>cancel-button-text</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u53D6\u6D88</code></td></tr><tr><td>show-toolbar</td><td>\u662F\u5426\u663E\u793A\u9876\u90E8\u680F</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>loading</td><td>\u662F\u5426\u663E\u793A\u52A0\u8F7D\u72B6\u6001</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly</td><td>\u662F\u5426\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C\u53EA\u8BFB\u72B6\u6001\u4E0B\u65E0\u6CD5\u5207\u6362\u9009\u9879</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>filter</td><td>\u9009\u9879\u8FC7\u6EE4\u51FD\u6570</td><td><em>(type: string, options: PickerOption[]) =&gt; PickerOption[]</em></td><td>-</td></tr><tr><td>formatter</td><td>\u9009\u9879\u683C\u5F0F\u5316\u51FD\u6570</td><td><em>(type: string, option: PickerOption) =&gt; PickerOption</em></td><td>-</td></tr><tr><td>option-height</td><td>\u9009\u9879\u9AD8\u5EA6\uFF0C\u652F\u6301 <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> \u5355\u4F4D\uFF0C\u9ED8\u8BA4 <code>px</code></td><td><em>number | string</em></td><td><code>44</code></td></tr><tr><td>visible-option-num</td><td>\u53EF\u89C1\u7684\u9009\u9879\u4E2A\u6570</td><td><em>number | string</em></td><td><code>6</code></td></tr><tr><td>swipe-duration</td><td>\u5FEB\u901F\u6ED1\u52A8\u65F6\u60EF\u6027\u6EDA\u52A8\u7684\u65F6\u957F\uFF0C\u5355\u4F4D <code>ms</code></td><td><em>number | string</em></td><td><code>1000</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>confirm</td><td>\u70B9\u51FB\u5B8C\u6210\u6309\u94AE\u65F6\u89E6\u53D1</td><td><em>{ selectedValues, selectedOptions }</em></td></tr><tr><td>cancel</td><td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1</td><td><em>{ selectedValues, selectedOptions }</em></td></tr><tr><td>change</td><td>\u9009\u9879\u6539\u53D8\u65F6\u89E6\u53D1</td><td><em>{ selectedValues, selectedOptions, columnIndex }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>toolbar</td><td>\u81EA\u5B9A\u4E49\u6574\u4E2A\u9876\u90E8\u680F\u7684\u5185\u5BB9</td><td>-</td></tr><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u5185\u5BB9</td><td>-</td></tr><tr><td>confirm</td><td>\u81EA\u5B9A\u4E49\u786E\u8BA4\u6309\u94AE\u5185\u5BB9</td><td>-</td></tr><tr><td>cancel</td><td>\u81EA\u5B9A\u4E49\u53D6\u6D88\u6309\u94AE\u5185\u5BB9</td><td>-</td></tr><tr><td>option</td><td>\u81EA\u5B9A\u4E49\u9009\u9879\u5185\u5BB9</td><td><em>option: PickerOption</em></td></tr><tr><td>columns-top</td><td>\u81EA\u5B9A\u4E49\u9009\u9879\u4E0A\u65B9\u5185\u5BB9</td><td>-</td></tr><tr><td>columns-bottom</td><td>\u81EA\u5B9A\u4E49\u9009\u9879\u4E0B\u65B9\u5185\u5BB9</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">TimePickerProps</span>, <span class="hljs-title class_">TimePickerColumnType</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2><div class="van-doc-card"><h3 id="zai-zhuo-mian-duan-wu-fa-cao-zuo-zu-jian" tabindex="-1">\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6\uFF1F</h3><p>\u53C2\u89C1<a href="#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei" target="_blank">\u684C\u9762\u7AEF\u9002\u914D</a>\u3002</p></div>`,16),l=[d],h={__name:"README.zh-CN",setup(p,{expose:s}){return s({frontmatter:{}}),(r,o)=>(t(),a("div",e,l))}};export{h as default};
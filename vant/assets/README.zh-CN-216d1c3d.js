import{o as a,a as n,z as t}from"./vue-libs-a0ef9506.js";const l={class:"van-doc-markdown-body"},p=t(`<h1>PickerGroup 选择器组</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于结合多个 Picker 选择器组件，在一次交互中完成多个值的选择。</p><p>PickerGroup 中可以放置以下组件：</p><ul><li><a href="#/zh-CN/picker" target="_blank">Picker</a></li><li><a href="#/zh-CN/area" target="_blank">Area</a></li><li><a href="#/zh-CN/date-picker" target="_blank">DatePicker</a></li><li><a href="#/zh-CN/time-picker" target="_blank">TimePicker</a></li><li>其他基于 Picker 封装的自定义组件</li></ul></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">PickerGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">PickerGroup</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="xuan-ze-ri-qi-shi-jian" tabindex="-1">选择日期时间</h3><p>在 <code>PickerGroup</code> 的默认插槽中放置一个 <code>DatePicker</code> 组件和一个 <code>TimePicker</code> 组件，可以实现同时选择日期和时间的交互效果。</p><p><code>PickerGroup</code> 会代替子组件来渲染统一的标题栏，这意味着子组件不会渲染单独的标题栏，与标题栏有关的 props 和 events 需要设置到 <code>PickerGroup</code> 上，比如 <code>title</code> 属性、<code>confirm</code> 事件、<code>cancel</code> 事件等，而子组件中与标题栏无关的属性和事件可以正常使用。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker-group</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;预约日期&quot;</span>
  <span class="hljs-attr">:tabs</span>=<span class="hljs-string">&quot;[&#39;选择日期&#39;, &#39;选择时间&#39;]&quot;</span>
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
</code></pre></div><div class="van-doc-card"><h3 id="xuan-ze-ri-qi-fan-wei" tabindex="-1">选择日期范围</h3><p>在 <code>PickerGroup</code> 的默认插槽中放置两个 <code>DatePicker</code> 组件，可以实现选择日期范围的交互效果。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker-group</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;预约日期&quot;</span>
  <span class="hljs-attr">:tabs</span>=<span class="hljs-string">&quot;[&#39;开始日期&#39;, &#39;结束日期&#39;]&quot;</span>
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
</code></pre></div><div class="van-doc-card"><h3 id="xuan-ze-shi-jian-fan-wei" tabindex="-1">选择时间范围</h3><p>在 <code>PickerGroup</code> 的默认插槽中放置两个 <code>TimePicker</code> 组件，可以实现选择时间范围的交互效果。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker-group</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;预约时间&quot;</span>
  <span class="hljs-attr">:tabs</span>=<span class="hljs-string">&quot;[&#39;开始时间&#39;, &#39;结束时间&#39;]&quot;</span>
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
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>顶部栏标题</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>confirm-button-text</td><td>确认按钮文字</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td>cancel-button-text</td><td>取消按钮文字</td><td><em>string</em></td><td><code>取消</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>toolbar</td><td>自定义整个顶部栏的内容</td><td>-</td></tr><tr><td>title</td><td>自定义标题内容</td><td>-</td></tr><tr><td>confirm</td><td>自定义确认按钮内容</td><td>-</td></tr><tr><td>cancel</td><td>自定义取消按钮内容</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">PickerGroupProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div>`,11),c=[p],d={__name:"README.zh-CN",setup(e,{expose:s}){return s({frontmatter:{}}),(o,h)=>(a(),n("div",l,c))}};export{d as default};

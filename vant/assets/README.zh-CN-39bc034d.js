import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as t}from"./vue-libs-19c20d28.js";const l={},p={class:"van-doc-markdown-body"},c=t(`<h1>PickerGroup 选择器组</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于结合多个 Picker 选择器组件，在一次交互中完成多个值的选择。</p><p>PickerGroup 中可以放置以下组件：</p><ul><li><a href="#/zh-CN/picker" target="_blank">Picker</a></li><li><a href="#/zh-CN/area" target="_blank">Area</a></li><li><a href="#/zh-CN/date-picker" target="_blank">DatePicker</a></li><li><a href="#/zh-CN/time-picker" target="_blank">TimePicker</a></li><li>其他基于 Picker 封装的自定义组件</li></ul></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
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
        <span class="hljs-string">\`<span class="hljs-subst">\${currentDate.value.join(<span class="hljs-string">&#39;/&#39;</span>)}</span> <span class="hljs-subst">\${currentTime.value.join(<span class="hljs-string">&#39;:&#39;</span>)}</span>\`</span>,
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
      onConfirm,
      onCancel,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xia-yi-bu-an-niu" tabindex="-1">下一步按钮</h3><p>部分场景下，为了保证用户能够依次选择所有的 Picker，你可以设置 PickerGroup 的 <code>next-step-text</code> 属性。在设置 <code>next-step-text</code> 属性后，如果用户未切换到最后一个标签页，那么右上角的按钮会变成「下一步」，点击后自动切换到下一个 Picker。当用户切换到最后一个标签页时，右上角的按钮会变为「确认」。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker-group</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;预约日期&quot;</span>
  <span class="hljs-attr">:tabs</span>=<span class="hljs-string">&quot;[&#39;选择日期&#39;, &#39;选择时间&#39;]&quot;</span>
  <span class="hljs-attr">next-step-text</span>=<span class="hljs-string">&quot;下一步&quot;</span>
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
        <span class="hljs-string">\`<span class="hljs-subst">\${currentDate.value.join(<span class="hljs-string">&#39;/&#39;</span>)}</span> <span class="hljs-subst">\${currentTime.value.join(<span class="hljs-string">&#39;:&#39;</span>)}</span>\`</span>,
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
      onConfirm,
      onCancel,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xuan-ze-ri-qi-fan-wei" tabindex="-1">选择日期范围</h3><p>在 <code>PickerGroup</code> 的默认插槽中放置两个 <code>DatePicker</code> 组件，可以实现选择日期范围的交互效果。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker-group</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;预约日期&quot;</span>
  <span class="hljs-attr">:tabs</span>=<span class="hljs-string">&quot;[&#39;开始日期&#39;, &#39;结束日期&#39;]&quot;</span>
  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>
  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-date-picker</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;startDate&quot;</span>
    <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span>
    <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span>
  /&gt;</span>
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
      onConfirm,
      onCancel,
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
      onConfirm,
      onCancel,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="shou-kong-mo-shi" tabindex="-1">受控模式</h3><p><code>PickerGroup</code> 中 <code>tab</code> 的切换支持非受控模式和受控模式：</p><ul><li>当未绑定 <code>v-model:active-tab</code> 时，PickerGroup 组件 <code>tab</code> 的切换完全由组件自身控制。</li><li>当绑定 <code>v-model:active-tab</code> 时，PickerGroup 支持受控模式，此时组件 <code>tab</code> 的切换同时支持 <code>v-model:active-tab</code> 的值和组件本身控制。</li></ul><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;setActiveTab&quot;</span>&gt;</span>
  点击切换 tab，当前为 {{ activeTab }}
<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-picker-group</span>
  <span class="hljs-attr">v-model:active-tab</span>=<span class="hljs-string">&quot;activeTab&quot;</span>
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
    <span class="hljs-keyword">const</span> activeTab = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> currentDate = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;2022&#39;</span>, <span class="hljs-string">&#39;06&#39;</span>, <span class="hljs-string">&#39;01&#39;</span>]);
    <span class="hljs-keyword">const</span> currentTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;12&#39;</span>, <span class="hljs-string">&#39;00&#39;</span>]);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">setActiveTab</span> = (<span class="hljs-params"></span>) =&gt; {
      activeTab.<span class="hljs-property">value</span> = activeTab.<span class="hljs-property">value</span> ? <span class="hljs-number">0</span> : <span class="hljs-number">1</span>;
    };

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-title function_">showToast</span>(
        <span class="hljs-string">\`<span class="hljs-subst">\${currentDate.value.join(<span class="hljs-string">&#39;/&#39;</span>)}</span> <span class="hljs-subst">\${currentTime.value.join(<span class="hljs-string">&#39;:&#39;</span>)}</span>\`</span>,
      );
    };

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onCancel</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;cancel&#39;</span>);
    };

    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>),
      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2025</span>, <span class="hljs-number">5</span>, <span class="hljs-number">1</span>),
      activeTab,
      currentDate,
      currentTime,
      setActiveTab,
      onConfirm,
      onCancel,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:active-tab <code>v4.3.2</code></td><td>设置当前选中的标签</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>tabs</td><td>设置标签页的标题</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td>title</td><td>顶部栏标题</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>next-step-text <code>v4.0.8</code></td><td>下一步按钮的文字</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>confirm-button-text</td><td>确认按钮的文字</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td>cancel-button-text</td><td>取消按钮的文字</td><td><em>string</em></td><td><code>取消</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>toolbar</td><td>自定义整个顶部栏的内容</td><td>-</td></tr><tr><td>title</td><td>自定义标题内容</td><td>-</td></tr><tr><td>confirm</td><td>自定义确认按钮内容</td><td>-</td></tr><tr><td>cancel</td><td>自定义取消按钮内容</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">PickerGroupProps</span>, <span class="hljs-title class_">PickerGroupThemeVars</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-picker-group-background</td><td><em>--van-background-2</em></td><td>-</td></tr></tbody></table></div>`,15),e=[c];function r(o,h){return a(),n("div",p,e)}const d=s(l,[["render",r]]);export{d as default};

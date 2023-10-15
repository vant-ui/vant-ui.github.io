import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as t}from"./vue-libs-19c20d28.js";const l={},p={class:"van-doc-markdown-body"},e=t(`<h1>PickerGroup</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to combine multiple Picker components, allow users to select multiple value.</p><p>The following components can be placed inside PickerGroup:</p><ul><li><a href="#/en-US/picker" target="_blank">Picker</a></li><li><a href="#/en-US/area" target="_blank">Area</a></li><li><a href="#/en-US/date-picker" target="_blank">DatePicker</a></li><li><a href="#/en-US/time-picker" target="_blank">TimePicker</a></li><li>Other custom components based on Picker component</li></ul></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">PickerGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">PickerGroup</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="select-date-time" tabindex="-1">Select Date Time</h3><p>Place a <code>DatePicker</code> component and a <code>TimePicker</code> component in the default slot of the <code>PickerGroup</code> to select both a date and a time.</p><p><code>PickerGroup</code> will render a unified toolbar, so the child components will not render is&#39;s toolbar, and the toolbar props and events need to be set to the <code>PickerGroup</code>, such as the <code>title</code> prop, <code>confirm</code> event, <code>cancel</code> event, etc. Other props and events in child components can be used as before.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker-group</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>
  <span class="hljs-attr">:tabs</span>=<span class="hljs-string">&quot;[&#39;Date&#39;, &#39;Time&#39;]&quot;</span>
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
</code></pre></div><div class="van-doc-card"><h3 id="next-step-button" tabindex="-1">Next Step Button</h3><p>In some scenarios, in order to ensure that users can select all Pickers in turn, you can set the <code>next-step-text</code> prop of PickerGroup. After setting the <code>next-step-text</code> prop, if the user has not switched to the last tab, the button in the upper right corner will become &quot;Next Step&quot;, and automatically switch to the next Picker after clicking. When the user switches to the last tab, the button in the upper right corner changes to &quot;Confirm&quot;.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker-group</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>
  <span class="hljs-attr">:tabs</span>=<span class="hljs-string">&quot;[&#39;Date&#39;, &#39;Time&#39;]&quot;</span>
  <span class="hljs-attr">next-step-text</span>=<span class="hljs-string">&quot;Next Step&quot;</span>
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
</code></pre></div><div class="van-doc-card"><h3 id="select-date-range" tabindex="-1">Select Date Range</h3><p>Place two <code>DatePicker</code> components in the default slot of <code>PickerGroup</code> to select the time range.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker-group</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>
  <span class="hljs-attr">:tabs</span>=<span class="hljs-string">&quot;[&#39;Start Date&#39;, &#39;End Date&#39;]&quot;</span>
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
</code></pre></div><div class="van-doc-card"><h3 id="select-time-range" tabindex="-1">Select Time Range</h3><p>Place two <code>TimePicker</code> components in the default slot of <code>PickerGroup</code> to select the time range.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker-group</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>
  <span class="hljs-attr">:tabs</span>=<span class="hljs-string">&quot;[&#39;Start Time&#39;, &#39;End Time&#39;]&quot;</span>
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
</code></pre></div><div class="van-doc-card"><h3 id="controlled-mode" tabindex="-1">Controlled Mode</h3><p>Supports both uncontrolled and controlled modes:</p><ul><li>When <code>v-model:active-tab</code> is not bound, the PickerGroup component completely controls the <code>tab</code> switching.</li><li>When <code>v-model:active-tab</code> is bound, PickerGroup supports controlled mode, and the <code>tab</code> switching is controlled by both the <code>v-model:active-tab</code> value and the component itself.</li></ul><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;setActiveTab&quot;</span>&gt;</span>
  toggle tab, current {{ activeTab }}
<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-picker-group</span>
  <span class="hljs-attr">v-model:active-tab</span>=<span class="hljs-string">&quot;activeTab&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>
  <span class="hljs-attr">:tabs</span>=<span class="hljs-string">&quot;[&#39;Date&#39;, &#39;Time&#39;]&quot;</span>
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
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model:active-tab <code>v4.3.2</code></td><td>Set index of active tab</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>tabs</td><td>Titles of tabs</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td>title</td><td>Toolbar title</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>next-step-text <code>v4.0.8</code></td><td>Text of next step button</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>confirm-button-text</td><td>Text of confirm button</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td>cancel-button-text</td><td>Text of cancel button</td><td><em>string</em></td><td><code>Cancel</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td>toolbar</td><td>Custom toolbar content</td><td>-</td></tr><tr><td>title</td><td>Custom title</td><td>-</td></tr><tr><td>confirm</td><td>Custom confirm button text</td><td>-</td></tr><tr><td>cancel</td><td>Custom cancel button text</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">PickerGroupProps</span>, <span class="hljs-title class_">PickerGroupThemeVars</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-picker-group-background</td><td><em>--van-background-2</em></td><td>-</td></tr></tbody></table></div>`,15),c=[e];function o(r,i){return a(),n("div",p,c)}const j=s(l,[["render",o]]);export{j as default};

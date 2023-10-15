import{_ as s}from"./locales-be796722.js";import{o as n,a as t,z as a}from"./vue-libs-19c20d28.js";const e={},l={class:"van-doc-markdown-body"},p=a(`<h1>TimePicker</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to select time, usually used with the <a href="#/en-US/popup" target="_blank">Popup</a> component.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">TimePicker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">TimePicker</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose Time&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;12&#39;</span>, <span class="hljs-string">&#39;00&#39;</span>]);
    <span class="hljs-keyword">return</span> { currentTime };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="columns-type" tabindex="-1">Columns Type</h3><p>Using <code>columns-type</code> prop to control the type of columns.</p><p>For example:</p><ul><li>Pass in <code>[&#39;hour&#39;]</code> to select hour.</li><li>Pass in <code>[&#39;minute&#39;]</code> to select minute.</li><li>Pass in <code>[&#39;minute&#39;, &#39;second&#39;]</code> to select minute and second.</li><li>Pass in <code>[&#39;hour&#39;, &#39;minute&#39;, &#39;second&#39;]</code> to select hour, minute and second.</li></ul><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose Time&quot;</span>
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
</code></pre></div><div class="van-doc-card"><h3 id="time-range" tabindex="-1">Time Range</h3><p>You can use props like <code>min-hour</code> and <code>max-hour</code> to limit the range of hours, <code>min-minute</code> and <code>max-minute</code> to limit the range of minutes, and <code>min-second</code> and <code>max-second</code> to limit the range of seconds.</p><p>For example, in the following example, users can only select hours between <code>10</code> and <code>20</code>, and minutes between <code>30</code> and <code>40</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose Time&quot;</span>
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
</code></pre></div><div class="van-doc-card"><h3 id="overall-time-range" tabindex="-1">Overall Time Range</h3><p>You can use <code>min-time</code> and <code>max-time</code> attributes to limit the overall time range, with the format <code>10:00:00</code>.</p><ul><li>When <code>min-time</code> is set, attributes like <code>min-hour</code>, <code>min-minute</code>, and <code>min-second</code> will not take effect.</li><li>When <code>max-time</code> is set, attributes like <code>max-hour</code>, <code>max-minute</code>, and <code>max-second</code> will not take effect.</li></ul><p>For example, in the following example, users can select any time between <code>09:40:10</code> and <code>20:20:50</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose Time&quot;</span>
  <span class="hljs-attr">:columns-type</span>=<span class="hljs-string">&quot;[&#39;hour&#39;, &#39;minute&#39;, &#39;second&#39;]&quot;</span>
  <span class="hljs-attr">min-time</span>=<span class="hljs-string">&quot;09:40:10&quot;</span>
  <span class="hljs-attr">max-time</span>=<span class="hljs-string">&quot;20:20:50&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;12&#39;</span>, <span class="hljs-string">&#39;00&#39;</span>, <span class="hljs-string">&#39;00&#39;</span>]);
    <span class="hljs-keyword">return</span> { currentTime };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="options-formatter" tabindex="-1">Options Formatter</h3><p>Using <code>formatter</code> prop to format option text.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose Time&quot;</span>
  <span class="hljs-attr">:formatter</span>=<span class="hljs-string">&quot;formatter&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;12&#39;</span>, <span class="hljs-string">&#39;00&#39;</span>]);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">formatter</span> = (<span class="hljs-params">type, option</span>) =&gt; {
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;hour&#39;</span>) {
        option.<span class="hljs-property">text</span> += <span class="hljs-string">&#39;h&#39;</span>;
      }
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;minute&#39;</span>) {
        option.<span class="hljs-property">text</span> += <span class="hljs-string">&#39;m&#39;</span>;
      }
      <span class="hljs-keyword">return</span> option;
    };

    <span class="hljs-keyword">return</span> {
      formatter,
      currentTime,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="options-filter" tabindex="-1">Options Filter</h3><p>Using <code>filter</code> prop to filter options.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose Time&quot;</span> <span class="hljs-attr">:filter</span>=<span class="hljs-string">&quot;filter&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;12&#39;</span>, <span class="hljs-string">&#39;00&#39;</span>]);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">filter</span> = (<span class="hljs-params">type, options</span>) =&gt; {
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;minute&#39;</span>) {
        <span class="hljs-keyword">return</span> options.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> <span class="hljs-title class_">Number</span>(option.<span class="hljs-property">value</span>) % <span class="hljs-number">10</span> === <span class="hljs-number">0</span>);
      }
      <span class="hljs-keyword">return</span> options;
    };

    <span class="hljs-keyword">return</span> {
      filter,
      currentTime,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="advanced-usage" tabindex="-1">Advanced Usage</h3><p>The third parameter of the <code>filter</code> function can get the currently selected time, which can be used to filter unwanted times more flexibly when using the uncontrolled mode.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Choose Time&quot;</span> <span class="hljs-attr">:filter</span>=<span class="hljs-string">&quot;filter&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">filter</span> = (<span class="hljs-params">type, options, values</span>) =&gt; {
      <span class="hljs-keyword">const</span> hour = +values[<span class="hljs-number">0</span>];

      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;hour&#39;</span>) {
        <span class="hljs-keyword">return</span> options.<span class="hljs-title function_">filter</span>(
          <span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> <span class="hljs-title class_">Number</span>(option.<span class="hljs-property">value</span>) &gt;= <span class="hljs-number">8</span> &amp;&amp; <span class="hljs-title class_">Number</span>(option.<span class="hljs-property">value</span>) &lt;= <span class="hljs-number">18</span>,
        );
      }

      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;minute&#39;</span>) {
        options = options.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> <span class="hljs-title class_">Number</span>(option.<span class="hljs-property">value</span>) % <span class="hljs-number">10</span> === <span class="hljs-number">0</span>);

        <span class="hljs-keyword">if</span> (hour === <span class="hljs-number">8</span>) {
          <span class="hljs-keyword">return</span> options.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> <span class="hljs-title class_">Number</span>(option.<span class="hljs-property">value</span>) &gt;= <span class="hljs-number">40</span>);
        }

        <span class="hljs-keyword">if</span> (hour === <span class="hljs-number">18</span>) {
          <span class="hljs-keyword">return</span> options.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> <span class="hljs-title class_">Number</span>(option.<span class="hljs-property">value</span>) &lt;= <span class="hljs-number">20</span>);
        }
      }

      <span class="hljs-keyword">return</span> options;
    };

    <span class="hljs-keyword">return</span> {
      filter,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Current time</td><td><em>string[]</em></td><td>-</td></tr><tr><td>columns-type</td><td>Columns type</td><td><em>string[]</em></td><td><code>[&#39;hour&#39;, &#39;minute&#39;]</code></td></tr><tr><td>min-hour</td><td>Min hour</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>max-hour</td><td>Max hour</td><td><em>number | string</em></td><td><code>23</code></td></tr><tr><td>min-minute</td><td>Min minute</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>max-minute</td><td>Max minute</td><td><em>number | string</em></td><td><code>59</code></td></tr><tr><td>min-second</td><td>Min second</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>max-second</td><td>Max second</td><td><em>number | string</em></td><td><code>59</code></td></tr><tr><td>min-time <code>v4.5.0</code></td><td>Min time, format reference <code>07:40:00</code>, <code>min-hour</code> <code>min-minute</code> <code>min-second</code> is invalid when used</td><td><em>string</em></td><td>-</td></tr><tr><td>max-time <code>v4.5.0</code></td><td>Max time, format reference <code>10:20:00</code>, <code>min-hour</code> <code>min-minute</code> <code>max-second</code> is invalid when used</td><td><em>string</em></td><td>-</td></tr><tr><td>title</td><td>Toolbar title</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>confirm-button-text</td><td>Text of confirm button</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td>cancel-button-text</td><td>Text of cancel button</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td>show-toolbar</td><td>Whether to show toolbar</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>loading</td><td>Whether to show loading prompt</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly</td><td>Whether to be readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>filter</td><td>Option filter</td><td><em>(type: string, options: PickerOption[], values: string[]) =&gt; PickerOption[]</em></td><td>-</td></tr><tr><td>formatter</td><td>Option text formatter</td><td><em>(type: string, option: PickerOption) =&gt; PickerOption</em></td><td>-</td></tr><tr><td>option-height</td><td>Option height, supports <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> unit, default <code>px</code></td><td><em>number | string</em></td><td><code>44</code></td></tr><tr><td>visible-option-num</td><td>Count of visible columns</td><td><em>number | string</em></td><td><code>6</code></td></tr><tr><td>swipe-duration</td><td>Duration of the momentum animation, unit <code>ms</code></td><td><em>number | string</em></td><td><code>1000</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>confirm</td><td>Emitted when the confirm button is clicked</td><td><em>{ selectedValues, selectedOptions }</em></td></tr><tr><td>cancel</td><td>Emitted when the cancel button is clicked</td><td><em>{ selectedValues, selectedOptions }</em></td></tr><tr><td>change</td><td>Emitted when current option is changed</td><td><em>{ selectedValues, selectedOptions, columnIndex }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td>toolbar</td><td>Custom toolbar content</td><td>-</td></tr><tr><td>title</td><td>Custom title</td><td>-</td></tr><tr><td>confirm</td><td>Custom confirm button text</td><td>-</td></tr><tr><td>cancel</td><td>Custom cancel button text</td><td>-</td></tr><tr><td>option</td><td>Custom option content</td><td><em>option: PickerOption, index: number</em></td></tr><tr><td>columns-top</td><td>Custom content above columns</td><td>-</td></tr><tr><td>columns-bottom</td><td>Custom content below columns</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">TimePickerProps</span>, <span class="hljs-title class_">TimePickerColumnType</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div>`,16),o=[p];function c(d,r){return n(),t("div",l,o)}const m=s(e,[["render",c]]);export{m as default};

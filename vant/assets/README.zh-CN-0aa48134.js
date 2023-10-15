import{_ as s}from"./locales-be796722.js";import{o as n,a,z as t}from"./vue-libs-19c20d28.js";const e={},l={class:"van-doc-markdown-body"},p=t(`<h1>TimePicker 时间选择</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>时间选择器，通常与<a href="#/zh-CN/popup" target="_blank">弹出层</a>组件配合使用。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">TimePicker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">TimePicker</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>通过 <code>v-model</code> 绑定当前选中的时间。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;选择时间&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;12&#39;</span>, <span class="hljs-string">&#39;00&#39;</span>]);
    <span class="hljs-keyword">return</span> { currentTime };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xuan-xiang-lei-xing" tabindex="-1">选项类型</h3><p>通过 <code>columns-type</code> 属性可以控制选项的类型，支持以任意顺序对 <code>hour</code>、<code>minute</code> 和 <code>second</code> 进行排列组合。</p><p>比如：</p><ul><li>传入 <code>[&#39;hour&#39;]</code> 来单独选择小时。</li><li>传入 <code>[&#39;minute&#39;]</code> 来单独选择分钟。</li><li>传入 <code>[&#39;minute&#39;, &#39;second&#39;]</code> 来选择分钟和秒。</li><li>传入 <code>[&#39;hour&#39;, &#39;minute&#39;, &#39;second&#39;]</code> 来选择小时、分钟和秒。</li></ul><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;选择时间&quot;</span>
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
</code></pre></div><div class="van-doc-card"><h3 id="shi-jian-fan-wei" tabindex="-1">时间范围</h3><p>你可以使用 <code>min-hour</code> 和 <code>max-hour</code> 等属性来限制小时（hour）范围、分钟（minute）范围和秒（second）范围。</p><p>比如以下示例，用户可以选择的小时是 <code>10 ~ 20</code> ，分钟是 <code>30 ~ 40</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;选择时间&quot;</span>
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
</code></pre></div><div class="van-doc-card"><h3 id="zheng-ti-shi-jian-fan-wei" tabindex="-1">整体时间范围</h3><p>你可以使用 <code>min-time</code> 和 <code>max-time</code> 属性来限制整体时间范围，约定格式 <code>10:00:00</code>。</p><ul><li>设置 <code>min-time</code> 后，<code>min-hour</code>、<code>min-minute</code>、<code>min-second</code> 属性将不会生效。</li><li>设置 <code>max-time</code> 后，<code>max-hour</code>、<code>max-minute</code>、<code>max-second</code> 属性将不会生效。</li></ul><p>比如以下示例，用户可以选择从 <code>09:40:10</code> 到 <code>20:20:50</code> 的任意时间。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;选择时间&quot;</span>
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
</code></pre></div><div class="van-doc-card"><h3 id="ge-shi-hua-xuan-xiang" tabindex="-1">格式化选项</h3><p>通过传入 <code>formatter</code> 函数，可以对选项的文字进行格式化。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;选择时间&quot;</span>
  <span class="hljs-attr">:formatter</span>=<span class="hljs-string">&quot;formatter&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentTime = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;12&#39;</span>, <span class="hljs-string">&#39;00&#39;</span>]);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">formatter</span> = (<span class="hljs-params">type, option</span>) =&gt; {
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;hour&#39;</span>) {
        option.<span class="hljs-property">text</span> += <span class="hljs-string">&#39;时&#39;</span>;
      }
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;minute&#39;</span>) {
        option.<span class="hljs-property">text</span> += <span class="hljs-string">&#39;分&#39;</span>;
      }
      <span class="hljs-keyword">return</span> option;
    };

    <span class="hljs-keyword">return</span> {
      formatter,
      currentTime,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="guo-lu-xuan-xiang" tabindex="-1">过滤选项</h3><p>通过传入 <code>filter</code> 函数，可以对选项数组进行过滤，剔除不需要的时间，实现自定义时间间隔。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentTime&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;选择时间&quot;</span> <span class="hljs-attr">:filter</span>=<span class="hljs-string">&quot;filter&quot;</span> /&gt;</span>
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
</code></pre></div><div class="van-doc-card"><h3 id="gao-ji-yong-fa" tabindex="-1">高级用法</h3><p><code>filter</code> 函数的第三个参数能获取到当前选择的时间，这在使用非受控模式时，可以更灵活地过滤掉不需要的时间。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-time-picker</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;选择时间&quot;</span> <span class="hljs-attr">:filter</span>=<span class="hljs-string">&quot;filter&quot;</span> /&gt;</span>
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
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前选中的时间</td><td><em>string[]</em></td><td>-</td></tr><tr><td>columns-type</td><td>选项类型，由 <code>hour</code>、<code>minute</code> 和 <code>second</code> 组成的数组</td><td><em>string[]</em></td><td><code>[&#39;hour&#39;, &#39;minute&#39;]</code></td></tr><tr><td>min-hour</td><td>可选的最小小时</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>max-hour</td><td>可选的最大小时</td><td><em>number | string</em></td><td><code>23</code></td></tr><tr><td>min-minute</td><td>可选的最小分钟</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>max-minute</td><td>可选的最大分钟</td><td><em>number | string</em></td><td><code>59</code></td></tr><tr><td>min-second</td><td>可选的最小秒数</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>max-second</td><td>可选的最大秒数</td><td><em>number | string</em></td><td><code>59</code></td></tr><tr><td>min-time <code>v4.5.0</code></td><td>可选的最小时间，格式参考 <code>07:40:00</code>，使用时 <code>min-hour</code> <code>min-minute</code> <code>min-second</code> 不会生效</td><td><em>string</em></td><td>-</td></tr><tr><td>max-time <code>v4.5.0</code></td><td>可选的最大时间，格式参考 <code>10:20:00</code>，使用时 <code>max-hour</code> <code>max-minute</code> <code>max-second</code> 不会生效</td><td><em>string</em></td><td>-</td></tr><tr><td>title</td><td>顶部栏标题</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>confirm-button-text</td><td>确认按钮文字</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td>cancel-button-text</td><td>取消按钮文字</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td>show-toolbar</td><td>是否显示顶部栏</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>loading</td><td>是否显示加载状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly</td><td>是否为只读状态，只读状态下无法切换选项</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>filter</td><td>选项过滤函数</td><td><em>(type: string, options: PickerOption[], values: string[]) =&gt; PickerOption[]</em></td><td>-</td></tr><tr><td>formatter</td><td>选项格式化函数</td><td><em>(type: string, option: PickerOption) =&gt; PickerOption</em></td><td>-</td></tr><tr><td>option-height</td><td>选项高度，支持 <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> 单位，默认 <code>px</code></td><td><em>number | string</em></td><td><code>44</code></td></tr><tr><td>visible-option-num</td><td>可见的选项个数</td><td><em>number | string</em></td><td><code>6</code></td></tr><tr><td>swipe-duration</td><td>快速滑动时惯性滚动的时长，单位 <code>ms</code></td><td><em>number | string</em></td><td><code>1000</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>confirm</td><td>点击完成按钮时触发</td><td><em>{ selectedValues, selectedOptions }</em></td></tr><tr><td>cancel</td><td>点击取消按钮时触发</td><td><em>{ selectedValues, selectedOptions }</em></td></tr><tr><td>change</td><td>选项改变时触发</td><td><em>{ selectedValues, selectedOptions, columnIndex }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>toolbar</td><td>自定义整个顶部栏的内容</td><td>-</td></tr><tr><td>title</td><td>自定义标题内容</td><td>-</td></tr><tr><td>confirm</td><td>自定义确认按钮内容</td><td>-</td></tr><tr><td>cancel</td><td>自定义取消按钮内容</td><td>-</td></tr><tr><td>option</td><td>自定义选项内容</td><td><em>option: PickerOption, index: number</em></td></tr><tr><td>columns-top</td><td>自定义选项上方内容</td><td>-</td></tr><tr><td>columns-bottom</td><td>自定义选项下方内容</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">TimePickerProps</span>, <span class="hljs-title class_">TimePickerColumnType</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="zai-zhuo-mian-duan-wu-fa-cao-zuo-zu-jian" tabindex="-1">在桌面端无法操作组件？</h3><p>参见<a href="#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei" target="_blank">桌面端适配</a>。</p></div>`,18),d=[p];function c(o,r){return n(),a("div",l,d)}const u=s(e,[["render",c]]);export{u as default};

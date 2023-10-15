import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as t}from"./vue-libs-19c20d28.js";const e={},l={class:"van-doc-markdown-body"},p=t(`<h1>DatePicker 日期选择</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>日期选择器，用于选择年、月、日，通常与<a href="#/zh-CN/popup" target="_blank">弹出层</a>组件配合使用。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">DatePicker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">DatePicker</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>通过 <code>v-model</code> 绑定当前选中的日期，通过 <code>min-date</code> 和 <code>max-date</code> 属性来设定可选的时间范围。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-date-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;选择日期&quot;</span>
  <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span>
  <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentDate = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;2021&#39;</span>, <span class="hljs-string">&#39;01&#39;</span>, <span class="hljs-string">&#39;01&#39;</span>]);
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>),
      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2025</span>, <span class="hljs-number">5</span>, <span class="hljs-number">1</span>),
      currentDate,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xuan-xiang-lei-xing" tabindex="-1">选项类型</h3><p>通过 <code>columns-type</code> 属性可以控制选项的类型，支持以任意顺序对 <code>year</code>、<code>month</code> 和 <code>day</code> 进行排列组合。</p><p>比如：</p><ul><li>传入 <code>[&#39;year&#39;]</code> 来单独选择年份。</li><li>传入 <code>[&#39;month&#39;]</code> 来单独选择月份。</li><li>传入 <code>[&#39;year&#39;, &#39;month&#39;]</code> 来选择年份和月份。</li><li>传入 <code>[&#39;month&#39;, &#39;day&#39;]</code> 来选择月份和日期。</li></ul><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-date-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;选择年月&quot;</span>
  <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span>
  <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span>
  <span class="hljs-attr">:columns-type</span>=<span class="hljs-string">&quot;columnsType&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentDate = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;2021&#39;</span>, <span class="hljs-string">&#39;01&#39;</span>]);
    <span class="hljs-keyword">const</span> columnsType = [<span class="hljs-string">&#39;year&#39;</span>, <span class="hljs-string">&#39;month&#39;</span>];
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>),
      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2025</span>, <span class="hljs-number">5</span>, <span class="hljs-number">1</span>),
      currentDate,
      columnsType,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="ge-shi-hua-xuan-xiang" tabindex="-1">格式化选项</h3><p>通过传入 <code>formatter</code> 函数，可以对选项文字进行格式化处理。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-date-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;选择年月&quot;</span>
  <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span>
  <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span>
  <span class="hljs-attr">:formatter</span>=<span class="hljs-string">&quot;formatter&quot;</span>
  <span class="hljs-attr">:columns-type</span>=<span class="hljs-string">&quot;columnsType&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentDate = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;2021&#39;</span>, <span class="hljs-string">&#39;01&#39;</span>]);
    <span class="hljs-keyword">const</span> columnsType = [<span class="hljs-string">&#39;year&#39;</span>, <span class="hljs-string">&#39;month&#39;</span>];

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">formatter</span> = (<span class="hljs-params">type, option</span>) =&gt; {
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;year&#39;</span>) {
        option.<span class="hljs-property">text</span> += <span class="hljs-string">&#39;年&#39;</span>;
      }
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;month&#39;</span>) {
        option.<span class="hljs-property">text</span> += <span class="hljs-string">&#39;月&#39;</span>;
      }
      <span class="hljs-keyword">return</span> option;
    };

    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>),
      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2025</span>, <span class="hljs-number">5</span>, <span class="hljs-number">1</span>),
      formatter,
      currentDate,
      columnsType,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="guo-lu-xuan-xiang" tabindex="-1">过滤选项</h3><p>通过传入 <code>filter</code> 函数，可以对选项数组进行过滤，实现自定义选项间隔。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-date-picker</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;选择年月&quot;</span>
  <span class="hljs-attr">:filter</span>=<span class="hljs-string">&quot;filter&quot;</span>
  <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span>
  <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span>
  <span class="hljs-attr">:columns-type</span>=<span class="hljs-string">&quot;columnsType&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentDate = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;2021&#39;</span>, <span class="hljs-string">&#39;01&#39;</span>]);
    <span class="hljs-keyword">const</span> columnsType = [<span class="hljs-string">&#39;year&#39;</span>, <span class="hljs-string">&#39;month&#39;</span>];
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">filter</span> = (<span class="hljs-params">type, options</span>) =&gt; {
      <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#39;month&#39;</span>) {
        <span class="hljs-keyword">return</span> options.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> <span class="hljs-title class_">Number</span>(option.<span class="hljs-property">value</span>) % <span class="hljs-number">6</span> === <span class="hljs-number">0</span>);
      }
      <span class="hljs-keyword">return</span> options;
    };

    <span class="hljs-keyword">return</span> {
      filter,
      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>),
      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2025</span>, <span class="hljs-number">5</span>, <span class="hljs-number">1</span>),
      currentTime,
      columnsType,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前选中的日期</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td>columns-type</td><td>选项类型，由 <code>year</code>、<code>month</code> 和 <code>day</code> 组成的数组</td><td><em>string[]</em></td><td><code>[&#39;year&#39;, &#39;month&#39;, &#39;day&#39;]</code></td></tr><tr><td>min-date</td><td>可选的最小时间，精确到日</td><td><em>Date</em></td><td>十年前</td></tr><tr><td>max-date</td><td>可选的最大时间，精确到日</td><td><em>Date</em></td><td>十年后</td></tr><tr><td>title</td><td>顶部栏标题</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>confirm-button-text</td><td>确认按钮文字</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td>cancel-button-text</td><td>取消按钮文字</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td>show-toolbar</td><td>是否显示顶部栏</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>loading</td><td>是否显示加载状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly</td><td>是否为只读状态，只读状态下无法切换选项</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>filter</td><td>选项过滤函数</td><td><em>(type: string, options: PickerOption[]) =&gt; PickerOption[]</em></td><td>-</td></tr><tr><td>formatter</td><td>选项格式化函数</td><td><em>(type: string, option: PickerOption) =&gt; PickerOption</em></td><td>-</td></tr><tr><td>option-height</td><td>选项高度，支持 <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> 单位，默认 <code>px</code></td><td><em>number | string</em></td><td><code>44</code></td></tr><tr><td>visible-option-num</td><td>可见的选项个数</td><td><em>number | string</em></td><td><code>6</code></td></tr><tr><td>swipe-duration</td><td>快速滑动时惯性滚动的时长，单位 <code>ms</code></td><td><em>number | string</em></td><td><code>1000</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>confirm</td><td>点击完成按钮时触发</td><td><em>{ selectedValues, selectedOptions }</em></td></tr><tr><td>cancel</td><td>点击取消按钮时触发</td><td><em>{ selectedValues, selectedOptions }</em></td></tr><tr><td>change</td><td>选项改变时触发</td><td><em>{ selectedValues, selectedOptions, columnIndex }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>toolbar</td><td>自定义整个顶部栏的内容</td><td>-</td></tr><tr><td>title</td><td>自定义标题内容</td><td>-</td></tr><tr><td>confirm</td><td>自定义确认按钮内容</td><td>-</td></tr><tr><td>cancel</td><td>自定义取消按钮内容</td><td>-</td></tr><tr><td>option</td><td>自定义选项内容</td><td><em>option: PickerOption, index: number</em></td></tr><tr><td>columns-top</td><td>自定义选项上方内容</td><td>-</td></tr><tr><td>columns-bottom</td><td>自定义选项下方内容</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">DatePickerProps</span>, <span class="hljs-title class_">DatePickerColumnType</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="she-zhi-min-date-huo-max-date-hou-chu-xian-ye-mian-qia-si-de-qing-kuang" tabindex="-1">设置 min-date 或 max-date 后出现页面卡死的情况？</h3><p>请注意不要在模板中直接使用类似 <code>min-date=&quot;new Date()&quot;</code> 的写法，这样会导致每次渲染组件时传入一个新的 Date 对象，而传入新的数据会触发下一次渲染，从而陷入死循环。</p><p>正确的做法是将 <code>min-date</code> 作为一个数据定义在 <code>data</code> 函数或 <code>setup</code> 中。</p></div><div class="van-doc-card"><h3 id="zai-ios-xi-tong-shang-chu-shi-hua-zu-jian-shi-bai" tabindex="-1">在 iOS 系统上初始化组件失败？</h3><p>如果你遇到了在 iOS 上无法渲染组件的问题，请确认在创建 Date 对象时没有使用 <code>new Date(&#39;2020-01-01&#39;)</code> 这样的写法，iOS 不支持以中划线分隔的日期格式，正确写法是 <code>new Date(&#39;2020/01/01&#39;)</code>。</p><p>对此问题的详细解释：<a href="https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios" target="_blank">stackoverflow</a>。</p></div><div class="van-doc-card"><h3 id="zai-zhuo-mian-duan-wu-fa-cao-zuo-zu-jian" tabindex="-1">在桌面端无法操作组件？</h3><p>参见<a href="#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei" target="_blank">桌面端适配</a>。</p></div>`,17),d=[p];function c(r,o){return a(),n("div",l,d)}const j=s(e,[["render",c]]);export{j as default};

import{_ as s}from"./locales-be796722.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const d={},e={class:"van-doc-markdown-body"},l=n(`<h1>Calendar 日历</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>日历组件用于选择日期或日期区间。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Calendar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Calendar</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="xuan-ze-dan-ge-ri-qi" tabindex="-1">选择单个日期</h3><p>下面演示了结合单元格来使用日历组件的用法，日期选择完成后会触发 <code>confirm</code> 事件。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;选择单个日期&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;date&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> date = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">formatDate</span> = (<span class="hljs-params">date</span>) =&gt; <span class="hljs-string">\`<span class="hljs-subst">\${date.getMonth() + <span class="hljs-number">1</span>}</span>/<span class="hljs-subst">\${date.getDate()}</span>\`</span>;
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">value</span>) =&gt; {
      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      date.<span class="hljs-property">value</span> = <span class="hljs-title function_">formatDate</span>(value);
    };

    <span class="hljs-keyword">return</span> {
      date,
      show,
      onConfirm,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xuan-ze-duo-ge-ri-qi" tabindex="-1">选择多个日期</h3><p>设置 <code>type</code> 为 <code>multiple</code> 后可以选择多个日期，此时 <code>confirm</code> 事件返回的 date 为数组结构，数组包含若干个选中的日期。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;选择多个日期&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;multiple&quot;</span> @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> text = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">dates</span>) =&gt; {
      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      text.<span class="hljs-property">value</span> = <span class="hljs-string">\`选择了 <span class="hljs-subst">\${dates.length}</span> 个日期\`</span>;
    };

    <span class="hljs-keyword">return</span> {
      text,
      show,
      onConfirm,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xuan-ze-ri-qi-qu-jian" tabindex="-1">选择日期区间</h3><p>设置 <code>type</code> 为 <code>range</code> 后可以选择日期区间，此时 <code>confirm</code> 事件返回的 date 为数组结构，数组第一项为开始时间，第二项为结束时间。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;选择日期区间&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;date&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;range&quot;</span> @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> date = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">formatDate</span> = (<span class="hljs-params">date</span>) =&gt; <span class="hljs-string">\`<span class="hljs-subst">\${date.getMonth() + <span class="hljs-number">1</span>}</span>/<span class="hljs-subst">\${date.getDate()}</span>\`</span>;
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">values</span>) =&gt; {
      <span class="hljs-keyword">const</span> [start, end] = values;
      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      date.<span class="hljs-property">value</span> = <span class="hljs-string">\`<span class="hljs-subst">\${formatDate(start)}</span> - <span class="hljs-subst">\${formatDate(end)}</span>\`</span>;
    };

    <span class="hljs-keyword">return</span> {
      date,
      show,
      onConfirm,
    };
  },
};
</code></pre><blockquote><p>Tips: 默认情况下，日期区间的起止时间不能为同一天，可以通过设置 allow-same-day 属性来允许选择同一天。</p></blockquote></div><div class="van-doc-card"><h3 id="kuai-jie-xuan-ze" tabindex="-1">快捷选择</h3><p>将 <code>show-confirm</code> 设置为 <code>false</code> 可以隐藏确认按钮，这种情况下选择完成后会立即触发 <code>confirm</code> 事件。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:show-confirm</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yan-se" tabindex="-1">自定义颜色</h3><p>通过 <code>color</code> 属性可以自定义日历的颜色，对选中日期和底部按钮生效。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-ri-qi-fan-wei" tabindex="-1">自定义日期范围</h3><p>通过 <code>min-date</code> 和 <code>max-date</code> 定义日历的范围。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span> <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-keyword">return</span> {
      show,
      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2010</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>),
      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2010</span>, <span class="hljs-number">0</span>, <span class="hljs-number">31</span>),
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-an-niu-wen-zi" tabindex="-1">自定义按钮文字</h3><p>通过 <code>confirm-text</code> 设置按钮文字，通过 <code>confirm-disabled-text</code> 设置按钮禁用时的文字。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;range&quot;</span>
  <span class="hljs-attr">confirm-text</span>=<span class="hljs-string">&quot;完成&quot;</span>
  <span class="hljs-attr">confirm-disabled-text</span>=<span class="hljs-string">&quot;请选择结束时间&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-ri-qi-wen-an" tabindex="-1">自定义日期文案</h3><p>通过传入 <code>formatter</code> 函数来对日历上每一格的内容进行格式化。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;range&quot;</span> <span class="hljs-attr">:formatter</span>=<span class="hljs-string">&quot;formatter&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">formatter</span> = (<span class="hljs-params">day</span>) =&gt; {
      <span class="hljs-keyword">const</span> month = day.<span class="hljs-property">date</span>.<span class="hljs-title function_">getMonth</span>() + <span class="hljs-number">1</span>;
      <span class="hljs-keyword">const</span> date = day.<span class="hljs-property">date</span>.<span class="hljs-title function_">getDate</span>();

      <span class="hljs-keyword">if</span> (month === <span class="hljs-number">5</span>) {
        <span class="hljs-keyword">if</span> (date === <span class="hljs-number">1</span>) {
          day.<span class="hljs-property">topInfo</span> = <span class="hljs-string">&#39;劳动节&#39;</span>;
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (date === <span class="hljs-number">4</span>) {
          day.<span class="hljs-property">topInfo</span> = <span class="hljs-string">&#39;青年节&#39;</span>;
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (date === <span class="hljs-number">11</span>) {
          day.<span class="hljs-property">text</span> = <span class="hljs-string">&#39;今天&#39;</span>;
        }
      }

      <span class="hljs-keyword">if</span> (day.<span class="hljs-property">type</span> === <span class="hljs-string">&#39;start&#39;</span>) {
        day.<span class="hljs-property">bottomInfo</span> = <span class="hljs-string">&#39;入住&#39;</span>;
      } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (day.<span class="hljs-property">type</span> === <span class="hljs-string">&#39;end&#39;</span>) {
        day.<span class="hljs-property">bottomInfo</span> = <span class="hljs-string">&#39;离店&#39;</span>;
      }

      <span class="hljs-keyword">return</span> day;
    };

    <span class="hljs-keyword">return</span> {
      formatter,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-dan-chu-wei-zhi" tabindex="-1">自定义弹出位置</h3><p>通过 <code>position</code> 属性自定义弹出层的弹出位置，可选值为 <code>top</code>、<code>left</code>、<code>right</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="ri-qi-qu-jian-zui-da-fan-wei" tabindex="-1">日期区间最大范围</h3><p>选择日期区间时，可以通过 <code>max-range</code> 属性来指定最多可选天数，选择的范围超过最多可选天数时，会弹出相应的提示文案。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;range&quot;</span> <span class="hljs-attr">:max-range</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;500px&#39; }&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-zhou-qi-shi-ri" tabindex="-1">自定义周起始日</h3><p>通过 <code>first-day-of-week</code> 属性设置一周从哪天开始。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">first-day-of-week</span>=<span class="hljs-string">&quot;1&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="ping-pu-zhan-shi" tabindex="-1">平铺展示</h3><p>将 <code>poppable</code> 设置为 <code>false</code>，日历会直接展示在页面内，而不是以弹层的形式出现。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;日历&quot;</span>
  <span class="hljs-attr">:poppable</span>=<span class="hljs-string">&quot;false&quot;</span>
  <span class="hljs-attr">:show-confirm</span>=<span class="hljs-string">&quot;false&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;500px&#39; }&quot;</span>
/&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>选择类型:<br><code>single</code> 表示选择单个日期，<br><code>multiple</code> 表示选择多个日期，<br><code>range</code> 表示选择日期区间</td><td><em>string</em></td><td><code>single</code></td></tr><tr><td>title</td><td>日历标题</td><td><em>string</em></td><td><code>日期选择</code></td></tr><tr><td>color</td><td>主题色，对底部按钮和选中日期生效</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>min-date</td><td>可选择的最小日期</td><td><em>Date</em></td><td>当前日期</td></tr><tr><td>max-date</td><td>可选择的最大日期</td><td><em>Date</em></td><td>当前日期的六个月后</td></tr><tr><td>default-date</td><td>默认选中的日期，<code>type</code> 为 <code>multiple</code> 或 <code>range</code> 时为数组，传入 <code>null</code> 表示默认不选择</td><td><em>Date | Date[] | null</em></td><td>今天</td></tr><tr><td>row-height</td><td>日期行高</td><td><em>number | string</em></td><td><code>64</code></td></tr><tr><td>formatter</td><td>日期格式化函数</td><td><em>(day: Day) =&gt; Day</em></td><td>-</td></tr><tr><td>poppable</td><td>是否以弹层的形式展示日历</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>lazy-render</td><td>是否只渲染可视区域的内容</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-mark</td><td>是否显示月份背景水印</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-title</td><td>是否展示日历标题</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-subtitle</td><td>是否展示日历副标题（年月）</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-confirm</td><td>是否展示确认按钮</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>readonly</td><td>是否为只读状态，只读状态下不能选择日期</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>confirm-text</td><td>确认按钮的文字</td><td><em>string</em></td><td><code>确定</code></td></tr><tr><td>confirm-disabled-text</td><td>确认按钮处于禁用状态时的文字</td><td><em>string</em></td><td><code>确定</code></td></tr><tr><td>first-day-of-week</td><td>设置周起始日</td><td><em>0-6</em></td><td><code>0</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="calendar-poppable-props" tabindex="-1">Calendar Poppable Props</h3><p>当 Calendar 的 <code>poppable</code> 为 <code>true</code> 时，支持以下 props:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:show</td><td>是否显示日历弹窗</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>position</td><td>弹出位置，可选值为 <code>top</code> <code>right</code> <code>left</code></td><td><em>string</em></td><td><code>bottom</code></td></tr><tr><td>round</td><td>是否显示圆角弹窗</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-popstate</td><td>是否在页面回退时自动关闭</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-click-overlay</td><td>是否在点击遮罩层后关闭</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>safe-area-inset-top</td><td>是否开启<a href="#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei" target="_blank">顶部安全区适配</a></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>safe-area-inset-bottom</td><td>是否开启<a href="#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei" target="_blank">底部安全区适配</a></td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>teleport</td><td>指定挂载的节点，等同于 Teleport 组件的 <a href="https://cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to 属性</a></td><td><em>string | Element</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="calendar-range-props" tabindex="-1">Calendar Range Props</h3><p>当 Calendar 的 <code>type</code> 为 <code>range</code> 时，支持以下 props:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>max-range</td><td>日期区间最多可选天数</td><td><em>number | string</em></td><td>无限制</td></tr><tr><td>range-prompt</td><td>范围选择超过最多可选天数时的提示文案</td><td><em>string</em></td><td><code>最多选择 xx 天</code></td></tr><tr><td>show-range-prompt</td><td>范围选择超过最多可选天数时，是否展示提示文案</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>allow-same-day</td><td>是否允许日期范围的起止时间为同一天</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="calendar-multiple-props" tabindex="-1">Calendar Multiple Props</h3><p>当 Calendar 的 <code>type</code> 为 <code>multiple</code> 时，支持以下 props:</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>max-range</td><td>日期最多可选天数</td><td><em>number | string</em></td><td>无限制</td></tr><tr><td>range-prompt</td><td>选择超过最多可选天数时的提示文案</td><td><em>string</em></td><td><code>最多选择 xx 天</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="day-shu-ju-jie-gou" tabindex="-1">Day 数据结构</h3><p>日历中的每个日期都对应一个 Day 对象，通过<code>formatter</code>属性可以自定义 Day 对象的内容</p><table><thead><tr><th>键名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>date</td><td>日期对应的 Date 对象</td><td><em>Date</em></td></tr><tr><td>type</td><td>日期类型，可选值为 <code>selected</code>、<code>start</code>、<code>middle</code>、<code>end</code>、<code>disabled</code></td><td><em>string</em></td></tr><tr><td>text</td><td>中间显示的文字</td><td><em>string</em></td></tr><tr><td>topInfo</td><td>上方的提示信息</td><td><em>string</em></td></tr><tr><td>bottomInfo</td><td>下方的提示信息</td><td><em>string</em></td></tr><tr><td>className</td><td>额外类名</td><td><em>string</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>select</td><td>点击并选中任意日期时触发</td><td><em>value: Date | Date[]</em></td></tr><tr><td>confirm</td><td>日期选择完成后触发，若 <code>show-confirm</code> 为 <code>true</code>，则点击确认按钮后触发</td><td><em>value: Date | Date[]</em></td></tr><tr><td>open</td><td>打开弹出层时触发</td><td>-</td></tr><tr><td>close</td><td>关闭弹出层时触发</td><td>-</td></tr><tr><td>opened</td><td>打开弹出层且动画结束后触发</td><td>-</td></tr><tr><td>closed</td><td>关闭弹出层且动画结束后触发</td><td>-</td></tr><tr><td>unselect</td><td>当日历组件的 <code>type</code> 为 <code>multiple</code> 时，取消选中日期时触发</td><td><em>value: Date</em></td></tr><tr><td>month-show</td><td>当某个月份进入可视区域时触发</td><td><em>{ date: Date, title: string }</em></td></tr><tr><td>over-range</td><td>范围选择超过最多可选天数时触发</td><td>-</td></tr><tr><td>click-subtitle</td><td>点击日历副标题时触发</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-disabled-date <code>v4.7.0</code></td><td>点击禁用日期时触发</td><td><em>value: Date | Date[]</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>title</td><td>自定义标题</td><td>-</td></tr><tr><td>subtitle</td><td>自定义日历副标题</td><td><em>{ text: string, date?: Date }</em></td></tr><tr><td>month-title <code>v4.0.9</code></td><td>自定义每个月份的小标题</td><td><em>{ text: string, date: Date }</em></td></tr><tr><td>footer</td><td>自定义底部区域内容</td><td>-</td></tr><tr><td>confirm-text</td><td>自定义确认按钮的内容</td><td><em>{ disabled: boolean }</em></td></tr><tr><td>top-info</td><td>自定义日期上方的提示信息</td><td><em>day: Day</em></td></tr><tr><td>bottom-info</td><td>自定义日期下方的提示信息</td><td><em>day: Day</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">方法</h3><p>通过 ref 可以获取到 Calendar 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>reset</td><td>将选中的日期重置到指定日期，未传参时会重置到默认日期</td><td><em>date?: Date | Date[]</em></td><td>-</td></tr><tr><td>scrollToDate</td><td>滚动到某个日期</td><td><em>date: Date</em></td><td>-</td></tr><tr><td>getSelectedDate</td><td>获取选中的日期</td><td>-</td><td><em>Date | Date[] | null</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">CalendarType</span>,
  <span class="hljs-title class_">CalendarProps</span>,
  <span class="hljs-title class_">CalendarDayItem</span>,
  <span class="hljs-title class_">CalendarDayType</span>,
  <span class="hljs-title class_">CalendarInstance</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>CalendarInstance</code> 是组件实例的类型，用法如下：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CalendarInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> calendarRef = ref&lt;<span class="hljs-title class_">CalendarInstance</span>&gt;();

calendarRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">reset</span>();
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-calendar-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-calendar-popup-height</td><td><em>80%</em></td><td>-</td></tr><tr><td>--van-calendar-header-shadow</td><td><em>0 2px 10px rgba(125, 126, 128, 0.16)</em></td><td>-</td></tr><tr><td>--van-calendar-header-title-height</td><td><em>44px</em></td><td>-</td></tr><tr><td>--van-calendar-header-title-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-calendar-header-subtitle-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-calendar-weekdays-height</td><td><em>30px</em></td><td>-</td></tr><tr><td>--van-calendar-weekdays-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-calendar-month-title-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-calendar-month-mark-color</td><td><em>fade(var(--van-gray-2), 80%)</em></td><td>-</td></tr><tr><td>--van-calendar-month-mark-font-size</td><td><em>160px</em></td><td>-</td></tr><tr><td>--van-calendar-day-height</td><td><em>64px</em></td><td>-</td></tr><tr><td>--van-calendar-day-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-calendar-day-margin-bottom</td><td><em>4px</em></td><td>-</td></tr><tr><td>--van-calendar-range-edge-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-calendar-range-edge-background</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-calendar-range-middle-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-calendar-range-middle-background-opacity</td><td><em>0.1</em></td><td>-</td></tr><tr><td>--van-calendar-selected-day-size</td><td><em>54px</em></td><td>-</td></tr><tr><td>--van-calendar-selected-day-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-calendar-info-font-size</td><td><em>var(--van-font-size-xs)</em></td><td>-</td></tr><tr><td>--van-calendar-info-line-height</td><td><em>var(--van-line-height-xs)</em></td><td>-</td></tr><tr><td>--van-calendar-selected-day-background</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-calendar-day-disabled-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-calendar-confirm-button-height</td><td><em>36px</em></td><td>-</td></tr><tr><td>--van-calendar-confirm-button-margin</td><td><em>7px 0</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="ru-he-zai-formatter-zhong-shi-yong-yi-bu-fan-hui-de-shu-ju" tabindex="-1">如何在 formatter 中使用异步返回的数据？</h3><p>如果需要在 formatter 中使用异步返回的数据，可以使用计算属性动态创建 formatter 函数，示例如下：</p><pre><code class="language-js"><span class="hljs-keyword">const</span> asyncData = <span class="hljs-title function_">ref</span>();

<span class="hljs-keyword">const</span> formatter = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">if</span> (!asyncData.<span class="hljs-property">value</span>) {
    <span class="hljs-keyword">return</span> <span class="hljs-function">(<span class="hljs-params">day</span>) =&gt;</span> day;
  }
  <span class="hljs-keyword">return</span> <span class="hljs-function">(<span class="hljs-params">day</span>) =&gt;</span> {
    day.<span class="hljs-property">bottomInfo</span> = asyncData.<span class="hljs-property">value</span>;
    <span class="hljs-keyword">return</span> day;
  };
});

<span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
  asyncData.<span class="hljs-property">value</span> = <span class="hljs-string">&#39;后端文案&#39;</span>;
}, <span class="hljs-number">3000</span>);
</code></pre></div><div class="van-doc-card"><h3 id="zai-ios-xi-tong-shang-chu-shi-hua-zu-jian-shi-bai" tabindex="-1">在 iOS 系统上初始化组件失败？</h3><p>如果你遇到了在 iOS 上无法渲染组件的问题，请确认在创建 Date 对象时没有使用<code>new Date(&#39;2020-01-01&#39;)</code>这样的写法，iOS 不支持以中划线分隔的日期格式，正确写法是<code>new Date(&#39;2020/01/01&#39;)</code>。</p><p>对此问题的详细解释：<a href="https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios" target="_blank">stackoverflow</a>。</p></div>`,31),p=[l];function r(o,c){return a(),t("div",e,p)}const m=s(d,[["render",r]]);export{m as default};

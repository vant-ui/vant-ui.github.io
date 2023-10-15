import{_ as s}from"./locales-be796722.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const l={},p={class:"van-doc-markdown-body"},e=n(`<h1>CountDown 倒计时</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于实时展示倒计时数值，支持毫秒精度。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">CountDown</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CountDown</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p><code>time</code> 属性表示倒计时总时长，单位为毫秒。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-count-down</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> time = <span class="hljs-title function_">ref</span>(<span class="hljs-number">30</span> * <span class="hljs-number">60</span> * <span class="hljs-number">60</span> * <span class="hljs-number">1000</span>);
    <span class="hljs-keyword">return</span> { time };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-ge-shi" tabindex="-1">自定义格式</h3><p>通过 <code>format</code> 属性设置倒计时文本的内容。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-count-down</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time&quot;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;DD 天 HH 时 mm 分 ss 秒&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="hao-miao-ji-xuan-ran" tabindex="-1">毫秒级渲染</h3><p>倒计时默认每秒渲染一次，设置 <code>millisecond</code> 属性可以开启毫秒级渲染。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-count-down</span> <span class="hljs-attr">millisecond</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time&quot;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;HH:mm:ss:SS&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yang-shi" tabindex="-1">自定义样式</h3><p>通过插槽自定义倒计时的样式，<code>timeData</code> 对象格式见下方表格。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-count-down</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;timeData&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>{{ timeData.hours }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;colon&quot;</span>&gt;</span>:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>{{ timeData.minutes }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;colon&quot;</span>&gt;</span>:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>{{ timeData.seconds }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-count-down</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.colon</span> {
    <span class="hljs-attribute">display</span>: inline-block;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> <span class="hljs-number">4px</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#1989fa</span>;
  }
  <span class="hljs-selector-class">.block</span> {
    <span class="hljs-attribute">display</span>: inline-block;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">22px</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#1989fa</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="shou-dong-kong-zhi" tabindex="-1">手动控制</h3><p>通过 ref 获取到组件实例后，可以调用 <code>start</code>、<code>pause</code>、<code>reset</code> 方法。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-count-down</span>
  <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;countDown&quot;</span>
  <span class="hljs-attr">millisecond</span>
  <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;3000&quot;</span>
  <span class="hljs-attr">:auto-start</span>=<span class="hljs-string">&quot;false&quot;</span>
  <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;ss:SSS&quot;</span>
  @<span class="hljs-attr">finish</span>=<span class="hljs-string">&quot;onFinish&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-grid</span> <span class="hljs-attr">clickable</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;开始&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;play-circle-o&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;start&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;暂停&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;pause-circle-o&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;pause&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;重置&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;replay&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;reset&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-grid</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> countDown = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">start</span> = (<span class="hljs-params"></span>) =&gt; {
      countDown.<span class="hljs-property">value</span>.<span class="hljs-title function_">start</span>();
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">pause</span> = (<span class="hljs-params"></span>) =&gt; {
      countDown.<span class="hljs-property">value</span>.<span class="hljs-title function_">pause</span>();
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">reset</span> = (<span class="hljs-params"></span>) =&gt; {
      countDown.<span class="hljs-property">value</span>.<span class="hljs-title function_">reset</span>();
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onFinish</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;倒计时结束&#39;</span>);

    <span class="hljs-keyword">return</span> {
      start,
      pause,
      reset,
      onFinish,
      countDown,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>time</td><td>倒计时时长，单位毫秒</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>format</td><td>时间格式</td><td><em>string</em></td><td><code>HH:mm:ss</code></td></tr><tr><td>auto-start</td><td>是否自动开始倒计时</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>millisecond</td><td>是否开启毫秒级渲染</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="format-ge-shi" tabindex="-1">format 格式</h3><table><thead><tr><th>格式</th><th>说明</th></tr></thead><tbody><tr><td>DD</td><td>天数</td></tr><tr><td>HH</td><td>小时</td></tr><tr><td>mm</td><td>分钟</td></tr><tr><td>ss</td><td>秒数</td></tr><tr><td>S</td><td>毫秒（1 位）</td></tr><tr><td>SS</td><td>毫秒（2 位）</td></tr><tr><td>SSS</td><td>毫秒（3 位）</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>finish</td><td>倒计时结束时触发</td><td>-</td></tr><tr><td>change</td><td>倒计时变化时触发</td><td><em>currentTime: CurrentTime</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>default</td><td>自定义内容</td><td><em>currentTime: CurrentTime</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="currenttime-ge-shi" tabindex="-1">CurrentTime 格式</h3><table><thead><tr><th>名称</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>total</td><td>剩余总时间（单位毫秒）</td><td><em>number</em></td></tr><tr><td>days</td><td>剩余天数</td><td><em>number</em></td></tr><tr><td>hours</td><td>剩余小时</td><td><em>number</em></td></tr><tr><td>minutes</td><td>剩余分钟</td><td><em>number</em></td></tr><tr><td>seconds</td><td>剩余秒数</td><td><em>number</em></td></tr><tr><td>milliseconds</td><td>剩余毫秒</td><td><em>number</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">方法</h3><p>通过 ref 可以获取到 CountDown 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>start</td><td>开始倒计时</td><td>-</td><td>-</td></tr><tr><td>pause</td><td>暂停倒计时</td><td>-</td><td>-</td></tr><tr><td>reset</td><td>重设倒计时，若 <code>auto-start</code> 为 <code>true</code>，重设后会自动开始倒计时</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">CountDownProps</span>,
  <span class="hljs-title class_">CountDownInstance</span>,
  <span class="hljs-title class_">CountDownCurrentTime</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>CountDownInstance</code> 是组件实例的类型，用法如下：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CountDownInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> countDownRef = ref&lt;<span class="hljs-title class_">CountDownInstance</span>&gt;();

countDownRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">start</span>();
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-count-down-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-count-down-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-count-down-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="zai-ios-xi-tong-shang-dao-ji-shi-bu-sheng-xiao" tabindex="-1">在 iOS 系统上倒计时不生效？</h3><p>如果你遇到了在 iOS 上倒计时不生效的问题，请确认在创建 Date 对象时没有使用<code>new Date(&#39;2020-01-01&#39;)</code>这样的写法，iOS 不支持以中划线分隔的日期格式，正确写法是<code>new Date(&#39;2020/01/01&#39;)</code>。</p><p>对此问题的详细解释：<a href="https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios" target="_blank">stackoverflow</a>。</p></div>`,21),c=[e];function d(o,r){return a(),t("div",p,c)}const j=s(l,[["render",d]]);export{j as default};

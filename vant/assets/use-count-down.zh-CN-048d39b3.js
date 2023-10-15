import{_ as s}from"./locales-be796722.js";import{o as n,a,z as t}from"./vue-libs-19c20d28.js";const l={},p={class:"van-doc-markdown-body"},e=t(`<h1>useCountDown</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>提供倒计时管理能力。</p></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">基本用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>总时间：{{ current.total }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>剩余天数：{{ current.days }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>剩余小时：{{ current.hours }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>剩余分钟：{{ current.minutes }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>剩余秒数：{{ current.seconds }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>剩余毫秒：{{ current.milliseconds }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { useCountDown } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> countDown = <span class="hljs-title function_">useCountDown</span>({
      <span class="hljs-comment">// 倒计时 24 小时</span>
      <span class="hljs-attr">time</span>: <span class="hljs-number">24</span> * <span class="hljs-number">60</span> * <span class="hljs-number">60</span> * <span class="hljs-number">1000</span>,
    });

    <span class="hljs-comment">// 开始倒计时</span>
    countDown.<span class="hljs-title function_">start</span>();

    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">current</span>: countDown.<span class="hljs-property">current</span>,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="hao-miao-ji-xuan-ran" tabindex="-1">毫秒级渲染</h3><p>倒计时默认每秒渲染一次，设置 millisecond 选项可以开启毫秒级渲染。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { useCountDown } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> countDown = <span class="hljs-title function_">useCountDown</span>({
      <span class="hljs-attr">time</span>: <span class="hljs-number">24</span> * <span class="hljs-number">60</span> * <span class="hljs-number">60</span> * <span class="hljs-number">1000</span>,
      <span class="hljs-attr">millisecond</span>: <span class="hljs-literal">true</span>,
    });
    countDown.<span class="hljs-title function_">start</span>();

    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">current</span>: countDown.<span class="hljs-property">current</span>,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">CurrentTime</span> = {
  <span class="hljs-attr">days</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">hours</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">total</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">minutes</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">seconds</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">milliseconds</span>: <span class="hljs-built_in">number</span>;
};

<span class="hljs-keyword">type</span> <span class="hljs-title class_">CountDown</span> = {
  <span class="hljs-attr">start</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">void</span>;
  <span class="hljs-attr">pause</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">void</span>;
  <span class="hljs-attr">reset</span>: <span class="hljs-function">(<span class="hljs-params">totalTime: <span class="hljs-built_in">number</span></span>) =&gt;</span> <span class="hljs-built_in">void</span>;
  <span class="hljs-attr">current</span>: <span class="hljs-title class_">ComputedRef</span>&lt;<span class="hljs-title class_">CurrentTime</span>&gt;;
};

<span class="hljs-keyword">type</span> <span class="hljs-title class_">UseCountDownOptions</span> = {
  <span class="hljs-attr">time</span>: <span class="hljs-built_in">number</span>;
  millisecond?: <span class="hljs-built_in">boolean</span>;
  onChange?: <span class="hljs-function">(<span class="hljs-params">current: CurrentTime</span>) =&gt;</span> <span class="hljs-built_in">void</span>;
  onFinish?: <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">void</span>;
};

<span class="hljs-keyword">function</span> <span class="hljs-title function_">useCountDown</span>(<span class="hljs-params">options: UseCountDownOptions</span>): <span class="hljs-title class_">CountDown</span>;
</code></pre></div><div class="van-doc-card"><h3 id="can-shu" tabindex="-1">参数</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>time</td><td>倒计时时长，单位毫秒</td><td><em>number</em></td><td>-</td></tr><tr><td>millisecond</td><td>是否开启毫秒级渲染</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>onChange</td><td>倒计时改变时触发的回调函数</td><td><em>(current: CurrentTime) =&gt; void</em></td><td>-</td></tr><tr><td>onFinish</td><td>倒计时结束时触发的回调函数</td><td><em>() =&gt; void</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fan-hui-zhi" tabindex="-1">返回值</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>current</td><td>当前剩余的时间</td><td><em>CurrentTime</em></td></tr><tr><td>start</td><td>开始倒计时</td><td><em>() =&gt; void</em></td></tr><tr><td>pause</td><td>暂停倒计时</td><td><em>() =&gt; void</em></td></tr><tr><td>reset</td><td>重置倒计时，支持传入新的倒计时时长</td><td><em>(time?: number): void</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="currenttime-ge-shi" tabindex="-1">CurrentTime 格式</h3><table><thead><tr><th>名称</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>total</td><td>剩余总时间（单位毫秒）</td><td><em>number</em></td></tr><tr><td>days</td><td>剩余天数</td><td><em>number</em></td></tr><tr><td>hours</td><td>剩余小时</td><td><em>number</em></td></tr><tr><td>minutes</td><td>剩余分钟</td><td><em>number</em></td></tr><tr><td>seconds</td><td>剩余秒数</td><td><em>number</em></td></tr><tr><td>milliseconds</td><td>剩余毫秒</td><td><em>number</em></td></tr></tbody></table></div>`,10),c=[e];function d(r,h){return n(),a("div",p,c)}const u=s(l,[["render",d]]);export{u as default};

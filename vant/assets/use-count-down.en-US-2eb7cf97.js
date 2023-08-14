import{_ as l}from"./locales-e2cb6d3e.js";import{o as d,a as c,d as n,g as s,t,z as e}from"./vue-libs-19c20d28.js";const p={},o={class:"van-doc-markdown-body"},r=n("h1",null,"useCountDown",-1),i=n("div",{class:"van-doc-card"},[n("h3",{id:"intro",tabindex:"-1"},"Intro"),n("p",null,"Used to manage the countdown.")],-1),h=n("h2",{id:"usage",tabindex:"-1"},"Usage",-1),u={class:"van-doc-card"},m=n("h3",{id:"basic-usage",tabindex:"-1"},"Basic Usage",-1),j={class:"language-html"},_=n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"span"),s(">")],-1),b=n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"span"),s(">")],-1),g=n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"span"),s(">")],-1),w=n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"span"),s(">")],-1),y=n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"span"),s(">")],-1),v=n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"span"),s(">")],-1),f=n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"span"),s(">")],-1),D=n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"span"),s(">")],-1),C=n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"span"),s(">")],-1),k=n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"span"),s(">")],-1),T=n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"span"),s(">")],-1),R=n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"span"),s(">")],-1),x=e(`<pre><code class="language-js"><span class="hljs-keyword">import</span> { useCountDown } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> countDown = <span class="hljs-title function_">useCountDown</span>({
      <span class="hljs-attr">time</span>: <span class="hljs-number">24</span> * <span class="hljs-number">60</span> * <span class="hljs-number">60</span> * <span class="hljs-number">1000</span>,
    });

    countDown.<span class="hljs-title function_">start</span>();

    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">current</span>: countDown.<span class="hljs-property">current</span>,
    };
  },
};
</code></pre>`,1),N=e(`<div class="van-doc-card"><h3 id="millisecond" tabindex="-1">Millisecond</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { useCountDown } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

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
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="type-declarations" tabindex="-1">Type Declarations</h3><pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">CurrentTime</span> = {
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
</code></pre></div><div class="van-doc-card"><h3 id="params" tabindex="-1">Params</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>time</td><td>Total time, unit milliseconds</td><td><em>number</em></td><td>-</td></tr><tr><td>millisecond</td><td>Whether to enable millisecond render</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>onChange</td><td>Triggered when count down changed</td><td><em>(current: CurrentTime) =&gt; void</em></td><td>-</td></tr><tr><td>onFinish</td><td>Triggered when count down finished</td><td><em>() =&gt; void</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="return-value" tabindex="-1">Return Value</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>current</td><td>Current remain time</td><td><em>CurrentTime</em></td></tr><tr><td>start</td><td>Start count down</td><td><em>() =&gt; void</em></td></tr><tr><td>pause</td><td>Pause count down</td><td><em>() =&gt; void</em></td></tr><tr><td>reset</td><td>Reset count down</td><td><em>(time?: number): void</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="currenttime-structure" tabindex="-1">CurrentTime Structure</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>total</td><td>Total time, unit milliseconds</td><td><em>number</em></td></tr><tr><td>days</td><td>Remain days</td><td><em>number</em></td></tr><tr><td>hours</td><td>Remain hours</td><td><em>number</em></td></tr><tr><td>minutes</td><td>Remain minutes</td><td><em>number</em></td></tr><tr><td>seconds</td><td>Remain seconds</td><td><em>number</em></td></tr><tr><td>milliseconds</td><td>Remain milliseconds</td><td><em>number</em></td></tr></tbody></table></div>`,6);function U(a,S){return d(),c("div",o,[r,i,h,n("div",u,[m,n("pre",null,[n("code",j,[_,s("Total time："+t(a.current.total),1),b,s(`
`),g,s("Remain days："+t(a.current.days),1),w,s(`
`),y,s("Remain hours："+t(a.current.hours),1),v,s(`
`),f,s("Remain minutes："+t(a.current.minutes),1),D,s(`
`),C,s("Remain seconds："+t(a.current.seconds),1),k,s(`
`),T,s("Remain milliseconds："+t(a.current.milliseconds),1),R,s(`
`)])]),x]),N])}const P=l(p,[["render",U]]);export{P as default};

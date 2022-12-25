import{o as s,a as n,z as d}from"./vue-libs-a0ef9506.js";const a={class:"van-doc-markdown-body"},e=d(`<h1>Coupon</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used for redemption and selection of coupons.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">CouponCell</span>, <span class="hljs-title class_">CouponList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CouponCell</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CouponList</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Coupon Cell --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-coupon-cell</span>
  <span class="hljs-attr">:coupons</span>=<span class="hljs-string">&quot;coupons&quot;</span>
  <span class="hljs-attr">:chosen-coupon</span>=<span class="hljs-string">&quot;chosenCoupon&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showList = true&quot;</span>
/&gt;</span>
<span class="hljs-comment">&lt;!-- Coupon List --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showList&quot;</span>
  <span class="hljs-attr">round</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
  <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 90%; padding-top: 4px;&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-coupon-list</span>
    <span class="hljs-attr">:coupons</span>=<span class="hljs-string">&quot;coupons&quot;</span>
    <span class="hljs-attr">:chosen-coupon</span>=<span class="hljs-string">&quot;chosenCoupon&quot;</span>
    <span class="hljs-attr">:disabled-coupons</span>=<span class="hljs-string">&quot;disabledCoupons&quot;</span>
    @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
    @<span class="hljs-attr">exchange</span>=<span class="hljs-string">&quot;onExchange&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> coupon = {
      <span class="hljs-attr">available</span>: <span class="hljs-number">1</span>,
      <span class="hljs-attr">originCondition</span>: <span class="hljs-number">0</span>,
      <span class="hljs-attr">reason</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">value</span>: <span class="hljs-number">150</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Coupon name&#39;</span>,
      <span class="hljs-attr">startAt</span>: <span class="hljs-number">1489104000</span>,
      <span class="hljs-attr">endAt</span>: <span class="hljs-number">1514592000</span>,
      <span class="hljs-attr">valueDesc</span>: <span class="hljs-string">&#39;1.5&#39;</span>,
      <span class="hljs-attr">unitDesc</span>: <span class="hljs-string">&#39;元&#39;</span>,
    };

    <span class="hljs-keyword">const</span> coupons = <span class="hljs-title function_">ref</span>([coupon]);
    <span class="hljs-keyword">const</span> showList = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> chosenCoupon = <span class="hljs-title function_">ref</span>(-<span class="hljs-number">1</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">index</span>) =&gt; {
      showList.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      chosenCoupon.<span class="hljs-property">value</span> = index;
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onExchange</span> = (<span class="hljs-params">code</span>) =&gt; {
      coupons.<span class="hljs-property">value</span>.<span class="hljs-title function_">push</span>(coupon);
    };

    <span class="hljs-keyword">return</span> {
      coupons,
      showList,
      onChange,
      onExchange,
      chosenCoupon,
      <span class="hljs-attr">disabledCoupons</span>: [coupon],
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="couponcell-props" tabindex="-1">CouponCell Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>Cell title</td><td><em>string</em></td><td><code>Coupon</code></td></tr><tr><td>chosen-coupon</td><td>Index of chosen coupon</td><td><em>number | string</em></td><td><code>-1</code></td></tr><tr><td>coupons</td><td>Coupon list</td><td><em>Coupon[]</em></td><td><code>[]</code></td></tr><tr><td>editable</td><td>Cell editable</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>border</td><td>Whether to show inner border</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>currency</td><td>Currency symbol</td><td><em>string</em></td><td><code>¥</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="couponlist-props" tabindex="-1">CouponList Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Current exchange code</td><td><em>string</em></td><td>-</td></tr><tr><td>chosen-coupon</td><td>Index of chosen coupon</td><td><em>number</em></td><td><code>-1</code></td></tr><tr><td>coupons</td><td>Coupon list</td><td><em>Coupon[]</em></td><td><code>[]</code></td></tr><tr><td>disabled-coupons</td><td>Disabled coupon list</td><td><em>Coupon[]</em></td><td><code>[]</code></td></tr><tr><td>enabled-title</td><td>Title of coupon list</td><td><em>string</em></td><td><code>Available</code></td></tr><tr><td>disabled-title</td><td>Title of disabled coupon list</td><td><em>string</em></td><td><code>Unavailable</code></td></tr><tr><td>exchange-button-text</td><td>Exchange button text</td><td><em>string</em></td><td><code>Exchange</code></td></tr><tr><td>exchange-button-loading</td><td>Whether to show loading in exchange button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>exchange-button-disabled</td><td>Whether to disable exchange button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>exchange-min-length</td><td>Min length to enable exchange button</td><td><em>number</em></td><td><code>1</code></td></tr><tr><td>displayed-coupon-index</td><td>Index of displayed coupon</td><td><em>number</em></td><td>-</td></tr><tr><td>close-button-text</td><td>Close button text</td><td><em>string</em></td><td><code>Close</code></td></tr><tr><td>input-placeholder</td><td>Input placeholder</td><td><em>string</em></td><td><code>Coupon code</code></td></tr><tr><td>currency</td><td>Currency symbol</td><td><em>string</em></td><td><code>¥</code></td></tr><tr><td>empty-image</td><td>Placeholder image when list is empty</td><td><em>string</em></td><td>-</td></tr><tr><td>show-count</td><td>Whether to show coupon count in tab title</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="couponlist-events" tabindex="-1">CouponList Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>change</td><td>Emitted when chosen coupon changed</td><td>index: index of chosen coupon</td></tr><tr><td>exchange</td><td>Emitted when exchanging coupon</td><td>code: exchange code</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="couponlist-slots" tabindex="-1">CouponList Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>list-footer <code>v3.0.18</code></td><td>Coupon list bottom</td></tr><tr><td>disabled-list-footer <code>v3.0.18</code></td><td>Unavailable coupons list bottom</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="data-structure-of-coupon" tabindex="-1">Data Structure of Coupon</h3><table><thead><tr><th>Key</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>id</td><td>Id</td><td><em>string</em></td></tr><tr><td>name</td><td>Name</td><td><em>string</em></td></tr><tr><td>condition</td><td>Condition</td><td><em>string</em></td></tr><tr><td>startAt</td><td>Start time (Timestamp, unit second)</td><td><em>number</em></td></tr><tr><td>endAt</td><td>End time (Timestamp, unit second)</td><td><em>number</em></td></tr><tr><td>description</td><td>Description</td><td><em>string</em></td></tr><tr><td>reason</td><td>Unavailable reason</td><td><em>string</em></td></tr><tr><td>value</td><td>Value</td><td><em>number</em></td></tr><tr><td>valueDesc</td><td>Value Text</td><td><em>string</em></td></tr><tr><td>unitDesc</td><td>Unit Text</td><td><em>string</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CouponCellProps</span>, <span class="hljs-title class_">CouponListProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-coupon-margin</td><td><em>0 var(--van-padding-sm) var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-coupon-content-height</td><td><em>84px</em></td><td>-</td></tr><tr><td>--van-coupon-content-padding</td><td><em>14px 0</em></td><td>-</td></tr><tr><td>--van-coupon-content-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-coupon-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-coupon-active-background</td><td><em>var(--van-active-color)</em></td><td>-</td></tr><tr><td>--van-coupon-radius</td><td><em>var(--van-radius-lg)</em></td><td>-</td></tr><tr><td>--van-coupon-shadow</td><td><em>0 0 4px rgba(0, 0, 0, 0.1)</em></td><td>-</td></tr><tr><td>--van-coupon-head-width</td><td><em>96px</em></td><td>-</td></tr><tr><td>--van-coupon-amount-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-coupon-amount-font-size</td><td><em>30px</em></td><td>-</td></tr><tr><td>--van-coupon-currency-font-size</td><td><em>40%</em></td><td>-</td></tr><tr><td>--van-coupon-name-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-coupon-disabled-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-coupon-description-padding</td><td><em>var(--van-padding-xs) var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-coupon-description-border-color</td><td><em>var(--van-border-color)</em></td><td>-</td></tr><tr><td>--van-coupon-checkbox-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-coupon-list-background</td><td><em>var(--van-background)</em></td><td>-</td></tr><tr><td>--van-coupon-list-field-padding</td><td><em>5px 0 5px var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-coupon-list-exchange-button-height</td><td><em>32px</em></td><td>-</td></tr><tr><td>--van-coupon-list-close-button-height</td><td><em>40px</em></td><td>-</td></tr><tr><td>--van-coupon-list-empty-tip-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-coupon-list-empty-tip-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-coupon-list-empty-tip-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-coupon-cell-selected-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr></tbody></table></div>`,14),o=[e],h={__name:"README",setup(l,{expose:t}){return t({frontmatter:{}}),(p,c)=>(s(),n("div",a,o))}};export{h as default};

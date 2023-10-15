import{_ as t}from"./locales-be796722.js";import{o as s,a as d,z as n}from"./vue-libs-19c20d28.js";const a={},e={class:"van-doc-markdown-body"},o=n(`<h1>Coupon 优惠券选择器</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于优惠券的兑换和选择。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">CouponCell</span>, <span class="hljs-title class_">CouponList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CouponCell</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CouponList</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 优惠券单元格 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-coupon-cell</span>
  <span class="hljs-attr">:coupons</span>=<span class="hljs-string">&quot;coupons&quot;</span>
  <span class="hljs-attr">:chosen-coupon</span>=<span class="hljs-string">&quot;chosenCoupon&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showList = true&quot;</span>
/&gt;</span>
<span class="hljs-comment">&lt;!-- 优惠券列表 --&gt;</span>
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
      <span class="hljs-attr">condition</span>: <span class="hljs-string">&#39;无门槛\\n最多优惠12元&#39;</span>,
      <span class="hljs-attr">reason</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">value</span>: <span class="hljs-number">150</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;优惠券名称&#39;</span>,
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
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="couponcell-props" tabindex="-1">CouponCell Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>单元格标题</td><td><em>string</em></td><td><code>优惠券</code></td></tr><tr><td>chosen-coupon</td><td>当前选中优惠券的索引</td><td><em>number | string</em></td><td><code>-1</code></td></tr><tr><td>coupons</td><td>可用优惠券列表</td><td><em>Coupon[]</em></td><td><code>[]</code></td></tr><tr><td>editable</td><td>能否切换优惠券</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>border</td><td>是否显示内边框</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>currency</td><td>货币符号</td><td><em>string</em></td><td><code>¥</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="couponlist-props" tabindex="-1">CouponList Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:code</td><td>当前输入的兑换码</td><td><em>string</em></td><td>-</td></tr><tr><td>chosen-coupon</td><td>当前选中优惠券的索引</td><td><em>number</em></td><td><code>-1</code></td></tr><tr><td>coupons</td><td>可用优惠券列表</td><td><em>CouponInfo[]</em></td><td><code>[]</code></td></tr><tr><td>disabled-coupons</td><td>不可用优惠券列表</td><td><em>CouponInfo[]</em></td><td><code>[]</code></td></tr><tr><td>enabled-title</td><td>可用优惠券列表标题</td><td><em>string</em></td><td><code>可使用优惠券</code></td></tr><tr><td>disabled-title</td><td>不可用优惠券列表标题</td><td><em>string</em></td><td><code>不可使用优惠券</code></td></tr><tr><td>exchange-button-text</td><td>兑换按钮文字</td><td><em>string</em></td><td><code>兑换</code></td></tr><tr><td>exchange-button-loading</td><td>是否显示兑换按钮加载动画</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>exchange-button-disabled</td><td>是否禁用兑换按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>exchange-min-length</td><td>兑换码最小长度</td><td><em>number</em></td><td><code>1</code></td></tr><tr><td>displayed-coupon-index</td><td>滚动至特定优惠券位置</td><td><em>number</em></td><td>-</td></tr><tr><td>show-close-button</td><td>是否显示列表底部按钮</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-button-text</td><td>列表底部按钮文字</td><td><em>string</em></td><td><code>不使用优惠</code></td></tr><tr><td>input-placeholder</td><td>输入框文字提示</td><td><em>string</em></td><td><code>请输入优惠码</code></td></tr><tr><td>show-exchange-bar</td><td>是否展示兑换栏</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>currency</td><td>货币符号</td><td><em>string</em></td><td><code>¥</code></td></tr><tr><td>empty-image</td><td>列表为空时的占位图</td><td><em>string</em></td><td>-</td></tr><tr><td>show-count</td><td>是否展示可用 / 不可用数量</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="couponlist-events" tabindex="-1">CouponList Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>优惠券切换回调</td><td>index, 选中优惠券的索引</td></tr><tr><td>exchange</td><td>兑换优惠券回调</td><td>code, 兑换码</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="couponlist-slots" tabindex="-1">CouponList Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>list-footer</td><td>优惠券列表底部</td></tr><tr><td>disabled-list-footer</td><td>不可用优惠券列表底部</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="couponinfo-shu-ju-jie-gou" tabindex="-1">CouponInfo 数据结构</h3><table><thead><tr><th>键名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>id</td><td>优惠券 id</td><td><em>string</em></td></tr><tr><td>name</td><td>优惠券名称</td><td><em>string</em></td></tr><tr><td>condition</td><td>满减条件</td><td><em>string</em></td></tr><tr><td>startAt</td><td>卡有效开始时间 (时间戳, 单位秒)</td><td><em>number</em></td></tr><tr><td>endAt</td><td>卡失效日期 (时间戳, 单位秒)</td><td><em>number</em></td></tr><tr><td>description</td><td>描述信息，优惠券可用时展示</td><td><em>string</em></td></tr><tr><td>reason</td><td>不可用原因，优惠券不可用时展示</td><td><em>string</em></td></tr><tr><td>value</td><td>折扣券优惠金额，单位分</td><td><em>number</em></td></tr><tr><td>valueDesc</td><td>折扣券优惠金额文案</td><td><em>string</em></td></tr><tr><td>unitDesc</td><td>单位文案</td><td><em>string</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CouponCellProps</span>, <span class="hljs-title class_">CouponListProps</span>, <span class="hljs-title class_">CouponInfo</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-coupon-margin</td><td><em>0 var(--van-padding-sm) var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-coupon-content-height</td><td><em>84px</em></td><td>-</td></tr><tr><td>--van-coupon-content-padding</td><td><em>14px 0</em></td><td>-</td></tr><tr><td>--van-coupon-content-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-coupon-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-coupon-active-background</td><td><em>var(--van-active-color)</em></td><td>-</td></tr><tr><td>--van-coupon-radius</td><td><em>var(--van-radius-lg)</em></td><td>-</td></tr><tr><td>--van-coupon-shadow</td><td><em>0 0 4px rgba(0, 0, 0, 0.1)</em></td><td>-</td></tr><tr><td>--van-coupon-head-width</td><td><em>96px</em></td><td>-</td></tr><tr><td>--van-coupon-amount-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-coupon-amount-font-size</td><td><em>30px</em></td><td>-</td></tr><tr><td>--van-coupon-currency-font-size</td><td><em>40%</em></td><td>-</td></tr><tr><td>--van-coupon-name-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-coupon-disabled-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-coupon-description-padding</td><td><em>var(--van-padding-xs) var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-coupon-description-border-color</td><td><em>var(--van-border-color)</em></td><td>-</td></tr><tr><td>--van-coupon-checkbox-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-coupon-list-background</td><td><em>var(--van-background)</em></td><td>-</td></tr><tr><td>--van-coupon-list-field-padding</td><td><em>5px 0 5px var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-coupon-list-exchange-button-height</td><td><em>32px</em></td><td>-</td></tr><tr><td>--van-coupon-list-close-button-height</td><td><em>40px</em></td><td>-</td></tr><tr><td>--van-coupon-list-empty-tip-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-coupon-list-empty-tip-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-coupon-list-empty-tip-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-coupon-cell-selected-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr></tbody></table></div>`,14),r=[o];function p(l,c){return s(),d("div",e,r)}const u=t(a,[["render",p]]);export{u as default};

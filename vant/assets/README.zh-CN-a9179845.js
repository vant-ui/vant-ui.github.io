import{o as t,a,z as e}from"./vue-libs-a0ef9506.js";const d={class:"van-doc-markdown-body"},n=e(`<h1>Stepper 步进器</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Stepper</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Stepper</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>通过 <code>v-model</code> 绑定输入值，可以通过 <code>change</code> 事件监听到输入值的变化。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-stepper</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">1</span>);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="bu-chang-she-zhi" tabindex="-1">步长设置</h3><p>通过 <code>step</code> 属性设置每次点击增加或减少按钮时变化的值，默认为 <code>1</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-stepper</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">step</span>=<span class="hljs-string">&quot;2&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="xian-zhi-shu-ru-fan-wei" tabindex="-1">限制输入范围</h3><p>通过 <code>min</code> 和 <code>max</code> 属性限制输入值的范围，默认超出范围后会自动校正最大值或最小值，通过 <code>auto-fixed</code> 可以关闭自动校正。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-stepper</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;8&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="xian-zhi-shu-ru-zheng-shu" tabindex="-1">限制输入整数</h3><p>设置 <code>integer</code> 属性后，输入框将限制只能输入整数。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-stepper</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">integer</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-zhuang-tai" tabindex="-1">禁用状态</h3><p>通过设置 <code>disabled</code> 属性来禁用步进器，禁用状态下无法点击按钮或修改输入框。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-stepper</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-shu-ru-kuang" tabindex="-1">禁用输入框</h3><p>通过设置 <code>disable-input</code> 属性来禁用输入框，此时按钮仍然可以点击。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-stepper</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">disable-input</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="gu-ding-xiao-shu-wei-shu" tabindex="-1">固定小数位数</h3><p>通过设置 <code>decimal-length</code> 属性可以保留固定的小数位数。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-stepper</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">step</span>=<span class="hljs-string">&quot;0.2&quot;</span> <span class="hljs-attr">:decimal-length</span>=<span class="hljs-string">&quot;1&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-da-xiao" tabindex="-1">自定义大小</h3><p>通过 <code>input-width</code> 属性设置输入框宽度，通过 <code>button-size</code> 属性设置按钮大小和输入框高度。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-stepper</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">input-width</span>=<span class="hljs-string">&quot;40px&quot;</span> <span class="hljs-attr">button-size</span>=<span class="hljs-string">&quot;32px&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="yi-bu-bian-geng" tabindex="-1">异步变更</h3><p>通过 <code>before-change</code> 属性可以在输入值变化前进行校验和拦截。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-stepper</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:before-change</span>=<span class="hljs-string">&quot;beforeChange&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { closeToast, showLoadingToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">1</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeChange</span> = (<span class="hljs-params">value</span>) =&gt; {
      <span class="hljs-title function_">showLoadingToast</span>({ <span class="hljs-attr">forbidClick</span>: <span class="hljs-literal">true</span> });

      <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {
        <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
          <span class="hljs-title function_">closeToast</span>();
          <span class="hljs-comment">// 在 resolve 函数中返回 true 或 false</span>
          <span class="hljs-title function_">resolve</span>(<span class="hljs-literal">true</span>);
        }, <span class="hljs-number">500</span>);
      });
    };

    <span class="hljs-keyword">return</span> {
      value,
      beforeChange,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="yuan-jiao-feng-ge" tabindex="-1">圆角风格</h3><p>将 <code>theme</code> 设置为 <code>round</code> 来展示圆角风格的步进器。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-stepper</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;round&quot;</span> <span class="hljs-attr">button-size</span>=<span class="hljs-string">&quot;22&quot;</span> <span class="hljs-attr">disable-input</span> /&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前输入的值</td><td><em>number | string</em></td><td>-</td></tr><tr><td>min</td><td>最小值</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>max</td><td>最大值</td><td><em>number | string</em></td><td>-</td></tr><tr><td>auto-fixed</td><td>是否自动校正超出限制范围的数值，设置为 <code>false</code> 后输入超过限制范围的数值将不会自动校正</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>default-value</td><td>初始值，当 v-model 为空时生效</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>step</td><td>步长，每次点击时改变的值</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>name</td><td>标识符，通常为一个唯一的字符串或数字，可以在 <code>change</code> 事件回调参数中获取</td><td><em>number | string</em></td><td>-</td></tr><tr><td>input-width</td><td>输入框宽度，默认单位为 <code>px</code></td><td><em>number | string</em></td><td><code>32px</code></td></tr><tr><td>button-size</td><td>按钮大小以及输入框高度，默认单位为 <code>px</code></td><td><em>number | string</em></td><td><code>28px</code></td></tr><tr><td>decimal-length</td><td>固定显示的小数位数</td><td><em>number | string</em></td><td>-</td></tr><tr><td>theme</td><td>样式风格，可选值为 <code>round</code></td><td><em>string</em></td><td>-</td></tr><tr><td>placeholder</td><td>输入框占位提示文字</td><td><em>string</em></td><td>-</td></tr><tr><td>integer</td><td>是否只允许输入整数</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用步进器</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>disable-plus</td><td>是否禁用增加按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>disable-minus</td><td>是否禁用减少按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>disable-input</td><td>是否禁用输入框</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>before-change</td><td>输入值变化前的回调函数，返回 <code>false</code> 可阻止输入，支持返回 Promise</td><td><em>(value: number | string) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td><code>false</code></td></tr><tr><td>show-plus</td><td>是否显示增加按钮</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-minus</td><td>是否显示减少按钮</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-input</td><td>是否显示输入框</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>long-press</td><td>是否开启长按手势，开启后可以长按增加和减少按钮</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>allow-empty</td><td>是否允许输入的值为空，设置为 <code>true</code> 后允许传入空字符串</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>当绑定值变化时触发的事件</td><td><em>value: string, detail: { name: string }</em></td></tr><tr><td>overlimit</td><td>点击不可用的按钮时触发</td><td>-</td></tr><tr><td>plus</td><td>点击增加按钮时触发</td><td>-</td></tr><tr><td>minus</td><td>点击减少按钮时触发</td><td>-</td></tr><tr><td>focus</td><td>输入框聚焦时触发</td><td><em>event: Event</em></td></tr><tr><td>blur</td><td>输入框失焦时触发</td><td><em>event: Event</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">StepperTheme</span>, <span class="hljs-title class_">StepperProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-stepper-background</td><td><em>var(--van-active-color)</em></td><td>-</td></tr><tr><td>--van-stepper-button-icon-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-stepper-button-disabled-color</td><td><em>var(--van-background)</em></td><td>-</td></tr><tr><td>--van-stepper-button-disabled-icon-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-stepper-button-round-theme-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-stepper-input-width</td><td><em>32px</em></td><td>-</td></tr><tr><td>--van-stepper-input-height</td><td><em>28px</em></td><td>-</td></tr><tr><td>--van-stepper-input-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-stepper-input-line-height</td><td><em>normal</em></td><td>-</td></tr><tr><td>--van-stepper-input-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-stepper-input-disabled-text-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-stepper-input-disabled-background</td><td><em>var(--van-active-color)</em></td><td>-</td></tr><tr><td>--van-stepper-radius</td><td><em>var(--van-radius-md)</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="wei-shi-me-value-you-shi-hou-hui-bian-cheng-string-lei-xing" tabindex="-1">为什么 value 有时候会变成 string 类型？</h3><p>这是因为用户输入过程中可能出现小数点或空值，比如 <code>1.</code>，这种情况下组件会抛出字符串类型。</p><p>如果希望 value 保持 number 类型，可以在 v-model 上添加 <code>number</code> 修饰符：</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-stepper</span> <span class="hljs-attr">v-model.number</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
</code></pre></div>`,22),l=[n],h={__name:"README.zh-CN",setup(p,{expose:s}){return s({frontmatter:{}}),(o,c)=>(t(),a("div",d,l))}};export{h as default};
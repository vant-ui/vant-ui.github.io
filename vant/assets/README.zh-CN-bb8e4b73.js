import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as t}from"./vue-libs-19c20d28.js";const l={},p={class:"van-doc-markdown-body"},e=t(`<h1>Barrage 弹幕</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>实现观看视频时弹出的评论性字幕功能。请升级 <code>vant</code> 到 &gt;= 4.4.0 版本来使用该组件。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Barrage</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Barrage</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>可以通过 <code>v-model</code> 双向绑定弹幕数据，<code>Barrage</code> 会在组件区域内播放文字弹幕，使用数组数据 <code>push()</code> 可以发送弹幕文字。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-barrage</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;list&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;video&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 100%; height: 150px&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-barrage</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-space</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-top: 10px&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;add&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span> 弹幕 <span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-space</span>&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> defaultList = [
      { <span class="hljs-attr">id</span>: <span class="hljs-number">100</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;轻量&#39;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">101</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;可定制的&#39;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">102</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;移动端&#39;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">103</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Vue&#39;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">104</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;组件库&#39;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">105</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;VantUI&#39;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">106</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;666&#39;</span> },
    ];

    <span class="hljs-keyword">const</span> list = <span class="hljs-title function_">ref</span>([...defaultList]);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">add</span> = (<span class="hljs-params"></span>) =&gt; {
      list.<span class="hljs-property">value</span>.<span class="hljs-title function_">push</span>({ <span class="hljs-attr">id</span>: <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>(), <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Barrage&#39;</span> });
    };

    <span class="hljs-keyword">return</span> { list, add };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="mo-ni-shi-pin-dan-mu" tabindex="-1">模拟视频弹幕</h3><p>设置 <code>auto-play</code> 为 <code>false</code> 属性后，需要使用 <code>play()</code> 进行弹幕播放，暂停可以使用 <code>pause()</code> 实现。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-barrage</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;list&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;barrage&quot;</span> <span class="hljs-attr">:auto-play</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;video&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 100%; height: 150px&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-barrage</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-space</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-top: 10px&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;add&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;!isPlay&quot;</span>&gt;</span>
    弹幕
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggle()&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>
    {{ isPlay ? &#39;暂停&#39; : &#39;开始&#39; }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-space</span>&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> defaultList = [
      { <span class="hljs-attr">id</span>: <span class="hljs-number">100</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;轻量&#39;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">101</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;可定制的&#39;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">102</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;移动端&#39;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">103</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Vue&#39;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">104</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;组件库&#39;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">105</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;VantUI&#39;</span> },
      { <span class="hljs-attr">id</span>: <span class="hljs-number">106</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;666&#39;</span> },
    ];

    <span class="hljs-keyword">const</span> list = <span class="hljs-title function_">ref</span>([...defaultList]);
    <span class="hljs-keyword">const</span> barrage = ref&lt;<span class="hljs-title class_">BarrageInstance</span>&gt;();
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">add</span> = (<span class="hljs-params"></span>) =&gt; {
      list.<span class="hljs-property">value</span>.<span class="hljs-title function_">push</span>({ <span class="hljs-attr">id</span>: <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>(), <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Barrage&#39;</span> });
    };

    <span class="hljs-keyword">const</span> [isPlay, toggle] = <span class="hljs-title function_">useToggle</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-title function_">watch</span>(isPlay, <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">if</span> (isPlay.<span class="hljs-property">value</span>) barrage.<span class="hljs-property">value</span>?.<span class="hljs-title function_">play</span>();
      <span class="hljs-keyword">else</span> barrage.<span class="hljs-property">value</span>?.<span class="hljs-title function_">pause</span>();
    });

    <span class="hljs-keyword">return</span> { list, barrage, isPlay, toggle, add };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>弹幕数据</td><td><em>BarrageItem[]</em></td><td>-</td></tr><tr><td>auto-play</td><td>是否自动播放弹幕</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>rows</td><td>弹幕文字行数</td><td><em>number | string</em></td><td><code>4</code></td></tr><tr><td>top</td><td>弹幕文字区域顶部间距，单位 <code>px</code></td><td><em>number | string</em></td><td><code>10</code></td></tr><tr><td>duration</td><td>弹幕文字滑过容器的时间，单位 <code>ms</code></td><td><em>number | string</em></td><td><code>4000</code></td></tr><tr><td>delay</td><td>弹幕动画延时，单位 <code>ms</code></td><td><em>number</em></td><td><code>300</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">方法</h3><p>通过 ref 可以获取到 Barrage 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>play</td><td>播放弹幕</td><td>-</td><td>-</td></tr><tr><td>pause</td><td>暂停弹幕</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>弹幕组件子元素</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">BarrageProps</span>, <span class="hljs-title class_">BarrageItem</span>, <span class="hljs-title class_">BarrageInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-barrage-font-size</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-barrage-space</td><td><em>10px</em></td><td>-</td></tr><tr><td>--van-barrage-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-barrage-font</td><td><em>inherit</em></td><td>-</td></tr></tbody></table></div>`,13),c=[e];function r(d,h){return a(),n("div",p,c)}const j=s(l,[["render",r]]);export{j as default};

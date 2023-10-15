import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as l}from"./vue-libs-19c20d28.js";const t={},p={class:"van-doc-markdown-body"},c=l(`<h1>内置样式</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>Vant 中默认包含了一些常用样式，可以直接通过 className 的方式使用。</p></div><div class="van-doc-card"><h3 id="wen-zi-sheng-lue" tabindex="-1">文字省略</h3><p>当文本内容长度超过容器最大宽度时，自动省略多余的文本。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 最多显示一行 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-ellipsis&quot;</span>&gt;</span>这是一段最多显示一行的文字，多余的内容会被省略<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 最多显示两行 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-multi-ellipsis--l2&quot;</span>&gt;</span>
  这是一段最多显示两行的文字，多余的内容会被省略
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 最多显示三行 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-multi-ellipsis--l3&quot;</span>&gt;</span>
  这是一段最多显示三行的文字，多余的内容会被省略
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="1px-bian-kuang" tabindex="-1">1px 边框</h3><p>为元素添加 Retina 屏幕下的 1px 边框（即 hairline），基于伪类 transform 实现。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 上边框 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-hairline--top&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 下边框 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-hairline--bottom&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 左边框 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-hairline--left&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 右边框 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-hairline--right&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 上下边框 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-hairline--top-bottom&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 全边框 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-hairline--surround&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="an-quan-qu" tabindex="-1">安全区</h3><p>为元素添加安全区适配。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 顶部安全区 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-safe-area-top&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 底部安全区 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-safe-area-bottom&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="dong-hua" tabindex="-1">动画</h3><p>可以通过 <code>transition</code> 组件使用内置的动画类。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 淡入 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">transition</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;van-fade&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;visible&quot;</span>&gt;</span>Fade<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">transition</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 上滑进入 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">transition</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;van-slide-up&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;visible&quot;</span>&gt;</span>Slide Up<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">transition</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 下滑进入 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">transition</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;van-slide-down&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;visible&quot;</span>&gt;</span>Slide Down<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">transition</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 左滑进入 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">transition</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;van-slide-left&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;visible&quot;</span>&gt;</span>Slide Left<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">transition</span>&gt;</span>

<span class="hljs-comment">&lt;!-- 右滑进入 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">transition</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;van-slide-right&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;visible&quot;</span>&gt;</span>Slide Right<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">transition</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="chu-peng-fan-kui" tabindex="-1">触碰反馈</h3><p>为元素添加触碰反馈效果，触碰后，元素的透明度会降低。</p><p>通常用于按钮等可点击的元素上。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-haptics-feedback&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="qing-chu-fu-dong" tabindex="-1">清除浮动</h3><p>清除元素在 float 布局下的浮动，</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-clearfix&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre></div>`,8),h=[c];function i(e,j){return a(),n("div",p,h)}const d=s(t,[["render",i]]);export{d as default};

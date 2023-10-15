import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as l}from"./vue-libs-19c20d28.js";const t={},e={class:"van-doc-markdown-body"},c=l(`<h1>Checkbox 复选框</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>在一组备选项中进行多选。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Checkbox</span>, <span class="hljs-title class_">CheckboxGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Checkbox</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CheckboxGroup</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>通过 <code>v-model</code> 绑定复选框的勾选状态。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>复选框<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">return</span> { checked };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-zhuang-tai" tabindex="-1">禁用状态</h3><p>通过设置 <code>disabled</code> 属性可以禁用复选框。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>复选框<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-xing-zhuang" tabindex="-1">自定义形状</h3><p>将 <code>shape</code> 属性设置为 <code>square</code>，复选框的形状会变成方形。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>复选框 a<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>复选框 b<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;a&#39;</span>, <span class="hljs-string">&#39;b&#39;</span>]);
    <span class="hljs-keyword">return</span> { checked };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yan-se" tabindex="-1">自定义颜色</h3><p>通过 <code>checked-color</code> 属性设置选中状态的图标颜色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">checked-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>&gt;</span>复选框<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-da-xiao" tabindex="-1">自定义大小</h3><p>通过 <code>icon-size</code> 属性可以自定义图标的大小。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">icon-size</span>=<span class="hljs-string">&quot;24px&quot;</span>&gt;</span>复选框<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-tu-biao" tabindex="-1">自定义图标</h3><p>通过 <code>icon</code> 插槽自定义图标，可以通过 <code>slotProps</code> 判断是否为选中状态.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  自定义图标
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;props&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;img-icon&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;props.checked ? activeIcon : inactiveIcon&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.img-icon</span> {
    <span class="hljs-attribute">height</span>: <span class="hljs-number">20px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">return</span> {
      checked,
      <span class="hljs-attr">activeIcon</span>:
        <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png&#39;</span>,
      <span class="hljs-attr">inactiveIcon</span>:
        <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png&#39;</span>,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zuo-ce-wen-ben" tabindex="-1">左侧文本</h3><p>将 <code>label-position</code> 属性设置为 <code>&#39;left&#39;</code>，可以将文本位置调整到复选框左侧。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">label-position</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>复选框<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-wen-ben-dian-ji" tabindex="-1">禁用文本点击</h3><p>设置 <code>label-disabled</code> 属性后，点击图标以外的内容不会触发复选框切换。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">label-disabled</span>&gt;</span>复选框<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="fu-xuan-kuang-zu" tabindex="-1">复选框组</h3><p>复选框可以与复选框组一起使用，复选框组通过 <code>v-model</code> 数组绑定复选框的勾选状态。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>复选框 a<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>复选框 b<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;a&#39;</span>, <span class="hljs-string">&#39;b&#39;</span>]);
    <span class="hljs-keyword">return</span> { checked };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="shui-ping-pai-lie" tabindex="-1">水平排列</h3><p>将 <code>direction</code> 属性设置为 <code>horizontal</code> 后，复选框组会变成水平排列。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>复选框 a<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>复选框 b<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">return</span> { checked };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xian-zhi-zui-da-ke-xuan-shu" tabindex="-1">限制最大可选数</h3><p>通过 <code>max</code> 属性可以限制复选框组的最大可选数。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>复选框 a<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>复选框 b<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;c&quot;</span>&gt;</span>复选框 c<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="quan-xuan-yu-fan-xuan" tabindex="-1">全选与反选</h3><p>通过 <code>CheckboxGroup</code> 实例上的 <code>toggleAll</code> 方法可以实现全选与反选。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;checkboxGroup&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>复选框 a<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>复选框 b<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;c&quot;</span>&gt;</span>复选框 c<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;checkAll&quot;</span>&gt;</span>全选<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleAll&quot;</span>&gt;</span>反选<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">const</span> checkboxGroup = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">checkAll</span> = (<span class="hljs-params"></span>) =&gt; {
      checkboxGroup.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>(<span class="hljs-literal">true</span>);
    }
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">toggleAll</span> = (<span class="hljs-params"></span>) =&gt; {
      checkboxGroup.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>();
    },

    <span class="hljs-keyword">return</span> {
      checked,
      checkAll,
      toggleAll,
      checkboxGroup,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="da-pei-dan-yuan-ge-zu-jian-shi-yong" tabindex="-1">搭配单元格组件使用</h3><p>搭配单元格组件使用时，需要再引入 <code>Cell</code> 和 <code>CellGroup</code> 组件，并通过 <code>Checkbox</code> 实例上的 toggle 方法触发切换。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span>
      <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) in list&quot;</span>
      <span class="hljs-attr">clickable</span>
      <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>
      <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;\`复选框 \${item}\`&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggle(index)&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span>
          <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;item&quot;</span>
          <span class="hljs-attr">:ref</span>=<span class="hljs-string">&quot;el =&gt; checkboxRefs[index] = el&quot;</span>
          @<span class="hljs-attr">click.stop</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, onBeforeUpdate } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">const</span> checkboxRefs = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">toggle</span> = (<span class="hljs-params">index</span>) =&gt; {
      checkboxRefs.<span class="hljs-property">value</span>[index].<span class="hljs-title function_">toggle</span>();
    };

    <span class="hljs-title function_">onBeforeUpdate</span>(<span class="hljs-function">() =&gt;</span> {
      checkboxRefs.<span class="hljs-property">value</span> = [];
    });

    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">list</span>: [<span class="hljs-string">&#39;a&#39;</span>, <span class="hljs-string">&#39;b&#39;</span>],
      toggle,
      checked,
      checkboxRefs,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="bu-que-ding-zhuang-tai" tabindex="-1">不确定状态</h3><p>通过 <code>indeterminate</code> 设置复选框是否为不确定状态。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;isCheckAll&quot;</span>
  <span class="hljs-attr">:indeterminate</span>=<span class="hljs-string">&quot;isIndeterminate&quot;</span>
  @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;checkAllChange&quot;</span>
&gt;</span>
  全选
<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkedResult&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;checkedResultChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;item&quot;</span>&gt;</span>
    复选框 {{ item }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> list = [<span class="hljs-string">&#39;a&#39;</span>, <span class="hljs-string">&#39;b&#39;</span>, <span class="hljs-string">&#39;c&#39;</span>, <span class="hljs-string">&#39;d&#39;</span>]

    <span class="hljs-keyword">const</span> isCheckAll = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> checkedResult = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;a&#39;</span>, <span class="hljs-string">&#39;b&#39;</span>, <span class="hljs-string">&#39;d&#39;</span>]);
    <span class="hljs-keyword">const</span> isIndeterminate = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">checkAllChange</span> = (<span class="hljs-params">val: boolean</span>) =&gt; {
      checkedResult.<span class="hljs-property">value</span> = val ? list : []
      isIndeterminate.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>
    }

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">checkedResultChange</span> = (<span class="hljs-params">value: string[]</span>) =&gt; {
      <span class="hljs-keyword">const</span> checkedCount = value.<span class="hljs-property">length</span>
      isCheckAll.<span class="hljs-property">value</span> = checkedCount === list.<span class="hljs-property">length</span>
      isIndeterminate.<span class="hljs-property">value</span> = checkedCount &gt; <span class="hljs-number">0</span> &amp;&amp; checkedCount &lt; list.<span class="hljs-property">length</span>
    }

    <span class="hljs-keyword">return</span> {
      list,
      isCheckAll,
      checkedResult,
      checkAllChange,
      isIndeterminate,
      checkedResultChange
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="checkbox-props" tabindex="-1">Checkbox Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>是否为选中状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>name</td><td>标识符，通常为一个唯一的字符串或数字</td><td><em>any</em></td><td>-</td></tr><tr><td>shape</td><td>形状，可选值为 <code>square</code></td><td><em>string</em></td><td><code>round</code></td></tr><tr><td>disabled</td><td>是否禁用复选框</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>label-disabled</td><td>是否禁用复选框文本点击</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>label-position</td><td>文本位置，可选值为 <code>left</code></td><td><em>string</em></td><td><code>right</code></td></tr><tr><td>icon-size</td><td>图标大小，默认单位为 <code>px</code></td><td><em>number | string</em></td><td><code>20px</code></td></tr><tr><td>checked-color</td><td>选中状态颜色</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>bind-group</td><td>是否与复选框组绑定</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>indeterminate</td><td>是否为不确定状态</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="checkboxgroup-props" tabindex="-1">CheckboxGroup Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>所有选中项的标识符</td><td><em>any[]</em></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用所有复选框</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>max</td><td>最大可选数，<code>0</code> 为无限制</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>direction</td><td>排列方向，可选值为 <code>horizontal</code></td><td><em>string</em></td><td><code>vertical</code></td></tr><tr><td>icon-size</td><td>所有复选框的图标大小，默认单位为 <code>px</code></td><td><em>number | string</em></td><td><code>20px</code></td></tr><tr><td>checked-color</td><td>所有复选框的选中状态颜色</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>shape <code>v4.6.3</code></td><td>形状，可选值为 <code>square</code></td><td><em>string</em></td><td><code>round</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="checkbox-events" tabindex="-1">Checkbox Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>当绑定值变化时触发的事件</td><td><em>checked: boolean</em></td></tr><tr><td>click</td><td>点击复选框时触发</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="checkboxgroup-events" tabindex="-1">CheckboxGroup Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>当绑定值变化时触发的事件</td><td><em>names: any[]</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="checkbox-slots" tabindex="-1">Checkbox Slots</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>default</td><td>自定义文本</td><td>-</td></tr><tr><td>icon</td><td>自定义图标</td><td><em>{ checked: boolean, disabled: boolean }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="checkboxgroup-fang-fa" tabindex="-1">CheckboxGroup 方法</h3><p>通过 ref 可以获取到 CheckboxGroup 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>toggleAll</td><td>切换所有复选框，传 <code>true</code> 为选中，<code>false</code> 为取消选中，不传参为取反</td><td><em>options?: boolean | object</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="toggleall-fang-fa-shi-li" tabindex="-1">toggleAll 方法示例</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> type { <span class="hljs-title class_">CheckboxGroupInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> checkboxGroupRef = ref&lt;<span class="hljs-title class_">CheckboxGroupInstance</span>&gt;();

<span class="hljs-comment">// 全部反选</span>
checkboxGroupRef?.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>();
<span class="hljs-comment">// 全部选中</span>
checkboxGroupRef?.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>(<span class="hljs-literal">true</span>);
<span class="hljs-comment">// 全部取消</span>
checkboxGroupRef?.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>(<span class="hljs-literal">false</span>);

<span class="hljs-comment">// 全部反选，并跳过禁用的复选框</span>
checkboxGroupRef?.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>({
  <span class="hljs-attr">skipDisabled</span>: <span class="hljs-literal">true</span>,
});
<span class="hljs-comment">// 全部选中，并跳过禁用的复选框</span>
checkboxGroupRef?.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>({
  <span class="hljs-attr">checked</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">skipDisabled</span>: <span class="hljs-literal">true</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="checkbox-fang-fa" tabindex="-1">Checkbox 方法</h3><p>通过 ref 可以获取到 Checkbox 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>toggle</td><td>切换选中状态，传 <code>true</code> 为选中，<code>false</code> 为取消选中，不传参为取反</td><td><em>checked?: boolean</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">CheckboxProps</span>,
  <span class="hljs-title class_">CheckboxShape</span>,
  <span class="hljs-title class_">CheckboxInstance</span>,
  <span class="hljs-title class_">CheckboxLabelPosition</span>,
  <span class="hljs-title class_">CheckboxGroupProps</span>,
  <span class="hljs-title class_">CheckboxGroupInstance</span>,
  <span class="hljs-title class_">CheckboxGroupDirection</span>,
  <span class="hljs-title class_">CheckboxGroupToggleAllOptions</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>CheckboxInstance</code> 和 <code>CheckboxGroupInstance</code> 是组件实例的类型，用法如下：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CheckboxInstance</span>, <span class="hljs-title class_">CheckboxGroupInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> checkboxRef = ref&lt;<span class="hljs-title class_">CheckboxInstance</span>&gt;();
<span class="hljs-keyword">const</span> checkboxGroupRef = ref&lt;<span class="hljs-title class_">CheckboxGroupInstance</span>&gt;();

checkboxRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggle</span>();
checkboxGroupRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>();
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-checkbox-size</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-checkbox-border-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-checkbox-duration</td><td><em>var(--van-duration-fast)</em></td><td>-</td></tr><tr><td>--van-checkbox-label-margin</td><td><em>var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-checkbox-label-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-checkbox-checked-icon-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-checkbox-disabled-icon-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-checkbox-disabled-label-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-checkbox-disabled-background</td><td><em>var(--van-border-color)</em></td><td>-</td></tr></tbody></table></div>`,30),p=[c];function o(h,d){return a(),n("div",e,p)}const j=s(t,[["render",o]]);export{j as default};

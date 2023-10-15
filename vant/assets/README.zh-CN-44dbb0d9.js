import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as t}from"./vue-libs-19c20d28.js";const l={},p={class:"van-doc-markdown-body"},e=t(`<h1>Picker 选择器</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>提供多个选项集合供用户选择，支持单列选择、多列选择和级联选择，通常与<a href="#/zh-CN/popup" target="_blank">弹出层</a>组件配合使用。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Picker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Picker</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><h4 id="xuan-xiang-pei-zhi" tabindex="-1">选项配置</h4><p>Picker 组件通过 <code>columns</code> 属性配置选项数据，<code>columns</code> 是一个包含字符串或对象的数组。</p><h4 id="ding-bu-lan" tabindex="-1">顶部栏</h4><p>顶部栏包含标题、确认按钮和取消按钮，点击确认按钮触发 <code>confirm</code> 事件，点击取消按钮触发 <code>cancel</code> 事件。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span>
  <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>
  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>
  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>
  @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> columns = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;杭州&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Hangzhou&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;宁波&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Ningbo&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;温州&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Wenzhou&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;绍兴&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Shaoxing&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;湖州&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Huzhou&#39;</span> },
    ];
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">{ selectedValues }</span>) =&gt; {
      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">\`当前值: <span class="hljs-subst">\${selectedValues.join(<span class="hljs-string">&#39;,&#39;</span>)}</span>\`</span>);
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">{ selectedValues }</span>) =&gt; {
      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">\`当前值: <span class="hljs-subst">\${selectedValues.join(<span class="hljs-string">&#39;,&#39;</span>)}</span>\`</span>);
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onCancel</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;取消&#39;</span>);

    <span class="hljs-keyword">return</span> {
      columns,
      onChange,
      onCancel,
      onConfirm,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="da-pei-dan-chu-ceng-shi-yong" tabindex="-1">搭配弹出层使用</h3><p>在实际场景中，Picker 通常作为用于辅助表单填写，可以搭配 Popup 和 Field 实现该效果。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fieldValue&quot;</span>
  <span class="hljs-attr">is-link</span>
  <span class="hljs-attr">readonly</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;城市&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;选择城市&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showPicker = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPicker&quot;</span> <span class="hljs-attr">round</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span>
    <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>
    @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;showPicker = false&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> columns = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;杭州&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Hangzhou&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;宁波&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Ningbo&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;温州&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Wenzhou&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;绍兴&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Shaoxing&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;湖州&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Huzhou&#39;</span> },
    ];
    <span class="hljs-keyword">const</span> fieldValue = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> showPicker = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">{ selectedOptions }</span>) =&gt; {
      showPicker.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      fieldValue.<span class="hljs-property">value</span> = selectedOptions[<span class="hljs-number">0</span>].<span class="hljs-property">text</span>;
    };

    <span class="hljs-keyword">return</span> {
      columns,
      onConfirm,
      fieldValue,
      showPicker,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="shuang-xiang-bang-ding" tabindex="-1">双向绑定</h3><p>通过 <code>v-model</code> 可以绑定当前选中项的 <code>values</code>，修改 <code>v-model</code> 绑定的值时，Picker 的选中状态也会随之改变。</p><p><code>v-model</code> 的值是一个数组，数组的第一位对应第一列选中项的 <code>value</code>，第二位对应第二列选中项的 <code>value</code>，以此类推。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;selectedValues&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> columns = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;杭州&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Hangzhou&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;宁波&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Ningbo&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;温州&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Wenzhou&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;绍兴&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Shaoxing&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;湖州&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Huzhou&#39;</span> },
    ];
    <span class="hljs-keyword">const</span> selectedValues = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;Wenzhou&#39;</span>]);

    <span class="hljs-keyword">return</span> {
      columns,
      selectedValues,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="duo-lie-xuan-ze" tabindex="-1">多列选择</h3><p><code>columns</code> 属性可以通过二维数组的形式配置多列选择。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> columns = [
      <span class="hljs-comment">// 第一列</span>
      [
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;周一&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Monday&#39;</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;周二&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Tuesday&#39;</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;周三&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Wednesday&#39;</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;周四&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Thursday&#39;</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;周五&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Friday&#39;</span> },
      ],
      <span class="hljs-comment">// 第二列</span>
      [
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;上午&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Morning&#39;</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;下午&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Afternoon&#39;</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;晚上&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Evening&#39;</span> },
      ],
    ];

    <span class="hljs-keyword">return</span> { columns };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="ji-lian-xuan-ze" tabindex="-1">级联选择</h3><p>使用 <code>columns</code> 的 <code>children</code> 字段可以实现选项级联的效果。如果级联层级较多，推荐使用 <a href="#/zh-CN/cascader" target="_blank">Cascader 级联选项组件</a>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> columns = [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;浙江&#39;</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Zhejiang&#39;</span>,
        <span class="hljs-attr">children</span>: [
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;杭州&#39;</span>,
            <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Hangzhou&#39;</span>,
            <span class="hljs-attr">children</span>: [
              { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;西湖区&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Xihu&#39;</span> },
              { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;余杭区&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Yuhang&#39;</span> },
            ],
          },
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;温州&#39;</span>,
            <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Wenzhou&#39;</span>,
            <span class="hljs-attr">children</span>: [
              { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;鹿城区&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Lucheng&#39;</span> },
              { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;瓯海区&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Ouhai&#39;</span> },
            ],
          },
        ],
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;福建&#39;</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Fujian&#39;</span>,
        <span class="hljs-attr">children</span>: [
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;福州&#39;</span>,
            <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Fuzhou&#39;</span>,
            <span class="hljs-attr">children</span>: [
              { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;鼓楼区&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Gulou&#39;</span> },
              { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;台江区&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Taijiang&#39;</span> },
            ],
          },
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;厦门&#39;</span>,
            <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Xiamen&#39;</span>,
            <span class="hljs-attr">children</span>: [
              { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;思明区&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Siming&#39;</span> },
              { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;海沧区&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Haicang&#39;</span> },
            ],
          },
        ],
      },
    ];

    <span class="hljs-keyword">return</span> { columns };
  },
};
</code></pre><blockquote><p>级联选择的数据嵌套深度需要保持一致，如果部分选项没有子选项，可以使用空字符串进行占位。</p></blockquote></div><div class="van-doc-card"><h3 id="jin-yong-xuan-xiang" tabindex="-1">禁用选项</h3><p>选项可以为对象结构，通过设置 <code>disabled</code> 来禁用该选项。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> columns = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;杭州&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Hangzhou&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;宁波&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Ningbo&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;温州&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Wenzhou&#39;</span> },
    ];
    <span class="hljs-keyword">return</span> { columns };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="jia-zai-zhuang-tai" tabindex="-1">加载状态</h3><p>若选择器数据是异步获取的，可以通过 <code>loading</code> 属性显示加载提示。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> columns = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">const</span> loading = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);

    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      columns.<span class="hljs-property">value</span> = [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;选项&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;option&#39;</span> }];
      loading.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
    }, <span class="hljs-number">1000</span>);

    <span class="hljs-keyword">return</span> { columns, loading };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-columns-de-jie-gou" tabindex="-1">自定义 Columns 的结构</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span>
  <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;标题&quot;</span>
  <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>
  <span class="hljs-attr">:columns-field-names</span>=<span class="hljs-string">&quot;customFieldName&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> columns = [
      {
        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;浙江&#39;</span>,
        <span class="hljs-attr">cities</span>: [
          {
            <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;杭州&#39;</span>,
            <span class="hljs-attr">cities</span>: [{ <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;西湖区&#39;</span> }, { <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;余杭区&#39;</span> }],
          },
          {
            <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;温州&#39;</span>,
            <span class="hljs-attr">cities</span>: [{ <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;鹿城区&#39;</span> }, { <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;瓯海区&#39;</span> }],
          },
        ],
      },
      {
        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;福建&#39;</span>,
        <span class="hljs-attr">cities</span>: [
          {
            <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;福州&#39;</span>,
            <span class="hljs-attr">cities</span>: [{ <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;鼓楼区&#39;</span> }, { <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;台江区&#39;</span> }],
          },
          {
            <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;厦门&#39;</span>,
            <span class="hljs-attr">cities</span>: [{ <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;思明区&#39;</span> }, { <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;海沧区&#39;</span> }],
          },
        ],
      },
    ];

    <span class="hljs-keyword">const</span> customFieldName = {
      <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;cityName&#39;</span>,
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;cityName&#39;</span>,
      <span class="hljs-attr">children</span>: <span class="hljs-string">&#39;cities&#39;</span>,
    };

    <span class="hljs-keyword">return</span> {
      columns,
      customFieldName,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前选中项对应的值</td><td><em>number[] | string[]</em></td><td>-</td></tr><tr><td>columns</td><td>对象数组，配置每一列显示的数据</td><td><em>PickerOption[] | PickerOption[][]</em></td><td><code>[]</code></td></tr><tr><td>columns-field-names</td><td>自定义 <code>columns</code> 结构中的字段</td><td><em>object</em></td><td><code>{ text: &#39;text&#39;, value: &#39;value&#39;, children: &#39;children&#39; }</code></td></tr><tr><td>title</td><td>顶部栏标题</td><td><em>string</em></td><td>-</td></tr><tr><td>confirm-button-text</td><td>确认按钮文字</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td>cancel-button-text</td><td>取消按钮文字</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td>toolbar-position</td><td>顶部栏位置，可选值为 <code>bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td>loading</td><td>是否显示加载状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly</td><td>是否为只读状态，只读状态下无法切换选项</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-toolbar</td><td>是否显示顶部栏</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>allow-html</td><td>是否允许选项内容中渲染 HTML</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>option-height</td><td>选项高度，支持 <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> 单位，默认 <code>px</code></td><td><em>number | string</em></td><td><code>44</code></td></tr><tr><td>visible-option-num</td><td>可见的选项个数</td><td><em>number | string</em></td><td><code>6</code></td></tr><tr><td>swipe-duration</td><td>快速滑动时惯性滚动的时长，单位 <code>ms</code></td><td><em>number | string</em></td><td><code>1000</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>confirm</td><td>点击完成按钮时触发</td><td><em>{ selectedValues, selectedOptions, selectedIndexes }</em></td></tr><tr><td>cancel</td><td>点击取消按钮时触发</td><td><em>{ selectedValues, selectedOptions, selectedIndexes }</em></td></tr><tr><td>change</td><td>选中的选项改变时触发</td><td><em>{ selectedValues, selectedOptions, selectedIndexes, columnIndex }</em></td></tr><tr><td>click-option</td><td>点击选项时触发</td><td><em>{ currentOption, selectedValues, selectedOptions, selectedIndexes, columnIndex }</em></td></tr><tr><td>scroll-into <code>v4.2.1</code></td><td>当用户通过点击或拖拽让一个选项滚动到中间的选择区域时触发</td><td><em>{ currentOption, columnIndex }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>toolbar</td><td>自定义整个顶部栏的内容</td><td>-</td></tr><tr><td>title</td><td>自定义标题内容</td><td>-</td></tr><tr><td>confirm</td><td>自定义确认按钮内容</td><td>-</td></tr><tr><td>cancel</td><td>自定义取消按钮内容</td><td>-</td></tr><tr><td>option</td><td>自定义选项内容</td><td><em>option: PickerOption, index: number</em></td></tr><tr><td>columns-top</td><td>自定义选项上方内容</td><td>-</td></tr><tr><td>columns-bottom</td><td>自定义选项下方内容</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="pickeroption-shu-ju-jie-gou" tabindex="-1">PickerOption 数据结构</h3><table><thead><tr><th>键名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>text</td><td>选项文字内容</td><td><em>string | number</em></td></tr><tr><td>value</td><td>选项对应的值</td><td><em>string | number</em></td></tr><tr><td>disabled</td><td>是否禁用选项</td><td><em>boolean</em></td></tr><tr><td>children</td><td>级联选项</td><td><em>PickerOption[]</em></td></tr><tr><td>className</td><td>选项额外类名</td><td><em>string | Array | object</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">方法</h3><p>通过 ref 可以获取到 Picker 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>confirm</td><td>停止惯性滚动并触发 <code>confirm</code> 事件</td><td>-</td><td>-</td></tr><tr><td>getSelectedOptions</td><td>获取当前选中的选项</td><td>-</td><td><em>(PickerOption | undefined)[]</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">PickerProps</span>,
  <span class="hljs-title class_">PickerColumn</span>,
  <span class="hljs-title class_">PickerOption</span>,
  <span class="hljs-title class_">PickerInstance</span>,
  <span class="hljs-title class_">PickerFieldNames</span>,
  <span class="hljs-title class_">PickerToolbarPosition</span>,
  <span class="hljs-title class_">PickerCancelEventParams</span>,
  <span class="hljs-title class_">PickerChangeEventParams</span>,
  <span class="hljs-title class_">PickerConfirmEventParams</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>PickerInstance</code> 是组件实例的类型，用法如下：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">PickerInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> pickerRef = ref&lt;<span class="hljs-title class_">PickerInstance</span>&gt;();

pickerRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">confirm</span>();
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-picker-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-picker-toolbar-height</td><td><em>44px</em></td><td>-</td></tr><tr><td>--van-picker-title-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-picker-title-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-picker-action-padding</td><td><em>0 var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-picker-action-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-picker-confirm-action-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-picker-cancel-action-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-picker-option-padding</td><td><em>0 var(--van-padding-base)</em></td><td>-</td></tr><tr><td>--van-picker-option-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-picker-option-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-picker-option-disabled-opacity</td><td><em>0.3</em></td><td>-</td></tr><tr><td>--van-picker-mask-color</td><td><em>linear-gradient</em></td><td>-</td></tr><tr><td>--van-picker-loading-icon-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-picker-loading-mask-color</td><td><em>rgba(255, 255, 255, 0.9)</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="zai-zhuo-mian-duan-wu-fa-cao-zuo-zu-jian" tabindex="-1">在桌面端无法操作组件？</h3><p>参见<a href="#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei" target="_blank">桌面端适配</a>。</p></div>`,23),c=[e];function r(d,o){return a(),n("div",p,c)}const j=s(l,[["render",r]]);export{j as default};

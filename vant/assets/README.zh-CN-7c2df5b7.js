import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as t}from"./vue-libs-19c20d28.js";const l={},p={class:"van-doc-markdown-body"},e=t(`<h1>Cascader 级联选择</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>级联选择框，用于多层级数据的选择，典型场景为省市区选择。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Cascader</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Cascader</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>级联选择组件可以搭配 Field 和 Popup 组件使用，示例如下：</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fieldValue&quot;</span>
  <span class="hljs-attr">is-link</span>
  <span class="hljs-attr">readonly</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;地区&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择所在地区&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">round</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cascader</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;cascaderValue&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;请选择所在地区&quot;</span>
    <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;show = false&quot;</span>
    @<span class="hljs-attr">finish</span>=<span class="hljs-string">&quot;onFinish&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> fieldValue = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> cascaderValue = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-comment">// 选项列表，children 代表子选项，支持多级嵌套</span>
    <span class="hljs-keyword">const</span> options = [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;浙江省&#39;</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;330000&#39;</span>,
        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;杭州市&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;330100&#39;</span> }],
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;江苏省&#39;</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;320000&#39;</span>,
        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;南京市&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;320100&#39;</span> }],
      },
    ];
    <span class="hljs-comment">// 全部选项选择完毕后，会触发 finish 事件</span>
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onFinish</span> = (<span class="hljs-params">{ selectedOptions }</span>) =&gt; {
      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      fieldValue.<span class="hljs-property">value</span> = selectedOptions.<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> option.<span class="hljs-property">text</span>).<span class="hljs-title function_">join</span>(<span class="hljs-string">&#39;/&#39;</span>);
    };

    <span class="hljs-keyword">return</span> {
      show,
      options,
      onFinish,
      fieldValue,
      cascaderValue,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zhong-guo-sheng-shi-qu-shu-ju" tabindex="-1">中国省市区数据</h3><p>Cascader 组件常用于选择省市区，Vant 提供了一份中国省市区数据，你可以安装 <a href="https://github.com/vant-ui/vant/tree/main/packages/vant-area-data" target="_blank">@vant/area-data</a> npm 包来引入：</p><pre><code class="language-bash"><span class="hljs-comment"># 通过 npm</span>
npm i @vant/area-data

<span class="hljs-comment"># 通过 yarn</span>
yarn add @vant/area-data

<span class="hljs-comment"># 通过 pnpm</span>
pnpm add @vant/area-data

<span class="hljs-comment"># 通过 Bun</span>
bun add @vant/area-data
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fieldValue&quot;</span>
  <span class="hljs-attr">is-link</span>
  <span class="hljs-attr">readonly</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;地区&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择所在地区&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">round</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cascader</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;cascaderValue&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;请选择所在地区&quot;</span>
    <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;show = false&quot;</span>
    @<span class="hljs-attr">finish</span>=<span class="hljs-string">&quot;onFinish&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { useCascaderAreaData } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/area-data&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> fieldValue = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> cascaderValue = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> options = <span class="hljs-title function_">useCascaderAreaData</span>();
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onFinish</span> = (<span class="hljs-params">{ selectedOptions }</span>) =&gt; {
      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      fieldValue.<span class="hljs-property">value</span> = selectedOptions.<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> option.<span class="hljs-property">text</span>).<span class="hljs-title function_">join</span>(<span class="hljs-string">&#39;/&#39;</span>);
    };
    <span class="hljs-keyword">return</span> {
      show,
      options,
      onFinish,
      fieldValue,
      cascaderValue,
    };
  },
};
</code></pre><blockquote><p>Tips: 中国的行政区划每年都会有变动，如果发现省市区数据未及时更新，欢迎提 Pull Request 帮助我们更新。你可以在<a href="http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/" target="_blank">「国家统计局 - 全国区划代码」</a> 和<a href="https://www.mca.gov.cn/article/sj/xzqh/1980/" target="_blank">「民政部 - 行政区划代码」</a>上查询到最新数据，请根据官方数据进行核实。</p></blockquote></div><div class="van-doc-card"><h3 id="zi-ding-yi-yan-se" tabindex="-1">自定义颜色</h3><p>通过 <code>active-color</code> 属性来设置选中状态的高亮颜色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cascader</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;cascaderValue&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;请选择所在地区&quot;</span>
  <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;show = false&quot;</span>
  @<span class="hljs-attr">finish</span>=<span class="hljs-string">&quot;onFinish&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="yi-bu-jia-zai-xuan-xiang" tabindex="-1">异步加载选项</h3><p>可以监听 <code>change</code> 事件并动态设置 <code>options</code>，实现异步加载选项。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fieldValue&quot;</span>
  <span class="hljs-attr">is-link</span>
  <span class="hljs-attr">readonly</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;地区&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择所在地区&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">round</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cascader</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;cascaderValue&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;请选择所在地区&quot;</span>
    <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;show = false&quot;</span>
    @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
    @<span class="hljs-attr">finish</span>=<span class="hljs-string">&quot;onFinish&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { closeToast, showLoadingToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> fieldValue = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> cascaderValue = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> options = <span class="hljs-title function_">ref</span>([
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;浙江省&#39;</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;330000&#39;</span>,
        <span class="hljs-attr">children</span>: [],
      },
    ]);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">{ value }</span>) =&gt; {
      <span class="hljs-keyword">if</span> (
        value === options.<span class="hljs-property">value</span>[<span class="hljs-number">0</span>].<span class="hljs-property">value</span> &amp;&amp;
        options.<span class="hljs-property">value</span>[<span class="hljs-number">0</span>].<span class="hljs-property">children</span>.<span class="hljs-property">length</span> === <span class="hljs-number">0</span>
      ) {
        <span class="hljs-comment">// 模拟数据请求</span>
        <span class="hljs-title function_">showLoadingToast</span>(<span class="hljs-string">&#39;加载中...&#39;</span>);
        <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
          options.<span class="hljs-property">value</span>[<span class="hljs-number">0</span>].<span class="hljs-property">children</span> = [
            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;杭州市&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;330100&#39;</span> },
            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;宁波市&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;330200&#39;</span> },
          ];
          <span class="hljs-title function_">closeToast</span>();
        }, <span class="hljs-number">1000</span>);
      }
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onFinish</span> = (<span class="hljs-params">{ selectedOptions }</span>) =&gt; {
      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      fieldValue.<span class="hljs-property">value</span> = selectedOptions.<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> option.<span class="hljs-property">text</span>).<span class="hljs-title function_">join</span>(<span class="hljs-string">&#39;/&#39;</span>);
    };

    <span class="hljs-keyword">return</span> {
      show,
      options,
      onFinish,
      fieldValue,
      cascaderValue,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-zi-duan-ming" tabindex="-1">自定义字段名</h3><p>通过 <code>field-names</code> 属性可以自定义 <code>options</code> 里的字段名称。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cascader</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;code&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;请选择所在地区&quot;</span>
  <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
  <span class="hljs-attr">:field-names</span>=<span class="hljs-string">&quot;fieldNames&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> code = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> fieldNames = {
      <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;name&#39;</span>,
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;code&#39;</span>,
      <span class="hljs-attr">children</span>: <span class="hljs-string">&#39;items&#39;</span>,
    };
    <span class="hljs-keyword">const</span> options = [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;浙江省&#39;</span>,
        <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;330000&#39;</span>,
        <span class="hljs-attr">items</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;杭州市&#39;</span>, <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;330100&#39;</span> }],
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;江苏省&#39;</span>,
        <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;320000&#39;</span>,
        <span class="hljs-attr">items</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;南京市&#39;</span>, <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;320100&#39;</span> }],
      },
    ];

    <span class="hljs-keyword">return</span> {
      code,
      options,
      fieldNames,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-xuan-xiang-shang-fang-nei-rong" tabindex="-1">自定义选项上方内容</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cascader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;code&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;请选择所在地区&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">options-top</span>=<span class="hljs-string">&quot;{ tabIndex }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;current-level&quot;</span>&gt;</span>当前为第 {{ tabIndex + 1 }} 级<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cascader</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.current-level</span> {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">14px</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">16px</span> <span class="hljs-number">16px</span> <span class="hljs-number">0</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--van-gray-<span class="hljs-number">6</span>);
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> code = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> options = [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;浙江省&#39;</span>,
        <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;330000&#39;</span>,
        <span class="hljs-attr">items</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;杭州市&#39;</span>, <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;330100&#39;</span> }],
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;江苏省&#39;</span>,
        <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;320000&#39;</span>,
        <span class="hljs-attr">items</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;南京市&#39;</span>, <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;320100&#39;</span> }],
      },
    ];

    <span class="hljs-keyword">return</span> {
      code,
      options,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>选中项的值</td><td><em>string | number</em></td><td>-</td></tr><tr><td>title</td><td>顶部标题</td><td><em>string</em></td><td>-</td></tr><tr><td>options</td><td>可选项数据源</td><td><em>CascaderOption[]</em></td><td><code>[]</code></td></tr><tr><td>placeholder</td><td>未选中时的提示文案</td><td><em>string</em></td><td><code>请选择</code></td></tr><tr><td>active-color</td><td>选中状态的高亮颜色</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>swipeable</td><td>是否开启手势左右滑动切换</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>closeable</td><td>是否显示关闭图标</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-header</td><td>是否展示标题栏</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-icon</td><td>关闭图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td><td><em>string</em></td><td><code>cross</code></td></tr><tr><td>field-names</td><td>自定义 <code>options</code> 结构中的字段</td><td><em>CascaderFieldNames</em></td><td><code>{ text: &#39;text&#39;, value: &#39;value&#39;, children: &#39;children&#39; }</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="cascaderoption-shu-ju-jie-gou" tabindex="-1">CascaderOption 数据结构</h3><p><code>options</code> 属性是一个由对象构成的数组，数组中的每个对象配置一个可选项，对象可以包含以下值：</p><table><thead><tr><th>键名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>text</td><td>选项文字（必填）</td><td><em>string</em></td></tr><tr><td>value</td><td>选项对应的值（必填）</td><td><em>string | number</em></td></tr><tr><td>color</td><td>选项文字颜色</td><td><em>string</em></td></tr><tr><td>children</td><td>子选项列表</td><td><em>CascaderOption[]</em></td></tr><tr><td>disabled</td><td>是否禁用选项</td><td><em>boolean</em></td></tr><tr><td>className</td><td>为对应列添加额外的 class</td><td><em>string | Array | object</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>选中项变化时触发</td><td><em>{ value: string | number, selectedOptions: CascaderOption[], tabIndex: number }</em></td></tr><tr><td>finish</td><td>全部选项选择完成后触发</td><td><em>{ value: string | number, selectedOptions: CascaderOption[], tabIndex: number }</em></td></tr><tr><td>close</td><td>点击关闭图标时触发</td><td>-</td></tr><tr><td>click-tab</td><td>点击标签时触发</td><td><em>tabIndex: number, title: string</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>title</td><td>自定义顶部标题</td><td>-</td></tr><tr><td>option</td><td>自定义选项文字</td><td><em>{ option: CascaderOption, selected: boolean }</em></td></tr><tr><td>options-top</td><td>自定义选项上方的内容</td><td><em>{ tabIndex: number }</em></td></tr><tr><td>options-bottom</td><td>自定义选项下方的内容</td><td><em>{ tabIndex: number }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CascaderProps</span>, <span class="hljs-title class_">CascaderOption</span>, <span class="hljs-title class_">CascaderFieldNames</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-cascader-header-height</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-cascader-header-padding</td><td><em>0 var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-cascader-title-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-cascader-title-line-height</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-cascader-close-icon-size</td><td><em>22px</em></td><td>-</td></tr><tr><td>--van-cascader-close-icon-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-cascader-selected-icon-size</td><td><em>18px</em></td><td>-</td></tr><tr><td>--van-cascader-tabs-height</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-cascader-active-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-cascader-options-height</td><td><em>384px</em></td><td>-</td></tr><tr><td>--van-cascader-option-disabled-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-cascader-tab-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-cascader-unselected-tab-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr></tbody></table></div>`,18),c=[e];function r(d,o){return a(),n("div",p,c)}const j=s(l,[["render",r]]);export{j as default};

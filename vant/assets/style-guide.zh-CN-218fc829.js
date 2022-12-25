import{o as a,a as n,z as p}from"./vue-libs-a0ef9506.js";const l={class:"van-doc-markdown-body"},t=p(`<h1>风格指南</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>在参与 Vant 开发时，请遵守约定的单文件组件风格指南，指南内容节选自 <a href="https://v3.cn.vuejs.org/style-guide/" target="_blank">Vue 官方风格指南</a>。</p></div><div class="van-doc-card"><h3 id="zu-jian-shu-ju" tabindex="-1">组件数据</h3><p>组件的 data 必须是一个函数。</p><pre><code class="language-js"><span class="hljs-comment">// bad</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">data</span>: {
    <span class="hljs-attr">foo</span>: <span class="hljs-string">&#39;bar&#39;</span>,
  },
};

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">data</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">foo</span>: <span class="hljs-string">&#39;bar&#39;</span>,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="dan-wen-jian-zu-jian-wen-jian-ming-cheng" tabindex="-1">单文件组件文件名称</h3><p>单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。</p><pre><code>// bad
mycomponent.vue
myComponent.vue

// good
my-component.vue
MyComponent.vue
</code></pre></div><div class="van-doc-card"><h3 id="jin-mi-ou-he-de-zu-jian-ming" tabindex="-1">紧密耦合的组件名</h3><p>和父组件紧密耦合的子组件应该以父组件名作为前缀命名。</p><pre><code>// bad
components/
|- TodoList.vue
|- TodoItem.vue
└─ TodoButton.vue

// good
components/
|- TodoList.vue
|- TodoListItem.vue
└─ TodoListItemButton.vue
</code></pre></div><div class="van-doc-card"><h3 id="zi-bi-he-zu-jian" tabindex="-1">自闭合组件</h3><p>在单文件组件中没有内容的组件应该是自闭合的。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- bad --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">my-component</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">my-component</span>&gt;</span>

<span class="hljs-comment">&lt;!-- good --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">my-component</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="prop-ming-da-xiao-xie" tabindex="-1">Prop 名大小写</h3><p>在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板中应该始终使用 kebab-case。</p><pre><code class="language-js"><span class="hljs-comment">// bad</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">props</span>: {
    <span class="hljs-string">&#39;greeting-text&#39;</span>: <span class="hljs-title class_">String</span>,
  },
};

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">props</span>: {
    <span class="hljs-attr">greetingText</span>: <span class="hljs-title class_">String</span>,
  },
};
</code></pre><pre><code class="language-html"><span class="hljs-comment">&lt;!-- bad --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">welcome-message</span> <span class="hljs-attr">greetingText</span>=<span class="hljs-string">&quot;hi&quot;</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- good --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">welcome-message</span> <span class="hljs-attr">greeting-text</span>=<span class="hljs-string">&quot;hi&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zhi-ling-suo-xie" tabindex="-1">指令缩写</h3><p>指令缩写，用 <code>:</code> 表示 <code>v-bind:</code> ，用 <code>@</code> 表示 <code>v-on:</code></p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- bad --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">v-bind:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">v-on:input</span>=<span class="hljs-string">&quot;onInput&quot;</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- good --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="props-shun-xu" tabindex="-1">Props 顺序</h3><p>标签的 Props 应该有统一的顺序，依次为指令、属性和事件。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">my-component</span>
  <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;if&quot;</span>
  <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;ref&quot;</span>
  <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;key&quot;</span>
  <span class="hljs-attr">:text</span>=<span class="hljs-string">&quot;text&quot;</span>
  @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;onInput&quot;</span>
  @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zu-jian-xuan-xiang-de-shun-xu" tabindex="-1">组件选项的顺序</h3><p>组件选项应该有统一的顺序。</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;&#39;</span>,

  <span class="hljs-attr">components</span>: {},

  <span class="hljs-attr">props</span>: {},

  <span class="hljs-attr">emits</span>: [],

  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {},

  <span class="hljs-title function_">data</span>(<span class="hljs-params"></span>) {},

  <span class="hljs-attr">computed</span>: {},

  <span class="hljs-attr">watch</span>: {},

  <span class="hljs-title function_">created</span>(<span class="hljs-params"></span>) {},

  <span class="hljs-title function_">mounted</span>(<span class="hljs-params"></span>) {},

  <span class="hljs-title function_">unmounted</span>(<span class="hljs-params"></span>) {},

  <span class="hljs-attr">methods</span>: {},
};
</code></pre></div><div class="van-doc-card"><h3 id="zu-jian-xuan-xiang-zhong-de-kong-xing" tabindex="-1">组件选项中的空行</h3><p>组件选项较多时，建议在属性之间添加空行。</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">computed</span>: {
    <span class="hljs-title function_">formattedValue</span>(<span class="hljs-params"></span>) {
      <span class="hljs-comment">// ...</span>
    },

    <span class="hljs-title function_">styles</span>(<span class="hljs-params"></span>) {
      <span class="hljs-comment">// ...</span>
    },
  },

  <span class="hljs-attr">methods</span>: {
    <span class="hljs-title function_">onInput</span>(<span class="hljs-params"></span>) {
      <span class="hljs-comment">// ...</span>
    },

    <span class="hljs-title function_">onChange</span>(<span class="hljs-params"></span>) {
      <span class="hljs-comment">// ...</span>
    },
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="dan-wen-jian-zu-jian-ding-ji-biao-qian-de-shun-xu" tabindex="-1">单文件组件顶级标签的顺序</h3><p>单文件组件应该总是让顶级标签的顺序保持一致，且标签之间留有空行。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span> ... <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
  <span class="hljs-comment">/* ... */</span>
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-comment">/* ... */</span>
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div>`,12),c=[t],i={__name:"style-guide.zh-CN",setup(e,{expose:s}){return s({frontmatter:{}}),(h,d)=>(a(),n("div",l,c))}};export{i as default};

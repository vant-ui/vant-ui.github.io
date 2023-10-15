import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as t}from"./vue-libs-19c20d28.js";const l={},e={class:"van-doc-markdown-body"},p=t(`<h1>List 列表</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>瀑布流滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">List</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">List</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>List 组件通过 <code>loading</code> 和 <code>finished</code> 两个变量控制加载状态，当组件滚动到底部时，会触发 <code>load</code> 事件并将 <code>loading</code> 设置成 <code>true</code>。此时可以发起异步操作并更新数据，数据更新完毕后，将 <code>loading</code> 设置成 <code>false</code> 即可。若数据已全部加载完毕，则直接将 <code>finished</code> 设置成 <code>true</code> 即可。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-list</span>
  <span class="hljs-attr">v-model:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
  <span class="hljs-attr">:finished</span>=<span class="hljs-string">&quot;finished&quot;</span>
  <span class="hljs-attr">finished-text</span>=<span class="hljs-string">&quot;没有更多了&quot;</span>
  @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;onLoad&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-list</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> list = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">const</span> loading = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> finished = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onLoad</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-comment">// 异步更新数据</span>
      <span class="hljs-comment">// setTimeout 仅做示例，真实场景中一般为 ajax 请求</span>
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {
          list.<span class="hljs-property">value</span>.<span class="hljs-title function_">push</span>(list.<span class="hljs-property">value</span>.<span class="hljs-property">length</span> + <span class="hljs-number">1</span>);
        }

        <span class="hljs-comment">// 加载状态结束</span>
        loading.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;

        <span class="hljs-comment">// 数据全部加载完成</span>
        <span class="hljs-keyword">if</span> (list.<span class="hljs-property">value</span>.<span class="hljs-property">length</span> &gt;= <span class="hljs-number">40</span>) {
          finished.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;
        }
      }, <span class="hljs-number">1000</span>);
    };

    <span class="hljs-keyword">return</span> {
      list,
      onLoad,
      loading,
      finished,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="cuo-wu-ti-shi" tabindex="-1">错误提示</h3><p>若列表数据加载失败，将 <code>error</code> 设置成 <code>true</code> 即可显示错误提示，用户点击错误提示后会重新触发 load 事件。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-list</span>
  <span class="hljs-attr">v-model:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
  <span class="hljs-attr">v-model:error</span>=<span class="hljs-string">&quot;error&quot;</span>
  <span class="hljs-attr">error-text</span>=<span class="hljs-string">&quot;请求失败，点击重新加载&quot;</span>
  @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;onLoad&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-list</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> list = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">const</span> error = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> loading = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onLoad</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-title function_">fetchSomeThing</span>().<span class="hljs-title function_">catch</span>(<span class="hljs-function">() =&gt;</span> {
        error.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;
      });
    };

    <span class="hljs-keyword">return</span> {
      list,
      error,
      onLoad,
      loading,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xia-la-shua-xin" tabindex="-1">下拉刷新</h3><p>List 组件可以与 <a href="#/zh-CN/pull-refresh" target="_blank">PullRefresh</a> 组件结合使用，实现下拉刷新的效果。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-pull-refresh</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;refreshing&quot;</span> @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;onRefresh&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-list</span>
    <span class="hljs-attr">v-model:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
    <span class="hljs-attr">:finished</span>=<span class="hljs-string">&quot;finished&quot;</span>
    <span class="hljs-attr">finished-text</span>=<span class="hljs-string">&quot;没有更多了&quot;</span>
    @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;onLoad&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-list</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-pull-refresh</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> list = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">const</span> loading = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> finished = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> refreshing = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onLoad</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-keyword">if</span> (refreshing.<span class="hljs-property">value</span>) {
          list.<span class="hljs-property">value</span> = [];
          refreshing.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
        }

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {
          list.<span class="hljs-property">value</span>.<span class="hljs-title function_">push</span>(list.<span class="hljs-property">value</span>.<span class="hljs-property">length</span> + <span class="hljs-number">1</span>);
        }
        loading.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;

        <span class="hljs-keyword">if</span> (list.<span class="hljs-property">value</span>.<span class="hljs-property">length</span> &gt;= <span class="hljs-number">40</span>) {
          finished.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;
        }
      }, <span class="hljs-number">1000</span>);
    };

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onRefresh</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-comment">// 清空列表数据</span>
      finished.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;

      <span class="hljs-comment">// 重新加载数据</span>
      <span class="hljs-comment">// 将 loading 设置为 true，表示处于加载状态</span>
      loading.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;
      <span class="hljs-title function_">onLoad</span>();
    };

    <span class="hljs-keyword">return</span> {
      list,
      onLoad,
      loading,
      finished,
      onRefresh,
      refreshing,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:loading</td><td>是否处于加载状态，加载过程中不触发 <code>load</code> 事件</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>v-model:error</td><td>是否加载失败，加载失败后点击错误提示可以重新触发 <code>load</code> 事件</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>finished</td><td>是否已加载完成，加载完成后不再触发 <code>load</code> 事件</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>offset</td><td>滚动条与底部距离小于 offset 时触发 <code>load</code> 事件</td><td><em>number | string</em></td><td><code>300</code></td></tr><tr><td>loading-text</td><td>加载过程中的提示文案</td><td><em>string</em></td><td><code>加载中...</code></td></tr><tr><td>finished-text</td><td>加载完成后的提示文案</td><td><em>string</em></td><td>-</td></tr><tr><td>error-text</td><td>加载失败后的提示文案</td><td><em>string</em></td><td>-</td></tr><tr><td>immediate-check</td><td>是否在初始化时立即执行滚动位置检查</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>disabled</td><td>是否禁用滚动加载</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>direction</td><td>滚动触发加载的方向，可选值为 <code>up</code></td><td><em>string</em></td><td><code>down</code></td></tr><tr><td>scroller <code>v4.6.4</code></td><td>指定需要监听滚动事件的节点，默认为最近的父级滚动节点</td><td><em>Element</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>load</td><td>滚动条与底部距离小于 offset 时触发</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">方法</h3><p>通过 ref 可以获取到 List 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>check</td><td>检查当前的滚动位置，若已滚动至底部，则会触发 load 事件</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ListProps</span>, <span class="hljs-title class_">ListInstance</span>, <span class="hljs-title class_">ListDirection</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>ListInstance</code> 是组件实例的类型，用法如下：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ListInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> listRef = ref&lt;<span class="hljs-title class_">ListInstance</span>&gt;();

listRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">check</span>();
</code></pre></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>列表内容</td></tr><tr><td>loading</td><td>自定义底部加载中提示</td></tr><tr><td>finished</td><td>自定义加载完成后的提示文案</td></tr><tr><td>error</td><td>自定义加载失败后的提示文案</td></tr></tbody></table></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-list-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-list-text-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-list-text-line-height</td><td><em>50px</em></td><td>-</td></tr><tr><td>--van-list-loading-icon-size</td><td><em>16px</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="list-de-yun-xing-ji-zhi-shi-shi-me" tabindex="-1">List 的运行机制是什么？</h3><p>List 会监听浏览器的滚动事件并计算列表的位置，当列表底部与可视区域的距离小于 <code>offset</code> 时，List 会触发一次 <code>load</code> 事件。</p></div><div class="van-doc-card"><h3 id="wei-shi-me-list-chu-shi-hua-hou-hui-li-ji-chu-fa-load-shi-jian" tabindex="-1">为什么 List 初始化后会立即触发 load 事件？</h3><p>List 初始化后会触发一次 load 事件，用于加载第一屏的数据，这个特性可以通过 <code>immediate-check</code> 属性关闭。</p></div><div class="van-doc-card"><h3 id="wei-shi-me-hui-lian-xu-chu-fa-load-shi-jian" tabindex="-1">为什么会连续触发 load 事件？</h3><p>如果一次请求加载的数据条数较少，导致列表内容无法铺满当前屏幕，List 会继续触发 <code>load</code> 事件，直到内容铺满屏幕或数据全部加载完成。</p><p>因此你需要调整每次获取的数据条数，理想情况下每次请求获取的数据条数应能够填满一屏高度。</p></div><div class="van-doc-card"><h3 id="loading-he-finished-fen-bie-shi-shi-me-han-yi" tabindex="-1">loading 和 finished 分别是什么含义？</h3><p><code>List</code> 有以下三种状态，理解这些状态有助于你正确地使用 <code>List</code> 组件：</p><ul><li>非加载中，<code>loading</code> 为 <code>false</code>，此时会根据列表滚动位置判断是否触发 <code>load</code> 事件（列表内容不足一屏幕时，会直接触发）。</li><li>加载中，<code>loading</code> 为 <code>true</code>，表示正在发送异步请求，此时不会触发 <code>load</code> 事件。</li><li>加载完成，<code>finished</code> 为 <code>true</code>，此时不会触发 <code>load</code> 事件。</li></ul><p>在每次请求完毕后，需要手动将 <code>loading</code> 设置为 <code>false</code>，表示加载结束。</p></div><div class="van-doc-card"><h3 id="shi-yong-float-bu-ju-hou-yi-zhi-chu-fa-jia-zai" tabindex="-1">使用 float 布局后一直触发加载？</h3><p>若 List 的内容使用了 float 布局，可以在容器上添加 <code>van-clearfix</code> 类名来清除浮动，使得 List 能正确判断元素位置。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-list</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-clearfix&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;float-item&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;float-item&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;float-item&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-list</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zai-html-body-shang-she-zhi-overflow-hou-yi-zhi-chu-fa-jia-zai" tabindex="-1">在 html、body 上设置 overflow 后一直触发加载？</h3><p>如果在 html 和 body 标签上设置了 <code>overflow-x: hidden</code> 样式，会导致 List 一直触发加载。</p><pre><code class="language-css"><span class="hljs-selector-tag">html</span>,
<span class="hljs-selector-tag">body</span> {
  <span class="hljs-attribute">overflow-x</span>: hidden;
}
</code></pre><p>这个问题的原因是当元素设置了 <code>overflow-x: hidden</code> 样式时，该元素的 <code>overflow-y</code> 会被浏览器设置为 <code>auto</code>，而不是默认值 <code>visible</code>，导致 List 无法正确地判断滚动容器。解决方法是去除该样式，或者在 html 和 body 标签上添加 <code>height: 100%</code> 样式。</p></div><div class="van-doc-card"><h3 id="direction-shu-xing-she-zhi-wei-up-hou-yi-zhi-chu-fa-jia-zai" tabindex="-1">direction 属性设置为 up 后一直触发加载？</h3><p>设置 <code>direction</code> 属性为 up 后，当滚动条处于页面顶部时，就会触发 List 组件的加载。</p><p>因此在使用该属性时，建议在每次数据加载完成后，将滚动条滚动至页面底部或非顶部的位置。</p></div>`,23),d=[p];function c(o,i){return a(),n("div",e,d)}const j=s(l,[["render",c]]);export{j as default};

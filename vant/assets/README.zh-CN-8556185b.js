import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as t}from"./vue-libs-19c20d28.js";const e={},l={class:"van-doc-markdown-body"},p=t(`<h1>Uploader 文件上传</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Uploader</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Uploader</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>文件上传完毕后会触发 <code>after-read</code> 回调函数，获取到对应的 <code>file</code> 对象。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">:after-read</span>=<span class="hljs-string">&quot;afterRead&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">afterRead</span> = (<span class="hljs-params">file</span>) =&gt; {
      <span class="hljs-comment">// 此时可以自行将文件上传至服务器</span>
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(file);
    };

    <span class="hljs-keyword">return</span> {
      afterRead,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="wen-jian-yu-lan" tabindex="-1">文件预览</h3><p>通过 <code>v-model</code> 可以绑定已经上传的文件列表，并展示文件列表的预览图。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">multiple</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> fileList = <span class="hljs-title function_">ref</span>([
      { <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg&#39;</span> },
      <span class="hljs-comment">// Uploader 根据文件后缀来判断是否为图片文件</span>
      <span class="hljs-comment">// 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明</span>
      { <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://cloud-image&#39;</span>, <span class="hljs-attr">isImage</span>: <span class="hljs-literal">true</span> },
    ]);

    <span class="hljs-keyword">return</span> {
      fileList,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="shang-chuan-zhuang-tai" tabindex="-1">上传状态</h3><p>通过 <code>status</code> 属性可以标识上传状态，<code>uploading</code> 表示上传中，<code>failed</code> 表示上传失败，<code>done</code> 表示上传完成。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">:after-read</span>=<span class="hljs-string">&quot;afterRead&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> fileList = <span class="hljs-title function_">ref</span>([
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg&#39;</span>,
        <span class="hljs-attr">status</span>: <span class="hljs-string">&#39;uploading&#39;</span>,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;上传中...&#39;</span>,
      },
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/tree.jpeg&#39;</span>,
        <span class="hljs-attr">status</span>: <span class="hljs-string">&#39;failed&#39;</span>,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;上传失败&#39;</span>,
      },
    ]);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">afterRead</span> = (<span class="hljs-params">file</span>) =&gt; {
      file.<span class="hljs-property">status</span> = <span class="hljs-string">&#39;uploading&#39;</span>;
      file.<span class="hljs-property">message</span> = <span class="hljs-string">&#39;上传中...&#39;</span>;

      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        file.<span class="hljs-property">status</span> = <span class="hljs-string">&#39;failed&#39;</span>;
        file.<span class="hljs-property">message</span> = <span class="hljs-string">&#39;上传失败&#39;</span>;
      }, <span class="hljs-number">1000</span>);
    };

    <span class="hljs-keyword">return</span> {
      fileList,
      afterRead,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xian-zhi-shang-chuan-shu-liang" tabindex="-1">限制上传数量</h3><p>通过 <code>max-count</code> 属性可以限制上传文件的数量，上传数量达到限制后，会自动隐藏上传区域。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">:max-count</span>=<span class="hljs-string">&quot;2&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> fileList = <span class="hljs-title function_">ref</span>([]);

    <span class="hljs-keyword">return</span> {
      fileList,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xian-zhi-shang-chuan-da-xiao" tabindex="-1">限制上传大小</h3><p>通过 <code>max-size</code> 属性可以限制上传文件的大小，超过大小的文件会被自动过滤，这些文件信息可以通过 <code>oversize</code> 事件获取。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">:max-size</span>=<span class="hljs-string">&quot;500 * 1024&quot;</span> @<span class="hljs-attr">oversize</span>=<span class="hljs-string">&quot;onOversize&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onOversize</span> = (<span class="hljs-params">file</span>) =&gt; {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(file);
      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;文件大小不能超过 500kb&#39;</span>);
    };

    <span class="hljs-keyword">return</span> {
      onOversize,
    };
  },
};
</code></pre><p>如果需要针对不同类型的文件来作出不同的大小限制，可以在 <code>max-size</code> 属性中传入一个函数，在函数中通过 <code>file.type</code> 区分文件类型，返回 <code>true</code> 表示超出限制，<code>false</code> 表示未超出限制。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">:max-size</span>=<span class="hljs-string">&quot;isOverSize&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">isOverSize</span> = (<span class="hljs-params">file</span>) =&gt; {
      <span class="hljs-keyword">const</span> maxSize = file.<span class="hljs-property">type</span> === <span class="hljs-string">&#39;image/jpeg&#39;</span> ? <span class="hljs-number">500</span> * <span class="hljs-number">1024</span> : <span class="hljs-number">1000</span> * <span class="hljs-number">1024</span>;
      <span class="hljs-keyword">return</span> file.<span class="hljs-property">size</span> &gt;= maxSize;
    };
    <span class="hljs-keyword">return</span> {
      isOverSize,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-shang-chuan-yang-shi" tabindex="-1">自定义上传样式</h3><p>通过默认插槽可以自定义上传区域的样式。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;plus&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>上传文件<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-uploader</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yu-lan-yang-shi" tabindex="-1">自定义预览样式</h3><p>通过 <code>preview-cover</code> 插槽可以自定义覆盖在预览区域上方的内容。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">preview-cover</span>=<span class="hljs-string">&quot;{ file }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;preview-cover van-ellipsis&quot;</span>&gt;</span>{{ file.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-uploader</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.preview-cover</span> {
    <span class="hljs-attribute">position</span>: absolute;
    <span class="hljs-attribute">bottom</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">box-sizing</span>: border-box;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">4px</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.3</span>);
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yu-lan-da-xiao" tabindex="-1">自定义预览大小</h3><p>通过 <code>preview-size</code> 属性定义预览图和上传区域的大小。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 不指定单位，默认为 px --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">preview-size</span>=<span class="hljs-string">&quot;60&quot;</span> /&gt;</span>
<span class="hljs-comment">&lt;!-- 指定单位，支持 rem, vh, vw --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">preview-size</span>=<span class="hljs-string">&quot;5rem&quot;</span> /&gt;</span>
</code></pre><p>将 <code>preview-size</code> 设置为数组格式，可以分别设置宽高。数组第一项对应宽度，数组第二项对应高度。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">:preview-size</span>=<span class="hljs-string">&quot;[60, 40]&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="shang-chuan-qian-zhi-chu-li" tabindex="-1">上传前置处理</h3><p>通过传入 <code>beforeRead</code> 函数可以在上传前进行校验和处理，返回 <code>true</code> 表示校验通过，返回 <code>false</code> 表示校验失败。支持返回 <code>Promise</code> 对 file 对象进行自定义处理，例如压缩图片。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">:before-read</span>=<span class="hljs-string">&quot;beforeRead&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-comment">// 返回布尔值</span>
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeRead</span> = (<span class="hljs-params">file</span>) =&gt; {
      <span class="hljs-keyword">if</span> (file.<span class="hljs-property">type</span> !== <span class="hljs-string">&#39;image/jpeg&#39;</span>) {
        <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;请上传 jpg 格式图片&#39;</span>);
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
      }
      <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    };

    <span class="hljs-comment">// 返回 Promise</span>
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">asyncBeforeRead</span> = (<span class="hljs-params">file</span>) =&gt;
      <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {
        <span class="hljs-keyword">if</span> (file.<span class="hljs-property">type</span> !== <span class="hljs-string">&#39;image/jpeg&#39;</span>) {
          <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;请上传 jpg 格式图片&#39;</span>);
          <span class="hljs-title function_">reject</span>();
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-keyword">const</span> img = <span class="hljs-keyword">new</span> <span class="hljs-title class_">File</span>([<span class="hljs-string">&#39;foo&#39;</span>], <span class="hljs-string">&#39;bar.jpg&#39;</span>, {
            <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;image/jpeg&#39;</span>,
          });
          <span class="hljs-title function_">resolve</span>(img);
        }
      });

    <span class="hljs-keyword">return</span> {
      beforeRead,
      asyncBeforeRead,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-wen-jian-shang-chuan" tabindex="-1">禁用文件上传</h3><p>通过 <code>disabled</code> 属性禁用文件上传。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">disabled</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-dan-ge-tu-pian-yu-lan" tabindex="-1">自定义单个图片预览</h3><p>在 <code>v-model</code> 数组中设置单个预览图片属性，支持 <code>imageFit</code> <code>deletable</code> <code>previewSize</code> <code>beforeDelete</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">:deletable</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> fileList = <span class="hljs-title function_">ref</span>([
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/sand.jpeg&#39;</span>,
        <span class="hljs-attr">deletable</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">beforeDelete</span>: <span class="hljs-function">() =&gt;</span> {
          <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;删除前置处理&#39;</span>);
        },
      },
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/tree.jpeg&#39;</span>,
        <span class="hljs-attr">imageFit</span>: <span class="hljs-string">&#39;contain&#39;</span>,
      },
    ]);

    <span class="hljs-keyword">return</span> { fileList };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="kai-qi-fu-gai-shang-chuan" tabindex="-1">开启覆盖上传</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">reupload</span> <span class="hljs-attr">max-count</span>=<span class="hljs-string">&quot;2&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> fileList = <span class="hljs-title function_">ref</span>([
      { <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg&#39;</span> },
    ]);

    <span class="hljs-keyword">return</span> { fileList };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>已上传的文件列表</td><td><em>FileListItem[]</em></td><td>-</td></tr><tr><td>accept</td><td>允许上传的文件类型，<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B" target="_blank">详细说明</a></td><td><em>string</em></td><td><code>image/*</code></td></tr><tr><td>name</td><td>标识符，通常为一个唯一的字符串或数字，可以在回调函数的第二项参数中获取</td><td><em>number | string</em></td><td>-</td></tr><tr><td>preview-size</td><td>预览图和上传区域的尺寸，默认单位为 <code>px</code></td><td><em>number | string | Array</em></td><td><code>80px</code></td></tr><tr><td>preview-image</td><td>是否在上传完成后展示预览图</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>preview-full-image</td><td>是否在点击预览图后展示全屏图片预览</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>preview-options</td><td>全屏图片预览的配置项，可选值见 <a href="#/zh-CN/image-preview" target="_blank">ImagePreview</a></td><td><em>object</em></td><td>-</td></tr><tr><td>multiple</td><td>是否开启图片多选，部分安卓机型不支持</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用文件上传</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly</td><td>是否将上传区域设置为只读状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>deletable</td><td>是否展示删除按钮</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>reupload <code>v4.4.0</code></td><td>是否开启覆盖上传，开启后会关闭图片预览</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-upload</td><td>是否展示上传区域</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>lazy-load</td><td>是否开启图片懒加载，须配合 <a href="#/zh-CN/lazyload" target="_blank">Lazyload</a> 组件使用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>capture</td><td>图片选取模式，可选值为 <code>camera</code> (直接调起摄像头)</td><td><em>string</em></td><td>-</td></tr><tr><td>after-read</td><td>文件读取完成后的回调函数</td><td><em>Function</em></td><td>-</td></tr><tr><td>before-read</td><td>文件读取前的回调函数，返回 <code>false</code> 可终止文件读取，<br>支持返回 <code>Promise</code></td><td><em>Function</em></td><td>-</td></tr><tr><td>before-delete</td><td>文件删除前的回调函数，返回 <code>false</code> 可终止文件读取，<br>支持返回 <code>Promise</code></td><td><em>Function</em></td><td>-</td></tr><tr><td>max-size</td><td>文件大小限制，单位为 <code>byte</code></td><td><em>number | string | (file: File) =&gt; boolean</em></td><td><code>Infinity</code></td></tr><tr><td>max-count</td><td>文件上传数量限制</td><td><em>number | string</em></td><td><code>Infinity</code></td></tr><tr><td>result-type</td><td>文件读取结果类型，可选值为 <code>file</code> <code>text</code></td><td><em>string</em></td><td><code>dataUrl</code></td></tr><tr><td>upload-text</td><td>上传区域文字提示</td><td><em>string</em></td><td>-</td></tr><tr><td>image-fit</td><td>预览图裁剪模式，可选值见 <a href="#/zh-CN/image" target="_blank">Image</a> 组件</td><td><em>string</em></td><td><code>cover</code></td></tr><tr><td>upload-icon</td><td>上传区域图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td><td><em>string</em></td><td><code>photograph</code></td></tr></tbody></table><blockquote><p>注意：accept、capture 和 multiple 为浏览器 input 标签的原生属性，移动端各种机型对这些属性的支持程度有所差异，因此在不同机型和 WebView 下可能出现一些兼容性问题。</p></blockquote></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>oversize</td><td>文件大小超过限制时触发</td><td>同 <code>after-read</code></td></tr><tr><td>click-upload</td><td>点击上传区域时触发</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-preview</td><td>点击预览图时触发</td><td>同 <code>after-read</code></td></tr><tr><td>click-reupload</td><td>点击覆盖上传时触发</td><td>同 <code>after-read</code></td></tr><tr><td>close-preview</td><td>关闭全屏图片预览时触发</td><td>-</td></tr><tr><td>delete</td><td>删除文件预览时触发</td><td>同 <code>after-read</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>default</td><td>自定义上传区域</td><td>-</td></tr><tr><td>preview-delete</td><td>自定义删除按钮</td><td>-</td></tr><tr><td>preview-cover</td><td>自定义覆盖在预览区域上方的内容</td><td><em>item: FileListItem</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="hui-diao-can-shu" tabindex="-1">回调参数</h3><p>before-read、after-read、before-delete 执行时会传递以下回调参数：</p><table><thead><tr><th>参数名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>file</td><td>file 对象</td><td><em>object</em></td></tr><tr><td>detail</td><td>额外信息，包含 name 和 index 字段</td><td><em>object</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="resulttype-ke-xuan-zhi" tabindex="-1">ResultType 可选值</h3><p><code>result-type</code> 字段表示文件读取结果的类型，上传大文件时，建议使用 file 类型，避免卡顿。</p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>file</td><td>结果仅包含 File 对象</td></tr><tr><td>text</td><td>结果包含 File 对象，以及文件的文本内容</td></tr><tr><td>dataUrl</td><td>结果包含 File 对象，以及文件对应的 base64 编码</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">方法</h3><p>通过 ref 可以获取到 Uploader 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>closeImagePreview</td><td>关闭全屏的图片预览</td><td>-</td><td>-</td></tr><tr><td>chooseFile</td><td>主动调起文件选择，由于浏览器安全限制，只有在用户触发操作的上下文中调用才有效</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">UploaderProps</span>,
  <span class="hljs-title class_">UploaderInstance</span>,
  <span class="hljs-title class_">UploaderResultType</span>,
  <span class="hljs-title class_">UploaderFileListItem</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>UploaderInstance</code> 是组件实例的类型，用法如下：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">UploaderInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> uploaderRef = ref&lt;<span class="hljs-title class_">UploaderInstance</span>&gt;();

uploaderRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">chooseFile</span>();
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-uploader-size</td><td><em>80px</em></td><td>-</td></tr><tr><td>--van-uploader-icon-size</td><td><em>24px</em></td><td>-</td></tr><tr><td>--van-uploader-icon-color</td><td><em>var(--van-gray-4)</em></td><td>-</td></tr><tr><td>--van-uploader-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-uploader-text-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-uploader-upload-background</td><td><em>var(--van-gray-1)</em></td><td>-</td></tr><tr><td>--van-uploader-upload-active-color</td><td><em>var(--van-active-color)</em></td><td>-</td></tr><tr><td>--van-uploader-delete-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-uploader-delete-icon-size</td><td><em>14px</em></td><td>-</td></tr><tr><td>--van-uploader-delete-background</td><td><em>rgba(0, 0, 0, 0.7)</em></td><td>-</td></tr><tr><td>--van-uploader-file-background</td><td><em>var(--van-background)</em></td><td>-</td></tr><tr><td>--van-uploader-file-icon-size</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-uploader-file-icon-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-uploader-file-name-padding</td><td><em>0 var(--van-padding-base)</em></td><td>-</td></tr><tr><td>--van-uploader-file-name-margin-top</td><td><em>var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-uploader-file-name-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-uploader-file-name-text-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-uploader-mask-text-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-uploader-mask-background</td><td><em>fade(var(--van-gray-8), 88%)</em></td><td>-</td></tr><tr><td>--van-uploader-mask-icon-size</td><td><em>22px</em></td><td>-</td></tr><tr><td>--van-uploader-mask-message-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-uploader-mask-message-line-height</td><td><em>var(--van-line-height-xs)</em></td><td>-</td></tr><tr><td>--van-uploader-loading-icon-size</td><td><em>22px</em></td><td>-</td></tr><tr><td>--van-uploader-loading-icon-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-uploader-disabled-opacity</td><td><em>var(--van-disabled-opacity)</em></td><td>-</td></tr><tr><td>--van-uploader-border-radius</td><td><em>0px</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="uploader-zai-bu-fen-an-zhuo-ji-xing-shang-wu-fa-shang-chuan-tu-pian" tabindex="-1">Uploader 在部分安卓机型上无法上传图片？</h3><p>Uploader 采用了 HTML 原生的 <code>&lt;input type=&quot;file /&gt;</code> 标签进行上传，能否上传取决于当前系统和浏览器的兼容性。当遇到无法上传的问题时，一般有以下几种情况：</p><ol><li>遇到了安卓 App WebView 的兼容性问题，需要在安卓原生代码中进行兼容，可以参考此<a href="https://blog.csdn.net/qq_32756581/article/details/112861088" target="_blank">文章</a>。</li><li>图片格式不正确，在当前系统/浏览器中无法识别，比如 <code>webp</code> 或 <code>heic</code> 格式。</li><li>其他浏览器兼容性问题。</li></ol></div><div class="van-doc-card"><h3 id="pai-zhao-shang-chuan-de-tu-pian-bei-xuan-zhuan-90-du" tabindex="-1">拍照上传的图片被旋转 90 度？</h3><p>部分手机在拍照上传时会出现图片被旋转 90 度的问题，这个问题可以通过 <a href="https://github.com/fengyuanchen/compressorjs" target="_blank">compressorjs</a> 或其他开源库进行处理。</p><p>compressorjs 是一个开源的图片处理库，提供了图片压缩、图片旋转等能力。</p><h4 id="shi-li" tabindex="-1">示例</h4><p>使用 compressorjs 进行处理的示例代码如下:</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">:before-read</span>=<span class="hljs-string">&quot;beforeRead&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-title class_">Compressor</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;compressorjs&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeRead</span> = (<span class="hljs-params">file</span>) =&gt;
      <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {
        <span class="hljs-comment">// compressorjs 默认开启 checkOrientation 选项</span>
        <span class="hljs-comment">// 会将图片修正为正确方向</span>
        <span class="hljs-keyword">new</span> <span class="hljs-title class_">Compressor</span>(file, {
          <span class="hljs-attr">success</span>: resolve,
          <span class="hljs-title function_">error</span>(<span class="hljs-params">err</span>) {
            <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(err.<span class="hljs-property">message</span>);
          },
        });
      });

    <span class="hljs-keyword">return</span> {
      beforeRead,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="shang-chuan-tu-pian-shi-chu-xian-liu-lan-qi-shua-xin-huo-qia-dun-xian-xiang" tabindex="-1">上传图片时出现浏览器刷新或卡顿现象？</h3><p>这种现象一般是内存不足导致的，通常发生在旧机型上；上传一张较大的图片引起也引起此现象。</p><p>为了减少这种情况的出现，可以在上传图片前对图片进行压缩，压缩方法请参考上文中提到的 <code>compressorjs</code> 库。</p></div><div class="van-doc-card"><h3 id="shang-chuan-heic-heif-ge-shi-de-tu-pian-hou-wu-fa-zhan-shi" tabindex="-1">上传 HEIC/HEIF 格式的图片后无法展示？</h3><p>目前 Chrome、Safari 等浏览器不支持展示 HEIC/HEIF 格式的图片，因此上传后无法在 Uploader 组件中进行预览。</p><p>[HEIF] 格式的兼容性请参考 <a href="https://caniuse.com/?search=heic" target="_blank">caniuse</a>。</p></div><div class="van-doc-card"><h3 id="ru-he-pan-duan-yong-hu-shou-yu-liao-she-xiang-tou-quan-xian" tabindex="-1">如何判断用户授予了摄像头权限？</h3><p>在上传图片时，如果用户没有授予当前 App 摄像头权限，会导致 Uploader 组件无法使用。</p><p>你可以通过浏览器提供的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia" target="_blank">getUserMedia</a> 方法来判断是否被授予了摄像头权限（请留意 <code>getUserMedia</code> 方法无法在 iOS 10 中使用）。</p><p>以下是一个简化的示例：</p><pre><code class="language-ts">navigator.<span class="hljs-property">mediaDevices</span>
  .<span class="hljs-title function_">getUserMedia</span>({ <span class="hljs-attr">video</span>: <span class="hljs-literal">true</span> })
  .<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">stream</span>) =&gt;</span> {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(stream);
  })
  .<span class="hljs-title function_">catch</span>(<span class="hljs-function">(<span class="hljs-params">err</span>) =&gt;</span> {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(err);
  });
</code></pre></div>`,32),d=[p];function r(c,o){return a(),n("div",l,d)}const j=s(e,[["render",r]]);export{j as default};

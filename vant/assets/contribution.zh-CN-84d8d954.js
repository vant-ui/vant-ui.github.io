import{_ as i}from"./locales-be796722.js";import{o as a,a as n,z as e}from"./vue-libs-19c20d28.js";const l={},s={class:"van-doc-markdown-body"},t=e(`<h1>贡献指南</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>感谢你使用 Vant。</p><p>以下是关于向 Vant 提交反馈或代码的指南。在向 Vant 提交 issue 或者 PR 之前，请先花几分钟时间阅读以下内容。</p></div><div class="van-doc-card"><h3 id="issue-gui-fan" tabindex="-1">Issue 规范</h3><ul><li>遇到问题时，请先确认这个问题是否已经在 issue 中有记录或者已被修复。</li><li>提 issue 时，请用简短的语言描述遇到的问题，并添加出现问题时的环境和复现步骤。</li></ul></div><h2 id="can-yu-kai-fa" tabindex="-1">参与开发</h2><div class="van-doc-card"><h3 id="ben-di-kai-fa" tabindex="-1">本地开发</h3><p>在进行本地开发前，请先确保你的开发环境中安装了 <a href="https://nodejs.org" target="_blank">Node.js &gt;= 18</a>。</p><p>按照下面的步骤操作，即可在本地开发 Vant 组件。</p><pre><code class="language-bash"><span class="hljs-comment"># 克隆仓库</span>
git <span class="hljs-built_in">clone</span> git@github.com:vant-ui/vant.git

<span class="hljs-comment"># 启用 pnpm 包管理器</span>
corepack <span class="hljs-built_in">enable</span>

<span class="hljs-comment"># 安装依赖</span>
pnpm i

<span class="hljs-comment"># 进入开发模式，浏览器访问 localhost</span>
pnpm dev
</code></pre><p>仓库的不同分支对应不同的 Vant 版本，请切换到对应分支进行开发：</p><ul><li>main 分支对应 Vant 4 版本，适用于 Vue 3</li><li>3.x 分支对应 Vant 3 版本 ，适用于 Vue 3</li><li>2.x 分支对应 Vant 2 版本，适用于 Vue 2</li></ul></div><div class="van-doc-card"><h3 id="jing-xiang-cang-ku" tabindex="-1">镜像仓库</h3><p>如果 GitHub 克隆速度较慢，你也可以直接克隆 Vant 在 gitee 上的<a href="https://gitee.com/vant-contrib/vant" target="_blank">镜像仓库</a>：</p><pre><code class="language-bash">git <span class="hljs-built_in">clone</span> git@gitee.com:vant-contrib/vant.git
</code></pre><p>镜像仓库仅用于加快国内的访问速度，请勿在镜像仓库中提 issue 和 Pull Request。</p></div><div class="van-doc-card"><h3 id="mu-lu-jie-gou" tabindex="-1">目录结构</h3><p>Vant 采用 monorepo 进行代码管理，所有子包在 <code>packages</code> 目录下:</p><pre><code>root
└─ packages
   ├─ vant        # 组件库
   ├─ vant-cli    # 脚手架
   ├─ vant-icons  # 图标库
   ├─ vant-use    # Composition API
   └─ ....        # 其他周边 npm 包
</code></pre><p>其中，<code>packages/vant</code> 目录为组件库的核心代码：</p><pre><code>vant
├─ docs             # 文档
├─ src              # 组件源代码
├─ test             # 单测工具类
└─ vant.config.mjs  # 文档网站配置
</code></pre><p><code>packages/vant/src</code> 目录包含各个组件的源码，每个文件夹对应一个组件：</p><pre><code>src
└─ button
   ├─ demo             # 示例代码
   ├─ test             # 单元测试
   ├─ Component.tsx    # 组件
   ├─ index.ts         # 组件入口
   ├─ index.less       # 样式
   ├─ README.md        # 英文文档
   └─ README.zh-CN.md  # 中文文档
</code></pre></div><div class="van-doc-card"><h3 id="dai-ma-gui-fan" tabindex="-1">代码规范</h3><p>在编写代码时，请注意：</p><ul><li>确保代码可以通过仓库的 ESLint 校验。</li><li>确保代码格式是规范的，使用 prettier 进行代码格式化。</li><li>确保没有使用超出兼容性范围的 API，比如 <code>async</code>, <code>await</code>.</li></ul></div><h2 id="ti-jiao-pull-request" tabindex="-1">提交 Pull Request</h2><div class="van-doc-card"><h3 id="can-kao-zhi-nan" tabindex="-1">参考指南</h3><p>如果你是第一次在 GitHub 上提 Pull Request ，可以阅读下面这两篇文章来学习：</p><ul><li><a href="https://github.com/firstcontributions/first-contributions/blob/main/translations/README.zh-cn.md" target="_blank">第一次参与开源</a></li><li><a href="https://segmentfault.com/a/1190000000736629" target="_blank">如何优雅地在 GitHub 上贡献代码</a></li></ul></div><div class="van-doc-card"><h3 id="pull-request-gui-fan" tabindex="-1">Pull Request 规范</h3><p>在提交 Pull Request 时，请注意：</p><ul><li>保持你的 PR 足够小，一个 PR 只解决单个问题或添加单个功能。</li><li>当新增组件或者修改原有组件时，记得增加或者修改对应的单元测试，保证代码的稳定。</li><li>在 PR 中请添加合适的描述，并关联相关的 Issue。</li></ul></div><div class="van-doc-card"><h3 id="pull-request-liu-cheng" tabindex="-1">Pull Request 流程</h3><ol><li>fork 主仓库，如果已经 fork 过，请同步主仓库的最新代码。</li><li>基于 fork 后仓库的 main 分支新建一个分支，比如 <code>feature/button_color</code>。</li><li>在新分支上进行开发，开发完成后，提 Pull Request 到主仓库的 main 分支。</li><li>Pull Request 会在 Review 通过后被合并到主仓库。</li><li>等待 Vant 发布新版本，一般是每周一次。</li></ol></div><div class="van-doc-card"><h3 id="pull-request-biao-ti-ge-shi" tabindex="-1">Pull Request 标题格式</h3><p>Pull Request 的标题应该遵循以下格式：</p><pre><code class="language-bash"><span class="hljs-built_in">type</span>(ComponentName?)：commit message
</code></pre><p>示例：</p><ul><li>docs: fix typo in quickstart</li><li>build: optimize build speed</li><li>fix(Button): incorrect style</li><li>feat(Button): add color prop</li></ul><p>可选的类型：</p><ul><li>fix</li><li>feat</li><li>docs</li><li>perf</li><li>test</li><li>types</li><li>style</li><li>build</li><li>chore</li><li>release</li><li>refactor</li><li>breaking change</li><li>revert:</li></ul></div><div class="van-doc-card"><h3 id="tong-bu-zui-xin-dai-ma" tabindex="-1">同步最新代码</h3><p>提 Pull Request 前，请依照下面的流程同步主仓库的最新代码：</p><pre><code class="language-bash"><span class="hljs-comment"># 添加主仓库到 remote</span>
git remote add upstream git@github.com:vant-ui/vant.git

<span class="hljs-comment"># 拉取主仓库最新代码</span>
git fetch upstream

<span class="hljs-comment"># 切换至 main 分支</span>
git checkout main

<span class="hljs-comment"># 合并主仓库代码</span>
git merge upstream/main
</code></pre></div>`,14),c=[t];function o(d,p){return a(),n("div",s,c)}const h=i(l,[["render",o]]);export{h as default};

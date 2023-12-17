/*! For license information please see 6420.38c56176.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["6420"],{6984:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var i=n("21773"),o=n("35859"),a=(0,o.default)({},[["render",i.render]])},21773:function(e,t,n){"use strict";n.r(t);var i=n("37297");n.es(i,t)},37297:function(e,t,n){"use strict";n.r(t),n.d(t,{render:function(){return s}});var i=n("38613");let o={class:"van-doc-markdown-body"},a=[(0,i.createStaticVNode)('<h1>Contribution Guide</h1><div class="van-doc-card"><h3 id="introduction" tabindex="-1">Introduction</h3><p>Thank you for using Vant.</p><p>Below are the guidelines for submitting feedback or code to Vant. Please take a few minutes to read the following before submitting an issue or PR to Vant.</p></div><div class="van-doc-card"><h3 id="issue-specification" tabindex="-1">Issue Specification</h3><ul><li>If you encountered a problem, please first confirm whether the problem has been recorded in the issue or has been fixed.</li><li>When submitting an issue, please describe the problem you encountered in a short language, and add the environment and reproduction steps when the problem occurs.</li></ul></div><h2 id="participate-in-development" tabindex="-1">Participate in development</h2><div class="van-doc-card"><h3 id="local-development" tabindex="-1">Local development</h3><p>Before developing locally, please make sure that <a href="https://nodejs.org" target="_blank">Node.js &gt;= 18</a> is installed in your development environment.</p><p>Follow the steps below to develop Vant components locally.</p><pre><code class="language-bash"><span class="hljs-comment"># Clone repository</span>\ngit <span class="hljs-built_in">clone</span> git@github.com:vant-ui/vant.git\n\n<span class="hljs-comment"># Enable pnpm package manager</span>\ncorepack <span class="hljs-built_in">enable</span>\n\n<span class="hljs-comment"># Install dependencies</span>\npnpm i\n\n<span class="hljs-comment"># Start development</span>\npnpm dev\n</code></pre><p>Different branches of the repository correspond to different Vant versions, please switch to the appropriate branch for development:</p><ul><li>The main branch corresponds to the Vant 4 version, suitable for Vue 3</li><li>3.x branch corresponds to Vant 3 version, suitable for Vue 3</li><li>2.x branch corresponds to Vant 2 version, suitable for Vue 2</li></ul></div><div class="van-doc-card"><h3 id="mirror-repository" tabindex="-1">Mirror repository</h3><p>If GitHub cloning is slow, you can also directly clone Vant&#39;s <a href="https://gitee.com/vant-contrib/vant" target="_blank">mirror repository</a> directly on gitee:</p><pre><code class="language-bash">git <span class="hljs-built_in">clone</span> git@gitee.com:vant-contrib/vant.git\n</code></pre><p>The mirror repository is only used to speed up local access, please do not submit issues and pull requests to the mirror repository.</p></div><div class="van-doc-card"><h3 id="directory-structure" tabindex="-1">Directory Structure</h3><p>Vant uses monorepo for code management, and all subpackages are in the <code>packages/vant</code> directory:</p><pre><code>root\n\u2514\u2500 packages\n   \u251C\u2500 vant        # Component library\n   \u251C\u2500 vant-cli    # Scaffolding\n   \u251C\u2500 vant-icons  # Icon library\n   \u251C\u2500 vant-use    # Composition API\n   \u2514\u2500 ....        # Other npm packages\n</code></pre><p>Among them, the <code>packages/vant</code> directory is the core code of the component library:</p><pre><code>vant\n\u251C\u2500 docs             # Documentation\n\u251C\u2500 src              # Component source code\n\u251C\u2500 test             # Test utils\n\u2514\u2500 vant.config.mjs  # Document configuration\n</code></pre><p>The <code>packages/vant/src</code> directory contains the source code of each component, and each folder corresponds to a component:</p><pre><code>src\n\u2514\u2500 button\n   \u251C\u2500 demo             # Demo code\n   \u251C\u2500 test             # Unit test\n   \u251C\u2500 Component.tsx    # Component\n   \u251C\u2500 index.ts         # Component entry\n   \u251C\u2500 index.less       # Styles\n   \u251C\u2500 README.md        # English document\n   \u2514\u2500 README.zh-CN.md  # Chinese document\n</code></pre></div><div class="van-doc-card"><h3 id="code-specification" tabindex="-1">Code Specification</h3><p>When writing code, please note:</p><ul><li>Make sure the code can pass the repository&#39;s ESLint check.</li><li>Make sure the code format is standardized, use prettier for code formatting.</li><li>Make sure you don&#39;t use incompatible APIs like <code>async</code>, <code>await</code>.</li></ul></div><h2 id="submitting-a-pull-request" tabindex="-1">Submitting a Pull Request</h2><div class="van-doc-card"><h3 id="reference-guide" tabindex="-1">Reference Guide</h3><p>If this is your first time submitting a pull request on GitHub, you can learn from the following article:</p><ul><li><a href="https://github.com/firstcontributions/first-contributions" target="_blank">First participation in open source</a></li></ul></div><div class="van-doc-card"><h3 id="pull-request-specification" tabindex="-1">Pull Request Specification</h3><p>When submitting a Pull Request, please note:</p><ul><li>Keep your PRs small enough that a PR only addresses a single issue or adds a single feature.</li><li>When adding new components or modifying original components, remember to add or modify the corresponding unit tests to ensure the stability of the code.</li><li>Please include an appropriate description in the PR, and link related issues.</li></ul></div><div class="van-doc-card"><h3 id="pull-request-process" tabindex="-1">Pull Request Process</h3><ol><li>Fork the main repository. If you have already forked, please synchronize the latest code from the main repository.</li><li>Create a new branch based on the main branch of the repository after the fork, such as <code>feature/button_color</code>.</li><li>Develop on the new branch. When development is complete, submit a pull request to the main branch of the main repository.</li><li>The pull request is merged into the main repository after the review is approved.</li><li>Wait for Vant to release a new version, usually once a week.</li></ol></div><div class="van-doc-card"><h3 id="pull-request-title-format" tabindex="-1">Pull Request Title Format</h3><p>The title of the Pull Request should be in the following format:</p><pre><code class="language-bash"><span class="hljs-built_in">type</span>(ComponentName?)\uFF1Acommit message\n</code></pre><p>Example\uFF1A</p><ul><li>docs: fix typo in quickstart</li><li>build: optimize build speed</li><li>fix(Button): incorrect style</li><li>feat(Button): add color prop</li></ul><p>Allowed Types:</p><ul><li>fix</li><li>feat</li><li>docs</li><li>perf</li><li>test</li><li>types</li><li>style</li><li>build</li><li>chore</li><li>release</li><li>refactor</li><li>breaking change</li><li>revert:</li></ul></div><div class="van-doc-card"><h3 id="synchronize-the-latest-code" tabindex="-1">Synchronize the latest code</h3><p>Before submitting a Pull Request, please synchronize the latest code of the main repository according to the following process:</p><pre><code class="language-bash"><span class="hljs-comment"># Add the main repository to remote</span>\ngit remote add upstream git@github.com:vant-ui/vant.git\n\n<span class="hljs-comment"># Pull the latest code from the main repository</span>\ngit fetch upstream\n\n<span class="hljs-comment"># Switch to the main branch</span>\ngit checkout main\n\n<span class="hljs-comment"># Merge the code from the main repository</span>\ngit merge upstream/main\n</code></pre></div>',14)];function s(e,t){return(0,i.openBlock)(),(0,i.createElementBlock)("div",o,a)}}}]);
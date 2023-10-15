import{_ as e}from"./locales-be796722.js";import{o as t,a as o,z as n}from"./vue-libs-19c20d28.js";const i={},a={class:"van-doc-markdown-body"},s=n(`<h1>Contribution Guide</h1><div class="van-doc-card"><h3 id="introduction" tabindex="-1">Introduction</h3><p>Thank you for using Vant.</p><p>Below are the guidelines for submitting feedback or code to Vant. Please take a few minutes to read the following before submitting an issue or PR to Vant.</p></div><div class="van-doc-card"><h3 id="issue-specification" tabindex="-1">Issue Specification</h3><ul><li>If you encountered a problem, please first confirm whether the problem has been recorded in the issue or has been fixed.</li><li>When submitting an issue, please describe the problem you encountered in a short language, and add the environment and reproduction steps when the problem occurs.</li></ul></div><h2 id="participate-in-development" tabindex="-1">Participate in development</h2><div class="van-doc-card"><h3 id="local-development" tabindex="-1">Local development</h3><p>Before developing locally, please make sure that <a href="https://nodejs.org" target="_blank">Node.js &gt;= 18</a> is installed in your development environment.</p><p>Follow the steps below to develop Vant components locally.</p><pre><code class="language-bash"><span class="hljs-comment"># Clone repository</span>
git <span class="hljs-built_in">clone</span> git@github.com:vant-ui/vant.git

<span class="hljs-comment"># Enable pnpm package manager</span>
corepack <span class="hljs-built_in">enable</span>

<span class="hljs-comment"># Install dependencies</span>
pnpm i

<span class="hljs-comment"># Start development</span>
pnpm dev
</code></pre><p>Different branches of the repository correspond to different Vant versions, please switch to the appropriate branch for development:</p><ul><li>The main branch corresponds to the Vant 4 version, suitable for Vue 3</li><li>3.x branch corresponds to Vant 3 version, suitable for Vue 3</li><li>2.x branch corresponds to Vant 2 version, suitable for Vue 2</li></ul></div><div class="van-doc-card"><h3 id="mirror-repository" tabindex="-1">Mirror repository</h3><p>If GitHub cloning is slow, you can also directly clone Vant&#39;s <a href="https://gitee.com/vant-contrib/vant" target="_blank">mirror repository</a> directly on gitee:</p><pre><code class="language-bash">git <span class="hljs-built_in">clone</span> git@gitee.com:vant-contrib/vant.git
</code></pre><p>The mirror repository is only used to speed up local access, please do not submit issues and pull requests to the mirror repository.</p></div><div class="van-doc-card"><h3 id="directory-structure" tabindex="-1">Directory Structure</h3><p>Vant uses monorepo for code management, and all subpackages are in the <code>packages/vant</code> directory:</p><pre><code>root
└─ packages
   ├─ vant        # Component library
   ├─ vant-cli    # Scaffolding
   ├─ vant-icons  # Icon library
   ├─ vant-use    # Composition API
   └─ ....        # Other npm packages
</code></pre><p>Among them, the <code>packages/vant</code> directory is the core code of the component library:</p><pre><code>vant
├─ docs             # Documentation
├─ src              # Component source code
├─ test             # Test utils
└─ vant.config.mjs  # Document configuration
</code></pre><p>The <code>packages/vant/src</code> directory contains the source code of each component, and each folder corresponds to a component:</p><pre><code>src
└─ button
   ├─ demo             # Demo code
   ├─ test             # Unit test
   ├─ Component.tsx    # Component
   ├─ index.ts         # Component entry
   ├─ index.less       # Styles
   ├─ README.md        # English document
   └─ README.zh-CN.md  # Chinese document
</code></pre></div><div class="van-doc-card"><h3 id="code-specification" tabindex="-1">Code Specification</h3><p>When writing code, please note:</p><ul><li>Make sure the code can pass the repository&#39;s ESLint check.</li><li>Make sure the code format is standardized, use prettier for code formatting.</li><li>Make sure you don&#39;t use incompatible APIs like <code>async</code>, <code>await</code>.</li></ul></div><h2 id="submitting-a-pull-request" tabindex="-1">Submitting a Pull Request</h2><div class="van-doc-card"><h3 id="reference-guide" tabindex="-1">Reference Guide</h3><p>If this is your first time submitting a pull request on GitHub, you can learn from the following article:</p><ul><li><a href="https://github.com/firstcontributions/first-contributions" target="_blank">First participation in open source</a></li></ul></div><div class="van-doc-card"><h3 id="pull-request-specification" tabindex="-1">Pull Request Specification</h3><p>When submitting a Pull Request, please note:</p><ul><li>Keep your PRs small enough that a PR only addresses a single issue or adds a single feature.</li><li>When adding new components or modifying original components, remember to add or modify the corresponding unit tests to ensure the stability of the code.</li><li>Please include an appropriate description in the PR, and link related issues.</li></ul></div><div class="van-doc-card"><h3 id="pull-request-process" tabindex="-1">Pull Request Process</h3><ol><li>Fork the main repository. If you have already forked, please synchronize the latest code from the main repository.</li><li>Create a new branch based on the main branch of the repository after the fork, such as <code>feature/button_color</code>.</li><li>Develop on the new branch. When development is complete, submit a pull request to the main branch of the main repository.</li><li>The pull request is merged into the main repository after the review is approved.</li><li>Wait for Vant to release a new version, usually once a week.</li></ol></div><div class="van-doc-card"><h3 id="pull-request-title-format" tabindex="-1">Pull Request Title Format</h3><p>The title of the Pull Request should be in the following format:</p><pre><code class="language-bash"><span class="hljs-built_in">type</span>(ComponentName?)：commit message
</code></pre><p>Example：</p><ul><li>docs: fix typo in quickstart</li><li>build: optimize build speed</li><li>fix(Button): incorrect style</li><li>feat(Button): add color prop</li></ul><p>Allowed Types:</p><ul><li>fix</li><li>feat</li><li>docs</li><li>perf</li><li>test</li><li>types</li><li>style</li><li>build</li><li>chore</li><li>release</li><li>refactor</li><li>breaking change</li><li>revert:</li></ul></div><div class="van-doc-card"><h3 id="synchronize-the-latest-code" tabindex="-1">Synchronize the latest code</h3><p>Before submitting a Pull Request, please synchronize the latest code of the main repository according to the following process:</p><pre><code class="language-bash"><span class="hljs-comment"># Add the main repository to remote</span>
git remote add upstream git@github.com:vant-ui/vant.git

<span class="hljs-comment"># Pull the latest code from the main repository</span>
git fetch upstream

<span class="hljs-comment"># Switch to the main branch</span>
git checkout main

<span class="hljs-comment"># Merge the code from the main repository</span>
git merge upstream/main
</code></pre></div>`,14),r=[s];function l(c,d){return t(),o("div",a,r)}const h=e(i,[["render",l]]);export{h as default};

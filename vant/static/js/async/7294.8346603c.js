/*! For license information please see 7294.8346603c.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["7294"],{16606:function(t,a,e){"use strict";e.r(a),e.d(a,{default:function(){return r}});var n=e("8525"),i=e("35859"),r=(0,i.default)({},[["render",n.render]])},8525:function(t,a,e){"use strict";e.r(a);var n=e("69070");e.es(n,a)},69070:function(t,a,e){"use strict";e.r(a),e.d(a,{render:function(){return s}});var n=e("38613");let i={class:"van-doc-markdown-body"},r=[(0,n.createStaticVNode)('<div class="van-doc-card"><div class="van-doc-intro"><img class="van-doc-intro__logo" style="width:120px;height:120px;" src="https://fastly.jsdelivr.net/npm/@vant/assets/logo.png"><h2 style="margin:0;font-size:36px;line-height:60px;">Vant</h2><p>A lightweight, customizable Vue UI library for mobile web apps.</p></div></div><div class="van-doc-card"><h3 id="features" tabindex="-1">Features</h3><ul><li>\uD83D\uDE80 1KB Component average size (min+gzip)</li><li>\uD83D\uDE80 80+ High quality components</li><li>\uD83D\uDE80 Zero third-party dependencies</li><li>\uD83D\uDCAA 90%+ Unit test coverage</li><li>\uD83D\uDCAA Written in TypeScript</li><li>\uD83D\uDCD6 Extensive documentation and demos</li><li>\uD83D\uDCD6 Provide Sketch and Axure design resources</li><li>\uD83C\uDF6D Support Vue 2 &amp; Vue 3</li><li>\uD83C\uDF6D Support Nuxt 2 &amp; Nuxt 3, provide <a href="https://github.com/vant-ui/vant-nuxt" target="_blank">Vant Module</a> for Nuxt</li><li>\uD83C\uDF6D Support Tree Shaking</li><li>\uD83C\uDF6D Support Custom Theme</li><li>\uD83C\uDF6D Support Accessibility (still improving)</li><li>\uD83C\uDF6D Support Dark Mode</li><li>\uD83C\uDF6D Support SSR</li><li>\uD83C\uDF0D Support i18n, built-in 30+ languages</li></ul></div><h2 id="scaffold" tabindex="-1">Scaffold</h2><p>It is recommended to use <a href="https://github.com/web-infra-dev/rsbuild" target="_blank">Rsbuild</a> to create a scaffold project.</p><p>Rsbuild is a build tool based on Rspack, developed by the author of Vant, with first-class build speed and development experience, providing first-priority support for Vant.</p><p>You can create a Rsbuild project with the following command:</p><pre><code class="language-bash">npm create rsbuild@latest\n</code></pre><p>Please visit the <a href="https://github.com/web-infra-dev/rsbuild" target="_blank">Rsbuild repository</a> for more information.</p><div class="van-doc-card"><h3 id="quickstart" tabindex="-1">Quickstart</h3><p>See in <a href="#/en-US/quickstart" target="_blank">Quickstart</a>.</p></div><div class="van-doc-card"><h3 id="browser-support" tabindex="-1">Browser Support</h3><p>Vant 2 supports modern browsers and Android &gt;= 4.0\u3001iOS &gt;= 8.0.</p><p>Vant 3/4 supports modern browsers and Chrome &gt;= 51\u3001iOS &gt;= 10.0 (same as Vue 3).</p></div><div class="van-doc-card"><h3 id="maintenance-status" tabindex="-1">Maintenance Status</h3><p>The current maintenance status of each version of Vant is as follows:</p><table><thead><tr><th>Name</th><th>Framework</th><th>Release</th><th>Latest Version</th><th>Status</th></tr></thead><tbody><tr><td>Vant 4</td><td>Vue 3</td><td><code>2022.12</code></td><td><img src="https://img.shields.io/npm/v/vant/latest?style=flat-square" alt=""></td><td>Under active development</td></tr><tr><td>Vant 3</td><td>Vue 3</td><td><code>2020.12</code></td><td><img src="https://img.shields.io/npm/v/vant/latest-v3?style=flat-square" alt=""></td><td>Bugfix only</td></tr><tr><td>Vant 2</td><td>Vue 2</td><td><code>2019.06</code></td><td><img src="https://img.shields.io/npm/v/vant/latest-v2?style=flat-square" alt=""></td><td>Bugfix only</td></tr><tr><td>Vant 1</td><td>Vue 2</td><td><code>2018.03</code></td><td><img src="https://img.shields.io/npm/v/vant/latest-v1?style=flat-square" alt=""></td><td>End of life</td></tr></tbody></table></div><h2 id="links" tabindex="-1">Links</h2><div class="van-doc-card"><h3 id="official-ecosystem" tabindex="-1">Official Ecosystem</h3><table><thead><tr><th>Project</th><th>Description</th></tr></thead><tbody><tr><td><a href="https://github.com/vant-ui/vant-weapp" target="_blank">vant-weapp</a></td><td>WeChat MiniProgram UI</td></tr><tr><td><a href="https://github.com/vant-ui/vant-demo" target="_blank">vant-demo</a></td><td>Collection of Vant demos</td></tr><tr><td><a href="https://github.com/vant-ui/vant/tree/main/packages/vant-cli" target="_blank">vant-cli</a></td><td>Scaffold for UI library</td></tr><tr><td><a href="https://github.com/vant-ui/vant/tree/main/packages/vant-icons" target="_blank">vant-icons</a></td><td>Vant icons</td></tr><tr><td><a href="https://github.com/vant-ui/vant/tree/main/packages/vant-touch-emulator" target="_blank">vant-touch-emulator</a></td><td>Using vant in desktop browsers</td></tr><tr><td><a href="https://github.com/vant-ui/vant-nuxt" target="_blank">vant-nuxt</a></td><td>Vant module for Nuxt</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="community-ecosystem" tabindex="-1">Community Ecosystem</h3><table><thead><tr><th>Project</th><th>Description</th></tr></thead><tbody><tr><td><a href="https://github.com/3lang3/react-vant" target="_blank">3lang3/react-vant</a></td><td>React mobile UI Components based on Vant</td></tr><tr><td><a href="https://github.com/ant-move/Vant-Aliapp" target="_blank">vant-aliapp</a></td><td>Alipay MiniProgram UI</td></tr><tr><td><a href="https://gitee.com/mallfoundry/taroify" target="_blank">taroify</a></td><td>Vant Taro</td></tr><tr><td><a href="https://github.com/Aisen60/vant-theme" target="_blank">vant-theme</a></td><td>Online theme preview built on Vant UI</td></tr><tr><td><a href="https://github.com/antmjs/vantui" target="_blank">@antmjs/vantui</a></td><td>Mobile UI Components based on Vant, supporting Taro and React</td></tr><tr><td><a href="https://github.com/LadyChatterleyLover/vant-playground" target="_blank">vant-playground</a></td><td>Vant Playground</td></tr><tr><td><a href="https://github.com/zhixiaoqiang/sfc-playground-vant" target="_blank">sfc-playground-vant</a></td><td>Vant Playground</td></tr><tr><td><a href="https://github.com/yulimchen/vue3-h5-template" target="_blank">vue3-h5-template</a></td><td>Mobile project template based on Vant</td></tr><tr><td><a href="https://github.com/CharleeWa/vue3-vant-mobile" target="_blank">vue3-vant-mobile</a></td><td>Mobile project template based on Vant</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="other-links" tabindex="-1">Other Links</h3><ul><li><a href="https://github.com/vant-ui/vant/issues" target="_blank">Feedback</a></li><li><a href="#/en-US/changelog" target="_blank">Changelog</a></li><li><a href="https://github.com/vant-ui/vant/discussions" target="_blank">Discussions</a></li></ul></div><h2 id="contribution" tabindex="-1">Contribution</h2><div class="van-doc-card"><h3 id="core-team" tabindex="-1">Core Team</h3><p>Core contributors of Vant and Vant Weapp:</p><table><thead><tr><th style="text-align:center;"><a href="https://github.com/chenjiahan/" target="_blank"><img src="https://avatars.githubusercontent.com/u/7237365?s=80&amp;v=4" alt="chenjiahan"></a></th><th style="text-align:center;"><a href="https://github.com/cookfront/" target="_blank"><img src="https://avatars.githubusercontent.com/u/4829465?s=80&amp;v=4" alt="cookfront"></a></th><th style="text-align:center;"><a href="https://github.com/w91/" target="_blank"><img src="https://avatars.githubusercontent.com/u/2599455?s=80&amp;v=4" alt="w91"></a></th><th style="text-align:center;"><a href="https://github.com/pangxie1991/" target="_blank"><img src="https://avatars.githubusercontent.com/u/5961240?s=80&amp;v=4" alt="pangxie1991"></a></th><th style="text-align:center;"><a href="https://github.com/rex-zsd/" target="_blank"><img src="https://avatars.githubusercontent.com/u/8767877?s=80&amp;v=4" alt="rex-zsd"></a></th><th style="text-align:center;"><a href="https://github.com/nemo-shen/" target="_blank"><img src="https://avatars.githubusercontent.com/u/13480805?s=80&amp;v=4" alt="nemo-shen"></a></th></tr></thead><tbody><tr><td style="text-align:center;"><a href="https://github.com/chenjiahan/" target="_blank">chenjiahan</a></td><td style="text-align:center;"><a href="https://github.com/cookfront/" target="_blank">cookfront</a></td><td style="text-align:center;"><a href="https://github.com/w91/" target="_blank">wangnaiyi</a></td><td style="text-align:center;"><a href="https://github.com/pangxie1991/" target="_blank">pangxie</a></td><td style="text-align:center;"><a href="https://github.com/rex-zsd/" target="_blank">rex-zsd</a></td><td style="text-align:center;"><a href="https://github.com/nemo-shen/" target="_blank">nemo-shen</a></td></tr></tbody></table><table><thead><tr><th style="text-align:center;"><a href="https://github.com/Lindysen/" target="_blank"><img src="https://avatars.githubusercontent.com/u/33708359?s=80&amp;v=4" alt="Lindysen"></a></th><th style="text-align:center;"><a href="https://github.com/JakeLaoyu/" target="_blank"><img src="https://avatars.githubusercontent.com/u/16181940?s=80&amp;v=4" alt="JakeLaoyu"></a></th><th style="text-align:center;"><a href="https://github.com/landluck/" target="_blank"><img src="https://avatars.githubusercontent.com/u/27060081?s=80&amp;v=4" alt="landluck"></a></th><th style="text-align:center;"><a href="https://github.com/wjw-gavin/" target="_blank"><img src="https://avatars.githubusercontent.com/u/19986739?s=80&amp;v=4" alt="wjw-gavin"></a></th><th style="text-align:center;"><a href="https://github.com/inottn/" target="_blank"><img src="https://avatars.githubusercontent.com/u/18509404?s=80&amp;v=4" alt="inottn"></a></th><th style="text-align:center;"><a href="https://github.com/zhousg/" target="_blank"><img src="https://avatars.githubusercontent.com/u/15833290?s=80&amp;v=4" alt="zhousg"></a></th></tr></thead><tbody><tr><td style="text-align:center;"><a href="https://github.com/Lindysen/" target="_blank">Lindysen</a></td><td style="text-align:center;"><a href="https://github.com/JakeLaoyu/" target="_blank">JakeLaoyu</a></td><td style="text-align:center;"><a href="https://github.com/landluck/" target="_blank">landluck</a></td><td style="text-align:center;"><a href="https://github.com/wjw-gavin/" target="_blank">wjw-gavin</a></td><td style="text-align:center;"><a href="https://github.com/inottn/" target="_blank">inottn</a></td><td style="text-align:center;"><a href="https://github.com/zhousg/" target="_blank">zhousg</a></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="all-contributors" tabindex="-1">All Contributors</h3><p>Thanks to the following friends for their contributions to Vant:</p><a href="https://github.com/vant-ui/vant/graphs/contributors" target="_black"><img src="https://opencollective.com/vant/contributors.svg?width=890&amp;button=false" alt="contributors" style="width:100%;margin:16px 0;"></a></div><div class="van-doc-card"><h3 id="contribution-guide" tabindex="-1">Contribution Guide</h3><p>Please make sure to read the <a href="https://github.com/vant-ui/vant/blob/main/.github/CONTRIBUTING.md" target="_blank">Contributing Guide</a> before making a pull request.</p></div><div class="van-doc-card"><h3 id="license" tabindex="-1">LICENSE</h3><p><a href="https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89" target="_blank">MIT</a>.</p></div>',20)];function s(t,a){return(0,n.openBlock)(),(0,n.createElementBlock)("div",i,r)}}}]);
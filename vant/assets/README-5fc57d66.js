import{o as s,a as e,z as d}from"./vue-libs-a0ef9506.js";const a={class:"van-doc-markdown-body"},n=d(`<h1>AddressEdit</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to create, update, and delete receiving addresses.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">AddressEdit</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">AddressEdit</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-address-edit</span>
  <span class="hljs-attr">:area-list</span>=<span class="hljs-string">&quot;areaList&quot;</span>
  <span class="hljs-attr">show-delete</span>
  <span class="hljs-attr">show-set-default</span>
  <span class="hljs-attr">show-search-result</span>
  <span class="hljs-attr">:search-result</span>=<span class="hljs-string">&quot;searchResult&quot;</span>
  <span class="hljs-attr">:area-columns-placeholder</span>=<span class="hljs-string">&quot;[&#39;Choose&#39;, &#39;Choose&#39;, &#39;Choose&#39;]&quot;</span>
  @<span class="hljs-attr">save</span>=<span class="hljs-string">&quot;onSave&quot;</span>
  @<span class="hljs-attr">delete</span>=<span class="hljs-string">&quot;onDelete&quot;</span>
  @<span class="hljs-attr">change-detail</span>=<span class="hljs-string">&quot;onChangeDetail&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> searchResult = <span class="hljs-title function_">ref</span>([]);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSave</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;save&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onDelete</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;delete&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChangeDetail</span> = (<span class="hljs-params">val</span>) =&gt; {
      <span class="hljs-keyword">if</span> (val) {
        searchResult.<span class="hljs-property">value</span> = [
          {
            <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Name1&#39;</span>,
            <span class="hljs-attr">address</span>: <span class="hljs-string">&#39;Address&#39;</span>,
          },
        ];
      } <span class="hljs-keyword">else</span> {
        searchResult.<span class="hljs-property">value</span> = [];
      }
    };

    <span class="hljs-keyword">return</span> {
      onSave,
      onDelete,
      areaList,
      searchResult,
      onChangeDetail,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>area-list</td><td>Area List</td><td><em>object</em></td><td>-</td></tr><tr><td>area-columns-placeholder</td><td>placeholder of area columns</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td>area-placeholder</td><td>placeholder of area input field</td><td><em>string</em></td><td><code>Area</code></td></tr><tr><td>address-info</td><td>Address Info</td><td><em>AddressEditInfo</em></td><td><code>{}</code></td></tr><tr><td>search-result</td><td>Address search result</td><td><em>AddressEditSearchItem[]</em></td><td><code>[]</code></td></tr><tr><td>show-delete</td><td>Whether to show delete button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-set-default</td><td>Whether to show default address switch</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-search-result</td><td>Whether to show address search result</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-area</td><td>Whether to show area cell</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-detail</td><td>Whether to show detail field</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>disable-area</td><td>Whether to disable area select</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>save-button-text</td><td>Save button text</td><td><em>string</em></td><td><code>Save</code></td></tr><tr><td>delete-button-text</td><td>Delete button text</td><td><em>string</em></td><td><code>Delete</code></td></tr><tr><td>detail-rows</td><td>Detail input rows</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>detail-maxlength</td><td>Detail maxlength</td><td><em>number | string</em></td><td><code>200</code></td></tr><tr><td>is-saving</td><td>Whether to show save button loading status</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>is-deleting</td><td>Whether to show delete button loading status</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>tel-validator</td><td>The method to validate tel</td><td><em>(tel: string) =&gt; boolean</em></td><td>-</td></tr><tr><td>tel-maxlength</td><td>Tel maxlength</td><td><em>number | string</em></td><td>-</td></tr><tr><td>validator</td><td>Custom validator</td><td><em>(key, val) =&gt; string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>save</td><td>Emitted when the save button is clicked</td><td><em>info: AddressEditInfo</em></td></tr><tr><td>focus</td><td>Emitted when field is focused</td><td><em>key: string</em></td></tr><tr><td>delete</td><td>Emitted when confirming delete</td><td><em>info: AddressEditInfo</em></td></tr><tr><td>select-search</td><td>Emitted when a search result is selected</td><td><em>value: string</em></td></tr><tr><td>click-area</td><td>Emitted when the area field is clicked</td><td>-</td></tr><tr><td>change-area</td><td>Emitted when area changed</td><td><em>selectedOptions: PickerOption[]</em></td></tr><tr><td>change-detail</td><td>Emitted when address detail changed</td><td><em>value: string</em></td></tr><tr><td>change-default</td><td>Emitted when switching default address</td><td><em>checked: boolean</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Custom content below address detail</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3><p>Use <a href="https://v3.vuejs.org/guide/component-template-refs.html" target="_blank">ref</a> to get AddressEdit instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>setAddressDetail</td><td>Set address detail</td><td><em>addressDetail: string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">AddressEditInfo</span>,
  <span class="hljs-title class_">AddressEditProps</span>,
  <span class="hljs-title class_">AddressEditInstance</span>,
  <span class="hljs-title class_">AddressEditSearchItem</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>AddressEditInstance</code> is the type of component instance:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">AddressEditInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> addressEditRef = ref&lt;<span class="hljs-title class_">AddressEditInstance</span>&gt;();

addressEditRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">setAddressDetail</span>(<span class="hljs-string">&#39;&#39;</span>);
</code></pre></div><div class="van-doc-card"><h3 id="addresseditinfo-data-structure" tabindex="-1">AddressEditInfo Data Structure</h3><table><thead><tr><th>key</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>name</td><td>Name</td><td><em>string</em></td></tr><tr><td>tel</td><td>Phone</td><td><em>string</em></td></tr><tr><td>province</td><td>Province</td><td><em>string</em></td></tr><tr><td>city</td><td>City</td><td><em>string</em></td></tr><tr><td>county</td><td>County</td><td><em>string</em></td></tr><tr><td>addressDetail</td><td>Detailed Address</td><td><em>string</em></td></tr><tr><td>areaCode</td><td>Area code</td><td><em>string</em></td></tr><tr><td>isDefault</td><td>Is default address</td><td><em>boolean</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="addresseditsearchitem-data-structure" tabindex="-1">AddressEditSearchItem Data Structure</h3><table><thead><tr><th>key</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>name</td><td>Name</td><td><em>string</em></td></tr><tr><td>address</td><td>Address</td><td><em>string</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="area-data-structure" tabindex="-1">Area Data Structure</h3><p>Please refer to <a href="#/en-US/area" target="_blank">Area</a> component.</p></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-address-edit-padding</td><td><em>var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-address-edit-buttons-padding</td><td><em>var(--van-padding-xl) var(--van-padding-base)</em></td><td>-</td></tr><tr><td>--van-address-edit-button-margin-bottom</td><td><em>var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-address-edit-button-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr></tbody></table></div>`,16),r=[n],p={__name:"README",setup(l,{expose:t}){return t({frontmatter:{}}),(c,i)=>(s(),e("div",a,r))}};export{p as default};

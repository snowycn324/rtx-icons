<template><div><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token comment"># install rtx-icons by npm</span>
<span class="token function">npm</span> <span class="token function">install</span> rtx-icons <span class="token parameter variable">-S</span>
<span class="token comment"># install rtx-icons by yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> rtx-icons <span class="token parameter variable">-S</span>
<span class="token comment"># install rtx-icons by pnpm</span>
<span class="token function">pnpm</span> <span class="token function">install</span> rtx-icons <span class="token parameter variable">-S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usage-nuxt3" tabindex="-1"><a class="header-anchor" href="#usage-nuxt3"><span>Usage(Nuxt3)</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// use in plugins/rtxIcons.ts</span>
<span class="token keyword">import</span> RtxIconsPlugin <span class="token keyword">from</span> <span class="token string">'rtx-icons'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtPlugin</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">nuxtApp</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  nuxtApp<span class="token punctuation">.</span>vueApp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>RtxIconsPlugin<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="version" tabindex="-1"><a class="header-anchor" href="#version"><span>Version</span></a></h3>
<p>Now the latest version of RTX-Icons is <code v-pre>0.0.1</code></p>
</div></template>



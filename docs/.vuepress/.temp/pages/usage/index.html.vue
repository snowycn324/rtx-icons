<template><div><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># install rtx-icons by npm</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> rtx-icons <span class="token parameter variable">-S</span></span>
<span class="line"><span class="token comment"># install rtx-icons by yarn</span></span>
<span class="line"><span class="token function">yarn</span> <span class="token function">add</span> rtx-icons <span class="token parameter variable">-S</span></span>
<span class="line"><span class="token comment"># install rtx-icons by pnpm</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">install</span> rtx-icons <span class="token parameter variable">-S</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usage-nuxt3" tabindex="-1"><a class="header-anchor" href="#usage-nuxt3"><span>Usage(Nuxt3)</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// use in plugins/rtxIcons.ts</span></span>
<span class="line"><span class="token keyword">import</span> RtxIconsPlugin <span class="token keyword">from</span> <span class="token string">'rtx-icons'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtPlugin</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">nuxtApp</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  nuxtApp<span class="token punctuation">.</span>vueApp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>RtxIconsPlugin<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// use in .vue files</span></span>
<span class="line"><span class="token comment">// ...other codes</span></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token doc-comment comment">/** props: color(String), size(Number) */</span></span>
<span class="line">    <span class="token operator">&lt;</span>rtx<span class="token operator">-</span>add color<span class="token operator">=</span><span class="token string">"#fff"</span> <span class="token operator">:</span>size<span class="token operator">=</span><span class="token string">"20"</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">    <span class="token doc-comment comment">/** class: you can also use rtx-tailwindcss as class name to control it's color too */</span></span>
<span class="line">    <span class="token doc-comment comment">/** https://snowycn324.github.io/tailwindcss-rtx/colors/ */</span></span>
<span class="line">    <span class="token operator">&lt;</span>rtx<span class="token operator">-</span>edit <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"text-rtx-red-900"</span> <span class="token operator">:</span>size<span class="token operator">=</span><span class="token string">"20"</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="version" tabindex="-1"><a class="header-anchor" href="#version"><span>Version</span></a></h3>
<p>Now the latest version of RTX-Icons is <code v-pre>0.0.13</code></p>
</div></template>



## Installation
```shell
# install rtx-icons by npm
npm install rtx-icons -S
# install rtx-icons by yarn
yarn add rtx-icons -S
# install rtx-icons by pnpm
pnpm install rtx-icons -S
```

### Usage(Nuxt3)
```javascript
// use in plugins/rtxIcons.ts
import RtxIconsPlugin from 'rtx-icons'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(RtxIconsPlugin)
})

// use in .vue files
// ...other codes
<template>
  <div>
    /** props: color(String), size(Number) */
    <rtx-add color="#fff" :size="20" />
    /** class: you can also use rtx-tailwindcss as class name to control it's color too */
    /** https://snowycn324.github.io/tailwindcss-rtx/colors/ */
    <rtx-edit class="text-rtx-red-900" :size="20" />
  </div>
</template>
```

### Version
Now the latest version of RTX-Icons is ```0.0.2```
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
```

### Version
Now the latest version of RTX-Icons is ```0.0.1```
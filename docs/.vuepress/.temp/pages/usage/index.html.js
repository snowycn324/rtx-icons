import comp from "/Users/SnowyCN/Documents/Projects/rtx-icons/docs/.vuepress/.temp/pages/usage/index.html.vue"
const data = JSON.parse("{\"path\":\"/usage/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Installation\",\"slug\":\"installation\",\"link\":\"#installation\",\"children\":[{\"level\":3,\"title\":\"Usage(Nuxt3)\",\"slug\":\"usage-nuxt3\",\"link\":\"#usage-nuxt3\",\"children\":[]},{\"level\":3,\"title\":\"Version\",\"slug\":\"version\",\"link\":\"#version\",\"children\":[]}]}],\"git\":{\"updatedTime\":1756967824000,\"contributors\":[{\"name\":\"“snowycn324”\",\"email\":\"snowycn324@gmai.com\",\"commits\":8}]},\"filePathRelative\":\"usage/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

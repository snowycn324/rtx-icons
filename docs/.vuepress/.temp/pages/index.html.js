import comp from "/Users/SnowyCN/Documents/Projects/rtx-icons/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/Rakuten.png\",\"tagline\":\"RTX Icons library.\",\"actionText\":\"Try me\",\"actionLink\":\"/colors/\",\"features\":[{\"title\":\"Rich Icons\",\"details\":\"Rich icons for both front end and designer team.\"},{\"title\":\"To Be Continued...\",\"details\":\"We will do more for our team...\"}],\"footer\":\"Made by Rakuten Travel Xchange Custom Site Team ❤\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"Readme.md\"}")
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

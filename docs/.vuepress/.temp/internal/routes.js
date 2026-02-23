export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/SnowyCN/Documents/Projects/rtx-icons/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/usage/", { loader: () => import(/* webpackChunkName: "usage_index.html" */"/Users/SnowyCN/Documents/Projects/rtx-icons/docs/.vuepress/.temp/pages/usage/index.html.js"), meta: {"title":""} }],
  ["/icons/", { loader: () => import(/* webpackChunkName: "icons_index.html" */"/Users/SnowyCN/Documents/Projects/rtx-icons/docs/.vuepress/.temp/pages/icons/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/SnowyCN/Documents/Projects/rtx-icons/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

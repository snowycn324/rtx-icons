export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/SnowyCN/Documents/Projects/rtx-icons/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/usage/", { loader: () => import(/* webpackChunkName: "usage_index.html" */"/Users/SnowyCN/Documents/Projects/rtx-icons/docs/.vuepress/.temp/pages/usage/index.html.js"), meta: {"title":""} }],
  ["/icons/", { loader: () => import(/* webpackChunkName: "icons_index.html" */"/Users/SnowyCN/Documents/Projects/rtx-icons/docs/.vuepress/.temp/pages/icons/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/SnowyCN/Documents/Projects/rtx-icons/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

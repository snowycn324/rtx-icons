import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Icons", defineAsyncComponent(() => import("/Users/SnowyCN/Documents/Projects/rtx-icons/docs/.vuepress/components/Icons.vue"))),
      app.component("PickColors", defineAsyncComponent(() => import("/Users/SnowyCN/Documents/Projects/rtx-icons/node_modules/vue-pick-colors")))
  },
}

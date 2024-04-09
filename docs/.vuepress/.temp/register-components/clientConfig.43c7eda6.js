import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Icons", defineAsyncComponent(() => import("/Users/SnowyCN/Documents/Projects/rtx-icons/docs/.vuepress/components/Icons.vue"))),
      app.component("Vue3ColorPicker", defineAsyncComponent(() => import("/Users/SnowyCN/Documents/Projects/rtx-icons/docs/.vuepress/vue3-colorpicker")))
  },
}

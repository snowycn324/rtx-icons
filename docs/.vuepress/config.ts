import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)
const { description } = require('../../package')

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    home: 'Home',
    sidebar: false,
    navbar: [
      {
        text: 'Home',
        link: '/',
        activeMatch: "^/$",
      },
      {
        text: 'Usage',
        link: '/usage/',
        activeMatch: "^/usage/$",
      },
      {
        text: 'Icons',
        link: '/icons/',
        activeMatch: "^/icons/$",
      },
      {
        text: 'Github',
        link: 'https://github.com/snowycn324/rtx-icons'
      },
      {
        text: 'Tailwindcss-RTX',
        link: 'https://snowycn324.github.io/tailwindcss-rtx/'
      }
    ]
  }),
  plugins: [
    registerComponentsPlugin({
      components: {
        Icons: path.resolve(__dirname, './components/Icons.vue'),
        PickColors: path.resolve(__dirname, '../../node_modules/vue-pick-colors'),
      }
    }),
  ],
  base: '/rtx-icons/',
  lang: 'zh-CN',
  title: 'Rtx-Icons',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
});

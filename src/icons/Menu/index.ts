import { App } from 'vue';
import Menu from './Menu.vue';

export const MenuPlugin = {
  install(app: App) {
    app.component('rtx-menu', Menu);
  },
};

export { Menu };
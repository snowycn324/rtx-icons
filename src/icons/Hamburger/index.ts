import { App } from 'vue';
import Hamburger from './Hamburger.vue';

export const HamburgerPlugin = {
  install(app: App) {
    app.component('rtx-hamburger', Hamburger);
  },
};

export { Hamburger };
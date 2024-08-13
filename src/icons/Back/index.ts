import { App } from 'vue';
import Back from './Back.vue';

export const BackPlugin = {
  install(app: App) {
    app.component('rtx-back', Back);
  },
};

export { Back };
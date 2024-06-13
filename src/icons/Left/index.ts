import { App } from 'vue';
import Left from './Left.vue';

export const LeftPlugin = {
  install(app: App) {
    app.component('rtx-left', Left);
  },
};

export { Left };
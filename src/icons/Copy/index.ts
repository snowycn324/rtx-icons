import { App } from 'vue';
import Copy from './Copy.vue';

export const CopyPlugin = {
  install(app: App) {
    app.component('rtx-copy', Copy);
  },
};

export { Copy };
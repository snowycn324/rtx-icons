import { App } from 'vue';
import Close from './Close.vue';

export const ClosePlugin = {
  install(app: App) {
    app.component('rtx-close', Close);
  },
};

export { Close };
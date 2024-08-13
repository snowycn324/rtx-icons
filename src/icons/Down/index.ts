import { App } from 'vue';
import Down from './Down.vue';

export const DownPlugin = {
  install(app: App) {
    app.component('rtx-down', Down);
  },
};

export { Down };
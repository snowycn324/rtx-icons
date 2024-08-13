import { App } from 'vue';
import Up from './Up.vue';

export const UpPlugin = {
  install(app: App) {
    app.component('rtx-up', Up);
  },
};

export { Up };
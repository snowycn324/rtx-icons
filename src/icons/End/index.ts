import { App } from 'vue';
import End from './End.vue';

export const EndPlugin = {
  install(app: App) {
    app.component('rtx-end', End);
  },
};

export { End };
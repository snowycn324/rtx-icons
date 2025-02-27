import { App } from 'vue';
import Info from './Info.vue';

export const InfoPlugin = {
  install(app: App) {
    app.component('rtx-info', Info);
  },
};

export { Info };
import { App } from 'vue';
import Demap from './Demap.vue';

export const DemapPlugin = {
  install(app: App) {
    app.component('rtx-demap', Demap);
  },
};

export { Demap };
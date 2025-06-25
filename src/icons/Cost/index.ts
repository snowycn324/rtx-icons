import { App } from 'vue';
import Cost from './Cost.vue';

export const CostPlugin = {
  install(app: App) {
    app.component('rtx-cost', Cost);
  },
};

export { Cost };
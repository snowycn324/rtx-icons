import { App } from 'vue';
import Sales from './Sales.vue';

export const SalesPlugin = {
  install(app: App) {
    app.component('rtx-sales', Sales);
  },
};

export { Sales };
import { App } from 'vue';
import Print from './Print.vue';

export const PrintPlugin = {
  install(app: App) {
    app.component('rtx-print', Print);
  },
};

export { Print };
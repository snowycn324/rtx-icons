import { App } from 'vue';
import Compare from './Compare.vue';

export const ComparePlugin = {
  install(app: App) {
    app.component('rtx-compare', Compare);
  },
};

export { Compare };
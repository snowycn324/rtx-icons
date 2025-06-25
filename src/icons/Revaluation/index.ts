import { App } from 'vue';
import Revaluation from './Revaluation.vue';

export const RevaluationPlugin = {
  install(app: App) {
    app.component('rtx-revaluation', Revaluation);
  },
};

export { Revaluation };
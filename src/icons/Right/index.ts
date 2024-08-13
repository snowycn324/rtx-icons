import { App } from 'vue';
import Right from './Right.vue';

export const RightPlugin = {
  install(app: App) {
    app.component('rtx-right', Right);
  },
};

export { Right };
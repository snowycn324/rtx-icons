import { App } from 'vue';
import Apply from './Apply.vue';

export const ApplyPlugin = {
  install(app: App) {
    app.component('rtx-apply', Apply);
  },
};

export { Apply };
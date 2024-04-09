import { App } from 'vue';
import Edit from './Edit.vue';

export const EditPlugin = {
  install(app: App) {
    app.component('rtx-add', Edit);
  },
};

export { Edit };
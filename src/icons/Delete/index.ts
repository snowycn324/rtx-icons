import { App } from 'vue';
import Delete from './Delete.vue';

export const DeletePlugin = {
  install(app: App) {
    app.component('rtx-delete', Delete);
  },
};

export { Delete };
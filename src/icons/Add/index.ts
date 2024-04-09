import { App } from 'vue';
import Add from './Add.vue';

export const AddPlugin = {
  install(app: App) {
    app.component('rtx-add', Add);
  },
};

export { Add };
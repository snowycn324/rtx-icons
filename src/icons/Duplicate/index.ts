import { App } from 'vue';
import Duplicate from './Duplicate.vue';

export const DuplicatePlugin = {
  install(app: App) {
    app.component('rtx-duplicate', Duplicate);
  },
};

export { Duplicate };
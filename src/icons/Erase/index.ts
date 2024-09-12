import { App } from 'vue';
import Erase from './Erase.vue';

export const ErasePlugin = {
  install(app: App) {
    app.component('rtx-erase', Erase);
  },
};

export { Erase };
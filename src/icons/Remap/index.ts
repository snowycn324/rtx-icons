import { App } from 'vue';
import Remap from './Remap.vue';

export const RemapPlugin = {
  install(app: App) {
    app.component('rtx-remap', Remap);
  },
};

export { Remap };
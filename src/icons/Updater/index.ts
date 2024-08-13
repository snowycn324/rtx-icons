import { App } from 'vue';
import Updater from './Updater.vue';

export const UpdaterPlugin = {
  install(app: App) {
    app.component('rtx-updater', Updater);
  },
};

export { Updater };
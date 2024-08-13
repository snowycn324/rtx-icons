import { App } from 'vue';
import Download from './Download.vue';

export const DownloadPlugin = {
  install(app: App) {
    app.component('rtx-download', Download);
  },
};

export { Download };
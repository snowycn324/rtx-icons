import { App } from 'vue';
import Upload from './Upload.vue';

export const UploadPlugin = {
  install(app: App) {
    app.component('rtx-upload', Upload);
  },
};

export { Upload };
import { App } from 'vue';
import Refresh from './Refresh.vue';

export const RefreshPlugin = {
  install(app: App) {
    app.component('rtx-refresh', Refresh);
  },
};

export { Refresh };
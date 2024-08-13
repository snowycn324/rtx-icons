import { App } from 'vue';
import Chain from './Chain.vue';

export const ChainPlugin = {
  install(app: App) {
    app.component('rtx-chain', Chain);
  },
};

export { Chain };
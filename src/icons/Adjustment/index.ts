import { App } from 'vue';
import Adjustment from './Adjustment.vue';

export const AdjustmentPlugin = {
  install(app: App) {
    app.component('rtx-adjustment', Adjustment);
  },
};

export { Adjustment };
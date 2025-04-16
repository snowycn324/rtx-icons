import { App } from 'vue';
import Activation from './Activation.vue';

export const ActivationPlugin = {
  install(app: App) {
    app.component('rtx-activation', Activation);
  },
};

export { Activation };
import { App } from 'vue';
import Minus from './Minus.vue';

export const MinusPlugin = {
  install(app: App) {
    app.component('rtx-minus', Minus);
  },
};

export { Minus };
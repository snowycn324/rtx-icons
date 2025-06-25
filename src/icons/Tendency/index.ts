import { App } from 'vue';
import Tendency from './Tendency.vue';

export const TendencyPlugin = {
  install(app: App) {
    app.component('rtx-tendency', Tendency);
  },
};

export { Tendency };
import { App } from 'vue';
import Option from './Option.vue';

export const OptionPlugin = {
  install(app: App) {
    app.component('rtx-option', Option);
  },
};

export { Option };
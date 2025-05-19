import { App } from 'vue';
import Dropdown from './Dropdown.vue';

export const DropdownPlugin = {
  install(app: App) {
    app.component('rtx-dropdown', Dropdown);
  },
};

export { Dropdown };
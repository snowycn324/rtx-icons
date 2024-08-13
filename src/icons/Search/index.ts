import { App } from 'vue';
import Search from './Search.vue';

export const SearchPlugin = {
  install(app: App) {
    app.component('rtx-search', Search);
  },
};

export { Search };
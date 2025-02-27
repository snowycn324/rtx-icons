import { App } from 'vue';
import User from './User.vue';

export const UserPlugin = {
  install(app: App) {
    app.component('rtx-user', User);
  },
};

export { User };
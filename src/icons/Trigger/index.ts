import { App } from 'vue';
import Trigger from './Trigger.vue';

export const TriggerPlugin = {
  install(app: App) {
    app.component('rtx-trigger', Trigger);
  },
};

export { Trigger };
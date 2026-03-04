import { App } from 'vue';
import DateRange from './DateRange.vue';

export const DateRangePlugin = {
  install(app: App) {
    app.component('rtx-date-range', DateRange);
  },
};

export { DateRange };
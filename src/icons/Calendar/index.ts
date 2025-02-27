import { App } from 'vue';
import Calendar from './Calendar.vue';

export const CalendarPlugin = {
  install(app: App) {
    app.component('rtx-calendar', Calendar);
  },
};

export { Calendar };
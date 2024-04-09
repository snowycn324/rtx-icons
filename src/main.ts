import { App } from 'vue';
import { AddPlugin } from '@icons/Add';
import { ClosePlugin } from '@icons/Close';
import { EditPlugin } from '@icons/Edit';

const RtxIconsPlugin = {
  install: (app: App) => {
    app.use(AddPlugin);
    app.use(ClosePlugin);
    app.use(EditPlugin);
  }
}
export default RtxIconsPlugin;

export * from "./icons/Add";
export * from "./icons/Close";
export * from "./icons/Edit";
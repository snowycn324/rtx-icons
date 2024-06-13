import { App } from 'vue';
import { AddPlugin } from '@icons/Add';
import { ClosePlugin } from '@icons/Close';
import { EditPlugin } from '@icons/Edit';
import { LeftPlugin } from '@icons/Left';

const RtxIconsPlugin = {
  install: (app: App) => {
    app.use(AddPlugin);
    app.use(ClosePlugin);
    app.use(EditPlugin);
    app.use(LeftPlugin);
  }
}
export default RtxIconsPlugin;

// export * from "./icons/Add";
// export * from "./icons/Close";
// export * from "./icons/Edit";
import { App } from 'vue';
import { AddPlugin } from '@icons/Add';
import { ClosePlugin } from '@icons/Close';
import { EditPlugin } from '@icons/Edit';
import { LeftPlugin } from '@icons/Left';
import { HamburgerPlugin } from '@icons/Hamburger';
import { BackPlugin } from '@icons/Back';
import { SearchPlugin } from '@icons/Search';
import { DemapPlugin } from '@icons/Demap';
import { RemapPlugin } from '@icons/Remap';
import { ChainPlugin } from '@icons/Chain';
import { RightPlugin } from '@icons/Right';
import { DeletePlugin } from '@icons/Delete';
import { CopyPlugin } from '@icons/Copy';
import { DownPlugin } from '@icons/Down';
import { UpPlugin } from '@icons/Up';
import { TriggerPlugin } from '@icons/Trigger';
import { DownloadPlugin } from '@icons/Download';
import { UpdaterPlugin } from '@icons/Updater';

const RtxIconsPlugin = {
  install: (app: App) => {
    app.use(AddPlugin);
    app.use(ClosePlugin);
    app.use(EditPlugin);
    app.use(LeftPlugin);
    app.use(HamburgerPlugin);
    app.use(BackPlugin);
    app.use(SearchPlugin);
    app.use(DemapPlugin);
    app.use(RemapPlugin);
    app.use(ChainPlugin);
    app.use(RightPlugin);
    app.use(DeletePlugin);
    app.use(CopyPlugin);
    app.use(DownPlugin);
    app.use(UpPlugin);
    app.use(TriggerPlugin);
    app.use(DownloadPlugin);
    app.use(UpdaterPlugin);
  }
}
export default RtxIconsPlugin;

// export * from "./icons/Add";
// export * from "./icons/Close";
// export * from "./icons/Edit";
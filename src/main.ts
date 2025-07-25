import { App } from 'vue';
import { AddPlugin } from '@icons/Add';
import { ClosePlugin } from '@icons/Close';
import { EditPlugin } from '@icons/Edit';
import { LeftPlugin } from '@icons/Left';
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
import { ErasePlugin } from '@icons/Erase';
import { MenuPlugin } from '@icons/Menu';
import { ComparePlugin } from '@icons/Compare';
import { UserPlugin } from '@icons/User';
import { CalendarPlugin } from '@icons/Calendar';
import { ApplyPlugin } from '@icons/Apply';
import { MinusPlugin } from '@icons/Minus';
import { PrintPlugin } from '@icons/Print';
import { InfoPlugin } from '@icons/Info';
import { DuplicatePlugin } from '@icons/Duplicate';
import { ActivationPlugin } from '@icons/Activation';
import { EndPlugin } from '@icons/End';
import { DropdownPlugin } from '@icons/Dropdown';
import { SalesPlugin } from '@icons/Sales';
import { CostPlugin } from '@icons/Cost';
import { AdjustmentPlugin } from '@icons/Adjustment';
import { RevaluationPlugin } from '@icons/Revaluation';
import { TendencyPlugin } from '@icons/Tendency';

const RtxIconsPlugin = {
  install: (app: App) => {
    app.use(AddPlugin);
    app.use(ClosePlugin);
    app.use(EditPlugin);
    app.use(LeftPlugin);
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
    app.use(ErasePlugin);
    app.use(MenuPlugin);
    app.use(ComparePlugin);
    app.use(UserPlugin);
    app.use(CalendarPlugin);
    app.use(ApplyPlugin);
    app.use(MinusPlugin);
    app.use(PrintPlugin);
    app.use(InfoPlugin);
    app.use(DuplicatePlugin);
    app.use(ActivationPlugin);
    app.use(EndPlugin);
    app.use(DropdownPlugin);
    app.use(SalesPlugin);
    app.use(CostPlugin);
    app.use(AdjustmentPlugin);
    app.use(RevaluationPlugin);
    app.use(TendencyPlugin);
  }
}
export default RtxIconsPlugin;

// export * from "./icons/Add";
// export * from "./icons/Close";
// export * from "./icons/Edit";
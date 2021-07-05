import {IIcon} from '../icon/icon.interface';

export interface IModalData {
  icon?: IIcon;
  messageMain?: string;
  actionName?: string;
  messageSub?: string;
  closeBtnName?: string;
}

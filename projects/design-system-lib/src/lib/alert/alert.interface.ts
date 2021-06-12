import {IIcon} from '../icon/icon.interface';

export interface IAlertData {
  icon?: IIcon;
  messageMain?: string;
  actionName?: string;
  messageSub?: string;
  closeBtnName?: string;
}

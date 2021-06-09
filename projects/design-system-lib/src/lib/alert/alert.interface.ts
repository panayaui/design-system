import {IIcon} from '../icon/icon.interface';
import {AlertEnum} from './alert.enum';

export interface IAlertData {
  type: AlertEnum;
  icon?: IIcon;
  messageMain?: string;
  actionName?: string;
  messageSub?: string;
  closeBtnName?: string;
}

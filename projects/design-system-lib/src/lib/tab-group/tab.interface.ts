import {IIcon} from '../icon/icon.interface';

export interface ITab {
  labelName: string;
  labelIcon?: IIcon;
  labelNotification?: boolean;
  labelCounter?: number;
}

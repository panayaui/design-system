import {IIcon} from '../icon/icon.interface';

export interface ITab {
  labelName: string;
  labelIcon: IIcon;
  labelNotification: true;
  labelCounter: number;
}

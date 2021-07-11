import {IIcon} from '../icon/icon.interface';

export interface IChip {
  labelName: string;
  labelIcon?: IIcon;
  labelNotification?: boolean;
  labelCounter?: number;
}

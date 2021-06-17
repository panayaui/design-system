import {IIcon} from '../icon/icon.interface';
import {ButtonTypeEnum} from '../button/button-type.enum';

export interface IMenuButton {
  label: string;
  buttonType: ButtonTypeEnum;
  icon: IIcon;
}

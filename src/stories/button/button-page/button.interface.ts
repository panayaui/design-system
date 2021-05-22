import {ButtonTypeEnum} from './button-type.enum';

export default interface IButton {
  label: string;
  large: boolean;
  disabled: boolean;
  iconBefore: string;
  iconAfter: string;
  buttonType: ButtonTypeEnum;
}

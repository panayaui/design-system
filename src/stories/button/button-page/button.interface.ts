import {ButtonTypeEnum} from './button-type.enum';

export default interface IButton {
  label: string;
  large: boolean;
  disabled: boolean;
  iconBefore: string;
  iconBeforeWidth: string;
  iconBeforeHeight: string;
  iconAfter: string;
  iconAfterWidth: string;
  iconAfterHeight: string;
  buttonType: ButtonTypeEnum;
}

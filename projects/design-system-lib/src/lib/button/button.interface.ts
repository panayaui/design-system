import {ButtonTypeEnum} from './button-type.enum';

export interface IButton {
  label: string;
  large: boolean;
  disabled: boolean;
  iconBefore: string;
  iconBeforeWidth: string;
  iconBeforeHeight: string;
  iconBeforeStrokeWidth: number;
  iconAfter: string;
  iconAfterWidth: string;
  iconAfterHeight: string;
  iconAfterStrokeWidth: number;
  buttonType: ButtonTypeEnum;
}

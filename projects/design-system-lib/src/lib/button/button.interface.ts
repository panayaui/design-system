import {ButtonTypeEnum} from './button-type.enum';
import {Input} from '@angular/core';

export interface IButton {
  label: string;
  ariaLabel: string;
  large: boolean;
  disabled: boolean;
  iconBefore: string;
  iconBeforeWidth: string;
  iconBeforeHeight: string;
  iconBeforeStrokeWidth: number;
  iconBeforeStrokeColor: string;
  iconAfter: string;
  iconAfterWidth: string;
  iconAfterHeight: string;
  iconAfterStrokeWidth: number;
  iconAfterStrokeColor: string;
  buttonType: ButtonTypeEnum;
}

import {ValidatorFn} from '@angular/forms';
import {InputNumericSizeEnum} from './input-numeric-size.enum';
import {ErrorStateMatcher} from '@angular/material/core';

export interface IInputNumeric {
  type?: string;
  label?: string;
  ariaLabel?: string;
  placeholder?: number;
  errorMessage?: string;
  disabled?: boolean;
  readonly?: boolean;
  value?: number;
  validators?: ValidatorFn[];
  labelLast?: boolean;
  size?: InputNumericSizeEnum;
  matcher?: ErrorStateMatcher;
  noErrorPlanned?: boolean;
}

import {ValidatorFn} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export interface IInputText {
  type?: string;
  label?: string;
  ariaLabel?: string;
  placeholder?: string;
  errorMessage?: string;
  disabled?: boolean;
  readonly?: boolean;
  value: string;
  validators: ValidatorFn[];
  matcher?: ErrorStateMatcher;
  iconName?: string;
}

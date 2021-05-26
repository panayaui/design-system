import {ValidatorFn} from '@angular/forms';

export default interface IInputText {
  type: string;
  label: string;
  ariaLabel: string;
  placeholder: string;
  errorMessage: string;
  disabled: boolean;
  readonly: boolean;
  value: string;
  validators: ValidatorFn[];
}

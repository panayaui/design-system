import {Validators} from '@angular/forms';
import {CustomErrorStateMatcher} from './custom-error-state-matcher';

export const inputObj = {
  ariaLabel: 'Cell long long Label',
  value: 'Input text',
  errorMessage: 'Validation text',
  validators: Validators.required,
  matcher: new CustomErrorStateMatcher()
};


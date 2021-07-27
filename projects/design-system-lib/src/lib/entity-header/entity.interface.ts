import {ValidatorFn} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export interface IEntity {
  name?: string;
  validators?: ValidatorFn[];
  matcher?: ErrorStateMatcher;
  readonlyState?: boolean;
}

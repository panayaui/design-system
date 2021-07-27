import {ValidatorFn} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {EntityTypeEnum} from './entity-type.enum';

export interface IEntity {
  type: EntityTypeEnum;
  id: number;
  entityName?: string;
  validators?: ValidatorFn[];
  matcher?: ErrorStateMatcher;
}

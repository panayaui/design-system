import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EntityHeaderComponent} from './entity-header.component';
import {InputModule} from '../input/input.module';
import {ButtonModule} from '../button/button.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import {IconModule} from '../icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    InputModule,
    MatTooltipModule,
    IconModule
  ],
  declarations: [
    EntityHeaderComponent
  ],
  exports: [
    EntityHeaderComponent
  ]
})
export class EntityHeaderModule { }

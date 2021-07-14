import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '../icon/icon.module';
import {ActionButtonComponent} from './action-button.component';


@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  declarations: [
    ActionButtonComponent
  ],
  exports: [
    ActionButtonComponent
  ]
})
export class ActionButtonModule { }

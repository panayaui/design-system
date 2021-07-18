import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button.component';
import {IconModule} from '../icon/icon.module';
import {SplitButtonComponent} from './split-button/split-button.component';


@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  declarations: [
    ButtonComponent,
    SplitButtonComponent
  ],
  exports: [
    ButtonComponent,
    SplitButtonComponent
  ]
})
export class ButtonModule { }

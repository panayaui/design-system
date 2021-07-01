import {NgModule} from '@angular/core';
import {LabelMainComponent} from './label-main/label-main.component';
import {LabelSubComponent} from './label-sub/label-sub.component';
import {CommonModule} from '@angular/common';
import {IconModule} from '../icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  declarations: [
    LabelMainComponent,
    LabelSubComponent
  ],
  exports: [
    LabelMainComponent,
    LabelSubComponent
  ]
})
export class LabelModule { }

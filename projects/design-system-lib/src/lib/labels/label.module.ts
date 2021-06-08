import {NgModule} from '@angular/core';
import {LabelMainComponent} from './label-main/label-main.component';
import {LabelSubComponent} from './label-sub/label-sub.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
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

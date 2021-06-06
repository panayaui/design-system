import {NgModule} from '@angular/core';
import {LabelMainComponent} from './label-main/label-main.component';
import {LabelSmallComponent} from './label-small/label-small.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LabelMainComponent,
    LabelSmallComponent
  ],
  exports: [
    LabelMainComponent,
    LabelSmallComponent
  ]
})
export class LabelModule { }

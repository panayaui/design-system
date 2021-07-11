import {NgModule} from '@angular/core';
import {IconModule} from '../icon/icon.module';
import {CommonModule} from '@angular/common';
import {ChipsComponent} from './bar/chips.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  imports: [
    CommonModule,
    MatChipsModule,
    IconModule
  ],
  declarations: [
    ChipsComponent
  ],
  exports: [
    ChipsComponent
  ]
})
export class ChipsModule { }

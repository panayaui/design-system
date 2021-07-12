import {NgModule} from '@angular/core';
import {IconModule} from '../icon/icon.module';
import {CommonModule} from '@angular/common';
import {ChipsComponent} from './bar/chips.component';
import {MatChipsModule} from '@angular/material/chips';
import {ChipButtonComponent} from './button/chip-button.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    MatChipsModule,
    MatTooltipModule,
    IconModule
  ],
  declarations: [
    ChipsComponent,
    ChipButtonComponent
  ],
  exports: [
    ChipsComponent,
    ChipButtonComponent
  ]
})
export class ChipsModule { }

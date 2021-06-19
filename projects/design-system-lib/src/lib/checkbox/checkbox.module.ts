import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckboxComponent} from './checkbox.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule
  ],
  declarations: [
    CheckboxComponent
  ],
  exports: [
    CheckboxComponent
  ]
})
export class CheckboxModule { }

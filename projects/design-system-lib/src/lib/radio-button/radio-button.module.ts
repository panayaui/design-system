import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RadioButtonComponent} from './radio-button.component';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  imports: [
    CommonModule,
    MatRadioModule
  ],
  declarations: [
    RadioButtonComponent
  ],
  exports: [
    RadioButtonComponent
  ]
})
export class RadioButtonModule { }

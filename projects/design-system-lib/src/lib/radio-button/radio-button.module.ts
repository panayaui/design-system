import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RadioButtonComponent} from './radio-button/radio-button.component';
import {RadioButtonGroupComponent} from './radio-button-group/radio-button-group.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatRadioModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  declarations: [
    RadioButtonComponent,
    RadioButtonGroupComponent
  ],
  exports: [
    RadioButtonComponent,
    RadioButtonGroupComponent
  ]
})
export class RadioButtonModule { }

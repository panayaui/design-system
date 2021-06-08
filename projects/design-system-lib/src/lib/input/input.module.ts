import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputNumericComponent} from './numeric/input-numeric.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  declarations: [
    InputNumericComponent
  ],
  exports: [
    InputNumericComponent
  ]
})
export class InputModule { }

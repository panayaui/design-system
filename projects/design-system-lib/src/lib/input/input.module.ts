import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputNumericComponent} from './numeric/input-numeric.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {InputTextComponent} from './text/input-text.component';
import {DatepickerComponent} from './datepicker/datepicker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ],
  declarations: [
    InputNumericComponent,
    InputTextComponent,
    DatepickerComponent
  ],
  exports: [
    InputNumericComponent,
    InputTextComponent,
    DatepickerComponent
  ]
})
export class InputModule { }

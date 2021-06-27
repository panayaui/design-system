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
import {InputOutlineComponent} from './outline/input-outline.component';
import {IconModule} from '../icon/icon.module';
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
    IconModule,
    MatIconModule
  ],
  declarations: [
    InputNumericComponent,
    InputTextComponent,
    InputOutlineComponent,
    DatepickerComponent
  ],
  exports: [
    InputNumericComponent,
    InputTextComponent,
    InputOutlineComponent,
    DatepickerComponent
  ]
})
export class InputModule { }

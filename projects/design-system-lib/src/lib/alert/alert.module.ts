import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertComponent} from './alert.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  declarations: [
    AlertComponent
  ],
  exports: [
    AlertComponent
  ]
})
export class AlertModule { }

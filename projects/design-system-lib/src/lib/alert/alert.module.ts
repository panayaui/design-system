import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertComponent} from './alert.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {IconModule} from '../icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    IconModule
  ],
  declarations: [
    AlertComponent
  ],
  exports: [
    AlertComponent
  ],
  entryComponents: [
    AlertComponent
  ]
})
export class AlertModule { }

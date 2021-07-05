import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '../icon/icon.module';
import {MatDialogModule} from '@angular/material/dialog';
import {ModalComponent} from './modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    IconModule
  ],
  declarations: [
    ModalComponent
  ],
  exports: [
    ModalComponent
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class ModalModule { }

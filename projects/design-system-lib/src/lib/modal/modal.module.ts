import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '../icon/icon.module';
import {MatDialogModule} from '@angular/material/dialog';
import {ModalComponent} from './modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from '../button/button.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    IconModule,
    ButtonModule
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

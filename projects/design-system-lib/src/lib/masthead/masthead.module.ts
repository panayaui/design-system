import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from '../button/button.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MastheadComponent} from './masthead.component';
import {IconModule} from '../icon/icon.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    MatTooltipModule,
    IconModule
  ],
  declarations: [
    MastheadComponent
  ],
  exports: [
    MastheadComponent
  ]
})
export class MastheadModule { }

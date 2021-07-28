import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from '../button/button.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MastheadComponent} from './masthead.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    MatTooltipModule
  ],
  declarations: [
    MastheadComponent
  ],
  exports: [
    MastheadComponent
  ]
})
export class MastheadModule { }

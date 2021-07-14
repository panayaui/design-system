import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {ActionButtonModule, ButtonModule, InputModule, LabelModule, MenuModule} from 'projects/design-system-lib/src/public-api';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ComboComponent} from './combo.component';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    InputModule,
    ButtonModule,
    LabelModule,
    ActionButtonModule
  ],
  declarations: [
    ComboComponent
  ],
  exports: [
    ComboComponent
  ]
})
export class ComboModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {ExpansionPanelComponent} from './expansion-panel.component';
import {IconModule} from '../icon/icon.module';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    IconModule,
    MatTooltipModule
  ],
  declarations: [
    ExpansionPanelComponent
  ],
  exports: [
    ExpansionPanelComponent
  ]
})
export class ExpansionPanelModule { }

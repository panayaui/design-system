import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {ExpansionPanelComponent} from './expansion-panel.component';
import {IconModule} from '../icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    IconModule
  ],
  declarations: [
    ExpansionPanelComponent
  ],
  exports: [
    ExpansionPanelComponent
  ]
})
export class ExpansionPanelModule { }

import {NgModule} from '@angular/core';
import {IconModule} from '../icon/icon.module';
import {TabGroupComponent} from './tab-group.component';
import {MatTabsModule} from '@angular/material/tabs';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTabsModule,
    IconModule
  ],
  declarations: [
    TabGroupComponent
  ],
  exports: [
    TabGroupComponent
  ]
})
export class TabGroupModule { }

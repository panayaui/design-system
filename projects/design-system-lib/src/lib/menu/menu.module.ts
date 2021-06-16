import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MenuComponent} from './menu/menu.component';
import {MenuMultiSelectComponent} from './menu-multi-select/menu-multi-select.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  declarations: [
    MenuComponent,
    MenuMultiSelectComponent
  ],
  exports: [
    MenuComponent,
    MenuMultiSelectComponent
  ]
})
export class MenuModule { }

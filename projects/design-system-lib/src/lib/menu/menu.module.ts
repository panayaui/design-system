import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MenuSingleSelectComponent} from './menu-single-select/menu-single-select.component';
import {MenuMultiSelectComponent} from './menu-multi-select/menu-multi-select.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from '../button/button.module';
import {IconModule} from '../icon/icon.module';
import {MenuTabsComponent} from './menu-tabs/menu-tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import {CheckboxModule} from '../checkbox/checkbox.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    ButtonModule,
    IconModule,
    CheckboxModule
  ],
  declarations: [
    MenuSingleSelectComponent,
    MenuMultiSelectComponent,
    MenuTabsComponent
  ],
  exports: [
    MenuSingleSelectComponent,
    MenuMultiSelectComponent,
    MenuTabsComponent
  ]
})
export class MenuModule { }

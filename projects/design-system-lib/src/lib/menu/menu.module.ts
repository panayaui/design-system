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
import {MatInputModule} from '@angular/material/input';
import {InputModule} from '../input/input.module';
import {MenuRadioGroupComponent} from './menu-radio-group/menu-radio-group.component';
import {MatRadioModule} from '@angular/material/radio';
import {RadioButtonModule} from '../radio-button/radio-button.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    MatRadioModule,
    ButtonModule,
    IconModule,
    CheckboxModule,
    InputModule,
    RadioButtonModule
  ],
  declarations: [
    MenuSingleSelectComponent,
    MenuMultiSelectComponent,
    MenuTabsComponent,
    MenuRadioGroupComponent
  ],
  exports: [
    MenuSingleSelectComponent,
    MenuMultiSelectComponent,
    MenuTabsComponent,
    MenuRadioGroupComponent
  ]
})
export class MenuModule { }

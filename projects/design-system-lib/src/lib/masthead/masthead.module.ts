import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from '../button/button.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MastheadComponent} from './masthead.component';
import {IconModule} from '../icon/icon.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MastheadSearchComponent} from './masthead-search/masthead-search.component';
import {InputModule} from '../input/input.module';
import {MegaMenuComponent} from './mega-menu/mega-menu.component';
import {MastheadSettingsComponent} from './masthead-settings/masthead-settings.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    MatTooltipModule,
    IconModule,
    InputModule
  ],
  declarations: [
    MastheadComponent,
    MastheadSearchComponent,
    MastheadSettingsComponent,
    MegaMenuComponent
  ],
  exports: [
    MastheadComponent
  ]
})
export class MastheadModule { }

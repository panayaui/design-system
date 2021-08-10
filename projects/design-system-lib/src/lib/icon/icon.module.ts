import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconComponent} from './icon.component';
import {FeatherModule} from 'angular-feather';
import {allIcons} from 'angular-feather/icons';
import {IconPlusComponent} from './icon-plus/icon.component';

@NgModule({
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons)
  ],
  declarations: [
    IconComponent,
    IconPlusComponent
  ],
  exports: [
    IconComponent,
    IconPlusComponent,
    FeatherModule
  ]
})
export class IconModule { }


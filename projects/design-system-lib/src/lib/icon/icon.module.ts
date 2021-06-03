import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconComponent} from './icon.component';
// import { FeatherModule } from 'angular-feather';
// import { allIcons } from 'angular-feather/icons';

@NgModule({
  declarations: [
    IconComponent
  ],
  exports: [
    IconComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IconModule { }


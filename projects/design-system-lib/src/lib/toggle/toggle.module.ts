import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToggleComponent} from './toggle.component';
import {IconModule} from '../icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  declarations: [
    ToggleComponent
  ],
  exports: [
    ToggleComponent
  ]
})
export class ToggleModule { }

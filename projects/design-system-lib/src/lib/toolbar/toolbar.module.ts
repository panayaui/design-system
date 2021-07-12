import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '../icon/icon.module';
import {ActionButtonComponent} from '../../action-button/action-button.component';
import {ToolbarComponent} from './toolbar.component';
import {ActionButtonModule} from '../../action-button/action-button.module';


@NgModule({
  imports: [
    CommonModule,
    ActionButtonModule
  ],
  declarations: [
    ToolbarComponent
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }

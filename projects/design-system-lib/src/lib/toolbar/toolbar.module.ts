import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '../icon/icon.module';
import {ToolbarButtonComponent} from './button/toolbar-button.component';
import {ToolbarComponent} from './bar/toolbar.component';


@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  declarations: [
    ToolbarButtonComponent,
    ToolbarComponent
  ],
  exports: [
    ToolbarButtonComponent,
    ToolbarComponent
  ]
})
export class ToolbarModule { }

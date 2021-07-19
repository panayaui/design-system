import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginatorComponent} from './paginator.component';
import {IconModule} from '../icon/icon.module';
import {ButtonModule} from '../button/button.module';
import {InputModule} from '../input/input.module';
import {MenuModule} from '../menu/menu.module';


@NgModule({
  imports: [
    CommonModule,
    IconModule,
    ButtonModule,
    InputModule,
    MenuModule
  ],
  declarations: [
    PaginatorComponent
  ],
  exports: [
    PaginatorComponent
  ]
})
export class PaginatorModule { }

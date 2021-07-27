import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginatorComponent} from './paginator.component';
import {IconModule} from '../icon/icon.module';
import {ButtonModule} from '../button/button.module';
import {InputModule} from '../input/input.module';
import {MenuModule} from '../menu/menu.module';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  imports: [
    CommonModule,
    IconModule,
    ButtonModule,
    InputModule,
    MenuModule,
    MatTooltipModule
  ],
  declarations: [
    PaginatorComponent
  ],
  exports: [
    PaginatorComponent
  ]
})
export class PaginatorModule { }

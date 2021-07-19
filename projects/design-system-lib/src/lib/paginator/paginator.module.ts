import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginatorComponent} from './paginator.component';
import {IconModule} from '../icon/icon.module';
import {ButtonModule} from '../button/button.module';


@NgModule({
  imports: [
    CommonModule,
    IconModule,
    ButtonModule
  ],
  declarations: [
    PaginatorComponent
  ],
  exports: [
    PaginatorComponent
  ]
})
export class PaginatorModule { }

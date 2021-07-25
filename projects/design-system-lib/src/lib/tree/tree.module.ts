import {NgModule} from '@angular/core';
import {IconModule} from '../icon/icon.module';
import {CommonModule} from '@angular/common';
import {TreeComponent} from './tree.component';
import {MatTreeModule} from '@angular/material/tree';

@NgModule({
  imports: [
    CommonModule,
    MatTreeModule,
    IconModule
  ],
  declarations: [
    TreeComponent
  ],
  exports: [
    TreeComponent
  ]
})
export class TreeModule { }

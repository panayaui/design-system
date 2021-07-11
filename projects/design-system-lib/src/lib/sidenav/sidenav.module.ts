import {NgModule} from '@angular/core';
import {IconModule} from '../icon/icon.module';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {SidenavMainComponent} from './main/sidenav-main.component';
import {SidenavInnerComponent} from './inner/sidenav-inner.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    IconModule
  ],
  declarations: [
    SidenavMainComponent,
    SidenavInnerComponent
  ],
  exports: [
    SidenavMainComponent,
    SidenavInnerComponent
  ]
})
export class SidenavModule { }

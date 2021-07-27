import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';
import {SlideToggleComponent} from './slide-toggle.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SlideToggleComponent
  ],
  exports: [
    SlideToggleComponent
  ]
})
export class SlideToggleModule { }

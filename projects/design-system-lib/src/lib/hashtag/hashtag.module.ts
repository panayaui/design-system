import {NgModule} from '@angular/core';
import {IconModule} from '../icon/icon.module';
import {CommonModule} from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from '../button/button.module';
import {HashtagComponent} from './button/hashtag.component';
import {HashtagBarComponent} from './bar/hashtag-bar.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatTooltipModule,
    ButtonModule,
    IconModule
  ],
  declarations: [
    HashtagComponent,
    HashtagBarComponent
  ],
  exports: [
    HashtagComponent,
    HashtagBarComponent
  ]
})
export class HashtagModule { }

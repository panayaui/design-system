import {NgModule} from '@angular/core';
import {IconModule} from '../icon/icon.module';
import {CommonModule} from '@angular/common';
import {HashtagComponent} from './button/hashtag.component';
import {HashtagBarComponent} from './bar/hashtag-bar.component';
import {ButtonModule} from '../button/button.module';


@NgModule({
  imports: [
    CommonModule,
    IconModule,
    ButtonModule
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

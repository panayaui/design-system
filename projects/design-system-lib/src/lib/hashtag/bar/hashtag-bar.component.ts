import {Component, Input} from '@angular/core';
import {IHashtag} from '../hashtag.interface';

@Component({
  selector: 'p-hashtag-bar',
  templateUrl: './hashtag-bar.component.html',
  styleUrls: ['./hashtag-bar.component.scss'],
})
export class HashtagBarComponent {
  @Input() hashtagList: IHashtag[];

  removeHashtag(event, hashtag): void {
    event.stopPropagation();
    this.hashtagList = this.hashtagList.filter ( item => item.label !== hashtag.label );
  }
}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonTypeEnum} from '../../button/button-type.enum';

@Component({
  selector: 'p-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.scss'],
})
export class HashtagComponent {
  @Input() label: string;
  @Input() iconRemove: boolean;
  @Output() onRemoveHashtag: EventEmitter<any> = new EventEmitter();
  public buttonType = ButtonTypeEnum;
}


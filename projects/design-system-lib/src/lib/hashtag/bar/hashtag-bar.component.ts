import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IHashtag} from '../hashtag.interface';
import {ButtonTypeEnum} from '../../button/button-type.enum';

@Component({
  selector: 'p-hashtag-bar',
  templateUrl: './hashtag-bar.component.html',
  styleUrls: ['./hashtag-bar.component.scss'],
})
export class HashtagBarComponent {
  @Input() hashtagList: IHashtag[];
  @Input() menuList = [
    { name: 'Alabama',
      disabled: false
    },
    { name: 'Alaska disabled',
      disabled: true
    },
    { name: 'California',
      disabled: false
    }
  ];

  @Input() footerBtnFirst = {
    label: 'Done',
    buttonType: ButtonTypeEnum.Primary
  };
  @Input() footerBtnLast = {
    label: 'Cancel',
    buttonType: ButtonTypeEnum.Secondary
  };
  @Input() filterAriaLabel = 'Find Label';
  @Input() filterPlaceholder = 'Find Label';

  @Input() headerBtnFirst = {
    label: 'Clear selected',
    buttonType: ButtonTypeEnum.Tertiary,
    icon: {
      iconName: 'eraser',
      width: '15',
      height: '15'
    }
  };
  @Input() headerBtnLast = {
    label: 'Not equal to'
  };

  removeHashtag(hashtag): void {
    this.hashtagList = this.hashtagList.filter ( item => item.label !== hashtag.label );
  }
}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IHashtag} from '../hashtag.interface';
import {ButtonTypeEnum} from '../../button/button-type.enum';

@Component({
  selector: 'p-hashtag-bar',
  templateUrl: './hashtag-bar.component.html',
  styleUrls: ['./hashtag-bar.component.scss'],
})
export class HashtagBarComponent {
  @Input() chips: IHashtag[];
  @Input() ariaLabel: string;
  @Output() onClickTask: EventEmitter<any> = new EventEmitter();
  public buttonType = ButtonTypeEnum;

  valuesInTooltip(values: string[]): string {
    let tooltipText = '';
    values.forEach( value => tooltipText = `${tooltipText} \n ${value}`);
    return tooltipText;
  }
}

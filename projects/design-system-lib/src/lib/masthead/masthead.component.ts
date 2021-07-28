import {Component, Input} from '@angular/core';
import {ButtonTypeEnum} from '../button/button-type.enum';

@Component({
  selector: 'p-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss'],
})
export class MastheadComponent {
  @Input() navList: any;
  public buttonType = ButtonTypeEnum;
}

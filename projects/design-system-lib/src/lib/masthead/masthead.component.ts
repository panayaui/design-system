import {Component, Input} from '@angular/core';
import {ButtonTypeEnum} from '../button/button-type.enum';
import {IMastheadMenuItem} from './masthead.interface';

@Component({
  selector: 'p-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss'],
})
export class MastheadComponent {
  @Input() navList: IMastheadMenuItem[];
  public buttonType = ButtonTypeEnum;
}

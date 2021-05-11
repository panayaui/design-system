import {Component, Input} from '@angular/core';
import IButton from './button.interface';

@Component({
  selector: 'p-button-page',
  templateUrl: './button-page.component.html',
  styleUrls: ['./button-page.component.scss'],
})
export default class ButtonPageComponent {
  @Input() buttons: IButton[] = [];

}

import {Component, Input} from '@angular/core';
import IButton from './button.interface';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'p-button-page',
  templateUrl: './button-page.component.html',
  styleUrls: ['./button-page.component.scss'],
})
export default class ButtonPageComponent {
  @Input() buttons: IButton[] = [];

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }
}

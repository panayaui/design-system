import {Component} from '@angular/core';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'p-typography-styles',
  templateUrl: './button-page.component.html',
  styleUrls: ['./button-page.component.scss'],
})
export default class ButtonPageComponent {

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }

  reverseKeyOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return -1;
  }
}

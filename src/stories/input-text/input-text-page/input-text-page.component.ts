import {Component, Input} from '@angular/core';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'p-input-text-page',
  templateUrl: './input-text-page.component.html',
  styleUrls: ['./input-text-page.component.scss'],
})
export default class InputTextPageComponent {
  @Input() checkboxesPage: any;

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }
}



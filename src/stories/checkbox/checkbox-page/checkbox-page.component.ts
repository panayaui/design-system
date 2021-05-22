import {Component, Input} from '@angular/core';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'p-button-page',
  templateUrl: './checkbox-page.component.html',
  styleUrls: ['./checkbox-page.component.scss'],
})
export default class CheckboxPageComponent {
  @Input() checkboxesPage: any;

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }
}

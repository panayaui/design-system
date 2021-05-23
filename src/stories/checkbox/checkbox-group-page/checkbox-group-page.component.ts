import {Component, Input} from '@angular/core';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'p-checkbox-group',
  templateUrl: './checkbox-group-page.component.html',
  styleUrls: ['./checkbox-group-page.component.scss'],
})
export default class CheckboxGroupPageComponent {
  @Input() checkboxGroup: any;

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }
}

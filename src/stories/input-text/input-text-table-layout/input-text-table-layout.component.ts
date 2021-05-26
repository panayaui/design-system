import {Component, Input} from '@angular/core';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'p-input-text-table-layout',
  templateUrl: './input-text-table-layout.component.html',
  styleUrls: ['./input-text-table-layout.component.scss'],
})
export default class InputTextTableLayoutComponent {
  @Input() inputTablePage: any;

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }
}



import {Component, EventEmitter, Input, Output} from '@angular/core';
import {formatDate } from '@angular/common';
import {DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter} from '@angular/material/core';

// export const PICK_FORMATS = {
//   parse: {dateInput: {month: 'short', year: 'numeric', day: 'numeric'}},
//   display: {
//     dateInput: 'input',
//     monthYearLabel: {year: 'numeric', month: 'short'},
//     dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
//     monthYearA11yLabel: {year: 'numeric', month: 'long'}
//   }
// };
//
// class PickDateAdapter extends NativeDateAdapter {
//   format(date: Date, displayFormat: Object): string {
//     if (displayFormat === 'input') {
//       return formatDate(date,'dd-MMM-yyyy', this.locale);
//     } else {
//       return date.toDateString();
//     }
//   }
// }

@Component({
  selector: 'p-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  // providers: [
  //   {provide: DateAdapter, useClass: PickDateAdapter},
  //   {provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS}
  // ]
})
export class DatepickerComponent {
  @Input() ariaLabel: string;
  @Input() placeholder: string;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() value: string;
  @Output() dateChange: EventEmitter<any> = new EventEmitter();
  @Output() dateInput: EventEmitter<any> = new EventEmitter();
}

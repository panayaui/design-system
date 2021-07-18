import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
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
  selector: 'p-daterange',
  templateUrl: './daterange.component.html',
  styleUrls: ['./daterange.component.scss'],
  // providers: [
  //   {provide: DateAdapter, useClass: PickDateAdapter},
  //   {provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS}
  // ]
})
export class DaterangeComponent {
  @Input() ariaLabel: string;
  @Input() placeholder: string;
  @Input() disabled: boolean = false;
  @Input() value: string;
  @Output() dateChange: EventEmitter<any> = new EventEmitter();
  @Output() dateInput: EventEmitter<any> = new EventEmitter();
  @ViewChild('picker') picker;
  @ViewChild('inputEndDate') inputEndDate: ElementRef;
  public isOpened: boolean = false;
  public isFilled: boolean = false;

  openDatepicker(): void {
    this.isOpened = true;
    this.picker.open();
  }

  streamClosed(): void {
    this.inputEndDate.nativeElement.value ? this.isFilled = true : this.isFilled = false;
    this.isOpened = false;
  }
}

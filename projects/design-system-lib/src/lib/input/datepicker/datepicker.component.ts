import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'p-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
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

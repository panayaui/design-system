import {Component, Input} from '@angular/core';

@Component({
  selector: 'p-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() label: string;
  @Input() ariaLabel: string;
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() selectAll: boolean = false;
  @Input() indeterminate: boolean = false;
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'p-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export default class RadioButtonComponent {
  @Input() label: string;
  @Input() ariaLabel: string;
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'p-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export default class InputTextComponent {
  @Input() type: string = 'text';
  @Input() label: string;
  @Input() ariaLabel: string;
  @Input() value: string = 'value';
  @Input() placeholder: string = 'placeholder';
  @Input() errorState: boolean = true;
  @Input() error: string = 'error';
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
}

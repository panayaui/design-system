import {Component, Input} from '@angular/core';

@Component({
  selector: 'p-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export default class InputTextComponent {
  @Input() type: string = 'text';
  @Input() label: string;
  @Input() value: string = 'value';
  @Input() placeholder: string = 'placeholder';
  @Input() error: string;
  @Input() disabled: boolean;
  @Input() readonly: boolean;
}

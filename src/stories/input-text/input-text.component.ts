import {Component, Input} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'p-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export default class InputTextComponent {
  @Input() type: string = 'text';
  @Input() inputName: string;
  @Input() label: string;
  @Input() ariaLabel: string;
  @Input() placeholder: string;
  @Input() errorState: boolean = false;
  @Input() errorMessage: string;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;

  emailFormControl = new FormControl('', [
    Validators.required
  ]);
}

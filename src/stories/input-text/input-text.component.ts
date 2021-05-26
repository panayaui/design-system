import {Component, Input, OnInit} from '@angular/core';
import {FormControl, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'p-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export default class InputTextComponent implements OnInit {
  @Input() type: string = 'text';
  @Input() label: string;
  @Input() ariaLabel: string;
  @Input() placeholder: string;
  @Input() errorState: boolean = false;
  @Input() errorMessage: string;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() value: string;
  @Input() validators: ValidatorFn[];
  public emailFormControl: FormControl;

  ngOnInit(): void {
    this.emailFormControl = new FormControl(
      {value: this.value, disabled: this.disabled},
      this.validators);
  }
}

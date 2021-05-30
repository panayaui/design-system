import {Component, Input, OnInit} from '@angular/core';
import {FormControl, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'p-input-numeric',
  templateUrl: './input-numeric.component.html',
  styleUrls: ['./input-numeric.component.scss'],
})
export default class InputNumericComponent implements OnInit {
  @Input() type: string = 'number';
  @Input() label: string;
  @Input() ariaLabel: string;
  @Input() placeholder: string;
  @Input() errorMessage: string;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() value: string;
  @Input() validators: ValidatorFn[];
  public inputNumericControl: FormControl;

  ngOnInit(): void {
    this.inputNumericControl = new FormControl(
      {value: this.value, disabled: this.disabled},
      this.validators);
  }
}

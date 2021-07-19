import {Component, Input, OnInit} from '@angular/core';
import {FormControl, ValidatorFn} from '@angular/forms';
import {InputNumericSizeEnum} from './input-numeric-size.enum';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'p-input-numeric',
  templateUrl: './input-numeric.component.html',
  styleUrls: ['./input-numeric.component.scss'],
})
export class InputNumericComponent implements OnInit {
  @Input() type: string = 'number';
  @Input() label: string;
  @Input() ariaLabel: string; // required
  @Input() placeholder: number;
  @Input() errorMessage: string;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() notEditable: boolean = false; // readonly input that looks like regular one (with underline)
  @Input() value: number;
  @Input() validators: ValidatorFn[];
  @Input() labelLast: boolean = false;
  @Input() size: InputNumericSizeEnum = InputNumericSizeEnum.Large;
  @Input() matcher: ErrorStateMatcher;
  public formFieldControl: FormControl;

  public get classes(): string[] {
    const classParams = [];
    this.readonly ? classParams.push('p-input-numeric-readonly') : null;
    classParams.push(`p-input-numeric-${this.size}`);
    return classParams;
  }

  ngOnInit(): void {
    this.formFieldControl = new FormControl(
      {value: this.value, disabled: this.disabled},
      this.validators);
  }
}

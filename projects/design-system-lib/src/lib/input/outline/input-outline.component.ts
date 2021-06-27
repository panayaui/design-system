import {Component, Input, OnInit} from '@angular/core';
import {FormControl, ValidatorFn} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'p-input-outline',
  templateUrl: './input-outline.component.html',
  styleUrls: ['./input-outline.component.scss'],
})
export class InputOutlineComponent implements OnInit {
  @Input() type: string = 'text';
  @Input() label: string;
  @Input() ariaLabel: string;
  @Input() placeholder: string;
  @Input() errorMessage: string;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() value: string;
  @Input() validators: ValidatorFn[];
  @Input() matcher: ErrorStateMatcher;
  public formFieldControl: FormControl;

  ngOnInit(): void {
    this.formFieldControl = new FormControl(
      {value: this.value, disabled: this.disabled},
      this.validators);
  }

  clearValue(): void {
    this.formFieldControl.setValue('');
  }
}

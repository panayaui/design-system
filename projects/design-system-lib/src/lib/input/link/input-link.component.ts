import {Component, Input, OnInit} from '@angular/core';
import {FormControl, ValidatorFn} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {ButtonTypeEnum} from '../../button/button-type.enum';

@Component({
  selector: 'p-input-link',
  templateUrl: './input-link.component.html',
  styleUrls: ['./input-link.component.scss'],
})
export class InputLinkComponent implements OnInit {
  @Input() ariaLabel: string;
  @Input() placeholder: string;
  @Input() errorMessage: string;
  @Input() disabled: boolean = false;
  @Input() value: string;
  @Input() validators: ValidatorFn[];
  @Input() matcher: ErrorStateMatcher;
  public formFieldControl: FormControl;
  public buttonType = ButtonTypeEnum;

  ngOnInit(): void {
    this.formFieldControl = new FormControl(
      {value: this.value, disabled: this.disabled},
      this.validators);
  }

  openModal(): void {
    console.log('modal');
  }

  removeLink(): void {
    this.formFieldControl.setValue('');
  }
}

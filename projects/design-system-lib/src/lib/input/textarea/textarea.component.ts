import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, ValidatorFn} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {SubscriptionLike} from 'rxjs';
import {TextareaEnum} from './textarea.enum';

@Component({
  selector: 'p-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent implements OnInit, OnDestroy {
  @Input() label: string;
  @Input() ariaLabel: string;
  @Input() placeholder: string;
  @Input() errorMessage: string;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() value: string;
  @Input() validators: ValidatorFn[];
  @Input() matcher: ErrorStateMatcher;
  @Input() size = TextareaEnum;
  public formFieldControl: FormControl;
  private sub: SubscriptionLike;

  public get classes(): string[] {
    const classParams = [];
    this.readonly ? classParams.push('p-input-readonly') : null;
    !this.errorMessage ? classParams.push('no-error-message') : null;
    classParams.push(`${this.size}`);
    return classParams;
  }

  ngOnInit(): void {
    this.formFieldControl = new FormControl(
      {value: this.value, disabled: this.disabled},
      this.validators);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = null;
    }
  }

  clearValue(): void {
    this.formFieldControl.setValue('');
  }
}

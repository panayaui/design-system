import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, ValidatorFn} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {SubscriptionLike} from 'rxjs';

@Component({
  selector: 'p-input-outline',
  templateUrl: './input-outline.component.html',
  styleUrls: ['./input-outline.component.scss'],
})
export class InputOutlineComponent implements OnInit, OnDestroy {
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
  @Input() isSearch: boolean = false;
  @Input() iconName: string;
  @Output() onSearch: EventEmitter<any> = new EventEmitter();
  @Output() onClear: EventEmitter<any> = new EventEmitter();
  public formFieldControl: FormControl;
  private sub: SubscriptionLike;

  ngOnInit(): void {
    this.formFieldControl = new FormControl(
      {value: this.value, disabled: this.disabled},
      this.validators);
    this.sub = this.formFieldControl.valueChanges.subscribe((value: string) => {
      this.onSearch.emit(value);
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = null;
    }
  }

  clearValue(): void {
    this.formFieldControl.setValue('');
    this.onClear.emit('');
  }

  searchValue(): void {
    console.log('search');
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {IRadioButton} from 'projects/design-system-lib/src/lib/radio-button/radio-button.interface';
import {FormControl, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'p-radio-group',
  templateUrl: './radio-button-group.component.html',
  styleUrls: ['./radio-button-group.component.scss'],
})
export default class RadioButtonGroup implements OnInit {
  @Input() label: string;
  @Input() optionsList: IRadioButton[];
  @Input() errorMessage: string;
  @Input() value: any;
  @Input() selected: any;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() validators: ValidatorFn[];
  public fieldFormControl: FormControl;

  ngOnInit(): void {
    this.fieldFormControl = new FormControl(
      {value: this.value, disabled: this.disabled},
      this.validators);
  }
}

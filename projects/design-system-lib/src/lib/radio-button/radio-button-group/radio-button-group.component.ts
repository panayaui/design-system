import {Component, Input, OnInit} from '@angular/core';
import {IRadioButton} from 'projects/design-system-lib/src/lib/radio-button/radio-button.interface';
import {FormControl, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'p-radio-group',
  templateUrl: './radio-button-group.component.html',
  styleUrls: ['./radio-button-group.component.scss'],
})
export class RadioButtonGroupComponent implements OnInit {
  @Input() label: string;
  @Input() optionsList: IRadioButton[];
  @Input() errorMessage: string;
  @Input() groupValue: any;
  @Input() selected: any;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() validators: ValidatorFn[];
  @Input() inLine: boolean = false;
  public fieldFormControl: FormControl;

  ngOnInit(): void {
    this.fieldFormControl = new FormControl(
      {value: this.groupValue, disabled: this.disabled},
      this.validators);
  }
}

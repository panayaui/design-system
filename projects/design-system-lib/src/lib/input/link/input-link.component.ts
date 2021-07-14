import {Component, Input, OnInit} from '@angular/core';
import {FormControl, ValidatorFn} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {ButtonTypeEnum} from '../../button/button-type.enum';
import {MatDialog} from '@angular/material/dialog';
import {ModalComponent} from '../../modal/modal.component';

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

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.formFieldControl = new FormControl(
      {value: this.value, disabled: this.disabled},
      this.validators);
  }

  openModal(): void {
    console.log('modal');
    const data = {
      headerText: 'Lorem Ipsum Title',
        textParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum orci, imperdiet quis cursus sed, efficitur vitae risus. Quisque lacinia, risus eu rhoncus eleifend.',
        actions: [{
        label: 'Some',
        buttonType: ButtonTypeEnum.Primary,
      },
        {
          label: 'Action',
          buttonType: ButtonTypeEnum.Secondary,
        },
        {
          label: 'Cancel',
          buttonType: ButtonTypeEnum.Tertiary,
        }]
    };
    const panelClass = ['p-modal', 'p-modal-small'];
    const dialogRef = this.dialog.open(ModalComponent, {
      data,
      panelClass, // required
    });
  }

  removeLink(): void {
    this.formFieldControl.setValue('');
    this.value = '';
  }
}

import {Component, Inject} from '@angular/core';
import {IModalData} from './modal.interface';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ButtonTypeEnum} from '../button/button-type.enum';

@Component({
  selector: 'p-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})

export class ModalComponent {
  public buttonType = ButtonTypeEnum;

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IModalData){}

  closeModal(): void {
    this.dialogRef.close();
  }

}

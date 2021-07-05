import {Component, Inject} from '@angular/core';
import {IModalData} from './modal.interface';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'p-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})

export class ModalComponent {
  constructor(public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IModalData){}

  closeModal(): void {
    this.dialogRef.close();
  }

}

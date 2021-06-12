import {Component, Input} from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {AlertComponent} from 'projects/design-system-lib/src/lib/alert/alert.component';
import {AlertEnum} from 'projects/design-system-lib/src/lib/alert/alert.enum';
import {IAlertData} from 'projects/design-system-lib/src/lib/alert/alert.interface';

@Component({
  selector: 'alert-trigger',
  templateUrl: './alert-trigger.component.html',
  styleUrls: ['./alert-trigger.component.scss']
})
export class AlertTriggerComponent {
  @Input() data: IAlertData;
  @Input() type: AlertEnum = AlertEnum.Primary; // required
  @Input() horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  @Input() verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  @Input() panelClass: string | string[];
  @Input() triggerBtnName: string;

  constructor(private snackBar: MatSnackBar) {}

  triggerAlert(): void {
    this.panelClass = ['p-alert', 'p-alert-' + this.type];
    this.snackBar.openFromComponent(AlertComponent, {
      data: this.data,
      panelClass: this.panelClass, // required
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }
}

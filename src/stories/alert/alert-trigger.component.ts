import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {AlertComponent} from 'projects/design-system-lib/src/lib/alert/alert.component';
import {IAlertData} from 'projects/design-system-lib/src/lib/alert/alert.interface';
import {AlertEnum} from 'projects/design-system-lib/src/lib/alert/alert.enum';

@Component({
  selector: 'alert-trigger',
  templateUrl: './alert-trigger.component.html',
  styleUrls: ['./alert-trigger.component.scss']
})
export class AlertTriggerComponent {
  @Input() data = {
        icon: {iconName: 'bell'},
        messageMain: 'Notification message.',
        actionName: 'Action',
        messageSub: 'Notification message.',
        closeBtnName: 'Close'
      };
  @Input() type: AlertEnum = AlertEnum.Primary; // required
  @Input() horizontalPosition: any = 'center';
  @Input() verticalPosition: any = 'bottom';
  @Input() panelClass: string | string[];

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

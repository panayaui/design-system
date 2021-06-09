import {Component, Input} from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {AlertComponent} from 'projects/design-system-lib/src/lib/alert/alert.component';
import {IAlertData} from 'projects/design-system-lib/src/lib/alert/alert.interface';
import {AlertEnum} from 'projects/design-system-lib/src/lib/alert/alert.enum';
import {Observable} from 'rxjs';

@Component({
  selector: 'alert-trigger',
  templateUrl: './alert-trigger.component.html',
  styleUrls: ['./alert-trigger.component.scss']
})
export class AlertTriggerComponent {
  @Input() data = {
    type: AlertEnum.Primary,
    icon: { iconName: 'bell'},
    messageMain: 'Notification message.',
    actionName: 'Action',
    closeBtnName: 'Close'
  };
  @Input() duration: number = 5000;
  @Input() horizontalPosition: any = 'center';
  @Input() verticalPosition: any = 'bottom';
  @Input() panelClass: string | string[] = 'p-alert-container';

  constructor(private snackBar: MatSnackBar) {}

  showAlert(): void {
    alert("hkjlkj");
    this.snackBar.openFromComponent(AlertComponent, {
      data: this.data,
      // duration: this.duration,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: this.panelClass
    });
  }
}

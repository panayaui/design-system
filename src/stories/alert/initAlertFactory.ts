import {MatSnackBar} from '@angular/material/snack-bar';
import {AlertComponent} from '../../../projects/design-system-lib/src/public-api';

const data = {
  icon: { iconName: 'bell'},
  messageMain: 'Notification message.',
  actionName: 'Action',
  messageSub: 'Notification message.',
  closeBtnName: 'Close'
};

const panelClass = ['p-alert', 'p-alert-primary'];

export function initAlertFactory(snackBar: MatSnackBar): any {
  return () => snackBar.openFromComponent(AlertComponent, {
    data,
    panelClass});
}

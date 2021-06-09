import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AlertComponent} from '../../projects/design-system-lib/src/lib/alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  durationInSeconds = 5;
  data = {
    icon: { iconName: 'bell'},
    messageMain: 'Notification message.',
    actionName: 'Action',
    closeBtnName: 'Close'
  };

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(AlertComponent, {
      data: this.data,
      duration: this.durationInSeconds * 1000
    });
  }
}

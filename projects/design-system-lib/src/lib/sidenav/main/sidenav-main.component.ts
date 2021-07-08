import {Component, Input} from '@angular/core';
import {ISidenavMain} from './sidenav-main.interface';

@Component({
  selector: 'p-sidenav-main',
  templateUrl: './sidenav-main.component.html',
  styleUrls: ['./sidenav-main.component.scss'],
})
export class SidenavMainComponent {
  @Input() sidenav: ISidenavMain[];

  onPanelClicked(event, panel): void {
    console.log(panel);
  }
}

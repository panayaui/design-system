import {Component, Input} from '@angular/core';
import {ISidenavPanel} from './sidenav-panel.interface';

@Component({
  selector: 'p-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() sidenav: ISidenavPanel[];
}

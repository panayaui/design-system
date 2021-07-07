import {Component, Input} from '@angular/core';

@Component({
  selector: 'p-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() sidenav: any[];
}

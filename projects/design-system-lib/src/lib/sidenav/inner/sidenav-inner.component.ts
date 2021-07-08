import {Component, Input} from '@angular/core';
import {ISidenavInner} from './sidenav-inner.interface';

@Component({
  selector: 'p-sidenav-inner',
  templateUrl: './sidenav-inner.component.html',
  styleUrls: ['./sidenav-inner.component.scss'],
})
export class SidenavInnerComponent {
  @Input() sidenav: ISidenavInner[];

  onItemClicked(panel): void {
    console.log(panel);
  }
}

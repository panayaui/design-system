import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'p-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() menuTriggerName: string;
  @Input() menuList: any[];
  @Input() groupTitle: boolean = false; //if there is a group title
}

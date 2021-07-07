import {Component, Input} from '@angular/core';
import {ITab} from './tab.interface';

@Component({
  selector: 'p-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
})
export class TabGroupComponent {
  @Input() tabGroup: {
    tabButton: ITab,
    tabPanel: any,
    disabled: boolean
  }[];
}

import {Component, Input} from '@angular/core';
import {IMegaMenuColumn} from './mega-menu-column.interface';

@Component({
  selector: 'p-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss'],
})
export class MegaMenuComponent {
  @Input() megaMenuList: IMegaMenuColumn[];
  public searchVisible: boolean = false;

}

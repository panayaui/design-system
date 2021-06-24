import {
  Component,
  Input,
  ViewChild
} from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';
import {IMenuButton} from '../menu-button.interface';

@Component({
  selector: 'p-menu-free-text',
  templateUrl: './menu-free-text.component.html',
  styleUrls: ['./menu-free-text.component.scss'],
})
export class MenuFreeTextComponent {
  @Input() menuTriggerName: string;
  @Input() menuList: any[];
  @Input() footerBtnFirst: IMenuButton;
  @Input() footerBtnLast: IMenuButton;
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  findMenuTriggerName(menuList): void {
    return menuList.find( item => item.selected === true).name;
  }

  selectCompleted(): void {
    this.menuTrigger.closeMenu();
  }

  selectCanceled(): void {
    this.menuTrigger.closeMenu();
  }
}

import {
  Component,
  Input, OnInit,
  ViewChild
} from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';
import {IMenuButton} from '../menu-button.interface';

interface IMenuFreeTextItem {
  name: string;
  inputValue?: string;
  selected?: boolean;
}

@Component({
  selector: 'p-menu-free-text',
  templateUrl: './menu-free-text.component.html',
  styleUrls: ['./menu-free-text.component.scss'],
})
export class MenuFreeTextComponent implements OnInit{
  @Input() menuList: IMenuFreeTextItem[];
  @Input() footerBtnFirst: IMenuButton;
  @Input() footerBtnLast: IMenuButton;
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
  public selectedItem: IMenuFreeTextItem;
  public isInputShown: boolean;

  ngOnInit(): void {
    this.findSelectedItem();
  }

  selectCompleted(): void {
    this.menuTrigger.closeMenu();
  }

  openMenu(): void {
    this.menuTrigger.openMenu();
  }

  selectCanceled(): void {
    this.menuTrigger.closeMenu();
  }

  findSelectedItem(): void {
    this.selectedItem = this.menuList.find( item => item.selected );
    this.isInputShown = this.selectedItem.hasOwnProperty('inputValue');
  }

  setSelectedItem(newSelectedItem): void {
    this.selectedItem.selected = false;
    newSelectedItem.selected = true;
    this.findSelectedItem();
  }
}

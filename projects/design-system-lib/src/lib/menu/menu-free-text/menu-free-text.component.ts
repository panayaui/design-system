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
  @Input() menuTriggerName: string;
  @Input() menuList: IMenuFreeTextItem[];
  @Input() footerBtnFirst: IMenuButton;
  @Input() footerBtnLast: IMenuButton;
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
  public subMenuTriggerName: string;

  ngOnInit(): void {
    this.subMenuTriggerName = this.menuList.find( item => item.selected).name;
  }

  selectCompleted(): void {
    this.menuTrigger.closeMenu();
  }

  selectCanceled(): void {
    this.menuTrigger.closeMenu();
  }
}

import {
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';
import {IMenuButton} from '../menu-button.interface';
import {IRadioButton} from '../../radio-button/radio-button.interface';
import {InputNumericSizeEnum} from '../../input/numeric/input-numeric-size.enum';
import {IDatepicker} from '../../input/datepicker/datepicker.interface';

interface IMenuRadioOption extends IRadioButton {
  numericInputValue?: number;
  menuList?: any[];
  dateStart?: IDatepicker;
  dateEnd?: IDatepicker;
}

@Component({
  selector: 'p-menu-radio-group',
  templateUrl: './menu-radio-group.component.html',
  styleUrls: ['./menu-radio-group.component.scss'],
})
export class MenuRadioGroupComponent {
  @Input() menuList: IMenuRadioOption[];
  @Input() footerBtnFirst: IMenuButton;
  @Input() footerBtnLast: IMenuButton;
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
  public inputNumericSize = InputNumericSizeEnum;

  findMenuTriggerName(menuList): void {
    return menuList.find( item => item.selected === true).name;
  }

  openMenu(): void {
    this.menuTrigger.openMenu();
  }

  selectCompleted(): void {
    this.menuTrigger.closeMenu();
  }

  selectCanceled(): void {
    this.menuTrigger.closeMenu();
  }
}

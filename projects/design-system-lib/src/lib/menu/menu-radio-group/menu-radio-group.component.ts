import {
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {FormControl, ValidatorFn} from '@angular/forms';
import {MatMenuTrigger} from '@angular/material/menu';
import {IMenuButton} from '../menu-button.interface';
import {IRadioButton} from '../../radio-button/radio-button.interface';
import {MenuRadioOptionEnum} from './menu-radio-option.enum';
import {InputNumericSizeEnum} from '../../input/numeric/input-numeric-size.enum';

interface IMenuRadioOption extends IRadioButton {
  optionType: MenuRadioOptionEnum;
  numericInputValue: number;
  menuList: any[];
}

@Component({
  selector: 'p-menu-radio-group',
  templateUrl: './menu-radio-group.component.html',
  styleUrls: ['./menu-radio-group.component.scss'],
})
export class MenuRadioGroupComponent implements OnInit {
  @Input() menuTriggerName: string;
  @Input() menuList: IMenuRadioOption[];
  @Input() footerBtnFirst: IMenuButton;
  @Input() footerBtnLast: IMenuButton;

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
  public inputNumericSize = InputNumericSizeEnum;

  ngOnInit(): void {

  }

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

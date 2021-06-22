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

interface IMenuRadioOption extends IRadioButton {
  optionType: MenuRadioOptionEnum;
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
  @Input() groupValue: any;
  @Input() selected: any;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() validators: ValidatorFn[];
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
  public fieldFormControl: FormControl;

  ngOnInit(): void {
    this.fieldFormControl = new FormControl(
      {value: this.groupValue, disabled: this.disabled},
      this.validators);
  }

  selectCompleted(): void {
    this.menuTrigger.closeMenu();
  }

  selectCanceled(): void {
    this.menuTrigger.closeMenu();
  }
}

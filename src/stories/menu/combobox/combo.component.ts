import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ButtonTypeEnum,
  IActionButton,
  IMenuButton,
  ICheckbox,
  IInputText,
  IChip,
  MenuRadioGroupComponent,
  MenuTabsComponent,
  IInputNumeric
} from 'projects/design-system-lib/src/public-api';


@Component({
  selector: 'p-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.scss']
})
export class ComboComponent implements OnInit {
  @Input() buttonType = ButtonTypeEnum;

  // single select + action button / button
  @Input() singleMenuTrigger: IInputText | IActionButton;
  @Input() singleMenuList: any;
  @Input() groupTitle: any;
  @Input() buttonFirst: IMenuButton;
  @Input() buttonLast: IMenuButton;
  @Input() filterAriaLabel: string;
  @Input() filterPlaceholder: string;

  // multi select + action button
  @Input() multiMenuTrigger: IActionButton;
  @Input() multiMenuList: any;
  @Input() headerBtnFirst: IMenuButton;
  @Input() headerBtnLast: ICheckbox;
  @Input() footerBtnFirst: IMenuButton;
  @Input() footerBtnLast: IMenuButton;

  // radio group + chip
  @Input() radioMenuTrigger: IChip;
  @Input() radioMenuList: any;
  @ViewChild(MenuRadioGroupComponent) radioMenu: MenuRadioGroupComponent;

  // tabs + chip
  @Input() tabsMenuTrigger: IChip;
  @Input() tabsMenuList: any;
  @Input() checkboxList: {
    checkbox: ICheckbox,
    inputNum?: IInputNumeric
  }[];
  @ViewChild(MenuTabsComponent) tabsMenu: MenuRadioGroupComponent;

  constructor() {}

  ngOnInit(): void {

  //   this.checkboxList = [
  //     {
  //       checkbox: { label: 'Last'},
  //       inputNum: { label: 'Release(s)', value: 1}
  //     },
  //     {
  //       checkbox: { label: 'Last'},
  //       inputNum: { label: 'Release(s)', value: 1}
  //     },
  //     {
  //       checkbox: { label: 'Last'},
  //       inputNum: { label: 'Release(s)', value: 1}
  //     },
  //     {
  //       checkbox: { label: 'Last'},
  //       inputNum: { label: 'Release(s)', value: 1}
  //     },
  //     {
  //       checkbox: { label: 'Next'},
  //       inputNum: { label: 'Release(s)', value: 1}
  //     }
  //   ];
  //   this.menuListRadio =  [
  //     { label: 'All' },
  //     { label: 'Today' },
  //     { label: 'Yesterday' },
  //     { label: 'Tomorrow' },
  //     { label: 'This',
  //       menuList: [
  //         { name: 'week (Starts Sunday)', selected: true},
  //         { name: 'week (Starts Monday)'},
  //         { name: 'month'},
  //         { name: 'year'}
  //       ]
  //     },
  //     { label: 'Last',
  //       numericInputValue: 1,
  //       menuList: [
  //         { name: 'Day(s)', selected: true},
  //         { name: 'Week(s)'},
  //         { name: 'Month(s)'},
  //         { name: 'Year(s)'}
  //       ]
  //     },
  //     { label: 'Next',
  //       numericInputValue: 1,
  //       menuList: [
  //         { name: 'Day(s)', selected: true},
  //         { name: 'Week(s)'},
  //         { name: 'Month(s)'},
  //         { name: 'Year(s)'}
  //       ]
  //     },
  //     { label: 'Blanks' },
  //     { label: 'Between',
  //       dateStart: {
  //         ariaLabel: 'date start'
  //       },
  //       dateEnd: {
  //         ariaLabel: 'date start'
  //       }
  //     }
  //   ];
  //   this.menuListFreeText = [
  //     { name: 'Contains', inputValue: '', selected: true },
  //     { name: 'Not contains', inputValue: 'smth', selected: false },
  //     { name: 'Empty', selected: false },
  //     { name: 'Not empty', selected: false }
  //   ];
  //   this.inputMin = { label: 'Min', value: null };
  //   this.inputMax = { label: 'Max', value: 1 };
  }

  openRadioMenu(): void {
    this.radioMenu.openMenu();
  }

  openTabsMenu(): void {
    this.tabsMenu.openMenu();
  }
}

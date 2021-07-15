import {Component, Input, OnInit} from '@angular/core';
import {ButtonTypeEnum, IActionButton, IButton, IMenuButton} from 'projects/design-system-lib/src/public-api';
import {Validators} from '@angular/forms';
import {LabelTypesEnum} from 'projects/design-system-lib/src/lib/labels/label-types.enum';
import {ICheckbox} from '../../../../projects/design-system-lib/src/lib/checkbox/checkbox.interface';
import {IInputText} from '../../../../projects/design-system-lib/src/lib/input/text/input-text.interface';

@Component({
  selector: 'p-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.scss']
})
export class ComboComponent implements OnInit {
  @Input() buttonType = ButtonTypeEnum;

  // single select + action button / button
  @Input() singleMenuTrigger: IActionButton | IButton;
  @Input() singleMenuList: any;
  @Input() groupTitle: any;
  @Input() buttonFirst: IMenuButton;
  @Input() buttonLast: IMenuButton;
  @Input() filterAriaLabel: string;
  @Input() filterPlaceholder: string;

  // multi select + input
  @Input() multiMenuTrigger: IInputText;
  @Input() multiMenuList: any;
  @Input() headerBtnFirst: IMenuButton;
  @Input() headerBtnLast: ICheckbox;
  @Input() footerBtnFirst: IMenuButton;
  @Input() footerBtnLast: IMenuButton;

  @Input() data = {
    icon: { iconName: 'bell'},
    messageMain: 'Notification message.',
    actionName: 'Action',
    messageSub: 'Notification message.',
    closeBtnName: 'Close'
  };
  menuTriggerName: string;
  menuList: any;

  checkboxList: any;
  validator = Validators.required;
  labelType = LabelTypesEnum;
  menuListRadio: any;
  menuListFreeText: any;
  inputMin: any;
  inputMax: any;

  constructor() {}

  ngOnInit(): void {
  //   this.menuTriggerName = 'Menu';
  //   this.menuList = [
  //     { name: 'Alabama',
  //       disabled: false
  //     },
  //     { name: 'Alaska disabled',
  //       disabled: true
  //     },
  //     { name: 'California',
  //       disabled: false
  //     },
  //     { name: 'Colorado',
  //       disabled: false
  //     },
  //     { name: 'Delaware',
  //       disabled: false
  //     },
  //     { name: 'Florida selected disabled',
  //       disabled: true,
  //       selected: true
  //     },
  //     { name: 'Georgia',
  //       disabled: false
  //     },
  //     { name: 'Hawaii',
  //       disabled: false
  //     },
  //     { name: 'Idaho',
  //       disabled: true
  //     },
  //     { name: 'Illinois',
  //       disabled: false
  //     },
  //     { name: 'Indiana',
  //       disabled: false
  //     },
  //     { name: 'Iowa',
  //       disabled: false
  //     },
  //     { name: 'Kansas',
  //       disabled: true,
  //       selected: true
  //     },
  //     { name: 'Kentucky',
  //       disabled: false
  //     }
  //   ];
  //
  //   this.footerBtnFirst = {
  //     label: 'Done',
  //     buttonType: ButtonTypeEnum.Primary
  //   };
  //   this.footerBtnLast = {
  //     label: 'Cancel',
  //     buttonType: ButtonTypeEnum.Secondary
  //   };
  //   this.filterAriaLabel = 'Find Label';
  //   this.filterPlaceholder = 'Find Label';
  //
  //   this.headerBtnFirst = {
  //     label: 'Clear selected',
  //     buttonType: ButtonTypeEnum.Tertiary,
  //     icon: {
  //       iconName: 'eraser',
  //       width: '15',
  //       height: '15'
  //     }
  //   };
  //   this.headerBtnLast = {
  //     label: 'Not equal to'
  //   };
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
}

import {Component, Input, OnInit} from '@angular/core';
import {ButtonTypeEnum} from 'projects/design-system-lib/src/public-api';
import {InputNumericSizeEnum} from 'projects/design-system-lib/src/public-api';
import {ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input() data = {
    icon: { iconName: 'bell'},
    messageMain: 'Notification message.',
    actionName: 'Action',
    messageSub: 'Notification message.',
    closeBtnName: 'Close'
  };
  menuTriggerName: 'Multi select';
  menuList: any;
  footerBtnFirst: any;
  footerBtnLast: any;
  filterAriaLabel: string;
  filterPlaceholder: string;
  headerBtnFirst: any;
  headerBtnLast: any;
  checkboxList: any;
  validator = Validators.required;
  tabGroup: any;

  constructor() {}

  ngOnInit(): void {
    this.menuList = [
      { name: 'Alabama',
        disabled: false
      },
      { name: 'Alaska disabled',
        disabled: true
      },
      { name: 'California',
        disabled: false
      },
      { name: 'Colorado',
        disabled: false
      },
      { name: 'Delaware',
        disabled: false
      },
      { name: 'Florida selected disabled',
        disabled: true,
        selected: true
      },
      { name: 'Georgia',
        disabled: false
      },
      { name: 'Hawaii',
        disabled: false
      },
      { name: 'Idaho',
        disabled: true
      },
      { name: 'Illinois',
        disabled: false
      },
      { name: 'Indiana',
        disabled: false
      },
      { name: 'Iowa',
        disabled: false
      },
      { name: 'Kansas',
        disabled: true,
        selected: true
      },
      { name: 'Kentucky',
        disabled: false
      }
    ];

    this.footerBtnFirst = {
      label: 'Done',
      buttonType: ButtonTypeEnum.Primary
    };
    this.footerBtnLast = {
      label: 'Cancel',
      buttonType: ButtonTypeEnum.Secondary
    };
    this.filterAriaLabel = 'Find Label';
    this.filterPlaceholder = 'Find Label';

    this.headerBtnFirst = {
      label: 'Clear selected',
        buttonType: ButtonTypeEnum.Tertiary,
        icon: {
        iconName: 'eraser',
          width: '15',
          height: '15'
      }
    };
    this.headerBtnLast = {
      label: 'Not equal to'
    };
    this.checkboxList = [
      {
        checkbox: { label: 'Last'},
        inputNum: { label: 'Release(s)', value: 1}
      },
      {
        checkbox: { label: 'Last'},
        inputNum: { label: 'Release(s)', value: 1}
      },
      {
        checkbox: { label: 'Last'},
        inputNum: { label: 'Release(s)', value: 1}
      },
      {
        checkbox: { label: 'Last'},
        inputNum: { label: 'Release(s)', value: 1}
      },
      {
        checkbox: { label: 'Next'},
        inputNum: { label: 'Release(s)', value: 1}
      }
    ];
    this.tabGroup =  [{
      tabButton: { labelName: 'Tab Name' },
      tabPanel: 'January Panel'
    },
    {
      tabButton: { labelName: 'February' },
      tabPanel: 'February Panel'
    },
    {
      tabButton: { labelName: 'March' },
      tabPanel: 'March Panel'
    },
    {
      tabButton: { labelName: 'April' },
      tabPanel: 'April Panel'
    },
    {
      tabButton: { labelName: 'May' },
      tabPanel: 'May Panel'
    },
    {
      tabButton: { labelName: 'June' },
      tabPanel: 'June Panel'
    },
    {
      tabButton: { labelName: 'July' },
      tabPanel: 'July Panel'
    },
    {
      tabButton: { labelName: 'August' },
      tabPanel: 'August Panel'
    },
    {
      tabButton: { labelName: 'September' },
      tabPanel: 'September Panel'
    }];
  }
}

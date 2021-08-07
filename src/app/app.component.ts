import {Component, Input, OnInit} from '@angular/core';
import {ButtonTypeEnum} from 'projects/design-system-lib/src/public-api';
import {InputNumericSizeEnum} from 'projects/design-system-lib/src/public-api';
import {ReactiveFormsModule, Validators} from '@angular/forms';
import {LabelTypesEnum} from 'projects/design-system-lib/src/lib/labels/label-types.enum';
import {inputTable} from '../stories/input/inputTable';

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
  menuTriggerName: string;
  menuList: any;
  footerBtnFirst: any;
  footerBtnLast: any;
  filterAriaLabel: string;
  filterPlaceholder: string;
  headerBtnFirst: any;
  headerBtnLast: any;
  checkboxList: any;
  validator = Validators.required;
  labelType = LabelTypesEnum;
  menuListRadio: any;
  menuListFreeText: any;
  inputMin: any;
  inputMax: any;
  optionsListName = 'twoLabelsToggle';
  optionsList = [{
    optionName: 'First',
    checked: true
  },
  {
    optionName: 'Second'
  }];
  inputTable = inputTable;
  navList: any[];
  mastheadSearch: any;

  constructor() {}

  ngOnInit(): void {
    this.menuTriggerName = 'Menu';
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
    this.menuListRadio =  [
      { label: 'All' },
      { label: 'Today' },
      { label: 'Yesterday' },
      { label: 'Tomorrow' },
      { label: 'This',
        menuList: [
          { name: 'week (Starts Sunday)', selected: true},
          { name: 'week (Starts Monday)'},
          { name: 'month'},
          { name: 'year'}
        ]
      },
      { label: 'Last',
        numericInputValue: 1,
        menuList: [
          { name: 'Day(s)', selected: true},
          { name: 'Week(s)'},
          { name: 'Month(s)'},
          { name: 'Year(s)'}
        ]
      },
      { label: 'Next',
        numericInputValue: 1,
        menuList: [
          { name: 'Day(s)', selected: true},
          { name: 'Week(s)'},
          { name: 'Month(s)'},
          { name: 'Year(s)'}
        ]
      },
      { label: 'Blanks' },
      { label: 'Between',
        dateStart: {
          ariaLabel: 'date start'
        },
        dateEnd: {
          ariaLabel: 'date start'
        }
      }
    ];
    this.menuListFreeText = [
      { name: 'Contains', inputValue: '', selected: true },
      { name: 'Not contains', inputValue: 'smth', selected: false },
      { name: 'Empty', selected: false },
      { name: 'Not empty', selected: false }
    ];
    this.inputMin = { label: 'Min', value: null };
    this.inputMax = { label: 'Max', value: 1 };

    this.navList = [
      {
        name: 'UK Ongoing Changes',
        megaMenu: true
      },
      {
        name: 'Overview',
        divider: true,
        subMenu: [
          {
            name: 'Dashboards'
          },
          {
            name: 'Cycles Progress'
          },
          {
            name: 'Project Details'
          }
        ]
      },
      {
        name: 'Development',
        badge: '0',
        subMenu: [
          {
            name: 'All Development'
          },
          {
            name: 'Planning board'
          }
        ]
      },
      {
        name: 'Tests',
        badge: '1',
        selected: true,
        subMenu: [
          {
            name: 'Test Tree'
          },
          {
            name: 'Test List'
          },
          {
            name: 'Playlist Execution'
          }
        ]
      },
      {
        name: 'Defects',
        badge: '2',
        subMenu: [
          {
            name: 'Defects'
          },
          {
            name: 'System-Wide Defects'
          }
        ]
      },
      {
        name: 'Reports'
      },
      {
        name: 'Corrections'
      }
    ];
    this.mastheadSearch = {
      filterAriaLabel: 'Search link',
        filterPlaceholder: 'Search',
        recentlyViewed: [
        { entity: 'User Story 17915',
          linkName: 'Paginating to deleted defect needs empty state',
          link: 'https://emea.panaya.com/site/rdx/tm/10605/development/requirementDetails/1642'
        },
        { entity: 'User Story 17915',
          linkName: 'Paginating to deleted defect needs empty state',
          link: 'https://emea.panaya.com/site/rdx/tm/10605/development/requirementDetails/1642'
        },
        { entity: 'User Story 17915',
          linkName: 'Paginating to deleted defect needs empty state',
          link: 'https://emea.panaya.com/site/rdx/tm/10605/development/requirementDetails/1642'
        },
        { entity: 'User Story 17915',
          linkName: 'Paginating to deleted defect needs empty state or to deleted defect needs empty state paginating to deleted defect needs empty state paginating to deleted defect needs empty state',
          link: 'https://emea.panaya.com/site/rdx/tm/10605/development/requirementDetails/1642'
        },
        { entity: 'User Story 17915',
          linkName: 'Paginating to deleted defect needs empty state',
          link: 'https://emea.panaya.com/site/rdx/tm/10605/development/requirementDetails/1642'
        },
        { entity: 'User Story 17915',
          linkName: 'Paginating to deleted defect needs empty state or to deleted defect needs empty state',
          link: 'https://emea.panaya.com/site/rdx/tm/10605/development/requirementDetails/1642'
        },
        { entity: 'User Story 17915',
          linkName: 'Paginating to deleted defect needs empty state',
          link: 'https://emea.panaya.com/site/rdx/tm/10605/development/requirementDetails/1642'
        },
        { entity: 'User Story 17915',
          linkName: 'Paginating to deleted defect needs empty state',
          link: 'https://emea.panaya.com/site/rdx/tm/10605/development/requirementDetails/1642'
        },
        { entity: 'User Story 17915',
          linkName: 'Paginating to deleted defect needs empty state',
          link: 'https://emea.panaya.com/site/rdx/tm/10605/development/requirementDetails/1642'
        },
        { entity: 'User Story 17915',
          linkName: 'Paginating to deleted defect needs empty state',
          link: 'https://emea.panaya.com/site/rdx/tm/10605/development/requirementDetails/1642'
        },
        { entity: 'User Story 17915',
          linkName: 'Paginating to deleted defect needs empty state',
          link: 'https://emea.panaya.com/site/rdx/tm/10605/development/requirementDetails/1642'
        }
      ]
    };
  }
}

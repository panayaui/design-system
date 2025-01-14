import {Component, Input, ViewChild} from '@angular/core';
import {
  ButtonTypeEnum,
  IActionButton,
  IMenuButton,
  ICheckbox,
  IInputText,
  IChip,
  MenuRadioGroupComponent,
  MenuTabsComponent,
  MenuRangeComponent,
  MenuFreeTextComponent,
  IInputNumeric, IHashtag
} from 'projects/design-system-lib/src/public-api';


@Component({
  selector: 'p-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.scss']
})
export class ComboComponent {
  @Input() buttonType = ButtonTypeEnum;

  // single select + input / action button
  @Input() singleMenuTrigger: IInputText | IActionButton;
  @Input() singleMenuList: any;
  @Input() groupTitle: any;
  @Input() footerButtons: IMenuButton[];
  @Input() filterAriaLabel: string;
  @Input() filterPlaceholder: string;

  // multi select + action button
  @Input() multiMenuTrigger: IActionButton;
  @Input() multiMenuList: any;
  @Input() headerBtnFirst: IMenuButton;
  @Input() headerBtnLast: ICheckbox;
  @Input() footerBtnFirst: IMenuButton;
  @Input() footerBtnLast: IMenuButton;

  // multi select + hashtag-bar
  @Input() hashtagList: IHashtag[];

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

  // range + chip
  @Input() rangeMenuTrigger: IChip;
  @Input() rangeMenuList: any;
  @Input() inputMin: IInputNumeric;
  @Input() inputMax: IInputNumeric;
  @ViewChild(MenuRangeComponent) rangeMenu: MenuRangeComponent;

  // free text + chip
  @Input() freeTextMenuTrigger: IChip;
  @Input() freeTextMenuList: any;
  @ViewChild(MenuFreeTextComponent) freeTextMenu: MenuFreeTextComponent;

  constructor() {}

  selectCompleted(selectedList): void {
    console.log(selectedList);
    const newHashtagList = this.hashtagList;
    selectedList.map( item => newHashtagList.push({ label: item.name }));
    console.log(newHashtagList);
    this.hashtagList = newHashtagList;
  }

  openRadioMenu(): void {
    this.radioMenu.openMenu();
  }

  openTabsMenu(): void {
    this.tabsMenu.openMenu();
  }

  publishArray(selectedList, trigger): void {
    console.log(selectedList);
    const selectedNames: string[] = [];
    selectedList.forEach( item => selectedNames.push(item.name));
    trigger.values = selectedNames;
  }

  openRangeMenu(): void {
    this.rangeMenu.openMenu();
  }

  openFreeTextMenu(): void {
    this.freeTextMenu.openMenu();
  }
}

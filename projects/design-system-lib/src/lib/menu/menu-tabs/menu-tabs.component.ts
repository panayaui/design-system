import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SubscriptionLike} from 'rxjs';
import {MatMenuTrigger} from '@angular/material/menu';
import {IMenuButton} from '../menu-button.interface';
import {ICheckbox} from '../../checkbox/checkbox.interface';
import {IInputNumeric} from '../../input/numeric/input-numeric.interface';
import {InputNumericSizeEnum} from '../../input/numeric/input-numeric-size.enum';

@Component({
  selector: 'p-menu-tabs',
  templateUrl: './menu-tabs.component.html',
  styleUrls: ['./menu-tabs.component.scss'],
})
export class MenuTabsComponent implements OnInit, OnDestroy {
  @Input() menuList: any[];
  @Input() filterPlaceholder: string; // if there is a search and buttons
  @Input() filterAriaLabel: string;
  @Input() headerBtnFirst: IMenuButton;
  @Input() headerBtnLast: ICheckbox;
  @Input() footerBtnFirst: IMenuButton;
  @Input() footerBtnLast: IMenuButton;
  @Input() checkboxList: {
    checkbox: ICheckbox,
    inputNum?: IInputNumeric
  }[];
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
  public filteredList: any[];
  public customControl: FormControl;
  private sub: SubscriptionLike;
  public tabSpecificName: string;
  public tabRelativeName: string;
  public inputNumericSize = InputNumericSizeEnum;

  ngOnInit(): void {
    this.filteredList = this.menuList;
    if (this.filterPlaceholder) {
      this.customControl = new FormControl('');
      this.sub = this.customControl.valueChanges.subscribe((value: string) => {
        this.alterList(value);
      });
    }
    if (!this.filterAriaLabel && this.filterPlaceholder) {
      this.filterAriaLabel = this.filterPlaceholder;
    }
    this.tabSpecificName = 'Specific';
    this.tabRelativeName = 'Relative';
  }

  ngOnDestroy(): void {
    if (this.filterPlaceholder && this.sub) {
      this.sub.unsubscribe();
      this.sub = null;
    }
  }

  alterList(value: string): void {
    this.filteredList = this.menuList.filter( item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
  }

  onOptionSelected(item): void {
    console.log(item);
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

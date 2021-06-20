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

@Component({
  selector: 'p-menu-multi-select',
  templateUrl: './menu-multi-select.component.html',
  styleUrls: ['./menu-multi-select.component.scss'],
})
export class MenuMultiSelectComponent implements OnInit, OnDestroy {
  @Input() menuTriggerName: string;
  @Input() menuList: any[];
  @Input() filterPlaceholder: string; // if there is a search and buttons
  @Input() filterAriaLabel: string;
  @Input() headerBtnFirst: IMenuButton;
  @Input() headerBtnLast: ICheckbox;
  @Input() footerBtnFirst: IMenuButton;
  @Input() footerBtnLast: IMenuButton;
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
  private selectedList: any[] = [];
  public selectedShown: any[] = [];
  public filteredList: any[];
  public formFieldControl: FormControl;
  private sub: SubscriptionLike;

  ngOnInit(): void {
    this.filteredList = this.menuList;
    if (this.filterPlaceholder) {
      this.formFieldControl = new FormControl('');
      this.sub = this.formFieldControl.valueChanges.subscribe((value: string) => {
        this.alterList(value);
      });
    }
    if (!this.filterAriaLabel && this.filterPlaceholder) {
      this.filterAriaLabel = this.filterPlaceholder;
    }
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
    this.selectedList.push(item);
  }

  selectCompleted(): void {
    this.selectedShown = this.selectedList;
    this.menuTrigger.closeMenu();
  }

  selectCanceled(): void {
    this.menuTrigger.closeMenu();
  }
}

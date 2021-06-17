import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SubscriptionLike} from 'rxjs';
import {IIcon} from '../../icon/icon.interface';
import {ButtonTypeEnum} from '../../button/button-type.enum';
import {MatMenuTrigger} from '@angular/material/menu';

interface IMenuButton {
  label: string;
  buttonType: ButtonTypeEnum;
  icon: IIcon;
}

@Component({
  selector: 'p-menu-multi-select',
  templateUrl: './menu-multi-select.component.html',
  styleUrls: ['./menu-multi-select.component.scss'],
})
export class MenuMultiSelectComponent implements OnInit, OnDestroy {
  @Input() menuTriggerName: string;
  @Input() menuList: any[];
  @Input() filterPlaceholder: string; // if there is a search and buttons
  @Input() inputAriaLabel: string;
  @Input() buttonFirst: IMenuButton;
  @Input() buttonLast: IMenuButton;
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
    if (!this.inputAriaLabel && this.filterPlaceholder) {
      this.inputAriaLabel = this.filterPlaceholder;
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
    console.log(this.selectedList);
  }

  selectCompleted(): void {
    this.selectedShown = this.selectedList;
    this.menuTrigger.closeMenu();
  }

  selectCanceled(): void {
    this.menuTrigger.closeMenu();
  }
}

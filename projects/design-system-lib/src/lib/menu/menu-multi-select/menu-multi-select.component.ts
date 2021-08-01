import {
  Component, EventEmitter,
  Input,
  OnDestroy,
  OnInit, Output,
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
  @Input() menuList: any[];
  @Input() groupTitle: boolean = false; // true if there is a group title
  @Input() filterPlaceholder: string; // if there is a search and buttons
  @Input() filterAriaLabel: string;
  @Input() headerBtnFirst: IMenuButton;
  @Input() headerBtnLast: ICheckbox;
  @Input() footerBtnFirst: IMenuButton;
  @Input() footerBtnLast: IMenuButton;
  @Output() onSelectCompleted: EventEmitter<any> = new EventEmitter();
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
  public filteredList: any[];
  public formFieldControl: FormControl;
  private sub: SubscriptionLike;
  private selectedList: any[] = [];

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
    if (this.groupTitle) {
      this.filteredList = [];
      this.menuList.forEach(group => {
        const filteredGroup = group.names.filter( name => name.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
        if (filteredGroup.length > 0) {
          this.filteredList.push(Object.assign({}, group, group.names = filteredGroup));
        }
      });
    }
    else {
      this.filteredList = this.menuList.filter( item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }
  }

  onOptionSelected(item): void {
    this.selectedList.push(item);
    console.log(this.selectedList);
  }

  selectCompleted(): void {
    this.onSelectCompleted.emit(this.selectedList);
    this.menuTrigger.closeMenu();
  }

  selectCanceled(): void {
    this.menuTrigger.closeMenu();
  }
}

import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SubscriptionLike} from 'rxjs';
import {IMenuButton} from '../menu-button.interface';
import {ButtonTypeEnum} from '../../button/button-type.enum';
import {MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'p-menu-single-select',
  templateUrl: './menu-single-select.component.html',
  styleUrls: ['./menu-single-select.component.scss'],
})
export class MenuSingleSelectComponent implements OnInit, OnDestroy {
  @Input() menuTriggerName: string;
  @Input() menuList: any[];
  @Input() groupTitle: boolean = false; // if there is a group title
  @Input() filterPlaceholder: string; // if there is a search and buttons
  @Input() filterAriaLabel: string;
  @Input() buttonFirst: IMenuButton;
  @Input() buttonLast: IMenuButton;
  @Output() onClickTask: EventEmitter<any> = new EventEmitter();
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
  public filteredList: any[];
  public formFieldControl: FormControl;
  private sub: SubscriptionLike;
  public buttonTypeEnum: ButtonTypeEnum;

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
    this.filteredList = [];
    this.menuList.forEach(group => {
      const filteredGroup = group.names.filter( name => name.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
      if (filteredGroup.length > 0) {
        this.filteredList.push(Object.assign({}, group, group.names = filteredGroup));
      }
    });
  }

  selectCompleted(): void {
    this.menuTrigger.closeMenu();
  }

  onSelectedItem($event, item): void {
    console.log(item);
    this.onClickTask.emit(item);
    this.menuTrigger.closeMenu();
  }
}

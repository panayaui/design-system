import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SubscriptionLike} from 'rxjs';
import {IIcon} from '../../icon/icon.interface';
import {ButtonTypeEnum} from '../../button/button-type.enum';

interface IMenuButton {
  label: string;
  buttonType: ButtonTypeEnum;
  icon: IIcon;
}

@Component({
  selector: 'p-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  @Input() menuList: any[];
  @Input() groupTitle: boolean = false; // if there is a group title
  @Input() filterPlaceholder: string; // if there is a search and buttons
  @Input() inputAriaLabel: string;
  @Input() buttonFirst: IMenuButton;
  @Input() buttonLast: IMenuButton;
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
    this.filteredList = [];
    this.menuList.forEach(group => {
      const filteredGroup = group.names.filter( name => name.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
      if (filteredGroup.length > 0) {
        this.filteredList.push(Object.assign({}, group, group.names = filteredGroup));
      }
    });
  }
}

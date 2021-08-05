import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {IMenuButton} from '../../menu/menu-button.interface';
import {FormControl} from '@angular/forms';
import {MatMenuTrigger} from '@angular/material/menu';
import {SubscriptionLike} from 'rxjs';

@Component({
  selector: 'p-masthead-search',
  templateUrl: './masthead-search.component.html',
  styleUrls: ['./masthead-search.component.scss'],
})
export class MastheadSearchComponent implements OnInit, OnDestroy {
  @Input() recentlyViewed: any[];
  @Input() groupTitle: boolean = false; // true if there is a group title
  @Input() filterPlaceholder: string; // if there is a search and buttons
  @Input() filterAriaLabel: string;
  @Output() onClickTask: EventEmitter<any> = new EventEmitter();
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
  public filteredList: any[];
  public formFieldControl: FormControl;
  private sub: SubscriptionLike;

  ngOnInit(): void {
    this.filteredList = this.recentlyViewed;
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
    this.recentlyViewed.forEach(group => {
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


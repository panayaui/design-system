import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {IMenuButton} from '../../menu/menu-button.interface';
import {FormControl} from '@angular/forms';
import {MatMenuTrigger} from '@angular/material/menu';
import {SubscriptionLike} from 'rxjs';
import {ButtonTypeEnum} from '../../button/button-type.enum';

@Component({
  selector: 'p-masthead-search',
  templateUrl: './masthead-search.component.html',
  styleUrls: ['./masthead-search.component.scss'],
})
export class MastheadSearchComponent implements OnInit, OnDestroy {
  @Input() recentlyViewed: any[];
  @Input() filterPlaceholder: string;
  @Input() filterAriaLabel: string;
  @Output() onCloseSearch: EventEmitter<any> = new EventEmitter();
  public formFieldControl: FormControl;
  private sub: SubscriptionLike;
  public buttonType = ButtonTypeEnum;

  ngOnInit(): void {
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
    console.log(value);
  }

  closeSearch(): void {
    this.onCloseSearch.emit();
  }
}


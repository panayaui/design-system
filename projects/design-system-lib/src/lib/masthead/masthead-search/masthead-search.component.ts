import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SubscriptionLike} from 'rxjs';
import {ButtonTypeEnum} from '../../button/button-type.enum';
import { trigger, transition, state, animate, style } from '@angular/animations';

@Component({
  selector: 'p-masthead-search',
  templateUrl: './masthead-search.component.html',
  styleUrls: ['./masthead-search.component.scss'],
  animations: [
    trigger('childAnimation', [
      state('open', style({
        width: '550px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        width: '300px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('* => *', [
        animate('1s')
      ]),
    ]),
  ]
})
export class MastheadSearchComponent implements OnInit, OnDestroy {
  @Input() isSearchVisible: boolean = false;
  @Input() recentlyViewed: any[];
  @Input() filterPlaceholder: string;
  @Input() filterAriaLabel: string;
  @Output() onCloseSearch: EventEmitter<any> = new EventEmitter();
  public formFieldControl: FormControl;
  private sub: SubscriptionLike;
  public buttonType = ButtonTypeEnum;
  isOpen = false;

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
    // if (!this.isSearchVisible) {
    //   this.isSearchVisible = false;
    // }
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

  toggle(): void {
    this.isSearchVisible = !this.isSearchVisible;
  }

  closeSearch(): void {
    // this.onCloseSearch.emit();
  }
}


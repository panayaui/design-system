import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SubscriptionLike} from 'rxjs';
import {ButtonTypeEnum} from '../../button/button-type.enum';
import {trigger, transition, state, animate, style, sequence} from '@angular/animations';

@Component({
  selector: 'p-masthead-search',
  templateUrl: './masthead-search.component.html',
  styleUrls: ['./masthead-search.component.scss'],
  animations: [
    trigger('searchAnimation', [
      state('open', style({
        width: '384px',
        height: '684px',
        overflow: 'visible'
      })),
      state('closed', style({
        width: '0',
        height: '64px',
        overflow: 'hidden'
      })),
      transition('open => closed',
      sequence(
        [
          animate('400ms ease-in-out', style ({ height: '64px', overflow: 'hidden' })),
          animate('400ms ease-in-out', style ({ width: '0' }))
        ]
      )
      ),
      transition('closed => open',
        sequence(
          [
            animate('400ms ease-in-out', style ({ width: '384px' })),
            animate('400ms ease-in-out', style ({ height: '684px', overflow: 'visible' }))
          ]
        )
      )
    ])
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


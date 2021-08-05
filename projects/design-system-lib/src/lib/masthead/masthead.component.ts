import {Component, Input} from '@angular/core';
import {ButtonTypeEnum} from '../button/button-type.enum';
import {IMastheadMenuItem} from './masthead.interface';

@Component({
  selector: 'p-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss'],
})
export class MastheadComponent {
  @Input() navList: IMastheadMenuItem[];
  @Input() mastheadSearch: {
    filterAriaLabel: string;
    filterPlaceholder: string;
    recentlyViewed: any[];
  };
  public buttonType = ButtonTypeEnum;
  public searchVisible: boolean = false;

  toggleSearch(event: any, isSearchVisible: boolean): void {
    console.log(isSearchVisible);
    this.searchVisible = isSearchVisible;
  }
}

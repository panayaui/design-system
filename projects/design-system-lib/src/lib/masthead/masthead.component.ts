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
  @Input() settingsList: IMastheadMenuItem[];
  public buttonType = ButtonTypeEnum;
  public searchVisible: boolean = false;
  public settingsVisible: boolean = false;

  toggleSearch(isSearchVisible: boolean): void {
    this.searchVisible = isSearchVisible;
  }

  buttonPlaceholder(): void {
    console.log('icon button clicked');
  }

  toggleSettings(settingsVisible: boolean): void {
    this.settingsVisible = settingsVisible;
  }
}

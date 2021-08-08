import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonTypeEnum} from '../../button/button-type.enum';
import {IMastheadMenuItem} from '../masthead.interface';

@Component({
  selector: 'p-masthead-settings',
  templateUrl: './masthead-settings.component.html',
  styleUrls: ['./masthead-settings.component.scss'],
  
})
export class MastheadSettingsComponent {
  @Input() settingsList: IMastheadMenuItem[];
  @Output() onCloseSettings: EventEmitter<any> = new EventEmitter();
  public buttonType = ButtonTypeEnum;
  public settingsVisible: boolean = false;

  closeSearch(): void {
    this.onCloseSettings.emit();
  }
}

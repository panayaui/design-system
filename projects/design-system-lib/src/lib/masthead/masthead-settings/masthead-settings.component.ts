import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonTypeEnum} from '../../button/button-type.enum';
import {IMastheadMenuItem} from '../masthead.interface';
import {animate, sequence, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'p-masthead-settings',
  templateUrl: './masthead-settings.component.html',
  styleUrls: ['./masthead-settings.component.scss'],
  animations: [
    trigger('settingsAnimation', [
      state('open', style({
        width: '100%',
        opacity: '1',
        display: 'flex',
        paddingLeft: '3px'
      })),
      state('closed', style({
        width: '0',
        opacity: '0',
        display: 'none',
        paddingLeft: '40px'
      })),
      transition('closed => open', // <----
        sequence(
          [
            style ({ display: 'flex' }),
            animate('50ms', style ({ width: '46px', opacity: '1' })),
            animate('400ms', style ({ width: '100%', paddingLeft: '40px' }))
          ]
        )
      ),
      transition('open => closed', // ---->
        sequence(
          [
            animate('400ms', style ({ width: '46px', paddingLeft: '3px' })),
            animate( '50ms', style ({ width: '0', opacity: '0' })),
            style ({ display: 'none' })
          ]
        )
      )
    ])
  ]
})
export class MastheadSettingsComponent {
  @Input() settingsList: IMastheadMenuItem[];
  @Input() isSettingsVisible: boolean;
  @Output() onCloseSettings: EventEmitter<any> = new EventEmitter();
  public buttonType = ButtonTypeEnum;

}

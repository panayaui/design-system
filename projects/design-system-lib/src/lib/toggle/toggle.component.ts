import {Component, Input} from '@angular/core';
import {IIcon} from '../icon/icon.interface';

interface IToggleOption {
  optionName: string;
  iconOn: IIcon;
  iconOff: IIcon;
  checked: boolean;
}

@Component({
  selector: 'p-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {
  @Input() optionsListName: string;
  @Input() optionsList: IToggleOption[];
}

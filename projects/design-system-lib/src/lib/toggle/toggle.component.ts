import {Component, Input} from '@angular/core';

interface IToggleOption {
  optionName: string;
  icon: string;
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

import {Component, Input} from '@angular/core';
import {IChip} from 'projects/design-system-lib/src/public-api';
import {IActionButton} from 'projects/design-system-lib/src/public-api';

@Component({
  selector: 'p-chips-and-actions',
  templateUrl: './chips-with-action-buttons.component.html',
  styleUrls: ['./chips-with-action-buttons.component.scss'],
})
export class ChipsWithActionButtonsComponent {
  @Input() chips: IChip[];
  @Input() chipsAriaLabel: string;
  @Input() firstButton: IActionButton;
  @Input() lastButton: IActionButton;
}

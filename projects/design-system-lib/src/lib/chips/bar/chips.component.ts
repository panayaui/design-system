import {Component, Input} from '@angular/core';
import {IChip} from '../chip-button.interface';

@Component({
  selector: 'p-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})
export class ChipsComponent {
  @Input() chips: IChip[];
}

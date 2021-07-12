import {Component, Input} from '@angular/core';
import {IChip} from '../chip-button.interface';

@Component({
  selector: 'p-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})
export class ChipsComponent {
  @Input() chips: IChip[];
  @Input() ariaLabel: string;

  valuesInTooltip(values: string[]): string {
    let tooltipText = '';
    values.forEach( value => tooltipText = `${tooltipText} \n ${value}`);
    return tooltipText;
  }
}

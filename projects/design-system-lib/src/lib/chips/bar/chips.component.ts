import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IChip} from '../chip-button.interface';
import {ButtonTypeEnum} from '../../button/button-type.enum';

@Component({
  selector: 'p-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})
export class ChipsComponent {
  @Input() chips: IChip[];
  @Input() ariaLabel: string;
  @Output() onClickTask: EventEmitter<any> = new EventEmitter();
  public buttonType = ButtonTypeEnum;

  valuesInTooltip(values: string[]): string {
    let tooltipText = '';
    values.forEach( value => tooltipText = `${tooltipText} \n ${value}`);
    return tooltipText;
  }
}

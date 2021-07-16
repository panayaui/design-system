import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonTypeEnum} from '../../button/button-type.enum';

@Component({
  selector: 'p-chip-button',
  templateUrl: './chip-button.component.html',
  styleUrls: ['./chip-button.component.scss'],
})
export class ChipButtonComponent {
  @Input() label: string;
  @Input() values: string[];
  @Input() iconRemove: boolean;
  @Input() full: boolean;
  @Input() active: boolean;
  @Output() onClickTask: EventEmitter<any> = new EventEmitter();
  public buttonType = ButtonTypeEnum;

  public get valuesInTooltip(): string {
    let tooltipText = '';
    this.values.forEach( value => tooltipText = `${tooltipText} \n ${value}`);
    return tooltipText;
  }

  removeChip(): void {
    console.log('remove chip');
  }
}

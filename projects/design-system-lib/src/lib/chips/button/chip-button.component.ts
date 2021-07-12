import {Component, Input} from '@angular/core';

@Component({
  selector: 'p-chip-button',
  templateUrl: './chip-button.component.html',
  styleUrls: ['./chip-button.component.scss'],
})
export class ChipButtonComponent {
  @Input() label: string;
  @Input() values: string[];
  @Input() iconRemove: boolean;
  @Input() iconMenuTrigger: boolean;
  @Input() full: boolean;
  @Input() active: boolean;

  public get valuesInTooltip(): string {
    let tooltipText = '';
    this.values.forEach( value => tooltipText = `${tooltipText} \n ${value}`);
    return tooltipText;
  }
}

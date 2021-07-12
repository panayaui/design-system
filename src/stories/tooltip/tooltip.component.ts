import {Component, Input} from '@angular/core';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'p-tooltip',
  templateUrl: './tooltip.component.html'
})
export class TooltipComponent {
  @Input() message: string; // matTooltip
  @Input() disabled: boolean = false; // matTooltipDisabled
  @Input() showDelay: number; // matTooltipShowDelay in ms
  @Input() hideDelay: number; // matTooltipHideDelay in ms
  @Input() position: string = 'above'; // matTooltipPosition
  // type TooltipPosition = 'left' | 'right' | 'above' | 'below' | 'before' | 'after';

  public get classes(): string {
    return `p-tooltip ${this.position}`;
  }
}

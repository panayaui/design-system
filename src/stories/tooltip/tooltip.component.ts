import {Component, Input} from '@angular/core';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'p-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export default class TooltipComponent {
  @Input() message: string; // matTooltip
  @Input() disabled: boolean = false; // matTooltipDisabled
  @Input() showDelay: number; // matTooltipShowDelay in ms
  @Input() hideDelay: number; // matTooltipHideDelay in ms
  @Input() position: string; // matTooltipPosition
  // type TooltipPosition = 'left' | 'right' | 'above' | 'below' | 'before' | 'after';
  @Input() tooltipClass: string = 'p-tooltip'; // matTooltipClass - css class
}

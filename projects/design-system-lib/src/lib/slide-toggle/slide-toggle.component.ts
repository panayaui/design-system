import {Component, Input} from '@angular/core';

@Component({
  selector: 'p-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
})
export class SlideToggleComponent {
  @Input() labelActive: string;
  @Input() labelInactive: string;
  @Input() ariaLabel: string; // required even if there is a label
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;

  public get tooltipText(): string {
    return this.checked ? 'Switch to ' + this.labelInactive : 'Switch to ' + this.labelActive;
  }

}

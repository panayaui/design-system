import {Component, Input} from '@angular/core';
import {ProgressBarEnum} from './progress-bar.enum';

@Component({
  selector: 'p-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input() value: number;
  @Input() size: ProgressBarEnum;
  @Input() label: string;
  @Input() ariaLabel: string;
  public progressBarSize = ProgressBarEnum;
}

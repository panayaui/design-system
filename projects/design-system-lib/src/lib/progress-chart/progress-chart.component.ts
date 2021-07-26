import {Component, Input} from '@angular/core';
import {ProgressChartEnum} from './progress-chart.enum';

@Component({
  selector: 'p-progress-chart',
  templateUrl: './progress-chart.component.html',
  styleUrls: ['./progress-chart.component.scss'],
})
export class ProgressChartComponent {
  @Input() values: {
    riskType: ProgressChartEnum,
    value: number
  }[];
  @Input() label: string;
  @Input() ariaLabel: string;
  @Input() isGeneralProgress: boolean;
  public progressChartEnum = ProgressChartEnum;
}

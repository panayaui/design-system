import {Component, Input} from '@angular/core';
import {LabelTypesEnum} from './label-main.enum';

@Component({
  selector: 'p-label-main',
  templateUrl: './label-main.component.html',
  styleUrls: ['./label-main.component.scss'],
})
export default class LabelMainComponent {
  @Input() label: string;
  @Input() type: LabelTypesEnum;
}

import {Component, Input} from '@angular/core';
import {LabelTypesEnum} from '../label-types.enum';

@Component({
  selector: 'p-label-small',
  templateUrl: './label-small.component.html',
  styleUrls: ['./label-small.component.scss'],
})
export class LabelSmallComponent {
  @Input() label: string;
  @Input() ariaLabel: string; // required if there is no label
  @Input() type: LabelTypesEnum;
}

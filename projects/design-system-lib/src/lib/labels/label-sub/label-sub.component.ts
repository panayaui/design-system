import {Component, Input} from '@angular/core';
import {LabelTypesEnum} from '../label-types.enum';

@Component({
  selector: 'p-label-sub',
  templateUrl: './label-sub.component.html',
  styleUrls: ['./label-sub.component.scss'],
})
export class LabelSubComponent {
  @Input() label: string;
  @Input() ariaLabel: string; // required if there is no label
  @Input() type: LabelTypesEnum;
}

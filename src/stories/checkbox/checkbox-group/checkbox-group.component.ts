import {Component, Input} from '@angular/core';
import ICheckbox from '../checkbox.interface';

@Component({
  selector: 'p-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
})
export default class CheckboxGroupComponent {
  @Input() groupTitle: string;
  @Input() checkboxGroup: ICheckbox[];
  @Input() error: string;
}

import {Component, Input} from '@angular/core';
import ICheckboxGroup from '../checkbox-group/checkbox-group.interface';

@Component({
  selector: 'p-checkbox-group-page',
  templateUrl: './checkbox-group-page.component.html',
  styleUrls: ['./checkbox-group-page.component.scss'],
})
export default class CheckboxGroupPageComponent {
  @Input() checkboxGroupPage: ICheckboxGroup[];
}

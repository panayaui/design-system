import {Component, Input} from '@angular/core';
import {IActionButton} from '../../action-button/action-button.interface';

@Component({
  selector: 'p-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() toolbar: IActionButton[];
}

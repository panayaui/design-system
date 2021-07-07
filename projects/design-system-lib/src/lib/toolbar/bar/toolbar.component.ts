import {Component, Input} from '@angular/core';
import {IToolbarButton} from '../toolbar-button.interface';

@Component({
  selector: 'p-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() toolbar: IToolbarButton[];
}

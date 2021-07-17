import {Component, Input} from '@angular/core';
import {IExpansionPanel} from './expansion-panel.interface';

@Component({
  selector: 'p-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
})
export class ExpansionPanelComponent {
  @Input() expansionPanel: IExpansionPanel[];

}

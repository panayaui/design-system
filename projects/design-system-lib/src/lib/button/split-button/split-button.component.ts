import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonTypeEnum} from '../button-type.enum';
import {ButtonComponent} from '../button.component';

@Component({
  selector: 'p-split-button',
  templateUrl: './split-button.component.html',
  styleUrls: ['./split-button.component.scss'],
})
export class SplitButtonComponent extends ButtonComponent {
  @Output() onClickTrigger: EventEmitter<any> = new EventEmitter();
}

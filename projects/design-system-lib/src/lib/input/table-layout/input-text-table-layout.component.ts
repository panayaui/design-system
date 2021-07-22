import {Component, Input} from '@angular/core';
import {IInputTextTableLine} from './input-text-table-line.interface';

@Component({
  selector: 'p-input-text-table-layout',
  templateUrl: './input-text-table-layout.component.html',
  styleUrls: ['./input-text-table-layout.component.scss'],
})
export class InputTextTableLayoutComponent {
  @Input()  title: string;
  @Input() table: IInputTextTableLine[];
  public isHidden: boolean = false;
}

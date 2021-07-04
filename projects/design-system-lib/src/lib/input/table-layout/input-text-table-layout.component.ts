import {Component, Input} from '@angular/core';
import {IInputText} from '../text/input-text.interface';

@Component({
  selector: 'p-input-text-table-layout',
  templateUrl: './input-text-table-layout.component.html',
  styleUrls: ['./input-text-table-layout.component.scss'],
})
export class InputTextTableLayoutComponent {
  @Input() title: string;
  @Input() table: {
    tableHeader: string,
    tableData: IInputText
  };
  public isTableVisible: boolean = true;
}



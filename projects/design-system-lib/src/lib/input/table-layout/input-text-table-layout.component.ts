import {Component, Input, OnInit} from '@angular/core';
import {IInputTextTable} from './input-text-table.interface';

@Component({
  selector: 'p-input-text-table-layout',
  templateUrl: './input-text-table-layout.component.html',
  styleUrls: ['./input-text-table-layout.component.scss'],
})
export class InputTextTableLayoutComponent implements OnInit {
  @Input() table: IInputTextTable[];
  public tableToRender: IInputTextTable[];

  ngOnInit(): void {
    this.tableToRender = this.table.map( singleTable => {
      return {...singleTable, isHidden: false};
    });
  }

  toggleTable(tableInd: number): void {
    const timer = 100;
    let delay: number;
    let delayStep: number;
    this.tableToRender[tableInd].isHidden = !this.tableToRender[tableInd].isHidden;
    if (this.tableToRender[tableInd].isHidden) {
      delay = (this.tableToRender[tableInd].singleTableData.length + 1) * timer;
      delayStep = timer * -1;
    }
    else {
      delay = 0;
      delayStep = timer;
    }
    this.tableToRender[tableInd].singleTableData.forEach( line => {
      delay += delayStep;
      line.transitionDelay = delay;
    });
  }
}



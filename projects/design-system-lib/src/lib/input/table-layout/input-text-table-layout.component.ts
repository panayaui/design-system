import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {IInputTextTableLine} from './input-text-table-line.interface';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'p-input-text-table-layout',
  templateUrl: './input-text-table-layout.component.html',
  styleUrls: ['./input-text-table-layout.component.scss'],
})
export class InputTextTableLayoutComponent implements OnInit {
  @Input()  title: string;
  @Input() table: IInputTextTableLine[];
  @Input() isExpandable: boolean = true;
  public isHidden: boolean = false;
  private value: number = 0;

  @HostBinding('attr.style')
  public get valueAsStyle(): any {
    return this.sanitizer.bypassSecurityTrustStyle(`--row-amount: ${this.value}`);
  }

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.value = this.table.length;
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ButtonTypeEnum} from '../button/button-type.enum';
import {InputNumericSizeEnum} from '../input/numeric/input-numeric-size.enum';

@Component({
  selector: 'p-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input()
  currentPage = 1; // based 1

  @Input()
  totalPages: number;

  @Input()
  pageSizeOptions?: { name: any }[];

  @Input()
  pageSize = 50;

  @Output()
  pageSizeChanged = new EventEmitter<number>();

  @Output()
  prevPageClicked = new EventEmitter();
  @Output()
  nextPageClicked = new EventEmitter();
  @Output()
  firstPageClicked = new EventEmitter();
  @Output()
  lastPageClicked = new EventEmitter();
  @Output()
  pageNumberClicked = new EventEmitter();
  /*
  @Output()
  onPageNumberInput = new EventEmitter<number>();
*/
  public buttonType = ButtonTypeEnum;
  public inputNumericSize = InputNumericSizeEnum;
  public step: number = 5;
  public pagesList: number[] = [];

  ngOnInit(): void {
    if (!this.pageSizeOptions) this.pageSizeOptions = [
      {name: 25},
      {name: 50},
      {name: 100}
    ];
    console.log(this.pageSizeOptions);
    this.definePagesList();
  }

  get canMoveToPrevious(): boolean {
    return this.currentPage > 1;
  }

  get canMoveToNext(): boolean {
    return this.currentPage < this.totalPages;
  }

  definePagesList(): void {
    let lastShown = 1;
    if (this.pagesList.length) {
      lastShown = this.pagesList.length;
    }
    for ( let i = lastShown; i <= this.step; i++) {
      this.pagesList.push(i);
    }
    console.log(this.pagesList);
  }
}

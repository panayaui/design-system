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
  public pageList: number[];
  public step: number = 5;
  private firstInList: number;
  private lastInList: number;
  public lessBtnDisabled: boolean = true;
  public moreBtnDisabled: boolean = false;

  ngOnInit(): void {
    if (!this.pageSizeOptions) this.pageSizeOptions = [
      {name: 25},
      {name: 50},
      {name: 100}
    ];
    this.firstInList = 1;
    this.lastInList = this.firstInList + this.step - 1;
    this.buildPagesList();
  }

  get canMoveToPrevious(): boolean {
    return this.currentPage > 1;
  }

  get canMoveToNext(): boolean {
    return this.currentPage < this.totalPages;
  }

  definePagesList($event: any, increasePageNumber: boolean): void {
    this.moreBtnDisabled = false;
    this.lessBtnDisabled = false;
    if (increasePageNumber) {
      this.firstInList += this.step;
      this.lastInList += this.step;
      if (this.lastInList >= this.totalPages) {
        this.moreBtnDisabled = true;
      }
    }
    else {
      this.firstInList -= this.step;
      this.lastInList -= this.step;
      if (this.firstInList <= 1) {
        this.firstInList = 1;
        this.lastInList = this.firstInList + this.step - 1;
        this.lessBtnDisabled = true;
      }
    }
    this.buildPagesList();
  }

  buildPagesList(): void {
    this.pageList = [];
    for ( let i = this.firstInList; i <= this.lastInList; i++) {
      this.pageList.push(i);
    }
  }
}

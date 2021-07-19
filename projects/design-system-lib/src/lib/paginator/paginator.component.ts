import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonTypeEnum} from '../button/button-type.enum';

@Component({
  selector: 'p-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input()
  currentPage = 1; // based 1

  @Input()
  totalPages: number;

  @Input()
  pageSizeOptions?: number[] = [25, 50, 100];

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

  /*
  @Output()
  onPageNumberInput = new EventEmitter<number>();
*/
  public buttonType = ButtonTypeEnum;

  pageSizeToOption = id => ({ id });

  get canMoveToPrevious(): boolean {
    return this.currentPage > 1;
  }

  get canMoveToNext(): boolean {
    return this.currentPage < this.totalPages;
  }
}

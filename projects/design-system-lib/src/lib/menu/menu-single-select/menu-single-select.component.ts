import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuComponent} from '../menu/menu.component';

@Component({
  selector: 'p-menu-single-select',
  templateUrl: './menu-single-select.component.html',
  styleUrls: ['./menu-single-select.component.scss'],
})
export class MenuSingleSelectComponent extends MenuComponent implements OnInit, OnDestroy {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.initComp();
  }

  ngOnDestroy(): void {
    this.destroyComp();
  }

}

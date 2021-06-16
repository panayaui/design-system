import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SubscriptionLike} from 'rxjs';
import {IIcon} from '../../icon/icon.interface';
import {ButtonTypeEnum} from '../../button/button-type.enum';
import {MatMenuTrigger} from '@angular/material/menu';

interface IMenuButton {
  label: string;
  buttonType: ButtonTypeEnum;
  icon: IIcon;
}

@Component({
  selector: 'p-menu-multi-select',
  templateUrl: './menu-multi-select.component.html',
  styleUrls: ['./menu-multi-select.component.scss'],
})
export class MenuMultiSelectComponent implements OnInit, OnDestroy, AfterViewInit{
  @Input() menuList: any[];
  @Input() buttonFirst: IMenuButton;
  @Input() buttonLast: IMenuButton;
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {

  }

  onDone(): void {
    this.menuTrigger.closeMenu();
  }

  onCancel(): void {
    this.menuTrigger.closeMenu();
  }
}

import {
  Component,
  Input, OnInit,
  ViewChild
} from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';
import {IMenuButton} from '../menu-button.interface';
import {InputNumericSizeEnum} from '../../input/numeric/input-numeric-size.enum';
import {IInputNumeric} from '../../input/numeric/input-numeric.interface';


@Component({
  selector: 'p-menu-range',
  templateUrl: './menu-range.component.html',
  styleUrls: ['./menu-range.component.scss'],
})
export class MenuRangeComponent {
  @Input() menuTriggerName: string;
  @Input() inputMin: IInputNumeric;
  @Input() inputMax: IInputNumeric;
  @Input() footerBtnFirst: IMenuButton;
  @Input() footerBtnLast: IMenuButton;
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger
  public inputNumericSize = InputNumericSizeEnum;

  selectCompleted(): void {
    this.menuTrigger.closeMenu();
  }

  selectCanceled(): void {
    this.menuTrigger.closeMenu();
  }
}

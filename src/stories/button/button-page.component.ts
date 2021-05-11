import {Component, Input} from '@angular/core';
import IButton from './button.interface';
import {KeyValue} from '@angular/common';

interface IButtonsPage {
  small: {
    height: string;
    buttons: {
      primary: IButton[];
      secondary: IButton[];
      tertiary: IButton[];
      distructive: IButton[]
    }
  };
  large: {
    height: string;
    buttons: {
      primary: IButton[];
      secondary: IButton[];
      tertiary: IButton[];
      distructive: IButton[]
    }
  };
}

@Component({
  selector: 'p-button-page',
  templateUrl: './button-page.component.html',
  styleUrls: ['./button-page.component.scss'],
})
export default class ButtonPageComponent {
  @Input() buttonsPage: IButtonsPage;

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }
}

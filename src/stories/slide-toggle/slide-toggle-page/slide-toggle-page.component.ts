import {Component, Input} from '@angular/core';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'p-slide-toggle-page',
  templateUrl: './slide-toggle-page.component.html',
  styleUrls: ['./slide-toggle-page.component.scss'],
})
export default class SlideTogglePageComponent {
  @Input() slideTogglePage: any;

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }
}

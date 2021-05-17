import {Component, Input} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {I} from '@angular/cdk/keycodes';

@Component({
  selector: 'p-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
})
export default class SlideToggleComponent {
  @Input() label: string;
  @Input() ariaLabel: string;
  @Input() checked: boolean;
  @Input() disabled: boolean = false;
}

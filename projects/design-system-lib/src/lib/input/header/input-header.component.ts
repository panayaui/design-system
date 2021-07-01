import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {InputOutlineComponent} from '../outline/input-outline.component';

@Component({
  selector: 'p-input-header',
  templateUrl: './input-header.component.html',
  styleUrls: ['./input-header.component.scss'],
})
export class InputHeaderComponent extends InputOutlineComponent {
  @Input() readonlyState: boolean = true;
  @ViewChild('inputField') inputField: ElementRef;

  constructor() {
    super();
  }

  onInputFocused(): void {
    this.readonlyState = false;
    this.inputField.nativeElement.select();
  }

  onInputBlur(): void {
    this.readonlyState = true;
  }
}

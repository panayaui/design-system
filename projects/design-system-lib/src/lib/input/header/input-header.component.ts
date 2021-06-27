import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {InputOutlineComponent} from '../outline/input-outline.component';

@Component({
  selector: 'p-input-header',
  templateUrl: './input-header.component.html',
  styleUrls: ['./input-header.component.scss'],
})
export class InputHeaderComponent extends InputOutlineComponent {
  @Input() readonlyState: boolean = true;
  public headerControl: FormControl = new FormControl(
    {value: this.value, disabled: this.disabled}, this.validators);

  constructor() {
    super();
  }
}

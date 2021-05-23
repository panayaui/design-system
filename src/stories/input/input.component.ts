import {Component, Input} from '@angular/core';

@Component({
  selector: 'p-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export default class InputComponent {
  @Input() name: string;
  @Input() width: string  = '16'; // pixels or auto
  @Input() height: string  = 'auto'; // pixels or auto
  @Input() placeholder: string;
  @Input() newPar: string;

  public get iconStyles(): any {
    return {
      width: this.width === 'auto' ? this.width : `${this.width}px`,
      height: this.height === 'auto' ? this.height : `${this.height}px`,
    };
  }
}

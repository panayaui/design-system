import {Component, Input} from '@angular/core';

@Component({
  selector: 'p-button',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export default class IconComponent {
  @Input() name: string;
  @Input() display: string = 'inline-block';
  @Input() width: number  = 16; // pixels
  @Input() height: number  = 16; // pixels
  @Input() fill: string = 'none'; // icon background
  @Input() stroke: string = 'currentColor'; // line color
  @Input() strokeWidth: number = 1; // line width in pixels
  @Input() strokeLinecap: string = 'round'; // line end
  @Input() strokeLinejoin: string = 'round'; // two lines join

  public get iconStyles(): any {
    return {
      display: this.display,
      width: `${this.width}px`,
      height: `${this.height}px`,
      fill: this.fill,
      stroke: this.stroke,
      strokeWidth: `${this.strokeWidth}px`,
      strokeLinecap: this.strokeLinecap,
      strokeLinejoin: this.strokeLinejoin
    };
  }
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'p-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() iconName: string;
  @Input() width: string  = '16'; // pixels or auto
  @Input() height: string  = 'auto'; // pixels or auto
  @Input() fill: string = 'none'; // icon background
  @Input() stroke: string = 'currentColor'; // line color
  @Input() strokeWidth: number = 1; // line width in pixels
  @Input() strokeLinecap: string = 'round'; // line end
  @Input() strokeLinejoin: string = 'round'; // two lines join

  public get iconStyles(): any {
    return {
      width: this.width === 'auto' ? this.width : `${this.width}px`,
      height: this.height === 'auto' ? this.height : `${this.height}px`,
      fill: this.fill,
      stroke: this.stroke,
      strokeWidth: `${this.strokeWidth}px`,
      strokeLinecap: this.strokeLinecap,
      strokeLinejoin: this.strokeLinejoin
    };
  }
}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'p-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
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

  ngOnInit(): void {
    !this.width ? this.width = '16' : null;
    !this.height ? this.height = 'auto' : null;
    !this.fill ? this.fill = 'none' : null;
    !this.stroke ? this.stroke = 'currentColor' : null;
    !this.strokeWidth ? this.strokeWidth = 1 : null;
    !this.strokeLinecap ? this.strokeLinecap = 'round' : null;
    !this.strokeLinejoin ? this.strokeLinejoin = 'round' : null;
  }
}

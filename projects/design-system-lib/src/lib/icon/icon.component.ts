import {Component, Input, OnInit} from '@angular/core';
import { allIcons } from 'angular-feather/icons';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

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
  @Input() strokeWidth: number = 1.5; // line width in pixels
  @Input() strokeLinecap: string = 'round'; // line end
  @Input() strokeLinejoin: string = 'round'; // two lines join
  @Input() disabled: boolean = false;
  public customIcon: boolean;

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

  public get customName(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.iconName + '.svg');
  }

  constructor(protected sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    allIcons[this.capitalizeName()] ? this.customIcon = false : this.customIcon = true;

    !this.width ? this.width = '16' : null;
    !this.height ? this.height = 'auto' : null;
    !this.fill ? this.fill = 'none' : null;
    !this.stroke ? this.stroke = 'currentColor' : null;
    !this.strokeWidth ? this.strokeWidth = 1.5 : null;
    !this.strokeLinecap ? this.strokeLinecap = 'round' : null;
    !this.strokeLinejoin ? this.strokeLinejoin = 'round' : null;
  }

  capitalizeName(): string {
    let iconNameCap = '';
    this.iconName.split('-').forEach( str => iconNameCap += str.charAt(0).toUpperCase() + str.slice(1));
    return iconNameCap;
  }
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'p-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs: {
    name: string,
    link?: string
  }[];
  @Input() pageHeader: boolean;
}

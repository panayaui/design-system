import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'p-toolbar-button',
  templateUrl: './toolbar-button.component.html',
  styleUrls: ['./toolbar-button.component.scss'],
})
export class ToolbarButtonComponent {
  @Input() label: string;
  @Input() disabled: boolean = false;
  @Input() iconBeforeName: string;
  @Input() iconBeforeWidth: string = 'auto';
  @Input() iconBeforeHeight: string = 'auto';
  @Input() iconBeforeStrokeWidth: number;
  @Input() iconBeforeStrokeColor: string;
  @Input() isMenuTrigger: boolean = false;
  public isActive: boolean = false;
}

import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'p-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss'],
})
export class ActionButtonComponent {
  @Input() label: string;
  @Input() disabled: boolean = false;
  @Input() iconBeforeName: string;
  @Input() iconBeforeWidth: string = 'auto';
  @Input() iconBeforeHeight: string = 'auto';
  @Input() iconBeforeStrokeWidth: number;
  @Input() iconBeforeStrokeColor: string;
  @Input() isMenuTrigger: boolean = false;
  @Input() isStandalone: boolean = true;
  public isActive: boolean = false;
}

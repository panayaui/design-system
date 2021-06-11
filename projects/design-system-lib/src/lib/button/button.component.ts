import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonTypeEnum} from './button-type.enum';

@Component({
  selector: 'p-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label: string;
  @Input() large: boolean = false;
  @Input() disabled: boolean = false;
  @Input() iconBefore: string;
  @Input() iconBeforeWidth: string = 'auto';
  @Input() iconBeforeHeight: string = 'auto';
  @Input() iconAfter: string;
  @Input() iconAfterWidth: string = 'auto';
  @Input() iconAfterHeight: string = 'auto';
  @Input() buttonType: ButtonTypeEnum = ButtonTypeEnum.Primary;
  @Output() onClickTask: EventEmitter<any> = new EventEmitter();

  public get classes(): string[] {
    const classParams = [];
    this.large ? classParams.push('p-btn-large') : classParams.push('p-btn-small');
    this.iconBefore ? classParams.push('p-btn-icon-before') : null;
    this.iconAfter ? classParams.push('p-btn-icon-after') : null;
    classParams.push(`p-btn-${this.buttonType}`);
    return classParams;
  }
}

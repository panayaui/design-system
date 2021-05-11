import {Component, Input} from '@angular/core';
import IButton from '../button.interface';

@Component({
  selector: 'p-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export default class ButtonComponent {
  @Input() button: IButton;

  public get classes(): string[] {
    const classParams = [];
    this.button.large ? classParams.push('p-btn-large') : classParams.push('p-btn-small');
    this.button.disabled ? classParams.push('p-btn-disabled') : null;
    this.button.iconBefore ? classParams.push('p-btn-icon-before') : null;
    this.button.iconAfter ? classParams.push('p-btn-icon-after') : null;
    classParams.push(`p-btn-${this.button.buttonType}`);
    return classParams;
  }
}

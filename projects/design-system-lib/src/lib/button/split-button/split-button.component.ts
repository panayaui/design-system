import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonTypeEnum} from '../button-type.enum';
import {ButtonComponent} from '../button.component';

@Component({
  selector: 'p-split-button',
  templateUrl: './split-button.component.html',
  styleUrls: ['./split-button.component.scss'],
})
export class SplitButtonComponent extends ButtonComponent {
  // @Input() label: string;
  // @Input() ariaLabel: string;
  // @Input() large: boolean = false;
  // @Input() disabled: boolean = false;
  // @Input() iconBefore: string;
  // @Input() iconBeforeWidth: string = 'auto';
  // @Input() iconBeforeHeight: string = 'auto';
  // @Input() iconBeforeStrokeWidth: number;
  // @Input() iconBeforeStrokeColor: string;
  // @Input() iconAfter: string;
  // @Input() iconAfterWidth: string = 'auto';
  // @Input() iconAfterHeight: string = 'auto';
  // @Input() iconAfterStrokeWidth: number;
  // @Input() iconAfterStrokeColor: string;
  // @Input() buttonType: ButtonTypeEnum = ButtonTypeEnum.Primary;
  // @Output() onClickTask: EventEmitter<any> = new EventEmitter();
  //
  // public get classes(): string[] {
  //   const classParams = [];
  //   this.iconBefore ? classParams.push('p-btn-icon-before') : null;
  //   this.iconAfter ? classParams.push('p-btn-icon-after') : null;
  //   classParams.push(`p-btn-${this.buttonType}`);
  //   if (this.buttonType !== ButtonTypeEnum.IsIcon) {
  //     this.large  ? classParams.push('p-btn-large') : classParams.push('p-btn-small');
  //   }
  //   return classParams;
  // }

  @Output() onClickTrigger: EventEmitter<any> = new EventEmitter();

}

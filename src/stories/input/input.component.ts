import {Component, Input} from '@angular/core';

@Component({
  selector: 'custom-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.scss'],
})
export default class InputComponent {
  @Input() value?: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() topLabelled: boolean;
  @Input() disabled?: boolean = false;
  @Input() fullSize?: boolean = false;
  @Input() type?: string = 'text';
  @Input() error?: string;
  @Input() icon?: boolean = true;

  public get containerClasses(): string[] {
    const isTopLabelled = this.topLabelled ? 'top-labelled' : 'left-labelled';
    const isFullSize = this.fullSize ? 'full-size' : 'regular-size';
    return [ isTopLabelled, isFullSize ];
  }

  public get inputClasses(): string[] {
    const isDisabled = this.disabled ? 'disabled' : '';
    const isFullSize = this.fullSize ? 'full-size-input' : 'regular-size-input';
    return [ isDisabled, isFullSize ];
  }

  public get _type(): string {
    return this.type ? this.type : 'text';
  }

  public get _value(): string {
    return this.value ? this.value : '';
  }

  search($event): void {
    console.log('search');
  }

  clearValue($event): void {
    console.log('clear');
  }
}

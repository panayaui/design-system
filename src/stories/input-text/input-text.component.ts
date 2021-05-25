import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'p-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export default class InputTextComponent implements OnInit {
  @Input() type: string = 'text';
  @Input() inputName: string;
  @Input() label: string;
  @Input() ariaLabel: string;
  @Input() placeholder: string;
  @Input() errorState: boolean = false;
  @Input() errorMessage: string;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  public emailFormControl: FormControl;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.emailFormControl = new FormControl({value: 'Input text', disabled: this.disabled}, [
      Validators.required
    ]);
  }



  // form = this.fb.group({
  //   emailFormControl: new FormControl({ value: 'Input text', disabled: this.disabled }, [
  //     Validators.required
  //   ])
  // });
}

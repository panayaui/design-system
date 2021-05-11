import {Component, Input, OnInit} from '@angular/core';
import IParams from '../models/params.interface';

@Component({
  selector: 'custom-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.scss'],
})
export default class ModalComponent implements OnInit{
  @Input() toParams: IParams;
  @Input() fullSize: boolean = false;
  public params: IParams;
  public shown: boolean = false;

  public get modalClasses(): string[] {
    const isFullSize = this.fullSize ? 'full-size' : 'regular-size';
    return [ isFullSize ];
  }

  ngOnInit(): void {
    if (this.toParams) {
      this.params = this.toParams;
    }
  }

  showModal($event):void {
    this.shown = true;
  }

  signUp($event): void {
    console.log('sign up');
    this.shown = false;
  }
}

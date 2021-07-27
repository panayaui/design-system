import {Component, Input} from '@angular/core';
import {IEntity} from './entity.interface';
import {ButtonTypeEnum} from '../button/button-type.enum';

@Component({
  selector: 'p-entity-header',
  templateUrl: './entity-header.component.html',
  styleUrls: ['./entity-header.component.scss'],
})
export class EntityHeaderComponent {
  @Input() entity: IEntity;
  @Input() notEditable: boolean = false;
  public buttonType = ButtonTypeEnum;
}

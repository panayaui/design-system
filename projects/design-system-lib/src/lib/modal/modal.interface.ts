import {IIcon} from '../icon/icon.interface';
import {IButton} from '../button/button.interface';

export interface IModalData {
  headerIcon?: IIcon;
  headerText?: string;
  textParagraph?: string;
  actions: IButton[];
}

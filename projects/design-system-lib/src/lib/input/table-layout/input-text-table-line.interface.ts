import {IInputText} from '../text/input-text.interface';

export interface IInputTextTableLine {
  tableHeader: string;
  tableData: IInputText;
  transitionDelay?: number;
}

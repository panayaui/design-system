import {IInputText} from '../text/input-text.interface';

export interface IInputTextTableLine {
  tableHeader: {
    name: string;
    attention?: boolean;
    required?: boolean;
  };
  tableData: IInputText;
}

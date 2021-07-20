import {IInputTextTableLine} from './input-text-table-line.interface';

export interface IInputTextTable {
  title: string;
  singleTableData: IInputTextTableLine[];
  isHidden?: boolean;
}

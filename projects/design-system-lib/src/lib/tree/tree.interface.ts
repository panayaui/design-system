import {LabelTypesEnum} from '../labels/label-types.enum';

export interface ITreeNode {
  name: string;
  selected?: boolean;
  isCycle?: boolean;
  label?: LabelTypesEnum;
  children?: ITreeNode[];
}

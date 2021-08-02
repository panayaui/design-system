import {LabelTypesEnum} from '../labels/label-types.enum';

export interface ITreeNode {
  name: string;
  isProject?: boolean;
  selected?: boolean;
  isCycle?: boolean;
  label?: LabelTypesEnum;
  children?: ITreeNode[];
}

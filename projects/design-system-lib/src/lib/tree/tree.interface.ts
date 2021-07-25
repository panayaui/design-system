import {LabelTypesEnum} from '../labels/label-types.enum';

export interface ITreeNode {
  name: string;
  isCycle?: boolean;
  label?: LabelTypesEnum;
  children?: ITreeNode[];
}

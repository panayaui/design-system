import {ICheckbox} from 'projects/design-system-lib/src/public-api';

export default interface ICheckboxGroup {
  groupTitle: string;
  checkboxGroup: ICheckbox[];
  error: string;
}

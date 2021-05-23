import ICheckbox from '../checkbox.interface';

export default interface ICheckboxGroup {
  groupTitle: string;
  checkboxGroup: ICheckbox[];
  error: string;
}

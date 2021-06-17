import ICheckbox from '../../../../projects/design-system-lib/src/lib/checkbox/checkbox.interface';

export default interface ICheckboxGroup {
  groupTitle: string;
  checkboxGroup: ICheckbox[];
  error: string;
}

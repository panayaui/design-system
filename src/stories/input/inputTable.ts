import {inputObj} from './inputObj';

export const inputTable = [
  {
    tableHeader: { name: 'Cell Label' },
    tableData: {...inputObj }
  },
  {
    tableHeader: { name: 'Cell long long long long long long long long long long long long Label', attention: true, tooltipText: 'Some info' },
    tableData: {...inputObj}
  },
  {
    tableHeader: { name: 'Cell long long Label' },
    tableData: {...inputObj}
  },
  {
    tableHeader: { name: 'Cell Label', attention: true, tooltipText: 'Some info' },
    tableData: {...inputObj}
  },
  {
    tableHeader: { name: 'Cell Label', required: true },
    tableData: {...inputObj, value: ''}
  },
  {
    tableHeader: { name: 'Cell long long long long long long long long long long long long Label', required: true },
    tableData: {...inputObj}
  }
];


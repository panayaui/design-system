import {moduleMetadata} from '@storybook/angular';
import {Story, Meta} from '@storybook/angular/types-6-0';

import {InputModule, InputTextTableLayoutComponent} from 'projects/design-system-lib/src/public-api';
import * as InputTextStories from './input-text.stories';
import {Validators} from '@angular/forms';
import {CustomErrorStateMatcher} from './custom-error-state-matcher';


export default {
  title: 'Components/Input/TableLayout',
  component: InputTextTableLayoutComponent,
  decorators: [
    moduleMetadata({
      imports: [InputModule],
    }),
  ],
} as Meta;

const PageTemplate: Story<InputTextTableLayoutComponent> = (args: InputTextTableLayoutComponent) => ({
  props: args,
});

const inputObj = {
  ...InputTextStories.NoLabel.args, ariaLabel: 'Cell long long Label', errorMessage: 'Validation text', validators: Validators.required, matcher: new CustomErrorStateMatcher()
};

export const TableLayout = PageTemplate.bind({});
TableLayout.args = {
  title: 'Resolution',
  table: [
    {
      tableHeader: 'Cell Label',
      tableData: {...inputObj, }
    },
    {
      tableHeader: 'Cell Label',
      tableData: {...inputObj}
    },
    {
      tableHeader: 'Cell long long Label',
      tableData: {...inputObj}
    },
    {
      tableHeader: 'Cell Label',
      tableData: {...inputObj}
    },
    {
      tableHeader: 'Cell Label',
      tableData: {...inputObj, value: ''}
    },
    {
      tableHeader: 'Cell Label',
      tableData: {...inputObj}
    }
  ]
};



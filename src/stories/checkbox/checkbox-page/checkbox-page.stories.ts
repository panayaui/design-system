import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {Story, Meta} from '@storybook/angular/types-6-0';
import CheckboxPageComponent from './checkbox-page.component';
import {CheckboxComponent} from 'projects/design-system-lib/src/public-api';
import {MatCheckboxModule} from '@angular/material/checkbox';
import * as CheckboxStories from '../checkbox.stories';

export default {
  title: 'Components/Checkbox/Base',
  component: CheckboxPageComponent,
  decorators: [
    moduleMetadata({
      declarations: [CheckboxPageComponent, CheckboxComponent],
      imports: [CommonModule, MatCheckboxModule],
    }),
  ],
} as Meta;

const PageTemplate: Story<CheckboxPageComponent> = (args: CheckboxPageComponent) => ({
  props: args,
});

export const Base = PageTemplate.bind({});
Base.args = {
  checkboxesPage: {
    label: [
      {...CheckboxStories.WithLabel.args, checked: false},
      {...CheckboxStories.WithLabel.args, checked: false, disabled: true},
      {...CheckboxStories.WithLabel.args, checked: true},
      {...CheckboxStories.WithLabel.args, checked: true, disabled: true},
      {...CheckboxStories.WithLabel.args, selectAll: true},
      {...CheckboxStories.WithLabel.args, indeterminate: true}
    ],
    ariaLabel: [
      {...CheckboxStories.NoLabel.args, checked: false},
      {...CheckboxStories.NoLabel.args, checked: false, disabled: true},
      {...CheckboxStories.NoLabel.args, checked: true},
      {...CheckboxStories.NoLabel.args, checked: true, disabled: true},
      {...CheckboxStories.NoLabel.args, selectAll: true},
      {...CheckboxStories.NoLabel.args, indeterminate: true}
    ],
  }
};


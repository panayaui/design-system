import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {Story, Meta} from '@storybook/angular/types-6-0';
import CheckboxGroupComponent from './checkbox-group.component';
import CheckboxComponent from '../checkbox.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import * as CheckboxStories from '../checkbox.stories';

export default {
  title: 'Components/Checkboxes/Examples',
  component: CheckboxGroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [CheckboxGroupComponent, CheckboxComponent],
      imports: [CommonModule, MatCheckboxModule],
    }),
  ],
} as Meta;

const PageTemplate: Story<CheckboxGroupComponent> = (args: CheckboxGroupComponent) => ({
  props: args,
});

export const CheckboxGroup = PageTemplate.bind({});
CheckboxGroup.args = {
  groupTitle: 'Group Label',
  checkboxGroup: [
    {...CheckboxStories.WithLabel.args, checked: false},
    {...CheckboxStories.WithLabel.args, checked: false},
    {...CheckboxStories.WithLabel.args, checked: false},
  ],
  error: 'Error Label'
};


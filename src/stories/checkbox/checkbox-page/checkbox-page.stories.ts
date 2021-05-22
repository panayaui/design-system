import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {Story, Meta} from '@storybook/angular/types-6-0';
import CheckboxPageComponent from './checkbox-page.component';
import CheckboxComponent from '../checkbox.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

export default {
  title: 'Components/Checkboxes',
  component: CheckboxPageComponent,
  decorators: [
    moduleMetadata({
      declarations: [CheckboxPageComponent, CheckboxComponent],
      imports: [CommonModule, MatCheckboxModule],
    }),
  ],
} as Meta;

const CheckboxTemplate: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  props: args,
});

const WithLabel = CheckboxTemplate.bind({});
WithLabel.args = {
  label: 'Label'
};

const NoLabel = CheckboxTemplate.bind({});
NoLabel.args = {
  ariaLabel: 'Label'
};

const PageTemplate: Story<CheckboxPageComponent> = (args: CheckboxPageComponent) => ({
  props: args,
});

export const Checkboxes = PageTemplate.bind({});
Checkboxes.args = {
  checkboxesPage: {
    label: [
      {...WithLabel.args, checked: false},
      {...WithLabel.args, checked: false, disabled: true},
      {...WithLabel.args, checked: true},
      {...WithLabel.args, checked: true, disabled: true},
      {...WithLabel.args, selectAll: true},
      {...WithLabel.args, indeterminate: true}
    ],
    ariaLabel: [
      {...NoLabel.args, checked: false},
      {...NoLabel.args, checked: false, disabled: true},
      {...NoLabel.args, checked: true},
      {...NoLabel.args, checked: true, disabled: true},
      {...NoLabel.args, selectAll: true},
      {...NoLabel.args, indeterminate: true}
    ],
  }
};


import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {Story, Meta} from '@storybook/angular/types-6-0';
import CheckboxGroupPageComponent from './checkbox-group-page.component';
import CheckboxComponent from '../checkbox.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import * as CheckboxGroupStories from '../checkbox-group/checkbox-group.stories';
import CheckboxGroupComponent from '../checkbox-group/checkbox-group.component';
import * as CheckboxStories from '../checkbox.stories';

export default {
  title: 'Components/Checkbox/Examples',
  component: CheckboxGroupPageComponent,
  decorators: [
    moduleMetadata({
      declarations: [CheckboxGroupPageComponent, CheckboxComponent, CheckboxGroupComponent],
      imports: [CommonModule, MatCheckboxModule],
    }),
  ],
} as Meta;

const PageTemplate: Story<CheckboxGroupPageComponent> = (args: CheckboxGroupPageComponent) => ({
  props: args,
});

export const Examples = PageTemplate.bind({});
Examples.args = {
  checkboxGroupPage: [
    {...CheckboxGroupStories.CheckboxGroup.args},

    {...CheckboxGroupStories.CheckboxGroup.args, checkboxGroup: [
        {...CheckboxStories.WithLabel.args, checked: false},
        {...CheckboxStories.WithLabel.args, checked: false},
        {...CheckboxStories.WithLabel.args, checked: true},
      ],
    },

    {...CheckboxGroupStories.CheckboxGroup.args, checkboxGroup: [
        {...CheckboxStories.WithLabel.args, checked: false, disabled: true},
        {...CheckboxStories.WithLabel.args, checked: false, disabled: true},
        {...CheckboxStories.WithLabel.args, checked: true, disabled: true},
      ],
    },

    {...CheckboxGroupStories.CheckboxGroup.args, error: 'Error Label'},
  ]
};


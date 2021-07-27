import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import SlideTogglePageComponent from './slide-toggle-page.component';
import {SlideToggleComponent, SlideToggleModule} from 'projects/design-system-lib/src/public-api';

export default {
  title: 'Components/Slide Toggle',
  component: SlideTogglePageComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, SlideToggleModule],
    }),
  ],
} as Meta;

const SlideToggleTemplate: Story<SlideToggleComponent> = (args: SlideToggleComponent) => ({
  props: args,
});

const WithLabel = SlideToggleTemplate.bind({});
WithLabel.args = {
  labelActive: 'Active',
  labelInactive: 'Inactive',
  ariaLabel: 'What is this control is about'
};

const NoLabel = SlideToggleTemplate.bind({});
NoLabel.args = {
  ariaLabel: 'Label'
};

const PageTemplate: Story<SlideTogglePageComponent> = (args: SlideTogglePageComponent) => ({
  props: args,
});

export const Toggles = PageTemplate.bind({});
Toggles.args = {
  slideTogglePage: {
    label: [
      {...WithLabel.args, checked: true},
      {...WithLabel.args, checked: true, disabled: true},
      {...WithLabel.args, checked: false},
      {...WithLabel.args, checked: false, disabled: true}
    ],
    ariaLabel: [
      {...NoLabel.args, checked: true},
      {...NoLabel.args, checked: true, disabled: true},
      {...NoLabel.args, checked: false},
      {...NoLabel.args, checked: false, disabled: true}
    ],
  }
};


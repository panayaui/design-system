import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {Story, Meta} from '@storybook/angular/types-6-0';
import SlideToggleComponent from './slide-toggle.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

export default {
  title: 'Components/SlideToggle',
  component: SlideToggleComponent,
  decorators: [
    moduleMetadata({
      declarations: [SlideToggleComponent],
      imports: [CommonModule, MatSlideToggleModule],
    }),
  ],
} as Meta;

const Template: Story<SlideToggleComponent> = (args: SlideToggleComponent) => ({
  props: args,
});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label'
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  ariaLabel: 'Label'
};

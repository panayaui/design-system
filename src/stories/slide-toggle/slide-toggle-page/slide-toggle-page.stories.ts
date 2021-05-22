import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import SlideTogglePageComponent from './slide-toggle-page.component';
import SlideToggleComponent from '../slide-toggle.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

export default {
  title: 'Components/Toggles',
  component: SlideTogglePageComponent,
  decorators: [
    moduleMetadata({
      declarations: [SlideTogglePageComponent, SlideToggleComponent],
      imports: [CommonModule, MatSlideToggleModule],
    }),
  ],
} as Meta;

const SlideToggleTemplate: Story<SlideToggleComponent> = (args: SlideToggleComponent) => ({
  props: args,
});

const WithLabel = SlideToggleTemplate.bind({});
WithLabel.args = {
  label: 'Label'
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


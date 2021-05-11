import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import ButtonPageComponent from './button-page.component';
import ButtonComponent from './button-component/button.component';
import * as ButtonStories from './button-component/button.stories';

export default {
  title: 'Components/Buttons',
  component: ButtonPageComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonPageComponent, ButtonComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<ButtonPageComponent> = (args: ButtonPageComponent) => ({
  props: args,
});

export const Buttons = Template.bind({});
Buttons.args = {
  buttons: [
    { ...ButtonStories.Primary.args.button},
    { ...ButtonStories.Secondary.args.button},
    { ...ButtonStories.Tertiary.args.button},
    { ...ButtonStories.Distructive.args.button},
  ],
};




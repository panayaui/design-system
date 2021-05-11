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
  buttons: {
    primary: [
      {...ButtonStories.Primary.args.button},
      {...ButtonStories.Primary.args.button, disabled: true},
      {...ButtonStories.Primary.args.button, iconBefore: 'view'},
      {...ButtonStories.Primary.args.button, iconAfter: 'arrow'},
      {...ButtonStories.Primary.args.button, iconBefore: 'view', iconAfter: 'arrow'}
    ],
    secondary: [
      {...ButtonStories.Secondary.args.button},
      {...ButtonStories.Secondary.args.button, disabled: true},
      {...ButtonStories.Secondary.args.button, iconBefore: 'view'},
      {...ButtonStories.Secondary.args.button, iconAfter: 'arrow'},
      {...ButtonStories.Secondary.args.button, iconBefore: 'view', iconAfter: 'arrow'}
    ],
    tertiary: [
      {...ButtonStories.Tertiary.args.button},
      {...ButtonStories.Tertiary.args.button, disabled: true},
      {...ButtonStories.Tertiary.args.button, iconBefore: 'view'},
      {...ButtonStories.Tertiary.args.button, iconAfter: 'arrow'},
      {...ButtonStories.Tertiary.args.button, iconBefore: 'view', iconAfter: 'arrow'}
    ],
    distructive: [
      { ...ButtonStories.Distructive.args.button },
      { ...ButtonStories.Distructive.args.button, disabled: true },
      { ...ButtonStories.Distructive.args.button, iconBefore: 'view' },
      { ...ButtonStories.Distructive.args.button, iconAfter: 'arrow' },
      { ...ButtonStories.Distructive.args.button, iconBefore: 'view', iconAfter: 'arrow' }
    ]
  }
};


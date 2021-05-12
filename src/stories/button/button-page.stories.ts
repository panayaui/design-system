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
  buttonsPage: {
    small: {
      height: '30px',
      buttons: {
        primary: [
          {...ButtonStories.Primary.args},
          {...ButtonStories.Primary.args, disabled: true},
          {...ButtonStories.Primary.args, iconBefore: 'view'},
          {...ButtonStories.Primary.args, iconAfter: 'arrow'},
          {...ButtonStories.Primary.args, iconBefore: 'view', iconAfter: 'arrow'}
        ],
        secondary: [
          {...ButtonStories.Secondary.args},
          {...ButtonStories.Secondary.args, disabled: true},
          {...ButtonStories.Secondary.args, iconBefore: 'view'},
          {...ButtonStories.Secondary.args, iconAfter: 'arrow'},
          {...ButtonStories.Secondary.args, iconBefore: 'view', iconAfter: 'arrow'}
        ],
        tertiary: [
          {...ButtonStories.Tertiary.args},
          {...ButtonStories.Tertiary.args, disabled: true},
          {...ButtonStories.Tertiary.args, iconBefore: 'view'},
          {...ButtonStories.Tertiary.args, iconAfter: 'arrow'},
          {...ButtonStories.Tertiary.args, iconBefore: 'view', iconAfter: 'arrow'}
        ],
        distructive: [
          {...ButtonStories.Distructive.args},
          {...ButtonStories.Distructive.args, disabled: true},
          {...ButtonStories.Distructive.args, iconBefore: 'view'},
          {...ButtonStories.Distructive.args, iconAfter: 'arrow'},
          {...ButtonStories.Distructive.args, iconBefore: 'view', iconAfter: 'arrow'}
        ]
      }
    },
    large: {
      height: '40px',
      buttons: {
        primary: [
          {...ButtonStories.Primary.args, large: true},
          {...ButtonStories.Primary.args, large: true, disabled: true},
          {...ButtonStories.Primary.args, large: true, iconBefore: 'view'},
          {...ButtonStories.Primary.args, large: true, iconAfter: 'arrow'},
          {...ButtonStories.Primary.args, large: true, iconBefore: 'view', iconAfter: 'arrow'}
        ],
        secondary: [
          {...ButtonStories.Secondary.args, large: true},
          {...ButtonStories.Secondary.args, large: true, disabled: true},
          {...ButtonStories.Secondary.args, large: true, iconBefore: 'view'},
          {...ButtonStories.Secondary.args, large: true, iconAfter: 'arrow'},
          {...ButtonStories.Secondary.args, large: true, iconBefore: 'view', iconAfter: 'arrow'}
        ],
        tertiary: [
          {...ButtonStories.Tertiary.args, large: true},
          {...ButtonStories.Tertiary.args, large: true, disabled: true},
          {...ButtonStories.Tertiary.args, large: true, iconBefore: 'view'},
          {...ButtonStories.Tertiary.args, large: true, iconAfter: 'arrow'},
          {...ButtonStories.Tertiary.args, large: true, iconBefore: 'view', iconAfter: 'arrow'}
        ],
        distructive: [
          {...ButtonStories.Distructive.args, large: true},
          {...ButtonStories.Distructive.args, large: true, disabled: true},
          {...ButtonStories.Distructive.args, large: true, iconBefore: 'view'},
          {...ButtonStories.Distructive.args, large: true, iconAfter: 'arrow'},
          {...ButtonStories.Distructive.args, large: true, iconBefore: 'view', iconAfter: 'arrow'}
        ]
      }

    }
  }
};


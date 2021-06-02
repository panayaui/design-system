import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {Story, Meta} from '@storybook/angular/types-6-0';
import ButtonPageComponent from './button-page.component';
import ButtonComponent from '../button.component';
import * as ButtonStories from '../button.stories';
import IconComponent from '../../icons/icon.component';
import {IconsModule} from '../../icons/icons.module';

// export default {
//   title: 'Components/Buttons/All',
//   component: ButtonPageComponent,
//   subcomponents: { ButtonComponent },
//   decorators: [
//     moduleMetadata({
//       declarations: [ButtonPageComponent, ButtonComponent, IconComponent],
//       imports: [CommonModule, IconsModule],
//     }),
//   ],
// } as Meta;

const Template: Story<ButtonPageComponent> = (args: ButtonPageComponent) => ({
  props: args,
});

export const All = Template.bind({});
All.args = {
  buttonsPage: {
    small: {
      height: '30px',
      buttons: {
        primary: [
          {...ButtonStories.Primary.args},
          {...ButtonStories.Primary.args, disabled: true},
          {...ButtonStories.Primary.args, iconBefore: 'eye'},
          {...ButtonStories.Primary.args, iconBefore: 'eye', disabled: true},
          {...ButtonStories.Primary.args, iconAfter: 'chevron-down'},
          {...ButtonStories.Primary.args, iconAfter: 'chevron-down', disabled: true},
          {...ButtonStories.Primary.args, iconBefore: 'eye', iconAfter: 'chevron-down'},
          {...ButtonStories.Primary.args, iconBefore: 'eye', iconAfter: 'chevron-down', disabled: true}
        ],
        secondary: [
          {...ButtonStories.Secondary.args},
          {...ButtonStories.Secondary.args, disabled: true},
          {...ButtonStories.Secondary.args, iconBefore: 'eye'},
          {...ButtonStories.Secondary.args, iconBefore: 'eye', disabled: true},
          {...ButtonStories.Secondary.args, iconAfter: 'chevron-down'},
          {...ButtonStories.Secondary.args, iconAfter: 'chevron-down', disabled: true},
          {...ButtonStories.Secondary.args, iconBefore: 'eye', iconAfter: 'chevron-down'},
          {...ButtonStories.Secondary.args, iconBefore: 'eye', iconAfter: 'chevron-down', disabled: true}
        ],
        tertiary: [
          {...ButtonStories.Tertiary.args},
          {...ButtonStories.Tertiary.args, disabled: true},
          {...ButtonStories.Tertiary.args, iconBefore: 'eye'},
          {...ButtonStories.Tertiary.args, iconBefore: 'eye', disabled: true},
          {...ButtonStories.Tertiary.args, iconAfter: 'chevron-down'},
          {...ButtonStories.Tertiary.args, iconAfter: 'chevron-down', disabled: true},
          {...ButtonStories.Tertiary.args, iconBefore: 'eye', iconAfter: 'chevron-down'},
          {...ButtonStories.Tertiary.args, iconBefore: 'eye', iconAfter: 'chevron-down', disabled: true}
        ],
        distructive: [
          {...ButtonStories.Distructive.args},
          {...ButtonStories.Distructive.args, disabled: true},
          {...ButtonStories.Distructive.args, iconBefore: 'eye'},
          {...ButtonStories.Distructive.args, iconBefore: 'eye', disabled: true},
          {...ButtonStories.Distructive.args, iconAfter: 'chevron-down'},
          {...ButtonStories.Distructive.args, iconAfter: 'chevron-down', disabled: true},
          {...ButtonStories.Distructive.args, iconBefore: 'eye', iconAfter: 'chevron-down'},
          {...ButtonStories.Distructive.args, iconBefore: 'eye', iconAfter: 'chevron-down', disabled: true}
        ]
      }
    },
    large: {
      height: '40px',
      buttons: {
        primary: [
          {...ButtonStories.Primary.args, large: true},
          {...ButtonStories.Primary.args, large: true, disabled: true},
          {...ButtonStories.Primary.args, large: true, iconBefore: 'eye'},
          {...ButtonStories.Primary.args, large: true, iconBefore: 'eye', disabled: true},
          {...ButtonStories.Primary.args, large: true, iconAfter: 'chevron-down'},
          {...ButtonStories.Primary.args, large: true, iconAfter: 'chevron-down', disabled: true},
          {...ButtonStories.Primary.args, large: true, iconBefore: 'eye', iconAfter: 'chevron-down'},
          {...ButtonStories.Primary.args, large: true, iconBefore: 'eye', iconAfter: 'chevron-down', disabled: true}
        ],
        secondary: [
          {...ButtonStories.Secondary.args, large: true},
          {...ButtonStories.Secondary.args, large: true, disabled: true},
          {...ButtonStories.Secondary.args, large: true, iconBefore: 'eye'},
          {...ButtonStories.Secondary.args, large: true, iconBefore: 'eye', disabled: true},
          {...ButtonStories.Secondary.args, large: true, iconAfter: 'chevron-down'},
          {...ButtonStories.Secondary.args, large: true, iconAfter: 'chevron-down', disabled: true},
          {...ButtonStories.Secondary.args, large: true, iconBefore: 'eye', iconAfter: 'chevron-down'},
          {...ButtonStories.Secondary.args, large: true, iconBefore: 'eye', iconAfter: 'chevron-down', disabled: true}
        ],
        tertiary: [
          {...ButtonStories.Tertiary.args, large: true},
          {...ButtonStories.Tertiary.args, large: true, disabled: true},
          {...ButtonStories.Tertiary.args, large: true, iconBefore: 'eye'},
          {...ButtonStories.Tertiary.args, large: true, iconBefore: 'eye', disabled: true},
          {...ButtonStories.Tertiary.args, large: true, iconAfter: 'chevron-down'},
          {...ButtonStories.Tertiary.args, large: true, iconAfter: 'chevron-down', disabled: true},
          {...ButtonStories.Tertiary.args, large: true, iconBefore: 'eye', iconAfter: 'chevron-down'},
          {...ButtonStories.Tertiary.args, large: true, iconBefore: 'eye', iconAfter: 'chevron-down', disabled: true}
        ],
        distructive: [
          {...ButtonStories.Distructive.args, large: true},
          {...ButtonStories.Distructive.args, large: true, disabled: true},
          {...ButtonStories.Distructive.args, large: true, iconBefore: 'eye'},
          {...ButtonStories.Distructive.args, large: true, iconBefore: 'eye', disabled: true},
          {...ButtonStories.Distructive.args, large: true, iconAfter: 'chevron-down'},
          {...ButtonStories.Distructive.args, large: true, iconAfter: 'chevron-down', disabled: true},
          {...ButtonStories.Distructive.args, large: true, iconBefore: 'eye', iconAfter: 'chevron-down'},
          {...ButtonStories.Distructive.args, large: true, iconBefore: 'eye', iconAfter: 'chevron-down', disabled: true}
        ]
      }
    }
  }
};


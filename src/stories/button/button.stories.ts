import {componentWrapperDecorator, moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {Story, Meta} from '@storybook/angular/types-6-0';
import ButtonComponent from './button.component';
import {ButtonTypeEnum} from './button-page/button-type.enum';
import IconComponent from '../icons/icon.component';
import {IconsModule} from '../icons/icons.module';

// export default {
//   title: 'Components/Buttons',
//   component: ButtonComponent,
//   subcomponents: { IconComponent },
//   decorators: [
//     moduleMetadata({
//       declarations: [ButtonComponent, IconComponent],
//       imports: [CommonModule, IconsModule],
//     }),
//     componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`)
//   ],
// } as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Label',
  large: false,
  disabled: false,
  buttonType: ButtonTypeEnum.Primary,
  iconBeforeWidth: '17',
  iconAfterWidth: '17'
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  buttonType: ButtonTypeEnum.Secondary
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  ...Primary.args,
  buttonType: ButtonTypeEnum.Tertiary
};

export const Distructive = Template.bind({});
Distructive.args = {
  ...Primary.args,
  buttonType: ButtonTypeEnum.Distructive
};

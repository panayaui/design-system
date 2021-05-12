import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {Story, Meta} from '@storybook/angular/types-6-0';
import ButtonComponent from './button.component';
import {ButtonTypeEnum} from '../button-type.enum';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Label',
  large: false,
  disabled: false,
  buttonType: ButtonTypeEnum.Primary
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

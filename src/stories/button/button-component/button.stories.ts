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
  button: {
    label: 'Label',
    large: false,
    disabled: false,
    iconBefore: 'view',
    iconAfter: 'arrow',
    buttonType: ButtonTypeEnum.Primary
  }
};

export const Secondary = Template.bind({});
Secondary.args = {
  button: {
    ...Primary.args.button,
    buttonType: ButtonTypeEnum.Secondary
  }
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  button: {
    ...Primary.args.button,
    buttonType: ButtonTypeEnum.Tertiary
  }
};

export const Distructive = Template.bind({});
Distructive.args = {
  button: {
    ...Primary.args.button,
    buttonType: ButtonTypeEnum.Distructive
  }
};

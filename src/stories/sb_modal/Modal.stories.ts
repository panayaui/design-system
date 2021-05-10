import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import Modal from './modal.component';
import Button from '../sb_button/button.component';
import Input from '../sb_input/input.component';

export default {
  title: 'Custom/Modal',
  component: Modal,
  decorators: [
    moduleMetadata({
      declarations: [Modal, Button, Input],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<Modal> = (args: Modal) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  toParams: {
    name: 'Name',
    country: 'Country',
    email: 'Email'
  },
  fullSize: false,
};

export const FullSize = Template.bind({});
FullSize.args = {
  toParams: {
    name: 'Name',
    country: 'Country',
    email: 'Email'
  },
  fullSize: true,
};

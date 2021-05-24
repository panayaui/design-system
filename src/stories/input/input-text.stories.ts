import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {Story, Meta} from '@storybook/angular/types-6-0';
import InputTextComponent from './input-text.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


export default {
  title: 'Components/Input',
  component: InputTextComponent,
  decorators: [
    moduleMetadata({
      declarations: [InputTextComponent],
      imports: [CommonModule, MatInputModule, BrowserAnimationsModule, MatFormFieldModule],
    }),
  ],
} as Meta;

const Template: Story<InputTextComponent> = (args: InputTextComponent) => ({
  props: args,
});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'activity'
};

export const NoLabel = Template.bind({});
NoLabel.args = {};

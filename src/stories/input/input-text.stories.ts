import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {Story, Meta} from '@storybook/angular/types-6-0';
import {InputModule, InputTextComponent} from 'projects/design-system-lib/src/public-api';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule, Validators} from '@angular/forms';

// export default {
//   title: 'Components/Input',
//   component: InputTextComponent,
//   decorators: [
//     moduleMetadata({
//       declarations: [InputTextComponent],
//       imports: [CommonModule,
//         MatInputModule,
//         BrowserAnimationsModule,
//         MatFormFieldModule,
//         ReactiveFormsModule,
//         InputModule],
//     }),
//   ],
// } as Meta;

const Template: Story<InputTextComponent> = (args: InputTextComponent) => ({
  props: args,
});

export const NoLabel = Template.bind({});
NoLabel.args = {
  value: 'Input text',
  validators: Validators.required
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label',
  value: 'Input text',
  validators: Validators.required
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  label: 'Label',
  value: '',
  validators: Validators.required
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  label: 'Label',
  value: '',
  validators: Validators.required,
  errorMessage: 'Validation text'
};


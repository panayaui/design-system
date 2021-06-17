import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {Story, Meta} from '@storybook/angular/types-6-0';
import {CheckboxComponent} from 'projects/design-system-lib/src/public-api';
import {MatCheckboxModule} from '@angular/material/checkbox';

// export default {
//   title: 'Components/Checkboxes/Examples',
//   component: CheckboxComponent,
//   decorators: [
//     moduleMetadata({
//       declarations: [CheckboxComponent],
//       imports: [CommonModule, MatCheckboxModule],
//     }),
//   ],
// } as Meta;

const CheckboxTemplate: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  props: args,
});

export const WithLabel = CheckboxTemplate.bind({});
WithLabel.args = {
  label: 'Label'
};

export const NoLabel = CheckboxTemplate.bind({});
NoLabel.args = {
  ariaLabel: 'Label'
};

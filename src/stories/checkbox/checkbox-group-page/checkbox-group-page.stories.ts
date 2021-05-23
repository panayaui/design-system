import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {Story, Meta} from '@storybook/angular/types-6-0';
import CheckboxGroupPageComponent from './checkbox-group-page.component';
import CheckboxComponent from '../checkbox.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import * as CheckboxStories from '../checkbox.stories';
//
// export default {
//   title: 'Components/Checkboxes/Examples',
//   component: CheckboxGroupPageComponent,
//   decorators: [
//     moduleMetadata({
//       declarations: [CheckboxGroupPageComponent, CheckboxComponent],
//       imports: [CommonModule, MatCheckboxModule],
//     }),
//   ],
// } as Meta;
//
// const PageTemplate: Story<CheckboxGroupPageComponent> = (args: CheckboxGroupPageComponent) => ({
//   props: args,
// });
//
// export const Examples = PageTemplate.bind({});
// Examples.args = {
//   checkboxGroup: [
//     {
//       groupTitle: 'Group Label',
//       group: [
//         {...CheckboxStories.WithLabel.args, checked: false},
//         {...CheckboxStories.WithLabel.args, checked: false},
//         {...CheckboxStories.WithLabel.args, checked: false},
//       ],
//       error: 'Error Label'
//     }
//   ]
// };


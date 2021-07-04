// import {moduleMetadata} from '@storybook/angular';
// import {CommonModule} from '@angular/common';
// import {Story, Meta} from '@storybook/angular/types-6-0';
// import InputTextPageComponent from './input-text-page.component';
// import {InputTextComponent} from 'projects/design-system-lib/src/public-api';
// import * as InputTextStories from '../input-text.stories';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatInputModule} from '@angular/material/input';
// import {ReactiveFormsModule} from '@angular/forms';
//
// export default {
//   title: 'Components/Input/Page',
//   component: InputTextPageComponent,
//   decorators: [
//     moduleMetadata({
//       declarations: [InputTextPageComponent],
//       imports: [CommonModule,
//         MatInputModule,
//         BrowserAnimationsModule,
//         MatFormFieldModule,
//         ReactiveFormsModule
//       ],
//     }),
//   ],
// } as Meta;
//
// const PageTemplate: Story<InputTextPageComponent> = (args: InputTextPageComponent) => ({
//   props: args,
// });
//
// export const Page = PageTemplate.bind({});
// Page.args = {
//   inputTextPage: {
//     noLabel: {
//       title: 'No label',
//       list: [
//         {...InputTextStories.NoLabel.args},
//         {...InputTextStories.NoLabel.args, disabled: true},
//         {...InputTextStories.NoLabel.args, readonly: true},
//       ]
//     },
//     label: {
//       title: 'Label',
//       list: [
//         {...InputTextStories.WithLabel.args},
//         {...InputTextStories.WithLabel.args, disabled: true},
//         {...InputTextStories.WithLabel.args, readonly: true},
//       ]
//     },
//     errorState: {
//       title: 'Label - error',
//       list: [
//         {...InputTextStories.ErrorState.args}
//       ]
//     },
//     errorMessage: {
//       title: 'Label+validation text - error',
//       list: [
//         {...InputTextStories.ErrorMessage.args}
//       ]
//     },
//   }
// };
//
//

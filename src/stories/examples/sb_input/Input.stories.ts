// import { moduleMetadata } from '@storybook/angular';
// import { CommonModule } from '@angular/common';
// import { Story, Meta } from '@storybook/angular/types-6-0';
// import Input from './input-text.component';
//
// export default {
//   title: 'Custom/Input',
//   component: Input,
//   decorators: [
//     moduleMetadata({
//       declarations: [Input],
//       imports: [CommonModule],
//     }),
//   ],
// } as Meta;
//
// const Template: Story<Input> = (args: Input) => ({
//   props: args,
// });
//
// export const TopLabelled = Template.bind({});
// TopLabelled.args = {
//   label: 'Top Labelled Input',
//   placeholder: 'Type some fun',
//   topLabelled: true,
// };
//
// export const LeftLabelled = Template.bind({});
// LeftLabelled.args = {
//   label: 'Left Labelled Input',
//   placeholder: 'Type some fun',
//   topLabelled: false,
// };
//
// export const FullSize = Template.bind({});
// FullSize.args = {
//   label: 'Full Size Input',
//   placeholder: 'Type some fun',
//   topLabelled: false,
//   fullSize: true,
// };
//
// export const Disabled = Template.bind({});
// Disabled.args = {
//   label: 'Disabled Input',
//   placeholder: '',
//   topLabelled: true,
//   disabled: true,
// };
//
// export const ErrorMessage = Template.bind({});
// ErrorMessage.args = {
//   label: 'Top Labelled Input',
//   placeholder: 'Type some fun',
//   topLabelled: true,
//   error: 'Helpful text goes here.',
// };

import {componentWrapperDecorator, moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {Story, Meta} from '@storybook/angular/types-6-0';
// import {ButtonComponent} from 'design-system-lib';
// import {ButtonTypeEnum} from 'design-system-lib';
import {ButtonComponent} from '../../../projects/design-system-lib/src/lib/button/button.component';
import {IconModule} from '../../../projects/design-system-lib/src/lib/icon/icon.module';
import {ButtonTypeEnum} from '../../../projects/design-system-lib/src/lib/button/button-type.enum';

export default {
  title: 'Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule, IconModule],
    }),
    componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`)
  ],
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Test',
  buttonType: ButtonTypeEnum.Primary
};

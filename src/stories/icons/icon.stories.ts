import {moduleMetadata} from '@storybook/angular';
import {Story, Meta} from '@storybook/angular/types-6-0';
import {IconComponent} from '../../../projects/design-system-lib/src/lib/icon/icon.component';
import {IconModule} from '../../../projects/design-system-lib/src/lib/icon/icon.module';

// export default {
//   title: 'Icons',
//   component: IconComponent,
//   decorators: [
//     moduleMetadata({
//       imports: [IconModule],
//     }),
//   ],
// } as Meta;

const Template: Story<IconComponent> = (args: IconComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  iconName: 'eye',
  width: '17'
};


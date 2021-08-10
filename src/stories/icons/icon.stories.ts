import {moduleMetadata} from '@storybook/angular';
import {Story, Meta} from '@storybook/angular/types-6-0';
import {IconPlusComponent} from 'projects/design-system-lib/src/public-api';
import {IconModule} from 'projects/design-system-lib/src/public-api';

export default {
  title: 'Principles/Icons',
  component: IconPlusComponent,
  decorators: [
    moduleMetadata({
      imports: [IconModule],
    }),
  ],
} as Meta;

const Template: Story<IconPlusComponent> = (args: IconPlusComponent) => ({
  props: args,
});

export const Custom = Template.bind({});
Custom.args = {
  iconName: 'a',
  width: '16'
};

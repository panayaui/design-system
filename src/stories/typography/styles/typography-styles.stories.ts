import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import TypographyStylesComponent from './typography-styles.component';

export default {
  title: 'Principles/Typography/Styles',
  component: TypographyStylesComponent,
  decorators: [
    moduleMetadata({
      declarations: [TypographyStylesComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<TypographyStylesComponent> = (args: TypographyStylesComponent) => ({
  props: args,
});

export const Styles = Template.bind({});
Styles.args = {};

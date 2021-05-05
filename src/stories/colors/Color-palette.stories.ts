import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import ColorPaletteComponent from './color-palette.component';

export default {
  title: 'Custom/Color Palette',
  component: ColorPaletteComponent,
  decorators: [
    moduleMetadata({
      declarations: [ColorPaletteComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<ColorPaletteComponent> = (args: ColorPaletteComponent) => ({
  props: args,
});

export const ColorPalette = Template.bind({});
ColorPalette.args = {};

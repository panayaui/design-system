import {Component} from '@angular/core';
import {KeyValue} from '@angular/common';

const palette = {
  primary: {
    basic: { main: 'P-A 900', contrast: 'P-C 50' },
    accent: { main: 'P-B 300' },
  },
  secondary: {
    basic: { 800: 'S-A 800', 700: 'S-A 700', 600: 'S-A 600', 500: 'S-A 500', 200: 'S-A 200', 100: 'S-A 100', 50: 'S-A 50' },
    accent: { 700: 'S-B 700', 500: 'S-B 500', 400: 'S-B 400', 300: 'S-B 300', 200: 'S-B 200', 100: 'S-B 100', 50: 'S-B 500' }
  },
  gray: {
    scale: { 800: 'grayscale 800', 700: 'grayscale 700', 600: 'grayscale 600', 500: 'grayscale 500', 400: 'grayscale 400', 100: 'grayscale 100', 50: 'grayscale 50', 5: 'grayscale 5', 1: 'grayscale 1' }
  },
  supportive: {
    alert: { 700: 'Alert 700', 500: 'Alert 500', 50: 'Alert 50' },
    yellow: { 300: 'Yellow 300' },
    orange: { 300: 'Orange 300', 50: 'Orange 50' },
    success: { 400: 'Success 400', 50: 'Success 50' },
    dev: { a: 'Dev A', b: 'Dev B', c: 'Dev C' }
  }
};

@Component({
  selector: 'p-colors',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss'],
})
export default class ColorPaletteComponent {
  public palette = palette;

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }
}

import {Component} from '@angular/core';
import {KeyValue} from '@angular/common';

const palette = {
  primary: {
    a: {
      900: {name: 'P-A 900', labelColor: 'white'}
    },
    b: {
      300: { name: 'P-B 300', labelColor: 'white' }
    },
    c: {
      50: {name: 'P-C 50', labelColor: 'black'}
    }
  },
  secondary: {
    a: { 800: { name: 'S-A 800', labelColor: 'white' },
      700: { name: 'S-A 700', labelColor: 'white' },
      600: { name: 'S-A 600', labelColor: 'white' },
      500: { name: 'S-A 500', labelColor: 'black' },
      200: { name: 'S-A 200', labelColor: 'black' },
      100: { name: 'S-A 100', labelColor: 'black' },
      50: { name: 'S-A 50', labelColor: 'black' } },
    b: { 700: { name: 'S-B 700', labelColor: 'white' },
      500: { name: 'S-B 500', labelColor: 'white' },
      400: { name: 'S-B 400', labelColor: 'white' },
      300: { name: 'S-B 300', labelColor: 'white' },
      200: { name: 'S-B 200', labelColor: 'black' },
      100: { name: 'S-B 100', labelColor: 'black' },
      50: { name: 'S-B 500', labelColor: 'black' }
    }
  },
  gray: {
    scale: { 800: { name: 'grayscale 800', labelColor: 'white' },
        700: { name: 'grayscale 700', labelColor: 'white' },
        600: { name: 'grayscale 600', labelColor: 'white' },
        500: { name: 'grayscale 500', labelColor: 'white' },
        400: { name: 'grayscale 400', labelColor: 'black' },
        100: { name: 'grayscale 100', labelColor: 'black' },
        50: { name: 'grayscale 50', labelColor: 'black' },
        5: { name: 'grayscale 5', labelColor: 'black' },
        1: { name: 'grayscale 1', labelColor: 'black' }
    }
  },
  supportive: {
    alert: {
      800: { name: 'Alert 800', labelColor: 'white' },
      700: { name: 'Alert 700', labelColor: 'white' },
      600: { name: 'Alert 600', labelColor: 'black' },
      500: { name: 'Alert 500', labelColor: 'black' },
      50: { name: 'Alert 50', labelColor: 'black' }
    },
    low: {
      400: { name: 'Low 400', labelColor: 'black' },
      300: { name: 'Low 300', labelColor: 'black' }
    },
    medium: {
      500: { name: 'Medium 500', labelColor: 'black' },
      400: { name: 'Medium 400', labelColor: 'black' },
      50: { name: 'Medium 50', labelColor: 'black' }
    },
    success: {
      500: { name: 'Success 500', labelColor: 'black' },
      400: { name: 'Success 400', labelColor: 'black' },
      50: { name: 'Success 50', labelColor: 'black' }
    }
  },
  dev: {
    a: {
      200: { name: 'A 200', labelColor: 'white' },
      100: { name: 'A 100', labelColor: 'white' }
    },
    b: {
      300: { name: 'B 300', labelColor: 'white' },
      200: { name: 'B 200', labelColor: 'white' }
    },
    c: {
      400: { name: 'C 400', labelColor: 'white' },
      300: { name: 'C 300', labelColor: 'white' }
    }
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

  reverseKeyOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return -1;
  }

}

import {Component} from '@angular/core';
import {KeyValue} from '@angular/common';

// class' properties are defined in typography.scss
const typographyStyles = {
  h1: {
    title: 'Headline 1',
    description: 'page header level 1',
    sets: {
      family: 'Source Sans Pro - Bold',
      size: '18px',
      letterSpacing: '5%',
      lineHeight: 'Auto',
      capitals: 'Yes',
      useCase: 'Page titles - level 1'
    },
    classes: ['headline-1-bold', 'headline-1-bold headline-contrast']
  },
  h1sub: {
    title: 'Headline 1-sub',
    description: 'page header level 2',
    sets: {
      family: 'Inter - SemiBold',
      size: '16px',
      letterSpacing: '5%',
      lineHeight: 'Auto',
      capitals: 'No',
      useCase: 'Page titles - level 2'
    },
    classes: ['headline-1-sub-semibold']
  },
  h2: {
    title: 'Headline 2',
    description: 'masthead menu',
    sets: {
      family: 'Source Sans Pro - Bold + SemiBold',
      size: '15px',
      letterSpacing: '8%',
      lineHeight: 'Auto',
      capitals: 'Yes',
      useCase: 'Masthead items. SemiBold for default text, Bold for selected, Bold green for Hover.',
    },
    classes: ['headline-2-bold', 'headline-2-semibold', 'headline-2-bold headline-contrast']
  },
  h3: {
    title: 'Headline 3',
    description: 'masthead sub menu',
    sets: {
      family: 'Source Sans Pro - Regular + SemiBold',
      size: '15px',
      letterSpacing: '8%',
      lineHeight: 'Auto',
      capitals: 'No',
      useCase: 'Masthead sub menu items. Regular for default text, SemiBold green for hover and selected.'
    },
    classes: ['headline-3-regular', 'headline-3-semibold headline-contrast']
  },
  h4: {
    title: 'Headline 4',
    description: 'table header, status labels',
    sets: {
      family: 'Inter - Bold',
      size: '12px',
      letterSpacing: '5%',
      lineHeight: 'Auto',
      capitals: 'Yes',
      useCase: 'Table header row (black), Status labels (white)'
    },
    classes: ['headline-4-bold']
  },
  h5: {
    title: 'Headline 5',
    description: 'expansion panel title',
    sets: {
      family: 'Source Sans Pro - Bold',
      size: '15px',
      letterSpacing: '5%',
      lineHeight: 'Auto',
      capitals: 'Yes',
      useCase: 'Expansion panel title',
    },
    classes: ['headline-5-bold']
  },
  h6: {
    title: 'Headline 6',
    description: 'tabs',
    family: 'Inter Bold / Semi Bold',
    sets: {
      size: '12px',
      letterSpacing: '5%',
      lineHeight: 'Auto',
      capitals: 'Yes',
      useCase: 'Default tab - Bold, Selected tab - SemiBold'
    },
    classes: ['headline-6-bold', 'headline-3-semibold']
  },
  h7: {
    title: 'Headline 7',
    description: 'modal title',
    sets: {
      family: 'Inter Bold',
      size: '22px',
      letterSpacing: '0%',
      lineHeight: 'Auto',
      capitals: 'No',
      useCase: 'Modal title',
    },
    classes: ['headline-7-bold']
  },
  p1: {
    title: 'Paragraph 1',
    description: '',
    sets: {
      family: 'Inter - Regular',
      size: '14px',
      letterSpacing: '0%',
      lineHeight: '20px',
      capitals: 'No',
      useCase: 'Paragraphs, Input text',
    },
    classes: ['paragraph-1-default', 'paragraph-1-link', 'paragraph-1-large-label']
  },
  p2: {
    title: 'Paragraph 2',
    description: '',
    sets: {
      family: 'Inter - Regular',
      size: '13px',
      letterSpacing: '0%',
      lineHeight: '20px',
      capitals: 'No',
      useCase: 'Buttons, Actions, Filter, Drop down menu items, Notifications',
    },
    classes: ['paragraph-2-default', 'paragraph-2-link', 'paragraph-2-actions']
  },
  p3: {
    title: 'Paragraph 3',
    description: 'table content',
    sets: {
      family: 'Inter - Regular',
      size: '12px',
      letterSpacing: '0%',
      lineHeight: '20px',
      capitals: 'No',
      useCase: 'Table content, Input top label',
    },
    classes: ['paragraph-3-default', 'paragraph-3-link', 'paragraph-3-medium', 'paragraph-3-semibold']
  }
};


@Component({
  selector: 'p-typography-styles',
  templateUrl: './typography-styles.component.html',
  styleUrls: ['./typography-styles.component.scss'],
})
export default class TypographyStylesComponent {
  public typographyStyles = typographyStyles;

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }

  reverseKeyOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return -1;
  }
}

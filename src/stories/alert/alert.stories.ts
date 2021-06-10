import {moduleMetadata} from '@storybook/angular';
import {Story, Meta} from '@storybook/angular/types-6-0';
import {AlertTriggerComponent} from './alert-trigger.component';
import {AlertModule} from 'projects/design-system-lib/src/public-api';
import {AlertComponent} from 'projects/design-system-lib/src/public-api';
import {AlertEnum} from 'projects/design-system-lib/src/public-api';
import {CommonModule} from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IconModule} from 'projects/design-system-lib/src/lib/icon/icon.module';
import {MatSnackBar} from '@angular/material/snack-bar';
import {APP_INITIALIZER} from '@angular/core';

export default {
  title: 'Alerts',
  component: AlertTriggerComponent,
  decorators: [
    moduleMetadata({
      declarations: [AlertTriggerComponent],
      imports: [CommonModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        AlertModule,
        IconModule
      ],
    }),
  ],
} as Meta;

const data = {
  icon: { iconName: 'bell'},
  messageMain: 'Notification message.',
  actionName: 'Action',
  messageSub: 'Notification message.',
  closeBtnName: 'Close'
};

function initPricingFactory(snackBar: MatSnackBar) {
  return () => snackBar.openFromComponent(AlertComponent, {data: data});
}

const PageTemplate: Story<AlertTriggerComponent> = (args: AlertTriggerComponent) => ({
  moduleMetadata: {
    providers: [
      {
        provide: APP_INITIALIZER,
        useFactory: initPricingFactory,
        multi: true,
        deps: [MatSnackBar]
      }
    ]
  },
  component: AlertTriggerComponent,
  props: args,
});

export const Page = PageTemplate.bind({});
Page.args = {

};



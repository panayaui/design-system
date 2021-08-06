import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  ButtonModule, FileUploadComponent, IconModule,
  InputModule,
  LabelModule,
  MastheadModule,
  MenuModule,
  ProgressBarComponent, ProgressChartComponent,
  ToggleModule
} from 'projects/design-system-lib/src/public-api';
import {AlertModule} from 'projects/design-system-lib/src/lib/alert/alert.module';
import {CommonModule} from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressBar, MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    ProgressChartComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    InputModule,
    ButtonModule,
    LabelModule,
    ToggleModule,
    MastheadModule,
    MatProgressBarModule,
    IconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

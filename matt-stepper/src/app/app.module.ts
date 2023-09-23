import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepperComponent } from './stepper/stepper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DsJoinComponent } from './ds-join/ds-join.component';
import { DsGenericComponent } from './ds-generic/ds-generic.component';
import { DataServiceComponent } from './data-service/data-service.component';

import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';
import { CustomDirective } from './custom.directive';
import { DropdownComponent } from './dropdown/dropdown.component';
import { BaseComponent } from './base/base.component';
import { ReportComponent } from './report/report.component';
import { SurveyComponent } from './survey/survey.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    StepperComponent,
    DsJoinComponent,
    DsGenericComponent,
    DataServiceComponent,
    AngularDirectivesComponent,
    CustomDirective,
    DropdownComponent,
    BaseComponent,
    ReportComponent,
    SurveyComponent,
    DocumentUploadComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

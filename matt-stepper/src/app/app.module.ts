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


import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';
import { CustomDirective } from './custom.directive';
import { DropdownComponent } from './dropdown/dropdown.component';
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
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

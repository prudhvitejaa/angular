import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSourceListComponent } from './data-source-list/data-source-list.component';
import { DataSourceFormComponent } from './data-source-form/data-source-form.component';
import { DataServiceListComponent } from './data-service-list/data-service-list.component';
import { DataServiceFormComponent } from './data-service-form/data-service-form.component';
import { DataManagementRoutingModule } from './data-management-routing.module';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    DataSourceListComponent,
    DataSourceFormComponent,
    DataServiceListComponent,
    DataServiceFormComponent,
  ],
  imports: [
    CommonModule,
    DataManagementRoutingModule,
    CoreModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule


  ],
  exports:[ 
    DataSourceListComponent,
    DataSourceFormComponent,
    DataServiceListComponent,
    DataServiceFormComponent,
  ]
})
export class DataManagementModule { }

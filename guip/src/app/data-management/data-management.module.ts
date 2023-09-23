import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSourceListComponent } from './data-source-list/data-source-list.component';
import { DataSourceFormComponent } from './data-source-form/data-source-form.component';
import { DataServiceListComponent } from './data-service-list/data-service-list.component';
import { DataServiceFormComponent } from './data-service-form/data-service-form.component';



@NgModule({
  declarations: [
    DataSourceListComponent,
    DataSourceFormComponent,
    DataServiceListComponent,
    DataServiceFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DataManagementModule { }

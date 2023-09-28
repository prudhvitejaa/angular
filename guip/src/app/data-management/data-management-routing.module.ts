import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DataServiceFormComponent } from './data-service-form/data-service-form.component';
import { DataServiceListComponent } from './data-service-list/data-service-list.component';
import { DataSourceFormComponent } from './data-source-form/data-source-form.component';
import { DataSourceListComponent } from './data-source-list/data-source-list.component';




const routes:Routes=[
  {
    path:'data-service-form',
    component:DataServiceFormComponent
  },
  {
    path:'data-service-list',
    component:DataServiceListComponent
  },
  {
    path:'data-source-form',
    component:DataSourceFormComponent
  },
  {
    path:'data-source-list',
    component:DataSourceListComponent
  }

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class DataManagementRoutingModule { }

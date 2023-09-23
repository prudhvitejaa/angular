import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CloudConfigComponent } from './cloud-config/cloud-config.component';
import { DbConfigComponent } from './db-config/db-config.component';
import { S3ConfigComponent } from './s3-config/s3-config.component';


const routes:Routes=[
          {
            path:'cloud-config',
            component:CloudConfigComponent
          },
          {
            path:'db-config',
            component:DbConfigComponent
          },
          {
            path:'s3-config',
            component:S3ConfigComponent
          }

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class IntegrationRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbConfigComponent } from './db-config/db-config.component';
import { S3ConfigComponent } from './s3-config/s3-config.component';
import { CloudConfigComponent } from './cloud-config/cloud-config.component';
import { IntegrationRoutingModule } from './integration-routing.module';



@NgModule({
  declarations: [
    DbConfigComponent,
    S3ConfigComponent,
    CloudConfigComponent
  ],
  imports: [
    CommonModule,
    IntegrationRoutingModule
  ]
})
export class IntegrationModule { }

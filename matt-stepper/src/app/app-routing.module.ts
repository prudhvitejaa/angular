import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { ReportComponent } from './report/report.component';
import { SurveyComponent } from './survey/survey.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';

const routes: Routes = [
                        {
                          path:'home',
                          component:BaseComponent
                        },
                        {
                          path:'report/:reportId',
                          component:ReportComponent
                        },
                        {
                          path:'survey',
                          component:SurveyComponent
                        },
                        {
                          path:'upload',
                          component:DocumentUploadComponent
                        },
                        {
                          path:'integration',
                          loadChildren:()=>import('./integration/integration.module')
                          .then((m)=> m.IntegrationModule)
                        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

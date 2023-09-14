import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelConfigFormComponent } from './channel-config-form/channel-config-form.component';
import { ChannelConfigListComponent } from './channel-config-list/channel-config-list.component';
import { GridComponent } from './grid/grid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { PersonDetailsComponent } from './person-details/person-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelConfigFormComponent,
    ChannelConfigListComponent,
    GridComponent,
    PersonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgGridModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




// BrowserModule,
// AppRoutingModule,
// FormsModule,
// AgGridModule,
// ReactiveFormsModule
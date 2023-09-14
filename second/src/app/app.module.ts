import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CardsComponent } from './cards/cards.component';
import { ImageComponent } from './image/image.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridComponent } from './grid/grid.component';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieGenericListComponent } from './movie-generic-list/movie-generic-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { StorageComponent } from './storage/storage.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CardsComponent,
    ImageComponent,
    UserRegisterComponent,
    GridComponent,
    HomeComponent,
    MovieListComponent,
    MovieGenericListComponent,
    StorageComponent,
    UserFormComponent
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

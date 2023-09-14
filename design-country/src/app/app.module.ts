import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { NumberBoxComponent } from './number-box/number-box.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    DropdownComponent,
    CheckBoxComponent,
    NumberBoxComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

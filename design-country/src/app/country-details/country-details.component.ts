import { Component } from '@angular/core';
import { FormBuilder , FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent {
  countryDetailsForm:any;
  
    constructor(private fb:FormBuilder){
    this.countryDetailsForm= this.fb.group({
    });
  }
  
  onSave(){
    console.log(this.countryDetailsForm);
  }

}

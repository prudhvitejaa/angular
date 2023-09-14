import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent {

  personDetails : any;
  constructor(private formBuilder : FormBuilder){
      this.personDetails = this.formBuilder.group({
          firstName : [''],
          lastName : [''],
          contact : [''],
          email : [''],
          educationalDetails : this.formBuilder.array([
            this.formBuilder.group({
            degreeName : [''],
            type : [''],
            passingYear : [''],
            marksObtained : ['']
            })
          ]),
          address : this.formBuilder.group({
            city : [''],
            state : [''], 
            country : [''],
            pincode : [''],
          })  
      })
  }

  addEducationForm(){
    this.getEducationalDetails().push(
      this.formBuilder.group({
        degreeName : [''],
        type : [''],
        passingYear : [''],
        marksObtained : ['']
        })
    )
  }


  getEducationalDetails(){
  return this.personDetails.get("educationalDetails") as FormArray;
  }

  submit(){
    console.log(this.personDetails);
  }
}

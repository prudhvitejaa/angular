import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-component',
  templateUrl: './reactive-form-component.component.html',
  styleUrls: ['./reactive-form-component.component.css']
})
export class ReactiveFormComponent{
  personDetails:any;
  constructor(private fb:FormBuilder){

    this.personDetails=this.fb.group({
      FirstName:[''],
      LastName:[''],
      contact:[''],
      email:[''],

      education:this.fb.array
        (
          [this.fb.group({
          DegreeName:[''],
          type:[''],
          passingyear:[''],
          marksObtained:['']
          })
        ]
        ),

      
      address:
      this.fb.group({
        city:[''],
        state:[''],
        country:[''],
        pincode:['']


      })


    })
   
  }

  submit(){
    console.log(this.personDetails) 
  }
  getEducation(){
    return this.personDetails.get("education") as FormArray;
  }
  addAddress(){
    this.getEducation().push(this.fb.group({
        DegreeName:[''],
        type:[''],
        passingyear:[''],
        marksObtained:[''],
        })
      )
  }
  deleteEducation(objectEducation:any){
    this.getEducation().removeAt(objectEducation)
  }
}

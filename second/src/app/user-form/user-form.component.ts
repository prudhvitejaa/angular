import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  userForm : any;
  constructor(private fb : FormBuilder){
      this.userForm = this.fb.group({
        name : [''],
        userName : [''],
        address : this.fb.group({
          contact : [''],
          email : ['']
        })
      })
  }

  submit(){
    console.log(this.userForm);
  }
}

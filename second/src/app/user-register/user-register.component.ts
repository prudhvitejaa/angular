import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  sendFormControl(form:any){
    console.log(form);
  }

  submitUserForm(form:any){
    console.log(form);
  }
}

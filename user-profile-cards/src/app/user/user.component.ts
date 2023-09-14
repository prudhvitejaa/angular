import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
@Input() userName:any;
@Input() userEmail:any;
@Input() userDepartment:any;
@Input() userExpericence:any;
  public userDetails:any = [{
      name:"userName",
      email:"",
      department:"",
      expericence:"",
      proficePic:"",
      qualification:"",
      address:[{
        city:"",
        state:"",
        country:"",
        pincode:""
      }]
  }]
}

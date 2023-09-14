import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-directives',
  templateUrl: './angular-directives.component.html',
  styleUrls: ['./angular-directives.component.css']
})
export class AngularDirectivesComponent {
  productList:any = [{
    id:"100",
    name:"shoe",
    price:50
  },{
    id:"101",
    name:"choclate",
    price:100
  },{
    id:"102",
    name:"biscuit",
    price:1000
  }]

  subjectList:any = ["angular","spring","sql"]
  selectedOption:any = "spring";
  selectedSubject(data:any){
    this.selectedOption = data.target.value;
  }
}

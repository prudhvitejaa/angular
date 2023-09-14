import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userList :any =[
    {
      name:"MSdhoni",
      email :"Dhoni@gmail.com",
      department :"Cricketer",
      experience : "20 yrs",
      profilepic :"https://w0.peakpx.com/wallpaper/437/536/HD-wallpaper-ms-dhoni-msdhoni-thlla.jpg",
      qualification :"Degree",
      address :[
      {
        city:"Ranchi",
        state:"Jharkhand",
        country:"India",
        pincode:49145,
        isCurrent:true
      },
      {
        city:"angul",
        state:"odisha",
        country:"India",
        pincode:759145,
        isCurrent:false
      }
    ]
    },{
      name:"thala",
      email :"Thala@gmail.com",
      department :"Captain",
      experience : "15 yrs",
      profilepic :"https://img.onmanorama.com/content/dam/mm/en/web-stories/sports/images/2023/5/24/msd3.jpg",
      qualification :"Graduate",
      address :[
      {
        city:"Chennai",
        state:"Madras",
        country:"India",
        pincode:82245,
        isCurrent:true
      },
      {
        city:"cuttack",
        state:"odisha",
        country:"India",
        pincode:753335,
        isCurrent:false
      }
    ]
    },{
      name:"Viratkohli",
      email :"vk@gmail.com",
      department :"Captain",
      experience : "15 yrs",
      profilepic :"https://www.livemint.com/lm-img/img/2023/04/19/1600x900/PTI04-17-2023-000237B-0_1681901983147_1681902008656.jpg",
      qualification :"Graduate",
      address :[
      {
        city:"Bangalore",
        state:"Karnataka",
        country:"India",
        pincode:92245,
        isCurrent:true
      },
      {
        city:"cuttack",
        state:"odisha",
        country:"India",
        pincode:753335,
        isCurrent:false
      }
    ]
    }
  ]
  recieveData(event:any){
    console.log("Hai Charan")
  }
}

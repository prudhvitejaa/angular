import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuList:any = [];

    dmObject = {
                  dm:[
                        {
                          resourceName:'Data Source',
                          url:'/data-management/data-source-list'
                        },
                        {
                          resourceName:'Data Service',
                          url:'/data-management/data-service-list'
                        }
                    ]

               }

    ngOnInit():void{
      this.menuList = Object.values(this.dmObject)[0];
      // console.log(this.menuList);
    }
}

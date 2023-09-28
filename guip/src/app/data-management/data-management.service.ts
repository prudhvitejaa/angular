import { DataServiceListComponent } from './data-service-list/data-service-list.component';
import { DataManagementRoutingModule } from './data-management-routing.module';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataManagementService {

  private dataServiceList:any=[];

  constructor() { }

  saveData(dbDetailsObject:any){
     this.dataServiceList.push(dbDetailsObject);
  }
  getAllData(){
    return this.dataServiceList;
  }

}

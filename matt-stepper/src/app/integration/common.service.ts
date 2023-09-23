import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  dbList = [
                  {
                  dbtype:'oracle',
                  username:'scott',
                  password:'tiger',
                  url:'http://localhost:8081'
                  },
                  {
                    dbtype:'mySql',
                    username:'root',
                    password:'root',
                    url:'http://localhost:4200'
                  },
                  {
                    dbtype:'mongoDb',
                    username:'teja',
                    password:'123@pru',
                    url:'http://localhost:8083'
                  }
  ]
  constructor() { }

  
  getDbConfigDetails(){
    return this.dbList;
  }
}

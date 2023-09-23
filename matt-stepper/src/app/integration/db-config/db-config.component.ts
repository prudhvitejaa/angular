import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-db-config',
  templateUrl: './db-config.component.html',
  styleUrls: ['./db-config.component.css']
})
export class DbConfigComponent {

  constructor(private dbListObject:CommonService){

    // console.log(dbListObject.getDbConfigDetails());

  }

}

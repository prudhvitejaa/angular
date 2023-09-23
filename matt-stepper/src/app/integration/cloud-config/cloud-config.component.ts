import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cloud-config',
  templateUrl: './cloud-config.component.html',
  styleUrls: ['./cloud-config.component.css']
})
export class CloudConfigComponent {
  constructor(private dbListObject:CommonService){

  }

  ngOnInit():void{
    console.log(this.dbListObject.getDbConfigDetails());
  }
}

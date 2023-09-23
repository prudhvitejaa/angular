import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-s3-config',
  templateUrl: './s3-config.component.html',
  styleUrls: ['./s3-config.component.css']
})
export class S3ConfigComponent {
  constructor(private dbListObject:CommonService){

    // console.log(dbListObject.getDbConfigDetails());

  }
}

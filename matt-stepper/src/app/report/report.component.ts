import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  constructor(private router:Router,
              private activatedRoute:ActivatedRoute){
  let reportId = this.activatedRoute.snapshot.paramMap.get('reportId');
  console.log(reportId);
  }

  saveData(){
    console.log("data submitted");
    this.router.navigate(['/home']);
  }
}

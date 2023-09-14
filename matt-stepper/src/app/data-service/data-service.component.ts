import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-data-service',
  templateUrl: './data-service.component.html',
  styleUrls: ['./data-service.component.css']
})
export class DataServiceComponent implements OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  ngOnDestroy(): void {
    console.log("---ngOnDestroy---")
  }
  ngAfterViewChecked(): void {
    console.log("---ngAfterViewChecked---")
  }
  ngAfterViewInit(): void {
    console.log("---ngAfterViewInit---")
  }
  ngAfterContentChecked(): void {
    console.log("---ngAfterContentChecked---")
  }
  ngAfterContentInit(): void {
    console.log("---ngAfterContentInit---")
  }
  ngDoCheck(): void {
    console.log("---ngDoCheck---")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("---ngOnChanges---")
  }
  constructor(){
    console.log("constructor executed")
  }
  ngOnInit():void{
    console.log("---ngOnInit---")
  }

  public dbDetails:any={
              employee_table: [
                          {
                            columnName:"empNo",
                            type:"int"
                          },
                          {
                            columnName:"empName",
                            type:"varchar"
                          },
                          {
                            columnName:"salary",
                            type:"int"
                          }
                      ],
              department_table:[
                            {
                              columnName:"deptNo",
                              type:"int"
                            },
                            {
                              columnName:"deptName",
                              type:"varchar"
                            },
                            {
                              columnName:"location",
                              type:"varchar"
                            }
                          ]
  }
  


}

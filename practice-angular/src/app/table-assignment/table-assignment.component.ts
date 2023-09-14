import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-table-assignment',
  templateUrl: './table-assignment.component.html',
  styleUrls: ['./table-assignment.component.css']
})
export class TableAssignmentComponent {

    // Each Column Definition results in one Column.
    // public columnDefs: ColDef[] = [
    //   { field: 'make'},
    //   { field: 'model'},
    //   { field: 'price' }
    // ];

    public columnDefs: ColDef[] = [];

    // DefaultColDef sets props common to all Columns
    public defaultColDef: ColDef = {
      sortable: true,
      filter: true,
    };

  //trial

  // rowData = [
  //     { make: 'Toyota', model: 'Celica', price: 35000 },
  //     { make: 'Ford', model: 'Mondeo', price: 32000 },
  //     { make: 'Porsche', model: 'Boxster', price: 72000 }
  // ];

   rowData = [];


  public databasesJson:any = [
        {
          dataSourceId:100,
          dbType: "mysql",
          dbName: "db_one_mysql",
          dataService: [
                          {
                            id:200,
                            dsName:"employee_info_mysql",
                            createdBy:"admin",
                            createdDate:"20-12-2023",
                            columns:[
                                      {name: "employee_name_mysql",type: "string"},
                                      {name: "gender",type: "string"},
                                      {name: "age",type: "number"}
                                    ],
                            actualData:[
                                      {employee_name_mysql:"supreeth dasi",gender:"M",age:23},
                                      {employee_name_mysql:"mahendra rasuri",gender:"M",age:27},
                                      {employee_name_mysql:"sirisha reddy",gender:"F",age:25},
                                      ]

                          },
                          {
                            id:201,
                            dsName:"teacher_info_mysql",
                            createdBy:"admin",
                            createdDate:"21-12-2023",
                            columns:[
                                      { name: "teacher_name_mysql",type: "string"},
                                      { name: "gender",type: "string"},
                                      { name: "age",type: "number"}
                                    ],
                            actualData:[
                                      {teacher_name_mysql:"negi",gender:"M",age:20},
                                      {teacher_name_mysql:"saini",gender:"M",age:28},
                                      {teacher_name_mysql:"babbar",gender:"M",age:25},
                                ]

                          },
                          {
                            id:202,
                            dsName:"course_info_mysql",
                            createdBy:"admin",
                            createdDate:"21-12-2023",
                            columns:[
                                      { name: "course_name_mysql",type: "string"},
                                      { name: "credits",type: "number"},
                                      { name: "passingMarks",type: "number"}
                                    ],
                            actualData:[
                                      {course_name_mysql:"AI",credits:9,passingMarks:20},
                                      {course_name_mysql:"DS",credits:5,passingMarks:30},
                                      {course_name_mysql:"ML",credits:2,passingMarks:40},
                                ]

                          }
                        ]
        },
        {
          dataSourceId:101,
          dbType: "oracle",
          dbName: "db_oracle_one",
          dataService: [
                          {
                            id:300,
                            dsName:"employee_info_oracle_1",
                            createdBy:"admin",
                            createdDate:"20-12-2023",
                            columns:[
                                      { name: "emp_name_oracle_1",type: "string"},
                                      { name: "sal",type: "string"},
                                      { name: "deptno",type: "number"}
                                    ],
                            actualData:[
                                      {emp_name_oracle_1:"prudhvi teja",sal:900,deptno:20},
                                      {emp_name_oracle_1:"sneha sai",sal:500,deptno:30},
                                      {emp_name_oracle_1:"rayudu MK",sal:1200,deptno:40},
                                ]

                          },
                          {
                            id:301,
                            dsName:"teacher_info_oracle_1",
                            createdBy:"admin",
                            createdDate:"21-12-2023",
                            columns:[
                                      { name: "teacher_name_oracle_1",type: "string"},
                                      { name: "age",type: "string"},
                                      { name: "gender",type: "number"}                                    
                                    ],
                            actualData:[
                                      {teacher_name_oracle_1:"durai",age:30,gender:"M"},
                                      {teacher_name_oracle_1:"JV",age:35,gender:"M"},
                                      {teacher_name_oracle_1:"sofana",age:28,gender:"F"},
                                ]

                          },
                          {
                            id:302,
                            dsName:"course_info_oracle_1",
                            createdBy:"admin",
                            createdDate:"21-12-2023",
                            columns:[
                                      { name: "course_name_oracle_1",type: "string"},
                                      { name: "credits",type: "string"},
                                      { name: "preRequisites",type: "number"}                                    
                                    ],
                            actualData:[
                                      {course_name_oracle_1:"AEC",credits:5,preRequisites:"NT"},
                                      {course_name_oracle_1:"DC",credits:4,preRequisites:"FEC"},
                                      {course_name_oracle_1:"FEC",credits:3,preRequisites:"n/a"},
                                ]

                          }
                        ]
        },
        {
          dataSourceId:102,
          dbType: "oracle",
          dbName: "db_oracle_two",
          dataService: [
                          {
                            id:400,
                            dsName:"employee_info_oracle_2",
                            createdBy:"admin",
                            createdDate:"20-12-2023",
                            columns:[
                                      { name: "emp_name_oracle_2",type: "string"},
                                      { name: "sal",type: "string"},
                                      { name: "deptno",type: "number"}
                                    ],
                            actualData:[
                                            {emp_name_oracle_2:"prudhvi",sal:900,deptno:20},
                                            {emp_name_oracle_2:"sneha",sal:500,deptno:30},
                                            {emp_name_oracle_2:"rayudu",sal:1200,deptno:40},
                                      ]
                          },
                          {
                            id:401,
                            dsName:"teacher_info_oracle_2",
                            createdBy:"admin",
                            createdDate:"21-12-2023",
                            columns:[
                                      { name: "teacher_name_oracle_2",type: "string"},
                                      { name: "sal",type: "string"},
                                      { name: "deptno",type: "number"}
                                    ],
                            actualData:[
                                      {teacher_name_oracle_2:"raveesh",sal:900,deptno:20},
                                      {teacher_name_oracle_2:"joyson",sal:500,deptno:30},
                                      {teacher_name_oracle_2:"arun",sal:1200,deptno:40},
                                ]

                          },
                          {
                            id:402,
                            dsName:"course_info_oracle_2",
                            createdBy:"admin",
                            createdDate:"21-12-2023",
                            columns:[
                                      { name: "course_name_oracle_2",type: "string"},
                                      { name: "credits",type: "string"},
                                      { name: "preRequisites",type: "number"}
                                    ],
                            actualData:[
                                      {course_name_oracle_2:"java",credits:3,preRequisites:"C"},
                                      {course_name_oracle_2:"sql",credits:4,preRequisites:"n/a"},
                                      {course_name_oracle_2:"javascript",credits:3,preRequisites:"HTML"},
                                    ]

                          }
                        ]
        }

  ]
  public filterRdbmsName:any =[];
  public filterDatabaseName:any =[];
  public filterDatabaseTable:any =[];
  public filterDatabaseTableFinal:any =[];
  public DatabaseTableFinal:any =[];
  public filteredDbtypeArray:any =[];
  public filteredDisplayTable:any =[];
  public setTableColumn:any =[];
  public setTablecolumnFiltered:any =[];
  public setDataOfTable:any =[];
  public setDataOfTableFinal:any =[];

  
  // public seenNames:any = {};


  // public filterDatabaseFunction(){
  //   this.filterRdbmsName = this.databasesJson.filter((each:any)=>{
  //     if(!this.seenNames[each.dbType] ){
  //       this.seenNames[each.dbType] = true;
  //       return true;
  //     }
  //     return false;
  //   })
  // }
  // constructor(){
  //   this.filterDatabaseFunction();
  // }

  ngOnInit():void{
    let ref = this.databasesJson.map((each:any)=>{
      return each.dbType;
    })
    //console.log(ref);
    let filteredDbtypeObject = new Set(ref);
    //console.log(filteredDbtypeObject);
    this.filteredDbtypeArray =  [...filteredDbtypeObject]
  }

  public filterDatabaseSchema(event:any){
    this.filterDatabaseName = this.databasesJson.filter((each:any)=>{
      if(event.target.value === each.dbType) return true;
      return false;
    })
  }

public filterDatabaseTables(event:any){
    this.filterDatabaseTable = this.databasesJson.filter((each:any)=>{
      if(Number(event.target.value) === each.dataSourceId) return each;
    })
    console.log(this.filterDatabaseTable);

    this.filterDatabaseTableFinal = this.filterDatabaseTable.map((each:any)=>{
            return each.dataService
    })
    console.log(this.filterDatabaseTableFinal);

    for(let i=0; i<this.filterDatabaseTableFinal.length; i++){
      this.DatabaseTableFinal = [];
      for(let j=0; j<this.filterDatabaseTableFinal[i].length ; j++){
        this.DatabaseTableFinal.push(this.filterDatabaseTableFinal[i][j]);
      }
    }
    console.log(this.DatabaseTableFinal);
}

public columnDefFunction(event:any){
      this.filteredDisplayTable = this.DatabaseTableFinal.filter((each:any)=>{
        if(Number(event.target.value) === each.id) return each;
      })
      console.log(this.filteredDisplayTable);

      this.setTableColumn = this.filteredDisplayTable.map((each:any)=>{
          return each.columns;
      })
      console.log(this.setTableColumn);

      for(let i=0 ; i<this.setTableColumn.length; i++){
        this.setTablecolumnFiltered = this.setTableColumn[i].map((each:any)=>{
            return {
              field:each.name
            };
        })
      }
      console.log(this.setTablecolumnFiltered);
      this.columnDefs = this.setTablecolumnFiltered;

      this.setDataOfTable = this.filteredDisplayTable.map((each:any)=>{
        return each.actualData;
      })
      for(let i=0 ; i<this.setDataOfTable.length; i++){
        this.setDataOfTableFinal = this.setDataOfTable[i].map((each:any)=>{
            return each;
        })
      }
      console.log(this.setDataOfTableFinal);
      this.rowData = this.setDataOfTableFinal;

}

}

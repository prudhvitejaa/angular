import { Component, Input, OnChanges } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-ds-join',
  templateUrl: './ds-join.component.html',
  styleUrls: ['./ds-join.component.css']
})
export class DsJoinComponent {
  @Input() dataServiceList:any = {};

  entityList:any=[];
  columnListForTableOne:any=[];
  columnListForTableTwo:any=[];
  joinList:any=['inner-join','left-outer-join','right-outer-join']
  outputObject:any = {
                      tableOne:"",
                      colOne:"",
                      tableTwo:"",
                      colTwo:"",
                      join:""
                    };

  outputObjectArray:any=[];

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'tableOne'},
    { field: 'colOne'},
    { field: 'tableTwo'},
    { field: 'colTwo'},
    { field: 'join'}
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };


  
  ngOnChanges(): void {
    this.entityList = Object.keys(this.dataServiceList);
  }

  tableOneSelection(event:any){
    this.outputObject['tableOne'] = event;
    this.columnListForTableOne = this.dataServiceList[event];
  }
  tableOneColumnSelection(event:any){
    this.outputObject['colOne'] = event.columnName;
  }

  tableTwoSelection(event:any){
    this.outputObject['tableTwo'] = event;
    this.columnListForTableTwo = this.dataServiceList[event];
  }

  tableTwoColumnSelection(event:any){
    this.outputObject['colTwo'] = event.columnName;
  }
  selectJoin(event:any){
    this.outputObject['join'] = event;
    console.log(this.outputObject);
  }
  addDataToTable(){
    /**
     * we use the object spread syntax ({ ...this.outputObject }) to create a new object
     * with the same properties and values.This new object is then pushed into the objectGridArray.
     * We repeat the process for the second entry. This way, you can dynamically populate the array
     * with as many objects as needed without manually creating separate objects for each entry.
     */
    this.outputObjectArray.push({...this.outputObject});
    this.outputObjectArray = [... this.outputObjectArray];
  }
}

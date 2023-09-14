import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-ds-generic',
  templateUrl: './ds-generic.component.html',
  styleUrls: ['./ds-generic.component.css']
})
export class DsGenericComponent implements OnChanges {

  @Input() dataServiceList:any={};

  public entityList:any = [];
  public columnList:any = [];
  public selectedTabIndex:any = 0;
  public selectedColumns:any=[];

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'columnName'},
    { field: 'type'}
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  ngOnChanges(): void {
    this.entityList = Object.keys(this.dataServiceList);
    console.log("----ngOnChanges in data generic class------")
  }

  selectTableMethod(selectedTable:any){
    this.selectedColumns = [];
    this.selectedTabIndex =1;
    this.columnList = this.dataServiceList[selectedTable.value];
  }

  seletedColumnList(selectedColumn:any){
    /* *** The reason for creating a shallow copy using the spread operator in this code is to trigger 
       *** Angular's change detection mechanism.
       *** Angular detects changes in data by checking if the reference to an object has changed. 
       *** By creating a new array, you are providing a new reference to this.selectedColumns, 
       *** which can help Angular recognize that a change has occurred and update the view accordingly.
    */
    this.selectedColumns.push(selectedColumn.source.value);
    this.selectedColumns = [...this.selectedColumns];
  }
}
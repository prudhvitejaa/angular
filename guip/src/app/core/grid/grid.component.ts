import { Component, Input } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

@Input()  girdcolumnDefs:any;
@Input()  gridDefaultColDef: any;
@Input()  gridData:any;

    // // Each Column Definition results in one Column.
    // public girdcolumnDefs: ColDef[] = [
    //   { field: 'make'},
    //   { field: 'model'},
    //   { field: 'price' }
    // ];
  
  //   // DefaultColDef sets props common to all Columns
  //   public defaultColDef: ColDef = {
  //     sortable: true,
  //     filter: true,
  //   };

  //   rowData = [
  //     { make: 'Toyota', model: 'Celica', price: 35000 },
  //     { make: 'Ford', model: 'Mondeo', price: 32000 },
  //     { make: 'Porsche', model: 'Boxster', price: 72000 }
  // ];
}

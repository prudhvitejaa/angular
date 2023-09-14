import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
        // rowData = [
        //     { make: 'Toyota', model: 'Celica', price: 35000 },
        //     { make: 'Ford', model: 'Mondeo', price: 32000 },
        //     { make: 'Porsche', model: 'Boxster', price: 72000 }
        // ];
        //   // Each Column Definition results in one Column.
        //   public columnDefs: ColDef[] = [
        //     { field: 'make'},
        //     { field: 'model'},
        //     { field: 'price' }
        //   ];

        //   // DefaultColDef sets props common to all Columns
        //   public defaultColDef: ColDef = {
        //     sortable: true,
        //     filter: true,
        //   };
}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataSourceFormComponent } from '../data-source-form/data-source-form.component';
import { DataManagementService } from '../data-management.service';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-data-source-list',
  templateUrl: './data-source-list.component.html',
  styleUrls: ['./data-source-list.component.css']
})
export class DataSourceListComponent {
gridData:any = this.dbServiceRef.getAllData();
    // Each Column Definition results in one Column.
    public gridCols: ColDef[] = [
      { field: 'dbType'},
      { field: 'dbName'},
      { field: 'url' },
      { field: 'portNo'},
      { field: 'userName'},
      { field: 'password'}
    ];
  
    // DefaultColDef sets props common to all Columns
    public gridDefaultCols: ColDef = {
      sortable: true,
      filter: true,
    };


  constructor(public dialog: MatDialog, private dbServiceRef:DataManagementService) {
  }

  onSaveTiggerThisMethod(){
    this.gridData = this.dbServiceRef.getAllData();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DataSourceFormComponent, {
      width: '700px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}



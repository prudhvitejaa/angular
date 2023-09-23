import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { GridComponent } from './grid/grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
      MenuComponent,
      GridComponent,
  ],
  imports: [
    CommonModule,
    AgGridModule,
    MatToolbarModule,

  ],
  exports:[GridComponent,MenuComponent],
})
export class CoreModule { }

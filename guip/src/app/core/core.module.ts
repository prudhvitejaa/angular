import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { GridComponent } from './grid/grid.component';
import { AgGridModule } from 'ag-grid-angular';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
      MenuComponent,
      GridComponent,
  ],
  imports: [
    CommonModule,
    AgGridModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule
  ],
  exports:[GridComponent,MenuComponent],
})
export class CoreModule { }

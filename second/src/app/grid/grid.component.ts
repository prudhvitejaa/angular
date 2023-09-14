import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnChanges {
  @Input() gridDataList:any;
  @Input() gridColumnList:any;
  @Input() gridConfig:any;

  ngOnChanges() {
    console.log(this.gridColumnList);
  }

}

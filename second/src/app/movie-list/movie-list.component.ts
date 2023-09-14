import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnChanges {

  @Input() public movieObj : any;
  public movieList : any = [];

  ngOnChanges() {
    console.log(this.movieObj);
    this.movieList.push(this.movieObj)
    this.movieList = [...this.movieList];
  }

  public defaultColDef : ColDef ={
    sortable:true,
    filter : true,
  };

  public movieGridColumnList : any =[
    {field: 'movieName'},
    {field: 'actorName'},
    {field: 'actressName'},
    {field: 'rating'}
  ];
}

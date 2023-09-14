import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
public updateMovieObj:any;

  public updateMovieList(movieObj:any){
    console.log(movieObj)
    this.updateMovieObj=movieObj;
  }
}

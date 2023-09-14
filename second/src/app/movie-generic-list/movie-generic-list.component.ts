import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-generic-list',
  templateUrl: './movie-generic-list.component.html',
  styleUrls: ['./movie-generic-list.component.css']
})
export class MovieGenericListComponent {

    @Output() movieFormEvent : any =  new EventEmitter();

    public formSubmit(movieForm:any){
      console.log(movieForm)
      this.movieFormEvent.emit(movieForm.value);
    }
}

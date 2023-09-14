import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() arrayList:any;
  @Output() updateEvent =new EventEmitter();
  submit(){
    this.updateEvent.emit("Charan");
  }
}

import { FormControl, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() formGroup:any;
  @Input() formControlName:any;
  @Input() countryList: any[] =[];
  
  ngOnInit():void {
    this.formGroup.addControl(this.formControlName, new FormControl(''));
  }

}

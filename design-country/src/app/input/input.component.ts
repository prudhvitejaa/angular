import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ]

})
export class InputComponent implements ControlValueAccessor{
  @Input() placeholderValue:any;
  @Input() formControlName:any;
  @Input() formGroup:any;


  ngOnInit():void {
    this.formGroup.addControl(this.formControlName,new FormControl())
  }

  value: string = ''; // Define a property to hold the input value

  // Implement ControlValueAccessor methods
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  
// Define a method to propagate changes back to the parent form
onInputChange(event: Event): void {
  const newValue = (event.target as HTMLInputElement).value;
  this.value = newValue;
  this.onChange(newValue); // Notify the form control
}

}

import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component,Input, forwardRef } from '@angular/core';

@Component({
  selector: 'app-number-box',
  templateUrl: './number-box.component.html',
  styleUrls: ['./number-box.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberBoxComponent),
      multi: true,
    },
  ]
})
export class NumberBoxComponent implements ControlValueAccessor {
  @Input() formGroup:any;
  @Input() placeholderValue:any;
  @Input() formControlName:any;


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

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(elementRef:ElementRef) {
    elementRef.nativeElement.style.color="orange";
  }

}

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  constructor(private elemento: ElementRef) {
    this.elemento.nativeElement.style.color = "red";
  }

}
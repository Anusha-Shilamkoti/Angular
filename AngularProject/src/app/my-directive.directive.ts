import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[MyDirective]'
})
export class MyDirectiveDirective {

  constructor(Element: ElementRef) {
    console.log(Element);
    Element.nativeElement.innerText="Text is changed by MyDirective Directive. "
   }

}

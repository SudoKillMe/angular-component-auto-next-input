import { Directive, ElementRef } from '@angular/core';
import { FocusableOption } from '@angular/cdk/a11y';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements FocusableOption {

  constructor(private element: ElementRef) { }

  focus () {
    this.element.nativeElement.focus();
  }

}

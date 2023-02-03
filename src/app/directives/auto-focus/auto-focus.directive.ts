import { AfterContentInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements AfterContentInit {

  constructor(public element: ElementRef<HTMLInputElement>) { }

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.element.nativeElement.focus();
    }, 250);
  }
}

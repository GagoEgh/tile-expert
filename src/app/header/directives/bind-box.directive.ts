import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[bindBox]'
})
export class BindBoxDirective {

  @Input('bindBox') active!: ElementRef;

  constructor(private render: Renderer2) { }


  @HostListener('input') onInput() {
    this.render?.addClass(this.active.nativeElement, 'content');
 
  }


}

import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[nonBox]'
})
export class NonBoxDirective {

  @Input('nonBox') active!: ElementRef;

  constructor(private render: Renderer2) { }

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement) {
    const doc = document.getElementsByClassName('content');
    let input = (document.getElementById('search') as HTMLInputElement);

    if (doc.length > 0 && target.offsetParent?.tagName !== "APP-SEARCH-SETTINGS" && target.tagName !== 'INPUT') {
      this.render.removeClass(doc[0], 'content')
      input.value = '';

    }

  }

}

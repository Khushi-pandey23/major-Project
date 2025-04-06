import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverDropdown]'
})
export class HoverDropdownDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'show');
    const dropdownMenu = this.el.nativeElement.querySelector('.dropdown-menu');
    this.renderer.addClass(dropdownMenu, 'show');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'show');
    const dropdownMenu = this.el.nativeElement.querySelector('.dropdown-menu');
    this.renderer.removeClass(dropdownMenu, 'show');
  }
}

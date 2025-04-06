import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverDropdown]'
})
export class HoverDropdownDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    const dropdown = this.el.nativeElement.querySelector('.dropdown-menu');
    if (dropdown) {
      this.renderer.addClass(dropdown, 'show');
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    const dropdown = this.el.nativeElement.querySelector('.dropdown-menu');
    if (dropdown) {
      this.renderer.removeClass(dropdown, 'show');
    }
  }
}

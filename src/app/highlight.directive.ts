import { Directive, HostListener, ElementRef } from "@angular/core";
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('teal');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null!);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}

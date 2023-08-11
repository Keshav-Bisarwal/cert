import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScoreBoardHighlight]',
})
export class ScoreBoardHighlightDirective {
  @Input('score') score: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const scoreBoardClass = this.applyScoreBoardBackground(this.score);
    this.renderer.addClass(this.el.nativeElement, scoreBoardClass);
  }

  private applyScoreBoardBackground(score: number): string {
    if (score <= 1) {
      return 'poor';
    } else if (score <= 3) {
      return 'good';
    } else {
      return 'excellent';
    }
  }
}

import { Component, ElementRef, ViewChild, ViewChildren, QueryList, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit{

  @ViewChild('animatedElement') animatedElement!: ElementRef;
  @ViewChild('parentContainer') parentContainer!: ElementRef;
  @ViewChildren('child') childElements!: QueryList<ElementRef>;
  isVisible = false;

  ngAfterViewInit() {
    this.setTransitionDelays();
    this.checkVisibility1(); // check once when loaded
    this.checkVisibility2(); // check once when loaded
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisibility1();
    this.checkVisibility2();
  }

  setTransitionDelays() {
    const children = this.parentContainer.nativeElement.querySelectorAll('.child');
    children.forEach((child: HTMLElement, index: number) => {
      child.style.transitionDelay = `${index * 0.3}s`; // 0s, 0.2s, 0.4s, 0.6s
    });
  }

    checkVisibility1() {
      const rect = this.animatedElement.nativeElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
    
      if (rect.top < windowHeight - 100 && rect.bottom > 100) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }
    }
    checkVisibility2() {
      const rect1 = this.parentContainer.nativeElement.getBoundingClientRect();
    
      if (rect1.top < window.innerHeight - 100 && rect1.bottom > 100) {
        this.parentContainer.nativeElement.classList.add('show');
      } else {
        this.parentContainer.nativeElement.classList.remove('show');
      }
    }
}

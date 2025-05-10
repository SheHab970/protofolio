import { Component, ElementRef, ViewChild, ViewChildren, QueryList, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements AfterViewInit{

  @ViewChild('animatedElement') animatedElement!: ElementRef;
  // @ViewChild('parentContainer') parentContainer!: ElementRef;
  // @ViewChildren('child') childElements!: QueryList<ElementRef>;
  isVisible = false;

  ngAfterViewInit() {
    // this.setTransitionDelays();
    this.checkVisibility(); // check once when loaded
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisibility();
  }

  // setTransitionDelays() {
  //   const children = this.parentContainer.nativeElement.querySelectorAll('.child');
  //   children.forEach((child: HTMLElement, index: number) => {
  //     child.style.transitionDelay = `${index * 0.3}s`; // 0s, 0.2s, 0.4s, 0.6s
  //   });
  // }

  checkVisibility() {
    const rect = this.animatedElement.nativeElement.getBoundingClientRect();
    // const rect1 = this.parentContainer.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
  
    if (rect.top < windowHeight - 100 && rect.bottom > 100) {
      this.isVisible = true;
      // this.parentContainer.nativeElement.classList.add('show');
    } else {
      this.isVisible = false;
      // this.parentContainer.nativeElement.classList.remove('show');
    }
  }

}

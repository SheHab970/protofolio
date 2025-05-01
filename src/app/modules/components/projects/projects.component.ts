import { Component, QueryList, ViewChildren, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = [
    {
      img : 'assets/imgs/projects/CtrlPDashboard.png',
      name : 'Admin Dashbourd',
      description: 'Modern Angular dashboard with clean UI and dynamic charts.',
      url : 'https://ctrl-p-dashboard.vercel.app/'
    },
    {
      img : 'assets/imgs/projects/Recipes-Sharing.png',
      name : 'Recipes Sharing',
      description: 'A vibrant platform to discover, share, and save your favorite recipes.',
      url : 'https://recipes-sharing.netlify.app/'
    },
    {
      img : 'assets/imgs/projects/RentalX.png',
      name : 'RentalX',
      description: 'Sleek car rental platform with smart booking and real-time availability.',
      url : 'https://shehab970.github.io/RentaLx_website/'
    },
  ];

  //animation for cards
  @ViewChildren('animatedElements') animatedElements!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.checkVisibility(); // check once on load
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisibility();
  }

  checkVisibility() {
    const windowHeight = window.innerHeight;

    this.animatedElements.forEach((el, index) => {
      const rect = el.nativeElement.getBoundingClientRect();

      if (rect.top < windowHeight - 100 && rect.bottom > 100) {
        // Add a delay based on index
        setTimeout(() => {
          el.nativeElement.classList.add('show');
        }, index * 300); // 200ms delay between each
      } else {
        el.nativeElement.classList.remove('show');
      }
    });
  }

}

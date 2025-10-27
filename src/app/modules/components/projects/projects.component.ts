import { Component, QueryList, ViewChildren, ElementRef, HostListener, AfterViewInit, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectDetailsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = [
    {
      img : 'assets/imgs/projects/CtrlPDashboard.png',
      name : 'Admin Dashbourd',
      description: 'Modern Angular dashboard with clean UI and dynamic charts.',
      url : 'https://ctrl-p-dashboard.vercel.app/',
      repourl : 'https://github.com/SheHab970/CtrlP-Dashboard'
    },
    {
      img : 'assets/imgs/projects/Recipes-Sharing.png',
      name : 'Recipes Sharing',
      description: 'A vibrant platform to discover, share, and save your favorite recipes.',
      url : 'https://recipes-sharing.netlify.app/',
      repourl : 'https://github.com/jawadTamer/recipe-sharing'
    },
    {
      img : 'assets/imgs/projects/RentalX.png',
      name : 'RentalX',
      description: 'Sleek car rental platform with smart booking and real-time availability.',
      url : 'https://shehab970.github.io/RentaLx_website/',
      repourl : 'https://github.com/SheHab970/RentaLx_website'
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
        }, index * 200); // 200ms delay between each
      } else {
        el.nativeElement.classList.remove('show');
      }
    });
  }


    private modalService = inject(NgbModal);
    openRegisterForm(): void {
    const modalRef = this.modalService.open(ProjectDetailsComponent, {
      centered: true,
      backdrop: 'static',
      scrollable: true,
    });
  }

}

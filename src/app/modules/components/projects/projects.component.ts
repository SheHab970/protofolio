import { Component, QueryList, ViewChildren, ElementRef, HostListener, AfterViewInit, inject, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { ProjectsService } from '../../../core/services/projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{

  constructor(private projectsService : ProjectsService){}

  projects : any;

  ngOnInit(): void {
    this.projects = this.projectsService.projectsData;
  }

//   sendId(id: number) {
//   this.projectsService.setId(id);
// }

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
    openRegisterForm(id : number): void {
    const modalRef = this.modalService.open(ProjectDetailsComponent, {
      centered: true,
      backdrop: 'static',
      scrollable: true,
    });

    this.projectsService.setId(id);
  }

}

import { Component, ElementRef, Optional, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { ProjectsService } from '../../../core/services/projects.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {

  itemId : any;
  currentItrm : any;

  constructor(
    private projectsService : ProjectsService,
    private router: Router,
    @Optional() public activeModal: NgbActiveModal,
  ){}

    ngOnInit(): void {
      this.router.events
        .pipe(filter((event) => event instanceof NavigationStart))
        .subscribe(() => {
          if (this.activeModal) {
            this.activeModal.close();
          }
        });

      this.projectsService.currentId.subscribe(id => {
        if (id) {
          this.itemId = id;
          console.log('Received ID:', this.itemId)
          this.loadProjectById(this.itemId)
        };
      });
    }

  loadProjectById(id: number) {
  this.currentItrm = this.projectsService.projectsData.find(p => p.id === id);
  console.log('Loaded project:', this.currentItrm);
}

  @ViewChild('scrollDiv') scrollDiv!: ElementRef<HTMLDivElement>;

  scrollLeft() {
    this.scrollDiv.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollDiv.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  colsePopup(): void {
    this.activeModal.close();
  }

}

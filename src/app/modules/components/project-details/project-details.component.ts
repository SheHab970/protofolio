import { AfterViewInit, Component, ElementRef, Optional, ViewChild } from '@angular/core';
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
export class ProjectDetailsComponent implements AfterViewInit{

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

  activeIndex: number = 1;

  ngAfterViewInit() {
    this.updateActiveIndex();
  }
  scrollLeft() {
    this.scrollDiv.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollDiv.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  scrollToIndex(index: number) {
    const scrollContainer = this.scrollDiv.nativeElement;
    const imageWidth = scrollContainer.clientWidth;
    scrollContainer.scrollTo({ left: index * imageWidth, behavior: 'smooth' });
    this.activeIndex = index;
    
  }

  onScroll() {
    this.updateActiveIndex();
  }
  private updateActiveIndex() {
    const scrollContainer = this.scrollDiv.nativeElement;
    const scrollLeft = scrollContainer.scrollLeft;
    const width = scrollContainer.clientWidth;
    const index = Math.round(scrollLeft / width);
    // this.activeIndex = index;
    this.activeIndex = Math.min(Math.max(index, 0), this.currentItrm.images.length - 1);
  }

  colsePopup(): void {
    this.activeModal.close();
  }

}

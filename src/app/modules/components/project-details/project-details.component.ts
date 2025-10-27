import { Component, Optional } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {

  constructor(
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
    }

  colsePopup(): void {
    this.activeModal.close();
  }

}

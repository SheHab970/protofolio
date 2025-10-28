import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  private idSource = new BehaviorSubject<number | null>(null);
  currentId = this.idSource.asObservable();

  setId(id: number) {
    this.idSource.next(id);
  }

    projectsData = [
    {
      id : 1,
      mainImg : 'assets/imgs/projects/CtrlPDashboard.png',
      images : [
        'assets/imgs/projects/CtrlPDashboard.png',
        'assets/imgs/projects/CtrlPDashboard.png',
        'assets/imgs/projects/CtrlPDashboard.png',
        'assets/imgs/projects/CtrlPDashboard.png',
      ],
      name : 'Admin Dashbourd',
      description: 'Modern Angular dashboard with clean UI and dynamic charts.',
      url : 'https://ctrl-p-dashboard.vercel.app/',
      repourl : 'https://github.com/SheHab970/CtrlP-Dashboard'
    },
    {
      id : 2,
      mainImg : 'assets/imgs/projects/Recipes-Sharing.png',
      images : [
        'assets/imgs/projects/Recipes-Sharing.png',
        'assets/imgs/projects/Recipes-Sharing.png',
        'assets/imgs/projects/Recipes-Sharing.png',
        'assets/imgs/projects/Recipes-Sharing.png',
      ],
      name : 'Recipes Sharing',
      description: 'A vibrant platform to discover, share, and save your favorite recipes.',
      url : 'https://recipes-sharing.netlify.app/',
      repourl : 'https://github.com/jawadTamer/recipe-sharing'
    },
    {
      id : 3,
      mainImg : 'assets/imgs/projects/RentalX.png',
      images : [
        'assets/imgs/projects/RentalX.png',
        'assets/imgs/projects/RentalX.png',
        'assets/imgs/projects/RentalX.png',
        'assets/imgs/projects/RentalX.png',
      ],
      name : 'RentalX',
      description: 'Sleek car rental platform with smart booking and real-time availability.',
      url : 'https://shehab970.github.io/RentaLx_website/',
      repourl : 'https://github.com/SheHab970/RentaLx_website'
    },
  ];
}

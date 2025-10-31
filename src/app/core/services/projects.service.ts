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
      mainImg : 'assets/imgs/projects/dashboard/CtrlPDashboard.png',
      images : [
        'assets/imgs/projects/dashboard/CtrlPDashboard-1.png',
        'assets/imgs/projects/dashboard/CtrlPDashboard-1-1.png',
        'assets/imgs/projects/dashboard/CtrlPDashboard-2.png',
        'assets/imgs/projects/dashboard/CtrlPDashboard.png',
        'assets/imgs/projects/dashboard/CtrlPDashboard-2-2.png',
        'assets/imgs/projects/dashboard/CtrlPDashboard-3.png',
        'assets/imgs/projects/dashboard/CtrlPDashboard-4.png',
        'assets/imgs/projects/dashboard/CtrlPDashboard-5.png',
        'assets/imgs/projects/dashboard/CtrlPDashboard-6.png',
      ],
      tech : [
        'HTML',
        'SASS',
        'TYPESCRIPT',
        'ANGULAR JS',
        'BOOTSTRAP',
        'REST API',
        'PRIME NG',
      ],
      name : 'Admin Dashbourd',
      description: 'Modern Angular dashboard with clean UI and dynamic charts.',
      detailDescription: 'Admin Dashboard — a fully functional management panel developed for a real-world e-commerce platform, built with Angular, TypeScript, SASS, Bootstrap, and PrimeNG.It provides administrators with tools to manage products, users, and orders through dynamic tables, charts, and interactive UI components.The dashboard is fully integrated with a .NET backend via RESTful APIs, ensuring smooth data handling and real-time updates.',
      url : 'https://ctrl-p-dashboard.vercel.app/',
      repourl : 'https://github.com/SheHab970/CtrlP-Dashboard'
    },
    {
      id : 2,
      mainImg : 'assets/imgs/projects/recipes/Recipes-Sharing.png',
      images : [
        'assets/imgs/projects/recipes/Recipes-Sharing-1.png',
        'assets/imgs/projects/recipes/Recipes-Sharing.png',
        'assets/imgs/projects/recipes/Recipes-Sharing-2.png',
        'assets/imgs/projects/recipes/Recipes-Sharing-3.png',
        'assets/imgs/projects/recipes/Recipes-Sharing-4.png',
        'assets/imgs/projects/recipes/Recipes-Sharing-5.png',
        'assets/imgs/projects/recipes/Recipes-Sharing-6.png',
      ],
      tech : [
        'HTML',
        'CSS',
        'TYPESCRIPT',
        'ANGULAR JS',
        'BOOTSTRAP',
      ],
      name : 'Recipes Sharing',
      description: 'A vibrant platform to discover, share, and save your favorite recipes.',
      detailDescription: 'Recipe Sharing Website — a modern web application built with Angular, TypeScript, HTML, CSS, and Bootstrap. It allows users to explore, create, and share their favorite recipes through an interactive and responsive interface. Developed as a final project for DEPI, it demonstrates strong front-end design and dynamic data handling skills.',
      url : 'https://recipes-sharing.netlify.app/',
      repourl : 'https://github.com/jawadTamer/recipe-sharing'
    },
    {
      id : 3,
      mainImg : 'assets/imgs/projects/rentalx/RentalX.png',
      images : [
        'assets/imgs/projects/rentalx/RentalX.png',
        'assets/imgs/projects/rentalx/RentalX-1.png',
        'assets/imgs/projects/rentalx/RentalX-2.png',
        'assets/imgs/projects/rentalx/RentalX-3.png',
        'assets/imgs/projects/rentalx/RentalX-4.png',
      ],
      tech : [
        'HTML',
        'CSS',
        'JAVASCRIPT',
      ],
      name : 'RentalX',
      description: 'Sleek car RentalX platform with smart booking and real-time availability.',
      detailDescription: 'RentalX is a sleek and responsive car rental website built with HTML, CSS, and JavaScript. It features a modern UI, smooth navigation, and dynamic car listings — delivering a clean and intuitive experience for users exploring rental options.',
      url : 'https://shehab970.github.io/RentaLx_website/',
      repourl : 'https://github.com/SheHab970/RentaLx_website'
    },
    {
      id : 4,
      mainImg : 'assets/imgs/projects/sprints/sprints-1.png',
      images : [
        'assets/imgs/projects/sprints/sprints-1.png',
        'assets/imgs/projects/sprints/sprints-2.png',
        'assets/imgs/projects/sprints/sprints-3.png',
        'assets/imgs/projects/sprints/sprints-4.png',
        'assets/imgs/projects/sprints/sprints-5.png',
        'assets/imgs/projects/sprints/sprints-6.png',
      ],
      tech : [
        'HTML',
        'CSS',
        'JAVASCRIPT',
      ],
      name : 'F & B Restaurant',
      description: 'F & B Restaurant – Modern Food & Beverage Website.',
      detailDescription: 'A simple yet elegant restaurant website built using HTML, CSS, and JavaScript as the final project for the Web Development Summer Course by Sprints. The site showcases a modern design with smooth navigation, an attractive menu section, and a responsive layout that adapts seamlessly across devices — reflecting the core principles of front-end web development.',
      url : 'https://sprints-project-ochre.vercel.app/',
      repourl : 'https://github.com/SheHab970/sprints-project'
    },
  ];
}

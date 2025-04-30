import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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

}

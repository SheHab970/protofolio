import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  languages = [
    {
      name: 'Html',
      img: 'assets/imgs/Html.png'
    },
    {
      name: 'Css',
      img: 'assets/imgs/css.png'
    },
    {
      name: 'JavaScript',
      img: 'assets/imgs/js1.png'
    },
    {
      name: 'TypeScript',
      img: 'assets/imgs/ts.png'
    },
    {
      name: 'Angular',
      img: 'assets/imgs/Angular.webp'
    },
    {
      name: 'Git',
      img: 'assets/imgs/git.jpg'
    },
    {
      name: 'Github',
      img: 'assets/imgs/github-512.webp'
    },
    {
      name: 'Sass',
      img: 'assets/imgs/sass.png'
    },
    {
      name: 'BootStrap',
      img: 'assets/imgs/bootstrap.png'
    }
  ];
}

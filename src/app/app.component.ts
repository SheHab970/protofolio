import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { AboutComponent } from './modules/components/about/about.component';
import { SkillsComponent } from './modules/components/skills/skills.component';
import { ProjectsComponent } from './modules/components/projects/projects.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent,AboutComponent,SkillsComponent,ProjectsComponent,NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'protofolio';

  down = false;
  Upwindow(){
    window.scrollTo( 0 , 0);
  }
  @HostListener('window:scroll')
  onWindowScroll() {
    if (window.scrollY > 500) {
      this.down = true;
    }
    else{
      this.down = false;
    }
    
  }
}

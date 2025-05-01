import { Component, HostListener, AfterViewInit, ViewChild, ElementRef  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { AboutComponent } from './modules/components/about/about.component';
import { SkillsComponent } from './modules/components/skills/skills.component';
import { ProjectsComponent } from './modules/components/projects/projects.component';
import { NgClass } from '@angular/common';
import { HomeComponent } from './modules/components/home/home.component';
import { ContactComponent } from './modules/components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    HomeComponent,
    ContactComponent,
    NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'protofolio';

  activeSection: string = 'home';
  sections: HTMLElement[] = [];

  ngAfterViewInit(): void {
    // Cache all sections after view is initialized
    this.sections = Array.from(document.querySelectorAll('section')) as HTMLElement[];
    this.updateActiveSection(); // Initial call on load
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.updateActiveSection();

    // for up button
    if (window.scrollY > 500) {
      this.down = true;
    }
    else{
      this.down = false;
    }
  }

  updateActiveSection(): void {
    for (const section of this.sections) {
      const visiblePercent = this.getVisibleSectionHeightPercent(section);
      if (visiblePercent >= 60) {
        this.activeSection = section.id;
        // console.log("section is " + this.activeSection);
        
        break;
      }
    }
  }

  getVisibleSectionHeightPercent(section: HTMLElement): number {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const visibleTop = Math.max(rect.top, 0);
    const visibleBottom = Math.min(rect.bottom, windowHeight);

    const visibleHeight = Math.max(visibleBottom - visibleTop, 0);
    const sectionHeight = rect.height;

    return (visibleHeight / sectionHeight) * 100;
  }

  buildThresholdList(): number[] {
    const thresholds: number[] = [];
    for (let i = 0; i <= 100; i++) {
      thresholds.push(i / 100);
    }
    return thresholds;
  }

  @ViewChild('projectsSection') projectsSection!: ElementRef;

  scrollToProjects() {
    this.projectsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  down = false;
  Upwindow(){
    window.scrollTo( 0 , 0);
  }
  // @HostListener('window:scroll')
  // onWindowScroll() {
  //   if (window.scrollY > 500) {
  //     this.down = true;
  //   }
  //   else{
  //     this.down = false;
  //   }
    
  // }
}

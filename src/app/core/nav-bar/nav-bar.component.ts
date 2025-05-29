import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ RouterModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  @Input() activeSection: string = '';


    isDarkMode = false;
    @Output() modeChange = new EventEmitter<boolean>();
  togglMode(){
    this.isDarkMode = !this.isDarkMode
    this.modeChange.emit(this.isDarkMode);
  }

}

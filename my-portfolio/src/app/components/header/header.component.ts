import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink ,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  scrollTo(path:any) {
    const element = document.getElementById(path);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Get the element's position
      const offsetPosition = elementPosition - offset; // Calculate the position with offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' // Smooth scroll
      });
    }
  }
}

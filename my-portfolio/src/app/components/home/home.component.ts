import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { EducationComponent } from '../education/education.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectsComponent, EducationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  openNewTab(url: string): void {
    window.open(url, '_blank');
  }

}

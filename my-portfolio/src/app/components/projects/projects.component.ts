import { Component } from '@angular/core';
import { Projects } from '../../models/projects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = Projects;

  openNewTab(path: string): void {
    window.open(path, '_blank');
  }

}

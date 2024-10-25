import { Component } from '@angular/core';
import { Certificates, Contact, Edutcation, Experiences, Projects, Skills } from '../../models/projects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  educations = Edutcation;
  contact = Contact;
  certificates = Certificates;
  skills = Skills;
  projects = Projects;
  experiences = Experiences;

  scrollTo(path:any) {
    const element = document.getElementById(path);
    if (element) {
      const offset = 110;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Get the element's position
      const offsetPosition = elementPosition - offset; // Calculate the position with offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' // Smooth scroll
      });
    }
  }
}

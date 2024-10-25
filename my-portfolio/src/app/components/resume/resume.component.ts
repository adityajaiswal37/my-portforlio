import { Component } from '@angular/core';
import { Certificates, Contact, Edutcation } from '../../models/projects';
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

}

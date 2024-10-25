import { Component } from '@angular/core';
import { Edutcation } from '../../models/projects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educations = Edutcation;

}

import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { HomeComponent } from '../components/home/home.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}

import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { HomeComponent } from '../components/home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']  // Fixed to styleUrls
})
export class MainComponent {
  top: string = '0px';  // Use specific types
  left: string = '0px';
  expand: boolean = false;
  
  private readonly OFFSET: number = 10;  // Avoid magic numbers

  constructor() {}

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    this.expand = true;
    setTimeout(() => {
      this.expand = false;
    }, 500);
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove(event: MouseEvent): void {
    this.top = `${event.pageY - this.OFFSET}px`;
    this.left = `${event.pageX - this.OFFSET}px`;
  }
}

import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const mainComponentChildren: Routes = [];

export const routes: Routes = [
    { path: '', component: MainComponent, children:  mainComponentChildren }
  ];

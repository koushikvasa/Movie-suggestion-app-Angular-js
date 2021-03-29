import { Routes } from '@angular/router';

import { MoviesComponent } from '../movies/movies.component';

import { SuspenceComponent } from '../suspence/suspence.component';

import { ActionComponent } from '../action/action.component';


export const routes: Routes = [
  { path: 'suspence',  component: SuspenceComponent },
  { path: 'action',  component: ActionComponent },
  { path: 'movies',     component: MoviesComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' }
];
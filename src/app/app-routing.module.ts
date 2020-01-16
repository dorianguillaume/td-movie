import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AuthGuardService } from './shared/auth-guard.service';


const routes: Routes = [
  {
    path: 'user-list', 
    component: UserListComponent
  },
  {
    path: 'user/:id', 
    component: UserDetailsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'movie-list',
    component: MovieListComponent
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent
  },
  {
    path: '**',
    redirectTo: 'user-list'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

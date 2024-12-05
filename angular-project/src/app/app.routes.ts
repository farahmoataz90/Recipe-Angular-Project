// import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { AddreviewComponent } from './components/addreview/addreview.component';
import { PostrecipeComponent } from './components/postrecipe/postrecipe.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [

  {
    path : 'login',
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "details",
    component: DetailsComponent
  },
  {
    path: 'addreview',
    component: AddreviewComponent
  },
  {
    path: "postrecipe",
    component: PostrecipeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '' , redirectTo : 'home' , pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }

];

import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { AddreviewComponent } from './components/addreview/addreview.component';
import { PostrecipeComponent } from './components/postrecipe/postrecipe.component';
import { ProfileComponent } from './components/profile/profile.component';

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
    component: PostrecipeComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: '' , redirectTo : 'home' , pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }

];

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
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import { MealplanningComponent } from './components/mealplanning/mealplanning.component';
import { ExploreComponent } from './components/explore/explore.component';
import { FollowersComponent } from './components/followers/followers.component';
import { FollowinglistComponent } from './components/followinglist/followinglist.component';
import { SaverecipeComponent } from './components/saverecipe/saverecipe.component';


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
    path: "followers",
    component: FollowersComponent
  },
  {
    path: "explore",
    component: ExploreComponent
  },
  {
    path: "saverecipe",
    component: SaverecipeComponent
  },
  {
    path: "details",
    component: DetailsComponent
  },
  {
    path: "following",
    component: FollowinglistComponent
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
    path: "mealplanning",
    component: MealplanningComponent
  },
  {
    path: "shoppinglist",
    component: ShoppinglistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '' , redirectTo : 'login' , pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }

];

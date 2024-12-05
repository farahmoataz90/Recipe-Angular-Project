import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostrecipeComponent } from '../postrecipe/postrecipe.component';
import { ProfileComponent } from '../profile/profile.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,PostrecipeComponent,ProfileComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  showNavbar = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const excludedRoutes = ['/login', '/signup'];
      this.showNavbar = !excludedRoutes.includes(this.router.url);
    });
  }

}

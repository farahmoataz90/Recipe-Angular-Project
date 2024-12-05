import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent,CardComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  cards = [
    {
      imageSrc: 'assets/images/food1.jpg',
      title: 'Vegetarian Tacos',
      time: '20 min',
      rating: 4.5,
    },
    {
      imageSrc: 'assets/images/food2.jpg',
      title: 'Smach Burger',
      time: '25 min',
      rating: 4.5,
    },
    {
      imageSrc: 'assets/images/food3.jpg',
      title: 'Paella',
      time: '40 min',
      rating: 4.2,
    },{
      imageSrc: 'assets/images/food4.jpg',
      title: 'Churros',
      time: '1.5 hr',
      rating: 4.9,
    },{
      imageSrc: 'assets/images/food5.jpg',
      title: 'Chicken alfredo',
      time: '50 min',
      rating: 4.5,
    },{
      imageSrc: 'assets/images/food6.jpg',
      title: 'Meat lover Pizza',
      time: '45 min',
      rating: 4.6,
    },{
      imageSrc: 'assets/images/food7.jpg',
      title: 'Wara2 3enab',
      time: '1 hr',
      rating: 5.0,
    },{
      imageSrc: 'assets/images/food8.jpg',
      title: 'Bamya',
      time: '45 min',
      rating: 3.9,
    },
  ];

}

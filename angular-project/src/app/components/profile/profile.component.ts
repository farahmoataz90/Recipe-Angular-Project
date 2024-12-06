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
      ingredients: ['Tortillas', 'Vegetables', 'Cheese', 'Salsa' ,'beans' ,'Cilantro' ,'Lime' ,'Avocado'],
      cookingSteps: [
        'Warm tortillas.',
        'Mash black beans.',
        'Dice avocado.',
        'Chop cilantro.',
        'Squeeze lime juice.',
        'Assemble tacos with all ingredients.'
      ],
      nutrition: [ '250','10-15g','10-15g','30-40g']
  ,
    },
    {
      imageSrc: 'assets/images/food2.jpg',
      title: 'Smach Burger',
      time: '25 min',
      rating: 4.5,
      ingredients: ['Beef patties', 'Buns', 'Cheese', 'Lettuce', 'Tomato', 'Onions'],
      cookingSteps: [
        'Grill the beef patties.',
        'Toast the buns.',
        'Assemble with lettuce, tomato, onions, and cheese.',
      ],
      nutrition: [ '250','10-15g','10-15g','30-40g']
      ,
    },
    {
      imageSrc: 'assets/images/food3.jpg',
      title: 'Paella',
      time: '40 min',
      rating: 4.2,
      ingredients: ['Rice', 'Saffron', 'Chicken or seafood (optional)', 'Vegetables (peas, bell peppers)', 'Broth'],
      cookingSteps: [
        'Sauté vegetables and protein.',
        'Add rice and saffron.',
        'Pour broth and simmer until rice is cooked.',
      ],
      nutrition: [ '250','10-15g','10-15g','30-40g']
      ,
    },
    {
      imageSrc: 'assets/images/food4.jpg',
      title: 'Churros',
      time: '1.5 hr',
      rating: 4.9,
      ingredients: ['Flour', 'Water', 'Sugar', 'Oil', 'Cinnamon sugar'],
      cookingSteps: [
        'Mix flour, water, and sugar.',
        'Pipe dough into hot oil.',
        'Fry until golden brown.',
        'Roll in cinnamon sugar.'
      ],
      nutrition: [ '250','10-15g','10-15g','30-40g']
      ,
    },
    {
      imageSrc: 'assets/images/food5.jpg',
      title: 'Chicken alfredo',
      time: '50 min',
      rating: 4.5,
      ingredients: ['Chicken breasts', 'Pasta', 'Cream sauce', 'Parmesan cheese', 'Garlic'],
      cookingSteps: [
        'Cook chicken and pasta.',
        'Make cream sauce with garlic and Parmesan.',
        'Combine chicken, pasta, and sauce.',
      ],
      nutrition: [ '250','10-15g','10-15g','30-40g']
      ,
    },
    {
      imageSrc: 'assets/images/food6.jpg',
      title: 'Meat lover Pizza',
      time: '45 min',
      rating: 4.6,
      ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella cheese', 'Pepperoni', 'Sausage' ,'Bacon'],
      cookingSteps: [
        'Roll out dough.',
        'Spread tomato sauce.',
        'Add cheese and toppings.',
        'Bake until crust is golden brown and cheese is melted.'
      ],
      nutrition: [ '250','10-15g','10-15g','30-40g']
      ,
    },
    {
      imageSrc: 'assets/images/food7.jpg',
      title: 'Wara2 3enab',
      time: '1 hr',
      rating: 5.0,
      ingredients: ['Grape leaves', 'Rice', 'Meat (optional)', 'Herbs (mint, parsley)', 'Lemon juice'],
      cookingSteps: [
        'Fill grape leaves with rice and meat mixture.',
        'Roll up tightly.',
        'Simmer in lemon juice and water.',
      ],
      nutrition: [ '250','10-15g','10-15g','30-40g']
      ,
    },
    {
      imageSrc: 'assets/images/food8.jpg',
      title: 'Bamya',
      time: '45 min',
      rating: 3.9,
      ingredients: ['Okra', 'Tomato sauce', 'Meat (optional)', 'Garlic', 'Spices (cumin, coriander)'],
      cookingSteps: [
        'Sauté okra in oil.',
        'Add tomato sauce, meat, garlic, and spices.',
        'Simmer until okra is tender.',
      ],
      nutrition: [ '250','10-15g','10-15g','30-40g']
      ,
    },
  ];

}

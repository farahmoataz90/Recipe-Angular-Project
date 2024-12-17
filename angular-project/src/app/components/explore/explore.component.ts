import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [FooterComponent,CardComponent,CommonModule,FormsModule],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent {

  cards = [
    {
      id: 1,
      imageSrc: 'assets/images/food1.jpg',
      title: 'Vegetarian Tacos',
      time: '20 min',
      rating: 4.5,
      cuisine: "Mexican",
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
      id: 2,
      imageSrc: 'assets/images/food2.jpg',
      title: 'Smash Burger',
      time: '25 min',
      rating: 4.5,
      cuisine: "American",
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
      id: 3,
      imageSrc: 'assets/images/food3.jpg',
      title: 'Paella',
      time: '40 min',
      rating: 4.2,
      cuisine: "Spanish",
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
      id: 4,
      imageSrc: 'assets/images/food4.jpg',
      title: 'Churros',
      time: '1.5 hr',
      rating: 4.9,
      cuisine: "Spanish",

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
      id: 5,
      imageSrc: 'assets/images/food5.jpg',
      title: 'Chicken alfredo',
      time: '50 min',
      rating: 4.5,
      cuisine: "Italian",

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
      id:6,
      imageSrc: 'assets/images/food6.jpg',
      title: 'Meat lover Pizza',
      time: '45 min',
      rating: 4.6,
      cuisine: "Italian",

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
      id:7,
      imageSrc: 'assets/images/food7.jpg',
      title: 'Wara2 3enab',
      time: '1 hr',
      rating: 5.0,
      cuisine: "Egyptian",

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
      id:9,
      imageSrc: 'assets/images/om.jpg',
      title: 'Om Ali',
      time: '1 hr',
      rating: 4.6,
      cuisine: "Egyptian",

      ingredients: ['Puff pastry', 'Milk', 'Sugar', 'Butter', 'Nuts (almonds, pistachios)'],
      cookingSteps: [
          'Cut puff pastry into strips and bake until golden brown.',
          'Heat milk, sugar, and butter in a pot.',
          'Add the baked pastry strips to the milk mixture.',
          'Simmer until the pastry absorbs the liquid.',
          'Top with nuts and serve warm.',
      ],
      nutrition: ['300-400', '10-15g', '15-20g', '40-50g']
  },
    {
      id:8,
      imageSrc: 'assets/images/food8.jpg',
      title: 'Bamya',
      time: '45 min',
      rating: 3.9,
      cuisine: "Egyptian",

      ingredients: ['Okra', 'Tomato sauce', 'Meat (optional)', 'Garlic', 'Spices (cumin, coriander)'],
      cookingSteps: [
        'Sauté okra in oil.',
        'Add tomato sauce, meat, garlic, and spices.',
        'Simmer until okra is tender.',
      ],
      nutrition: [ '250','10-15g','10-15g','30-40g']
      ,
    },
    {
      id:10,
      imageSrc: 'assets/images/Cheesecake.jpg',
      title: 'Cheesecake',
      time: '45 min',
      rating: 3.9,
      cuisine: "American",

      ingredients: ['Graham cracker crumbs', 'Butter', 'Cream cheese', 'Sugar', 'Eggs', 'Vanilla extract'],
      cookingSteps: [
          'Prepare the crust by combining graham cracker crumbs and melted butter.',
          'Beat cream cheese until smooth, then gradually beat in sugar.',
          'Beat in eggs one at a time, then stir in vanilla.',
          'Pour filling over the crust.',
          'Bake in a water bath at 325°F (165°C) for 50-60 minutes.',
      ],
      nutrition: ['300-350', '20-25g', '10-15g', '30-35g']
  },
  {
    id:11,

    imageSrc: 'assets/images/macroni.jpg',
    title: 'Macaroni with Bechamel',
    time: '1 hr',
    rating: 4.2,
    cuisine: "Egyptian",

    ingredients: ['Macaroni pasta', 'Milk', 'Butter', 'Flour', 'Cheese', 'Meat (optional)'],
    cookingSteps: [
        'Cook macaroni pasta until al dente.',
        'Prepare béchamel sauce by melting butter, adding flour, and gradually whisking in milk.',
        'Add cheese to the béchamel sauce and stir until melted.',
        'Mix cooked macaroni with the béchamel sauce.',
        'Top with additional cheese and bake until golden brown.',
    ],
    nutrition: ['300-400', '20-30g', '15-20g', '40-50g']
},
{
  id:12,
  imageSrc: 'assets/images/kofta.jpg',
  title: 'Kofta',
  time: '1 hr',
  rating: 4.5,
  cuisine: "Egyptian",

  ingredients: ['Ground meat (beef or lamb)', 'Onion', 'Garlic', 'Breadcrumbs','Spices (cumin, coriander, paprika)'],
  cookingSteps: [
      'Mix ground meat, onion, garlic, breadcrumbs, and spices.',
      'Form into small meatballs.',
      'Grill or broil the kofta until cooked through.',
      'Serve with rice, vegetables, or bread.',
  ],
  nutrition: ['200-300', '20-30g', '10-15g', '15-20g']
},
{
  id:13,

  imageSrc: 'assets/images/sheesh.jpg',
  title: 'Sheesh Tawook',
  time: '45 min',
  rating: 4.8,
  cuisine: "Egyptian",

  ingredients: ['Chicken', 'Marination (lemon juice, garlic, spices)'],
  cookingSteps: [
      'Marinate chicken skewers in lemon juice, garlic, and spices.',
      'Grill or broil the skewers until cooked through.',
      'Serve with bread, vegetables, or rice.',
  ],
  nutrition: ['250-300', '25-30g', '10-15g', '10-15g']
}
,{
  id:14,

  imageSrc: 'assets/images/shawerma.jpg',
  title: 'Chicken Shawerma',
  time: '1 hr',
  rating: 4.7,
  cuisine: "Egyptian",

  ingredients: ['Chicken', 'Lemon juice', 'Garlic', 'Spices'],
  cookingSteps: [
      'Marinate chicken breast in lemon juice, garlic, and spices.',
      'Cook the marinated chicken on a vertical rotisserie or grill.',
      'Slice the cooked chicken and serve in a wrap or sandwich.',
  ],
  nutrition: ['300-350', '25-30g', '15-20g', '20-25g']
},
{
  id:15,

  imageSrc: 'assets/images/hmam.jpg',
  title: 'Stuffed Pigeon Rice',
  time: '2 hr',
  rating: 4.3,
  cuisine: "Egyptian",

  ingredients: ['Pigeons', 'Rice', 'Onion', 'Garlic', 'Spices (cinnamon, cloves, allspice)'],
  cookingSteps: [
      'Stuff pigeons with a mixture of rice, onion, garlic, and spices.',
      'Roast the stuffed pigeons in the oven until cooked through.',
      'Serve with the remaining rice and broth.',
  ],
  nutrition: ['350-450', '25-30g', '20-25g', '30-35g']
},
{
  id:16,

  imageSrc: 'assets/images/molokhia.jpg',
  title: 'Molokhia',
  time: '45 min',
  rating: 4.4,
  cuisine: "Egyptian",

  ingredients: ['Molokhia leaves', 'broth', 'Garlic', 'Coriander', 'Lemon juice'],
  cookingSteps: [
      'Boil molokhia leaves in chicken or meat broth.',
      'Add garlic, coriander, and lemon juice.',
      'Simmer until the molokhia is tender.',
      'Serve with rice or bread.',
  ],
  nutrition: ['200-250', '15-20g', '5-10g', '30-35g']
}
  ];


  filteredCards = [...this.cards];
  searchQuery: string = '';

  filters = {
    cuisine: '',
    time: '',
    ingredients: ''
  };


  onSearchInputChange() {
    this.filteredCards = this.cards.filter((card) =>
      card.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    console.log('Search Query:', this.searchQuery);
    console.log('Filtered Cards:', this.filteredCards);
  }


  onFilterChange(filterKey: 'cuisine' | 'time' | 'ingredients', value: string) {
    if (value !== null && this.filters[filterKey] !== undefined) {
      this.filters[filterKey] = value;
      this.applyFilters();
    }
  }

  onCuisineFilterChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.onFilterChange('cuisine', target.value);
  }

  onTimeFilterChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.onFilterChange('time', target.value);
  }

  onIngredientsFilterChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.onFilterChange('ingredients', target.value);
  }


  applyFilters() {
    this.filteredCards = this.cards.filter((card) => {
      const matchesCuisine = this.filters.cuisine ? card.cuisine === this.filters.cuisine : true;
      const matchesTime = this.filters.time ? card.time === this.filters.time : true;
      const matchesIngredients = this.filters.ingredients
        ? card.ingredients.includes(this.filters.ingredients)
        : true;

      return matchesCuisine && matchesTime && matchesIngredients;
    });
  }

}

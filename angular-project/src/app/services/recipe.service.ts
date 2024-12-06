import { Injectable } from '@angular/core';
// import { Meal } from '../models/meal';
import { Meal } from '../interfaces/meal';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private predefinedRecipes: Meal[] = [
    {
      id: 'grape-leaves',
      name: 'Grape Leaves',
      type: 'lunch',
      description: 'Traditional stuffed grape leaves with rice and herbs',
      ingredients: ['Grape leaves', 'Rice', 'Herbs', 'Olive oil', 'Lemon'],
      calories: 350
    },
    {
      id: 'smash-burger',
      name: 'Smash Burger',
      type: 'dinner',
      description: 'Classic smashed burger with cheese',
      ingredients: ['Ground beef', 'Cheese', 'Burger bun', 'Lettuce', 'Tomato', 'Onion'],
      calories: 650
    },
    {
      id: 'pizza',
      name: 'Pizza',
      type: 'dinner',
      description: 'Homemade pizza with fresh toppings',
      ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Fresh basil', 'Olive oil'],
      calories: 800
    },
    {
      id: 'tacos',
      name: 'Tacos',
      type: 'lunch',
      description: 'Mexican style tacos with fresh salsa',
      ingredients: ['Tortillas', 'Ground beef', 'Lettuce', 'Tomato', 'Cheese', 'Salsa'],
      calories: 450
    },
    {
      id: 'bamya',
      name: 'Bamya',
      type: 'lunch',
      description: 'Middle Eastern okra stew',
      ingredients: ['Okra', 'Tomato sauce', 'Garlic', 'Onion', 'Olive oil'],
      calories: 300
    },
    {
      id: 'shawarma',
      name: 'Shawarma',
      type: 'dinner',
      description: 'Middle Eastern style shawarma wrap',
      ingredients: ['Chicken', 'Pita bread', 'Garlic sauce', 'Pickles', 'French fries'],
      calories: 550
    },
    {
      id: 'chicken-alfredo',
      name: 'Chicken Alfredo',
      type: 'dinner',
      description: 'Creamy pasta with grilled chicken',
      ingredients: ['Fettuccine', 'Chicken breast', 'Heavy cream', 'Parmesan', 'Garlic'],
      calories: 750
    },
    {
      id: 'pasta',
      name: 'Pasta',
      type: 'lunch',
      description: 'Classic pasta with tomato sauce',
      ingredients: ['Spaghetti', 'Tomato sauce', 'Basil', 'Parmesan', 'Olive oil'],
      calories: 450
    }
  ];

  getRecipes(): Meal[] {
    return this.predefinedRecipes;
  }

  getRecipesByType(type: 'breakfast' | 'lunch' | 'dinner' | 'snack'): Meal[] {
    return this.predefinedRecipes.filter(recipe => recipe.type === type);
  }
}

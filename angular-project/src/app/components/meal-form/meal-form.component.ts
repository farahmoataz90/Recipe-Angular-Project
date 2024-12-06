import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { Meal } from '../../models/meal';
import { Meal } from '../../interfaces/meal';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-meal-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './meal-form.component.html',
  styleUrl: './meal-form.component.scss',
})
export class MealFormComponent implements OnInit {
  @Input() mealType!: string;
  @Output() save = new EventEmitter<Meal>();
  @Output() cancel = new EventEmitter<void>();

  availableRecipes: Meal[] = [];
  selectedRecipe: Meal | null = null;
  isCustomRecipe = false;

  meal: Partial<Meal> = {
    name: '',
    description: '',
    ingredients: [],
    calories: undefined
  };

  ingredientsText = '';

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.availableRecipes = this.recipeService.getRecipesByType(this.mealType as 'breakfast' | 'lunch' | 'dinner');
  }

  selectRecipe(recipe: Meal) {
    this.selectedRecipe = recipe;
    this.isCustomRecipe = false;
    this.meal = { ...recipe };
    this.ingredientsText = recipe.ingredients.join('\n');
  }

  createCustomRecipe() {
    this.selectedRecipe = null;
    this.isCustomRecipe = true;
    this.meal = {
      name: '',
      description: '',
      ingredients: [],
      calories: undefined
    };
    this.ingredientsText = '';
  }

  updateIngredients(text: string) {
    this.meal.ingredients = text.split('\n').filter(ingredient => ingredient.trim() !== '');
  }

  onSubmit() {
    const newMeal: Meal = {
      id: this.selectedRecipe?.id || Math.random().toString(36).substr(2, 9),
      name: this.meal.name!,
      type: this.mealType as 'breakfast' | 'lunch' | 'dinner' | 'snack',
      description: this.meal.description!,
      ingredients: this.meal.ingredients!,
      calories: this.meal.calories
    };
    this.save.emit(newMeal);
  }

  onCancel() {
    this.cancel.emit();
  }
}

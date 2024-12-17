import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  private BOOKMARK_KEY = 'savedRecipes';

  constructor() {}

  // Save recipes to session storage
  saveRecipe(recipe: any) {
    let savedRecipes = this.getRecipes();
    if (!this.isRecipeSaved(recipe.title)) {
      savedRecipes.push(recipe);
      sessionStorage.setItem(this.BOOKMARK_KEY, JSON.stringify(savedRecipes));
    }
  }

  // Retrieve all recipes
  getRecipes(): any[] {
    const recipes = sessionStorage.getItem(this.BOOKMARK_KEY);
    return recipes ? JSON.parse(recipes) : [];
  }

  // Remove a recipe
  removeRecipe(title: string) {
    let savedRecipes = this.getRecipes();
    savedRecipes = savedRecipes.filter((r) => r.title !== title);
    sessionStorage.setItem(this.BOOKMARK_KEY, JSON.stringify(savedRecipes));
  }

  // Check if a recipe is saved
  isRecipeSaved(title: string): boolean {
    return this.getRecipes().some((r) => r.title === title);
  }
}

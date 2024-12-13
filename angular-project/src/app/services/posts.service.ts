import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private recipeData: any[] = [];

  constructor() { }

  // Set the recipe data
  setPost(post: any): void {
    this.recipeData.push(post);
    console.log(this.recipeData);
  }

  // Get the recipe data
  getPost(): any[]{
    return this.recipeData;
  }
}

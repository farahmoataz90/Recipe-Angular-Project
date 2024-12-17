import { Component, input, Input , OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookmarkService } from '../../services/bookmark.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{
  @Input() imageSrc!: string; // Input for the image URL
  @Input() title!: string;    // Input for the title
  @Input() time!: string;     // Input for the time
  @Input() rating!: number;
  @Input() cuisine!: string;
     // Input for the rating


     @Input() ingredients!: string[];
     @Input() cookingSteps!: string[];
     @Input() nutrition!: string[];




  isBookmarked: boolean = false;
  liked: boolean = false;

  constructor(private bookmarkService: BookmarkService) {
    // // Check session storage if the recipe is liked
    // const likedRecipes = JSON.parse(sessionStorage.getItem('likedRecipes') || '{}');
    // this.liked = likedRecipes[this.title] || false;
  }

  ngOnInit() {
    this.isBookmarked = this.bookmarkService.isRecipeSaved(this.title);
    this.loadLikedState();
  }

  toggleBookmark() {
    const recipe = {
      imageSrc: this.imageSrc,
      title: this.title,
      rating: this.rating,
      time: this.time,
      cuisine: this.cuisine,
      ingredients: this.ingredients,
      cookingSteps: this.cookingSteps,
      nutrition: this.nutrition,
    };

    if (this.isBookmarked) {
      this.bookmarkService.removeRecipe(this.title);
    } else {
      this.bookmarkService.saveRecipe(recipe);
    }
    this.isBookmarked = !this.isBookmarked;
  }

  loadLikedState() {
    // Load the "liked" state for this card title from session storage
    const likedRecipes = JSON.parse(sessionStorage.getItem('likedRecipes') || '{}');
    this.liked = likedRecipes[this.title] || false;
  }

  toggleLike() {
    this.liked = !this.liked;

    // Update session storage
    const likedRecipes = JSON.parse(sessionStorage.getItem('likedRecipes') || '{}');
    likedRecipes[this.title] = this.liked;
    sessionStorage.setItem('likedRecipes', JSON.stringify(likedRecipes));
  }

}

import { Component, input, Input } from '@angular/core';
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
export class CardComponent {
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
  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit() {
    this.isBookmarked = this.bookmarkService.isRecipeSaved(this.title);
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


}

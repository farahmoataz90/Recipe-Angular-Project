import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ReviewComponent } from '../review/review.component';
import { ActivatedRoute } from '@angular/router';
import { ShoppingService } from '../../services/shared.service';
import { BookmarkService } from '../../services/bookmark.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent,ReviewComponent,FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{
  reviews = [
    {
      imageSrc: 'assets/images/farah.jpg',
      name : 'Farah Moataz',
      date: 'Just now',
      comments: "This recipe was absolutely amazing! The flavors were perfectly balanced, and it turned out just like the pictures. My family loved it, and I'll definitely be making it again."
    },
    {
      imageSrc: 'assets/images/mazen.jpg',
      name : 'Mazen Mostafa',
      date: '2 mins ago',
      comments: "Simple, quick, and delicious! The step-by-step instructions were easy to follow, and the end result was a hit at dinner. Highly recommend!"
    },
    {
      imageSrc: 'assets/images/mazenraafat.jpg',
      name : 'Mazen Raafat',
      date: '5 mins ago',
      comments: "I’m not much of a cook, but this recipe made me feel like a pro. The tips were super helpful, and the meal turned out perfect."
    },
    {
      imageSrc: 'assets/images/mayer.jpg',
      name : 'Mayer Soliman',
      date: '10 December 2024',
      comments: "Delicious and healthy! I loved how adaptable this recipe was—I swapped out some ingredients based on what I had, and it still tasted fantastic"
    },
    {
      imageSrc: 'assets/images/bishoy.jpg',
      name : 'Bishoy Sedra',
      date: '10 December 2024',
      comments: "Great recipe overall, but I found it needed a bit more seasoning to suit my taste. Adding a pinch of garlic powder made it perfect for me!"
    },
    {
      imageSrc: 'assets/images/maya.jpg',
      name : 'Maya Mohammed ',
      date: '30 December 2024',
      comments: "teslmo ya ekhwaty w happy new year!"
    }



  ];
  showCommentBox = false; // To toggle the textbox visibility
  newCommentText = ''; // To bind the input text

  @Input() ing!: string[];

  id!:number;
  image!: string;
  title!: string;
  rating!: string;
  time!: string;
  ingredients!: string[];
  cookingSteps!: string[];
  nutrition!: string[];

  stars: number = 0; // Current filled stars
  isBookmarked: boolean = false;
  liked: boolean = false;
  profileImage: string = 'assets/images/person.png'; // Default profile image
  userName: string | null = '';

  constructor(private route: ActivatedRoute , private shoppingService: ShoppingService,private bookmarkService: BookmarkService) {}


  addToShoppingList(ing: string): void {
    console.log('Adding ingredient to shopping list:', ing);
    this.shoppingService.addToShoppingList(ing);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id= params['id'];
      this.image = params['image'];
      this.title = params['title'];
      this.rating = params['rating'];
      this.time = params['time'];
      this.ingredients = params['ingredients'];
      this.cookingSteps = params['cookingSteps'];
      this.nutrition = params['nutrition'];
    });
    this.isBookmarked = this.bookmarkService.isRecipeSaved(this.title);

    // Load "liked" state from session storage
    const likedRecipes = JSON.parse(sessionStorage.getItem('likedRecipes') || '{}');
    this.liked = likedRecipes[this.title] || false;

    this.loadRating();

    const email = sessionStorage.getItem('email');
    if (email) {
      this.userName = email.split('@')[0]; // Extract name before '@'
    }

    // Load profile image from session storage if available
    const savedImage = sessionStorage.getItem('profileImage');
    if (savedImage) {
      this.profileImage = savedImage;
    }
    // Load reviews from sessionStorage if available
    const savedReviews = sessionStorage.getItem(`reviews-${this.id}`);
    if (savedReviews) {
      this.reviews = JSON.parse(savedReviews);
    }

}

toggleCommentBox(): void {
  this.showCommentBox = !this.showCommentBox;
}

addComment(): void {
  if (this.newCommentText.trim() !== '') {
    // Create a new review object
    const newReview = {
      imageSrc: this.profileImage,
      name: this.userName || 'Anonymous', // Replace with dynamic user name if available
      date: new Date().toLocaleString(),
      comments: this.newCommentText,
      stars: this.stars // Use dynamic rating from the stars selector
    };

    // Add to the reviews array
    this.reviews.push(newReview);

    // Save the updated reviews to sessionStorage
    sessionStorage.setItem(`reviews-${this.id}`, JSON.stringify(this.reviews));

    // Reset the comment box
    this.newCommentText = '';
    this.showCommentBox = false;
  }
}

loadRating() {
  const ratings = JSON.parse(sessionStorage.getItem('productRatings') || '{}');
  this.stars = ratings[this.id] || 0; // Default to 0 if no rating exists
}



setRating(value: number) {
  this.stars = value;

  // Save the rating to sessionStorage
  const ratings = JSON.parse(sessionStorage.getItem('productRatings') || '{}');
  ratings[this.id] = value;
  sessionStorage.setItem('productRatings', JSON.stringify(ratings));
}





toggleBookmark() {
  const recipe = {
    imageSrc: this.image,
    title: this.title,
    rating: this.rating,
    time: this.time,
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


toggleLike() {
  this.liked = !this.liked;

  // Save to session storage
  const likedRecipes = JSON.parse(sessionStorage.getItem('likedRecipes') || '{}');
  likedRecipes[this.title] = this.liked;
  sessionStorage.setItem('likedRecipes', JSON.stringify(likedRecipes));
}

}

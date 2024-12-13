import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ReviewComponent } from '../review/review.component';
import { ActivatedRoute } from '@angular/router';
import { ShoppingService } from '../../services/shared.service';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent,ReviewComponent],
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


  // @Input() ing: string[] = [];
  @Input() ing!: string[];


  image!: string;
  title!: string;
  rating!: string;
  time!: string;


  ingredients!: string[];
  cookingSteps!: string[];
  nutrition!: string[];


  constructor(private route: ActivatedRoute , private shoppingService: ShoppingService) {}


  addToShoppingList(ing: string): void {
    console.log('Adding ingredient to shopping list:', ing);
    this.shoppingService.addToShoppingList(ing);
  }





  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.image = params['image'];
      this.title = params['title'];
      this.rating = params['rating'];
      this.time = params['time'];
      this.ingredients = params['ingredients'];
      this.cookingSteps = params['cookingSteps'];
      this.nutrition = params['nutrition'];






    });

}}

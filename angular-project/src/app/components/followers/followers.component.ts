import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FollowerscardComponent } from '../followerscard/followerscard.component';
import { CommonModule } from '@angular/common';
import { FollowingService } from '../../services/following.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-followers',
  standalone: true,
  imports: [FooterComponent,FollowerscardComponent,CommonModule,FormsModule],
  templateUrl: './followers.component.html',
  styleUrl: './followers.component.scss'
})
export class FollowersComponent {

  cards = [
    {
      mainImage : 'assets/images/avatar1.jpg',
      name: "Judy Nguyen",
      position: " Food Blogger",
      num: "20",
      image1: 'assets/images/avatar2.jpg',
      image2: 'assets/images/avatar3.jpg',
      image3: 'assets/images/avatar4.jpg',
      image4: 'assets/images/farah.jpg',
      image5: 'assets/images/mayer.jpg'
    },
    {
      mainImage: "assets/images/01.jpg",
      name: "Alex Turner",
      position: "Culinary Artist",
      num: "42",
      image1: 'assets/images/03.jpg',
      image2: 'assets/images/05.jpg',
      image3: 'assets/images/04.jpg',
      image4: 'assets/images/bishoy.jpg',
      image5: 'assets/images/mazen.jpg'

  },
  {
      mainImage: "assets/images/05.jpg",
      name: "Isabella Rossi",
      position: "Gourmet Chef",
      num: "17",
      image1: 'assets/images/06.jpg',
      image2: 'assets/images/07.jpg',
      image3: 'assets/images/09.jpg',
      image4: 'assets/images/mazenraafat.jpg',
      image5: 'assets/images/maya.jpg'
  },
  {
      mainImage: "assets/images/09.jpg",
      name: "David Kim",
      position: "Food Stylist",
      num: "35",
      image1: 'assets/images/10.jpg',
      image2: 'assets/images/11.jpg',
      image3: 'assets/images/12.jpg',
      image4: 'assets/images/ahmed.jpg',
      image5: 'assets/images/maya.jpg',
  },
  {
      mainImage: "assets/images/10.jpg",
      name: "Aisha Patel",
      position: "Vegan Chef",
      num: "29",
      image1: 'assets/images/11.jpg',
      image2: 'assets/images/12.jpg',
      image3: 'assets/images/01.jpg',
      image4: 'assets/images/03.jpg',
      image5: 'assets/images/04.jpg'
  },
  {
      mainImage: "assets/images/farah.jpg",
      name: "Farah Al-Qudsi",
      position: "Food Blogger",
      num: "12",
      image1: 'assets/images/avatar1.jpg',
      image2: 'assets/images/avatar3.jpg',
      image3: 'assets/images/avatar2.jpg',
      image4: 'assets/images/avatar4.jpg',
      image5: 'assets/images/bishoy.jpg'
  },
  {
      mainImage: "assets/images/mayer.jpg",
      name: "Oliver Mayer",
      position: "Pastry Chef",
      num: "51",
      image1: 'assets/images/farah.jpg',
      image2: 'assets/images/maya.jpg',
      image3: 'assets/images/mazen.jpg',
      image4: 'assets/images/bishoy.jpg',
      image5: 'assets/images/ahmed.jpg'

  },
  {
      mainImage: "assets/images/11.jpg",
      name: "Sophie Dubois",
      position: "Culinary Instructor",
      num: "8",
      image1: 'assets/images/avatar1.jpg',
      image2: 'assets/images/avatar3.jpg',
      image3: 'assets/images/avatar2.jpg',
      image4: 'assets/images/avatar4.jpg',
      image5: 'assets/images/bishoy.jpg'
  },
  {
      mainImage: "assets/images/03.jpg",
      name: "Carlos Hernandez",
      position: "Food Critic",
      num: "23",
      image1: 'assets/images/01.jpg',
      image2: 'assets/images/03.jpg',
      image3: 'assets/images/04.jpg',
      image4: 'assets/images/05.jpg',
      image5: 'assets/images/06.jpg'
  },
  {
      mainImage: "assets/images/maya.jpg",
      name: "Mia Chen",
      position: "Personal Chef",
      num: "67",
      image1: 'assets/images/farah.jpg',
      image2: 'assets/images/mazen.jpg',
      image3: 'assets/images/mazenraafat.jpg',
      image4: 'assets/images/bishoy.jpg',
      image5: 'assets/images/mayer.jpg'
  },
  {
      mainImage: "assets/images/avatar4.jpg",
      name: "Benji Lee",
      position: "Food Photographer",
      num: "19",
      image1: 'assets/images/avatar1.jpg',
      image2: 'assets/images/avatar3.jpg',
      image3: 'assets/images/avatar2.jpg',
      image4: 'assets/images/farah.jpg',
      image5: 'assets/images/bishoy.jpg'
  },
  {
      mainImage: "assets/images/avatar3.jpg",
      name: "Amina Rashid",
      position: "Nutritionist",
      num: "34",
      image1: 'assets/images/01.jpg',
      image2: 'assets/images/04.jpg',
      image3: 'assets/images/12.jpg',
      image4: 'assets/images/05.jpg',
      image5: 'assets/images/07.jpg'
  },
  {
      mainImage: "assets/images/02.jpg",
      name: "Eva Mueller",
      position: "Sous Chef",
      num: "45",
      image1: 'assets/images/avatar1.jpg',
      image2: 'assets/images/avatar3.jpg',
      image3: 'assets/images/avatar2.jpg',
      image4: 'assets/images/avatar4.jpg',
      image5: 'assets/images/bishoy.jpg'
  },
  {
      mainImage: "assets/images/avatar2.jpg",
      name: "Leo Rossi",
      position: "Executive Chef",
      num: "72",
      image1: 'assets/images/farah.jpg',
      image2: 'assets/images/maya.jpg',
      image3: 'assets/images/mazen.jpg',
      image4: 'assets/images/bishoy.jpg',
      image5: 'assets/images/mazenraafat.jpg'
  },
  {
      mainImage: "assets/images/04.jpg",
      name: "Kai Watanabe",
      position: "Bistro Owner",
      num: "58",
      image1: 'assets/images/avatar1.jpg',
      image2: 'assets/images/avatar3.jpg',
      image3: 'assets/images/avatar2.jpg',
      image4: 'assets/images/avatar4.jpg',
      image5: 'assets/images/bishoy.jpg'
  },
  {
      mainImage: "assets/images/06.jpg",
      name: "Zara Khan",
      position: "Food Writer",
      num: "26",
      image1: 'assets/images/01.jpg',
      image2: 'assets/images/02.jpg',
      image3: 'assets/images/03.jpg',
      image4: 'assets/images/04.jpg',
      image5: 'assets/images/05.jpg'
  },
  {
      mainImage: "assets/images/placeholder.jpg",
      name: "Omar Al-Ghazali",
      position: "Beverage Specialist",
      num: "39",
      image1: 'assets/images/avatar1.jpg',
      image2: 'assets/images/avatar3.jpg',
      image3: 'assets/images/avatar2.jpg',
      image4: 'assets/images/avatar4.jpg',
      image5: 'assets/images/bishoy.jpg'
  }
  ];

  constructor(private followingService: FollowingService) {}

  addToFollowing(card: any) {
    this.followingService.addCard(card);
  }


  filteredCards = [...this.cards];
  searchQuery: string = '';

  onSearchInputChange() {
    this.filteredCards = this.cards.filter((card) =>
      card.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    console.log('Search Query:', this.searchQuery);
    console.log('Filtered Cards:', this.filteredCards);
  }


}

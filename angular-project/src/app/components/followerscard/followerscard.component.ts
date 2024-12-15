import { Component, Input , Output, EventEmitter, OnInit  } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-followerscard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './followerscard.component.html',
  styleUrl: './followerscard.component.scss'
})
export class FollowerscardComponent implements OnInit{
  @Input() mainImage!: string;
  @Input() name!: string;
  @Input() position!: string;
  @Input() num!:string;
  @Input() image1!: string;
  @Input() image2!: string;
  @Input() image3!: string;
  @Input() image4!: string;
  @Input() image5!: string;



  // addToFollowing() {
  //   const currentFollowList = JSON.parse(sessionStorage.getItem('followingList') || '[]');
  //   const newFollower = {
  //     mainImage: this.mainImage,
  //     name: this.name,
  //     position: this.position,
  //     num: this.num,
  //     image1: this.image1,
  //     image2: this.image2,
  //     image3: this.image3,
  //     image4: this.image4,
  //     image5: this.image5,
  //   };

  //   // Check if already exists
  //   const alreadyExists = currentFollowList.some(
  //     (follower: any) => follower.name === newFollower.name
  //   );

  //   if (!alreadyExists) {
  //     currentFollowList.push(newFollower);
  //     sessionStorage.setItem('followingList', JSON.stringify(currentFollowList));
  //   }
  // }


  isFollowing = false; // Tracks if the user is following this person

  ngOnInit() {
    // Check if the current card is already in the following list
    const currentFollowList = JSON.parse(sessionStorage.getItem('followingList') || '[]');
    this.isFollowing = currentFollowList.some((follower: any) => follower.name === this.name);
  }

  toggleFollowing() {
    const currentFollowList = JSON.parse(sessionStorage.getItem('followingList') || '[]');
    if (this.isFollowing) {
      // Remove from the list
      const updatedList = currentFollowList.filter((follower: any) => follower.name !== this.name);
      sessionStorage.setItem('followingList', JSON.stringify(updatedList));
    } else {
      // Add to the list
      const newFollower = {
        mainImage: this.mainImage,
        name: this.name,
        position: this.position,
        num: this.num,
        image1: this.image1,
        image2: this.image2,
        image3: this.image3,
        image4: this.image4,
        image5: this.image5,
      };
      currentFollowList.push(newFollower);
      sessionStorage.setItem('followingList', JSON.stringify(currentFollowList));
    }
    this.isFollowing = !this.isFollowing; // Toggle the state
  }
}

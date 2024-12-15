import { Component, Input , Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-followerscard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './followerscard.component.html',
  styleUrl: './followerscard.component.scss'
})
export class FollowerscardComponent {
  @Input() mainImage!: string;
  @Input() name!: string;
  @Input() position!: string;
  @Input() num!:string;
  @Input() image1!: string;
  @Input() image2!: string;
  @Input() image3!: string;
  @Input() image4!: string;
  @Input() image5!: string;


  // @Output() follow = new EventEmitter<any>();

  // onFollow() {
  //   const cardData = {
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
  //   this.follow.emit(cardData);
  // }

  addToFollowing() {
    const currentFollowList = JSON.parse(sessionStorage.getItem('followingList') || '[]');
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

    // Check if already exists
    const alreadyExists = currentFollowList.some(
      (follower: any) => follower.name === newFollower.name
    );

    if (!alreadyExists) {
      currentFollowList.push(newFollower);
      sessionStorage.setItem('followingList', JSON.stringify(currentFollowList));
    }
  }



}

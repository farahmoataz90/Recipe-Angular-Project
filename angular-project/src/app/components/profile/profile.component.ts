import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/posts.service';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent,CardComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  userName: string | null = '';
  cards: any[] = [];

  profileImage: string = 'assets/images/person.png'; // Default image
  followingCount = 0; // Tracks the count of followings

  constructor(private postservice : PostService){}


  ngOnInit(): void
  {
    const email = sessionStorage.getItem('email');
    if (email)
     {
        this.userName = email.split('@')[0]; // Extract name before '@'
     }
      // Get all posts from the PostService
      this.cards = this.postservice.getPost();
      console.log('Cards:', this.cards);


    // Load saved image from session storage (if available)
    const savedImage = sessionStorage.getItem('profileImage');
    if (savedImage) {
      this.profileImage = savedImage;
    }

    this.updateFollowingCount();

  }

  updateFollowingCount() {
    const followingList = JSON.parse(sessionStorage.getItem('followingList') || '[]');
    this.followingCount = followingList.length;
  }




  triggerFileInput(): void {
    const fileInput = document.getElementById('imageInput') as HTMLInputElement;
    fileInput.click();
  }

  onImageChange(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput?.files && fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          this.profileImage = e.target.result as string; // Set the new image
          sessionStorage.setItem('profileImage', this.profileImage); // Save to session storage
        }
      };
      reader.readAsDataURL(fileInput.files[0]); // Read the selected image
    }
  }





}

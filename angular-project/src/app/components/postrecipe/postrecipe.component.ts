import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PostService } from '../../services/posts.service';
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';  // This is for common Angular directives like ngIf
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-postrecipe',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent,FormsModule],
  templateUrl: './postrecipe.component.html',
  styleUrl: './postrecipe.component.scss'
})

export class PostrecipeComponent {
  imgAreaActive = false;
  selectedImageName: string | null = null;
  imageUrl: string | null = null;
  recipeName: string = '';
  ingredients: string = '';
  cookingSteps: string = '';
  nutritionalInfo: string = '';

  constructor(private Postservice:PostService , private router: Router) {}

  onFileChange(event: Event): void {
    const inputFile = event.target as HTMLInputElement;
    if (inputFile && inputFile.files && inputFile.files.length > 0) {
      const image = inputFile.files[0];
      if (image.size < 2000000) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageUrl = reader.result as string;
          this.imgAreaActive = true;
          this.selectedImageName = image.name;
        };
        reader.readAsDataURL(image);
      } else {
        alert('Image size is more than 2MB');
      }
    }
  }

  onSelectImage(fileInput: HTMLInputElement): void {
    fileInput.click();
  }

  postRecipe(): void {
    const recipe = {
      id: Math.floor(Math.random() * 1000), // Generate a random ID for now
      imageSrc: this.imageUrl || 'assets/images/default.jpg', // Fallback image if none uploaded
      title: this.recipeName,
      time: '30 min',  // Example static time
      rating: 4.5, // Example static rating
      cuisine: 'Custom', // Default cuisine, you can allow users to input this too
      ingredients: this.ingredients.split(','), // Convert comma-separated string to an array
      cookingSteps: this.cookingSteps.split('.'), // Split steps by periods into an array
      nutrition: this.nutritionalInfo.split(',') // Convert comma-separated nutrition into an array
    };

    console.log(recipe); // Debugging
    this.Postservice.setPost(recipe);
    this.navigateToProfile();
  }


  navigateToProfile() {
    this.router.navigate(['/profile']);  // Navigate to the profile page
  }

}

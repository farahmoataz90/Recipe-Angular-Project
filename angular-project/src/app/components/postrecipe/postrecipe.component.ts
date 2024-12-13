import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-postrecipe',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent],
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

  constructor(private router: Router) {}

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
      imageSrc: this.imageUrl,
      title: this.recipeName,
      time: '30 min',  // Example static time, update as needed
      rating: 4.5, // Example static rating, update as needed
      ingredients: this.ingredients,
      cookingSteps: this.cookingSteps,
      nutrition: this.nutritionalInfo
    };

    // Send the recipe to the profile component (use a service or state management if necessary)
    // For now, assuming a basic solution for navigation and passing data via state.
    this.router.navigate(['/profile'], { state: { recipe } });
  }

}

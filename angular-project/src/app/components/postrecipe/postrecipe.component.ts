import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';


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

}

import { Component, input, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule],
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

}

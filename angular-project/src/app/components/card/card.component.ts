import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() imageSrc!: string; // Input for the image URL
  @Input() title!: string;    // Input for the title
  @Input() time!: string;     // Input for the time
  @Input() rating!: number;   // Input for the rating

}

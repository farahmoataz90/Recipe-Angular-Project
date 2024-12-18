import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
  @Input() imageSrc!: string;
  @Input() name!: string;
  // @Input() date!: string;
  @Input() date!: Date;
  @Input() comments!: string;
}

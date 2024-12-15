import { Component, Input  } from '@angular/core';
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



}

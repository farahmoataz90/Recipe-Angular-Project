import { Component , OnInit} from '@angular/core';
import { BookmarkService } from '../../services/bookmark.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-saverecipe',
  standalone: true,
  imports: [CommonModule,FooterComponent,CardComponent],
  templateUrl: './saverecipe.component.html',
  styleUrl: './saverecipe.component.scss'
})
export class SaverecipeComponent implements OnInit{

  savedRecipes: any[] = [];

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit() {
    this.savedRecipes = this.bookmarkService.getRecipes();
  }

}

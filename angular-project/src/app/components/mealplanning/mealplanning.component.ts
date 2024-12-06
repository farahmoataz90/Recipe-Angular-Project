import { Component } from '@angular/core';
import { WeeklyPlanComponent } from '../weakly-plan/weakly-plan.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-mealplanning',
  standalone: true,
  imports: [WeeklyPlanComponent,FooterComponent],
  templateUrl: './mealplanning.component.html',
  styleUrl: './mealplanning.component.scss'
})
export class MealplanningComponent {


}

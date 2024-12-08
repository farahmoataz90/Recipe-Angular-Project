import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DailyMealPlan, Meal } from '../../models/meal';
import { Meal,DailyMealPlan } from '../../interfaces/meal';
import { MealPlanService } from '../../services/meal-plan.service';
import { MealSlotComponent } from '../meal-slot/meal-slot.component';

@Component({
  selector: 'app-daily-plan',
  standalone: true,
  imports: [CommonModule, MealSlotComponent],
  templateUrl: './dialy-plan.component.html',
  styleUrl: './dialy-plan.component.scss',

})
export class DailyPlanComponent {
  @Input() plan!: DailyMealPlan;
  @Input() dayIndex!: number;
  @Input() dayDate!: Date;

  constructor(private mealPlanService: MealPlanService) {}

  onMealSelect(type: 'breakfast' | 'lunch' | 'dinner' , meal: Meal) {
    this.mealPlanService.updateMeal(this.dayIndex, type, meal);
  }

  onAddSnack(meal?: Meal) {
    if (meal) {
      this.mealPlanService.addSnack(this.dayIndex, meal);
    }
  }
}

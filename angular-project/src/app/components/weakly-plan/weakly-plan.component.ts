import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DailyPlanComponent } from '../daily-plan/daily-plan.component';
import { MealPlanService } from '../../services/meal-plan.service';
// import { DailyMealPlan } from '../../models/meal';
import { DailyPlanComponent } from '../dialy-plan/dialy-plan.component';
import { DailyMealPlan } from '../../interfaces/meal';

@Component({
  selector: 'app-weekly-plan',
  standalone: true,
  imports: [CommonModule, DailyPlanComponent],
  templateUrl: './weakly-plan.component.html',
  styleUrl: './weakly-plan.component.scss',

})
export class WeeklyPlanComponent implements OnInit {
  weeklyPlan: DailyMealPlan[] = [];

  constructor(private mealPlanService: MealPlanService) {}

  ngOnInit() {
    this.mealPlanService.getWeeklyPlan().subscribe(plan => {
      this.weeklyPlan = plan;
    });
  }
}

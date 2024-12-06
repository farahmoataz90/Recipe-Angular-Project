import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// import { DailyMealPlan, Meal } from '../models/meal';
import { Meal ,DailyMealPlan} from '../interfaces/meal';

@Injectable({
  providedIn: 'root'
})
export class MealPlanService {
  private weeklyPlan = new BehaviorSubject<DailyMealPlan[]>([]);

  constructor() {
    this.initializeWeeklyPlan();
  }

  private initializeWeeklyPlan() {
    const week: DailyMealPlan[] = Array.from({ length: 7 }, (_, i) => ({
      date: new Date(Date.now() + i * 24 * 60 * 60 * 1000),
      snacks: []
    }));
    this.weeklyPlan.next(week);
  }

  getWeeklyPlan(): Observable<DailyMealPlan[]> {
    return this.weeklyPlan.asObservable();
  }

  updateMeal(dayIndex: number, mealType: 'breakfast' | 'lunch' | 'dinner', meal: Meal) {
    const currentPlan = this.weeklyPlan.value;
    const updatedPlan = [...currentPlan];
    updatedPlan[dayIndex] = {
      ...updatedPlan[dayIndex],
      [mealType]: meal
    };
    this.weeklyPlan.next(updatedPlan);
  }

  addSnack(dayIndex: number, snack: Meal) {
    const currentPlan = this.weeklyPlan.value;
    const updatedPlan = [...currentPlan];
    updatedPlan[dayIndex] = {
      ...updatedPlan[dayIndex],
      snacks: [...updatedPlan[dayIndex].snacks, snack]
    };
    this.weeklyPlan.next(updatedPlan);
  }
}

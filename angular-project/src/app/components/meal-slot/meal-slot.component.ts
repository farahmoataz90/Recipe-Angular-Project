import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Meal } from '../../models/meal';
import { Meal } from '../../interfaces/meal';
import { MealDialogComponent } from '../meal-dialog/meal-dialog.component';

@Component({
  selector: 'app-meal-slot',
  standalone: true,
  imports: [CommonModule, MealDialogComponent],
  templateUrl: './meal-slot.component.html',
  styleUrl:'./meal-slot.component.scss',

})
export class MealSlotComponent {
  @Input() meal?: Meal;
  @Input() mealType!: string;
  @Output() selectMeal = new EventEmitter<Meal>();

  showDialog = false;

  onMealSave(meal: Meal) {
    this.selectMeal.emit(meal);
    this.showDialog = false;
  }
}

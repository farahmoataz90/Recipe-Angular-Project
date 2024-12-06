import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealFormComponent } from '../meal-form/meal-form.component';
// import { Meal } from '../../models/meal';
import { Meal } from '../../interfaces/meal';

@Component({
  selector: 'app-meal-dialog',
  standalone: true,
  imports: [CommonModule, MealFormComponent],
  templateUrl: './meal-dialog.component.html',
  styleUrl: './meal-dialog.component.scss',
})
export class MealDialogComponent {
  @Input() mealType!: string;
  @Output() save = new EventEmitter<Meal>();
  @Output() close = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  onOverlayClick(event: MouseEvent) {
    if (event.target === this.elementRef.nativeElement.querySelector('.dialog-overlay')) {
      this.onClose();
    }
  }

  onSave(meal: Meal) {
    this.save.emit(meal);
    this.onClose();
  }

  onClose() {
    this.close.emit();
  }
}

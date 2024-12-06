export interface Meal {
  id: string;
  name: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  description: string;
  ingredients: string[];
  calories?: number;
}

export interface DailyMealPlan {
  date: Date;
  breakfast?: Meal;
  lunch?: Meal;
  dinner?: Meal;
  snacks: Meal[];
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  private shoppingListKey = 'shoppingList';  // Key for local storage

  // Create a BehaviorSubject with the current shopping list
  private shoppingListSubject = new BehaviorSubject<string[]>(this.loadShoppingList());

  shoppingList$ = this.shoppingListSubject.asObservable();

  constructor() {}

  // Load the shopping list from localStorage if available
  loadShoppingList(): string[] {
    const storedList = localStorage.getItem(this.shoppingListKey);
    return storedList ? JSON.parse(storedList) : [];
  }

  // Save the shopping list to localStorage
  private saveShoppingList(list: string[]): void {
    localStorage.setItem(this.shoppingListKey, JSON.stringify(list));
  }

  addToShoppingList(ingredient: string): void {
    const currentList = this.shoppingListSubject.value;
    currentList.push(ingredient);
    this.shoppingListSubject.next(currentList);
    this.saveShoppingList(currentList);  // Persist the list in localStorage
  }

  removeFromShoppingList(item: string): void {
    const currentList = this.shoppingListSubject.value.filter(i => i !== item);
    this.shoppingListSubject.next(currentList);
    this.saveShoppingList(currentList);  // Persist the updated list in localStorage
  }
}

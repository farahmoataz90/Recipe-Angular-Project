import { Component } from '@angular/core';
import { ShoppingitemsComponent } from '../shoppingitems/shoppingitems.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-shoppinglist',
  standalone: true,
  imports: [ShoppingitemsComponent,CommonModule,FormsModule],
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.scss'
})
export class ShoppinglistComponent {
  shoppingList = [
    { id: 1, product: 'Beetroot', amount: '$18.00', quantity: '1kg', selected: false },
    { id: 2, product: 'Carrots', amount: '$12.00', quantity: '1kg', selected: false },
    { id: 3, product: 'Apples', amount: '$20.00', quantity: '1kg', selected: false },
  ];

  removeItem(index: number): void {
    this.shoppingList.splice(index, 1);
  }

  // Property to track the state of the "Select All" checkbox
  selectAll = false;

  // Method to toggle all checkboxes
  toggleAllSelection(): void {
    this.shoppingList.forEach((item) => (item.selected = this.selectAll));
  }

  // Method to check if all items are selected
  updateSelectAll(): void {
    this.selectAll = this.shoppingList.every((item) => item.selected);
  }

}

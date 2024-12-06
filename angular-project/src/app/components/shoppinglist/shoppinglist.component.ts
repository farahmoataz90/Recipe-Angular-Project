import { Component, OnInit } from '@angular/core';
import { ShoppingitemsComponent } from '../shoppingitems/shoppingitems.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
// import { ShoppingService } from '../services/shopping.service';
import { ShoppingService } from '../../services/shared.service';

@Component({
  selector: 'app-shoppinglist',
  standalone: true,
  imports: [ShoppingitemsComponent,CommonModule,FormsModule,FooterComponent],
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.scss'
})
export class ShoppinglistComponent implements OnInit{

  shoppingList: string[] = [];

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
  this.shoppingService.shoppingList$.subscribe(list => {
    console.log('Shopping list received in component:', list);
    this.shoppingList = list; // Ensure this updates the component property
  });
}



  removeItem(item: string): void {
    this.shoppingService.removeFromShoppingList(item);
  }


  // Property to track the state of the "Select All" checkbox
  // selectAll = false;

  // // Method to toggle all checkboxes
  // toggleAllSelection(): void {
  //   this.shoppingList.forEach((item) => (item.selected = this.selectAll));
  // }

  // // Method to check if all items are selected
  // updateSelectAll(): void {
  //   this.selectAll = this.shoppingList.every((item) => item.selected);
  // }

}

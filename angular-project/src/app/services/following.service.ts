import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FollowingService {
  private followingCards: any[] = []; // Store the list of followed cards

  constructor() {}

  // Add a card to the following list
  addCard(card: any) {
    this.followingCards.push(card);
  }

  // Get the following cards
  getCards() {
    return this.followingCards;
  }
}

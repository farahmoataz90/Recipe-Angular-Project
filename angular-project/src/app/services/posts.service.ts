// posts.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsKey = 'posts'; // Local storage key to store posts

  constructor() { }

  // Get the current posts from localStorage or return an empty array
  getPost(): any[] {
    const posts = localStorage.getItem(this.postsKey);
    return posts ? JSON.parse(posts) : []; // If there are no posts, return an empty array
  }

  // Add a new post and store it in localStorage
  setPost(newPost: any): void {
    const posts = this.getPost(); // Get existing posts
    posts.push(newPost); // Add the new post
    localStorage.setItem(this.postsKey, JSON.stringify(posts)); // Save back to localStorage
  }
}

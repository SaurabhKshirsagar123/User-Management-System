import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // This makes the service available globally within the app
})
export class UserService {
  constructor() {}

  // Retrieve the users from localStorage and parse them into an array (if any exist)
  private users: any[] = JSON.parse(localStorage.getItem('users') || '[]');

  // Get all users
  getUsers(): any[] {
    return this.users;
  }

  // Get a user by their ID
  getUserById(id: string): any {
    return this.users.find((user) => user.id === id);
  }

  // Add a new user to the list
  addUser(user: any): void {
    this.users.push(user);
    this.saveToLocalStorage(); // Save updated users array to localStorage
  }

  // Update an existing user based on ID
  updateUser(id: any, updatedData: any): void {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      // If user exists, update their data
      this.users[userIndex] = { ...this.users[userIndex], ...updatedData };
      this.saveToLocalStorage(); // Save changes to localStorage
    }
  }

  // Delete a user by their ID
  deleteUser(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
    this.saveToLocalStorage(); // Save the updated users list to localStorage
  }

  // Helper function to save the users array to localStorage
  private saveToLocalStorage(): void {
    localStorage.setItem('users', JSON.stringify(this.users)); // Store the users array as a string in localStorage
  }
}

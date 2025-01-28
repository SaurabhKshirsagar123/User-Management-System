import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  roles: string[] = ['Admin', 'Editor', 'Viewer'];

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const generatedId = Date.now().toString(); // Generate a unique ID for a new user
    this.userForm = this.fb.group({
      id: [generatedId],
      name: ['', Validators.required], // Name is required
      email: ['', [Validators.required, Validators.email]], // Email is required and must be valid
      role: ['', Validators.required], // Role selection is required
    });

    const id = this.route.snapshot.paramMap.get('id'); // Get the ID from the route parameter
    if (id !== 'new') {
      this.getDataById(id); // Load existing user data if editing
    }
  }

  // Fetch user data by ID and populate the form
  getDataById(id: any): void {
    const data = this.userService.getUserById(id);
    if (data) {
      this.userForm.patchValue({
        id: data.id,
        name: data.name,
        email: data.email,
        role: data.role,
      });
    } else {
      console.error(`User with ID ${id} not found.`);
    }
  }

  // Handle form submission
  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id == 'new') {
      this.createUser(); // Create a new user if 'new'
    } else {
      this.updateUser(id); // Update existing user
    }
  }

  // Create a new user and save it
  createUser() {
    if (this.userForm.valid) {
      const newUser = this.userForm.value;
      this.userService.addUser(newUser);
      console.log('User added successfully', newUser);
      this.router.navigate(['/user-list']); // Navigate back to user list
    }
  }

  // Update an existing user
  updateUser(id: any) {
    if (this.userForm.valid) {
      const updatedUser = this.userForm.value;
      this.userService.updateUser(id, updatedUser);
      console.log('User updated successfully', updatedUser);
      this.router.navigate(['/user-list']); // Navigate back to user list
    }
  }

  // Cancel action and go back to the user list
  onCancel(): void {
    this.router.navigate(['/user-list']);
  }
}

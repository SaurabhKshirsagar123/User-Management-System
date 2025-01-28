import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from 'src/app/dialogs/delete-confirmation-dialog/delete-confirmation-dialog.component';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'email', 'role', 'actions'];
  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router: Router,
    private userService: UserService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadUserData(); // Load user data on component initialization
  }

  ngAfterViewInit(): void {
    // Assign paginator and sorting after the view initializes
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Fetch user data from the service
  loadUserData(): void {
    const users: User[] = this.userService.getUsers();
    this.dataSource = new MatTableDataSource(users);
  }

  // Apply search filter to the table
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    // Reset to first page after filtering
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Navigate to the user creation form
  redirectToAddUser() {
    this.router.navigate(['/user-form/new']);
  }

  // Navigate to the user edit form
  onEdit(userId: any): void {
    this.router.navigate(['/user-form', userId]);
  }

  // Open confirmation dialog before deleting a user
  onDelete(userId: any): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteUser(userId);
      }
    });
  }

  // Delete user from the service
  deleteUser(userId: any): void {
    this.userService.deleteUser(userId);
    this.loadUserData();
  }
}

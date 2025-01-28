import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation-dialog',
  templateUrl: './delete-confirmation-dialog.component.html',
})
export class DeleteConfirmationDialogComponent {
  constructor(public dialogRef: MatDialogRef<DeleteConfirmationDialogComponent>) { }

  // Method to confirm deletion and close the dialog with a true value
  onConfirm(): void {
    this.dialogRef.close(true);
  }

  // Method to cancel deletion and close the dialog with a false value
  onCancel(): void {
    this.dialogRef.close(false);
  }
}

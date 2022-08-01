import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBarService: MatSnackBar) { }
  
  openSnackBar(message: string, action: string, type: string) {
    this.snackBarService.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',// 'top' | 'bottom'
      horizontalPosition: 'right',//'start' | 'center' | 'end' | 'left' | 'right'
      panelClass: [type],
    });
  }
}

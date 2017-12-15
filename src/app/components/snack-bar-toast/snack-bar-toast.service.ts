import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';
import { SnackBarToastComponent } from './snack-bar-toast.component';

@Injectable()
export class SnackBarToastService {

  constructor(public snackBar: MatSnackBar) { }

  public open(message: string){
    let snackBarRef: MatSnackBarRef<SnackBarToastComponent>;

    this.snackBar.open(message, '', {
      duration: 3000
    });
  }
}

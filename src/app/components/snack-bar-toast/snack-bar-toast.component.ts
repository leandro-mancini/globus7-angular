import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'app-snack-bar-toast',
  templateUrl: './snack-bar-toast.component.html',
  styleUrls: ['./snack-bar-toast.component.scss']
})
export class SnackBarToastComponent implements OnInit {
  public title: string;
  public message: string;

  constructor(
    public snackBarRef: MatSnackBarRef<SnackBarToastComponent>,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

}

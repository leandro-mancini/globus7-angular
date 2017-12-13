import { Component } from '@angular/core';
import { DialogNotificationService } from './components/dialog-notification/dialog-notification.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    public dialogNotification: DialogNotificationService
  ){

  }

  ngOnInit() {
    this.dialogNotification.alert('Teste', 'Ocorreu um erro inesperado.');
    // this.dialogNotification.warnings('Teste', ['Ocorreu um erro inesperado 1.', 'Ocorreu um erro inesperado 2.', 'Ocorreu um erro inesperado 3.']);
  }
}
